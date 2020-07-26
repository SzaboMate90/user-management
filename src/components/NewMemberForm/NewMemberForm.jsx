var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { connect } from 'react-redux';
import { StyledNewMemberForm } from './NewMemberForm.style';
import NewMemberSection from './Parts/NewMemberSection/NewMemberSection';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Modal from './../Modal/Modal';
import { addNewMember } from '../../redux/actions';
import FieldTypes from './fieldTypes';
import createMember from '../../services/apiCalls/_mocked_createMember';
// Constants
var FIELDS = FieldTypes;
var INITIAL_STATE = {
    values: {
        firstname: FIELDS.firstname.initialValue,
        lastname: FIELDS.lastname.initialValue,
        is_user: FIELDS.is_user.initialValue,
        title: FIELDS.title.initialValue,
        business_unit: FIELDS.business_unit.initialValue,
    },
    error_message: "",
    required_errors: [],
    already_exist_errors: [],
};
// Main
var NewMemberForm = /** @class */ (function (_super) {
    __extends(NewMemberForm, _super);
    function NewMemberForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = __assign({}, INITIAL_STATE);
        _this.saveMember = _this.saveMember.bind(_this);
        _this.checkForMemberAlreadyExist = _this.checkForMemberAlreadyExist.bind(_this);
        _this.saveMemberCallback = _this.saveMemberCallback.bind(_this);
        _this.saveMemberError = _this.saveMemberError.bind(_this);
        _this.onValueChanged = _this.onValueChanged.bind(_this);
        _this.getRequiredValueErrors = _this.getRequiredValueErrors.bind(_this);
        _this.getFieldValuesForApiCall = _this.getFieldValuesForApiCall.bind(_this);
        return _this;
    }
    NewMemberForm.prototype.saveMemberCallback = function (memberData) {
        var _a = this.props, dispatch = _a.dispatch, closeModal = _a.closeModal;
        dispatch(addNewMember(memberData));
        this.setState(INITIAL_STATE);
        closeModal();
    };
    NewMemberForm.prototype.saveMemberError = function (error_message) {
        this.setState({ error_message: error_message || "An error occured" });
    };
    NewMemberForm.prototype.getRequiredValueErrors = function () {
        var _this = this;
        var required_errors = [];
        Object.keys(FIELDS).forEach(function (field) {
            var required = FIELDS[field].required;
            var currentValue = _this.state.values[field];
            if (required && !currentValue) {
                required_errors.push(field);
            }
        });
        return required_errors;
    };
    NewMemberForm.prototype.getFieldValuesForApiCall = function () {
        var _this = this;
        var fieldValuesObj = __assign({}, INITIAL_STATE.values);
        Object.keys(FIELDS).forEach(function (field) {
            var name = FIELDS[field].name;
            fieldValuesObj[name] = _this.state.values[field];
        });
        return fieldValuesObj;
    };
    NewMemberForm.prototype.checkForMemberAlreadyExist = function () {
        var members = this.props.members;
        var _a = this.state.values, firstname = _a.firstname, lastname = _a.lastname;
        return members.find(function (member) { return member.firstname === firstname && member.lastname === lastname; });
    };
    NewMemberForm.prototype.saveMember = function () {
        var memberAlreadyExist = this.checkForMemberAlreadyExist();
        var requiredErrors = this.getRequiredValueErrors();
        if (requiredErrors.length > 0) {
            this.setState({ required_errors: requiredErrors });
        }
        else if (memberAlreadyExist) {
            this.setState({ already_exist_errors: ["firstname"] });
        }
        else {
            var callOptions = { method: 'post', data: this.getFieldValuesForApiCall() };
            // @ts-ignore
            createMember(callOptions)
                // @ts-ignore
                .then(this.saveMemberCallback)
                .catch(this.saveMemberError);
        }
    };
    NewMemberForm.prototype.onValueChanged = function (fieldKey, newValue) {
        var _a;
        var values = this.state.values;
        this.setState(__assign(__assign({}, this.state), { values: __assign(__assign({}, values), (_a = {}, _a[fieldKey] = newValue, _a)) }));
    };
    NewMemberForm.prototype.getField = function (fieldKey) {
        var _this = this;
        var _a = this.state, required_errors = _a.required_errors, already_exist_errors = _a.already_exist_errors;
        var _b = FIELDS[fieldKey], name = _b.name, label = _b.label, required = _b.required, ComponentName = _b.ComponentName, hint = _b.hint;
        var value = this.state.values[fieldKey];
        var hasRequiredError = required_errors && required_errors.indexOf(fieldKey) > -1;
        var hasAlreadyExistError = already_exist_errors && already_exist_errors.indexOf(fieldKey) > -1;
        var hasError = hasRequiredError || hasAlreadyExistError;
        return (<ComponentName hasError={hasError} errorMessage={hasAlreadyExistError ? "A member with this name is already exist" : null} name={name} label={label} required={required} value={value} hint={hint} onChange={function (newValue) {
            _this.onValueChanged(fieldKey, newValue);
        }}/>);
    };
    NewMemberForm.prototype.render = function () {
        var closeModal = this.props.closeModal;
        var error_message = this.state.error_message;
        return (<Modal title={"Create member"} onClose={closeModal} onCancel={closeModal} onSave={this.saveMember} saveButtonText={"Create member"} cancelButtonText={"Cancel"}>
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
          {error_message ? (<ErrorMessage retry={this.saveMember}>
              {error_message}
            </ErrorMessage>) : null}
        </StyledNewMemberForm>
      </Modal>);
    };
    return NewMemberForm;
}(React.Component));
// Store connection
var mapStateToProps = function (state) {
    var members = state.members;
    return ({
        members: members,
    });
};
export default connect(mapStateToProps)(NewMemberForm);
//# sourceMappingURL=NewMemberForm.jsx.map