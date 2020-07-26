import * as React from 'react';
import { connect } from 'react-redux';
import MemberList from './Parts/MemberList/MemberList';
import AddMemberRow from './Parts/AddMemberRow/AddMemberRow';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { SetMembersDataType, setMembersData } from '../../redux/actions';
import { StyledMembers } from './Members.style';
import { BaseStateType } from '../../redux/reducers';
import { MemberType, MembersType } from '../../tools/globalTypes';
import getMembers from '../../services/apiCalls/_mocked_getMembers';

// Types
interface MembersClassType {
  members : MembersType,
  dispatch : (action: SetMembersDataType) => void
}

// Main
class Members extends React.Component<MembersClassType> {

  state : {
    error_message : string
  };

  constructor(props : MembersClassType) {
    super(props);

    this.state = {
      error_message : ""
    };

    this.getMembersData = this.getMembersData.bind(this);
    this.getMembersDataCallback = this.getMembersDataCallback.bind(this);
    this.getMembersDataError = this.getMembersDataError.bind(this);
  }

  componentDidMount() {
    this.getMembersData();
  }

  getMembersData() {
    getMembers()
      // @ts-ignore
      .then(this.getMembersDataCallback)
     .catch(this.getMembersDataError);

    return true;
  }

  getMembersDataError(error_message : string) {
    this.setState({ error_message : error_message || "An error occured" });
  }

  getMembersDataCallback(members : MembersType) {
    const newMembers = members ? members.map((member : MemberType) => {
      return {
        person_id : member.person_id,
        firstname : member.firstname,
        lastname : member.lastname,
        business_unit : member.business_unit,
        is_user : member.is_user,
        title : member.title,
      };
    }) : [];

    this.props.dispatch(setMembersData(newMembers));
    this.setState({ error_message : "" });
  }

  render() {
    const {members} = this.props;
    const {error_message} = this.state;

    return (
      <StyledMembers>
        {error_message ? (
          <ErrorMessage retry={this.getMembersData}>
            {error_message.toString()}
          </ErrorMessage>
        ) : (
          members ? (
            <MemberList
              members={members}
            />
          ) : (
            <Spinner />
          )
        )}
        <AddMemberRow />
      </StyledMembers>
    );
  }
}

// Store connection
const mapStateToProps = (state : BaseStateType) => {
  const {members} = state;

  return ({
    members
  })
};

export default connect(mapStateToProps)(Members);
