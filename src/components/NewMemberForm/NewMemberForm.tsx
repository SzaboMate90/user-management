import * as React from 'react';
import { connect } from 'react-redux';
import { StyledNewMemberForm } from './NewMemberForm.style';
import NewMemberSection from './Parts/NewMemberSection/NewMemberSection';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Modal from './../Modal/Modal';
import { addNewMember } from '../../redux/actions';
import FieldTypes from './fieldTypes';
import {
  FieldsType,
  NewMemberFormType,
  NewMemberFormStateType
} from './NewMemberFormTypes';
import { CreateMemberType } from '../../tools/globalTypes';
import { BaseStateType } from '../../redux/reducers';
import createMember from '../../services/apiCalls/_mocked_createMember';

// Constants
const FIELDS : FieldsType = FieldTypes;
const INITIAL_STATE : NewMemberFormStateType = {
  values : {
    firstname : FIELDS.firstname.initialValue,
    lastname : FIELDS.lastname.initialValue,
    is_user : FIELDS.is_user.initialValue,
    title : FIELDS.title.initialValue,
    business_unit : FIELDS.business_unit.initialValue,
  },
  error_message : "",
  required_errors : [],
  already_exist_errors : [],
};

// Main
class NewMemberForm extends React.Component<NewMemberFormType> {
  state : NewMemberFormStateType;

  constructor(props : NewMemberFormType) {
    super(props);

    this.state = {...INITIAL_STATE};

    this.saveMember = this.saveMember.bind(this);
    this.checkForMemberAlreadyExist = this.checkForMemberAlreadyExist.bind(this);
    this.saveMemberCallback = this.saveMemberCallback.bind(this);
    this.saveMemberError = this.saveMemberError.bind(this);
    this.onValueChanged = this.onValueChanged.bind(this);
    this.getRequiredValueErrors = this.getRequiredValueErrors.bind(this);
    this.getFieldValuesForApiCall = this.getFieldValuesForApiCall.bind(this);
  }

  saveMemberCallback(memberData : CreateMemberType) {
    const {dispatch, closeModal} = this.props;

    dispatch(addNewMember(memberData));
    this.setState(INITIAL_STATE);
    closeModal();
  }

  saveMemberError(error_message ?: string) {
    this.setState({ error_message : error_message || "An error occured" });
  }

  getRequiredValueErrors() {
    const required_errors : Array<string> = [];

    Object.keys(FIELDS).forEach((field : string) => {
      const {required} = FIELDS[field];
      const currentValue = this.state.values[field];

      if (required && !currentValue) {
        required_errors.push(field);
      }
    });

    return required_errors;
  }

  getFieldValuesForApiCall() {
    let fieldValuesObj = {...INITIAL_STATE.values};

    Object.keys(FIELDS).forEach(field => {
      const {name} = FIELDS[field];

      fieldValuesObj[name] = this.state.values[field];
    });

    return fieldValuesObj;
  }

  checkForMemberAlreadyExist() {
    const {members} = this.props;
    const {values : { firstname, lastname }} = this.state;

    return members.find(member => member.firstname === firstname && member.lastname === lastname);
  }

  saveMember() {
    const memberAlreadyExist = this.checkForMemberAlreadyExist();
    const requiredErrors = this.getRequiredValueErrors();

    if (requiredErrors.length > 0) {
      this.setState({ required_errors : requiredErrors });
    }
    else if (memberAlreadyExist) {
      this.setState({ already_exist_errors : ["firstname"] });
    }
    else {
      const callOptions = { method:'post', data: this.getFieldValuesForApiCall()};
      // @ts-ignore
      createMember(callOptions)
        // @ts-ignore
        .then(this.saveMemberCallback)
        .catch(this.saveMemberError)
    }
  }

  onValueChanged(fieldKey : string, newValue : string | boolean) {
    const {values} = this.state;

    this.setState({
      ...this.state,
      values : {
        ...values,
        [fieldKey] : newValue
      }
    });
  }

  getField(fieldKey : string) {
    const {required_errors, already_exist_errors} = this.state;
    const {name, label, required, ComponentName, hint} = FIELDS[fieldKey];
    const value = this.state.values[fieldKey];
    const hasRequiredError = required_errors && required_errors.indexOf(fieldKey) > -1;
    const hasAlreadyExistError = already_exist_errors && already_exist_errors.indexOf(fieldKey) > -1;
    const hasError = hasRequiredError || hasAlreadyExistError;

    return (
      <ComponentName
        hasError={hasError}
        errorMessage={hasAlreadyExistError ? "A member with this name is already exist" : null}
        name={name}
        label={label}
        required={required}
        value={value}
        hint={hint}
        onChange={(newValue : string | boolean) => {
          this.onValueChanged(fieldKey, newValue);
        }}
      />
    );
  }

  render() {
    const {closeModal} = this.props;
    const {error_message} = this.state;

    return (
      <Modal
        title={"Create member"}
        onClose={closeModal}
        onCancel={closeModal}
        onSave={this.saveMember}
        saveButtonText={"Create member"}
        cancelButtonText={"Cancel"}
      >
        <StyledNewMemberForm>
          <NewMemberSection>
            {this.getField("firstname")}
            {this.getField("lastname")}
            {this.getField("is_user")}
          </NewMemberSection>
          <NewMemberSection>
            {this.getField("title")}
            {this.getField("business_unit")}
          </NewMemberSection>
          {error_message ? (
            <ErrorMessage retry={this.saveMember}>
              {error_message}
            </ErrorMessage>
          ) : null}
        </StyledNewMemberForm>
      </Modal>
    );
  }
}

// Store connection
const mapStateToProps = (state : BaseStateType) => {
  const {members} = state;

  return ({
    members,
  })
};

export default connect(mapStateToProps)(NewMemberForm);