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
import * as React from 'react';
import { connect } from 'react-redux';
import MemberList from './Parts/MemberList/MemberList';
import AddMemberRow from './Parts/AddMemberRow/AddMemberRow';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { setMembersData } from '../../redux/actions';
import { StyledMembers } from './Members.style';
import getMembers from '../../services/apiCalls/_mocked_getMembers';
// Main
var Members = /** @class */ (function (_super) {
    __extends(Members, _super);
    function Members(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            error_message: ""
        };
        _this.getMembersData = _this.getMembersData.bind(_this);
        _this.getMembersDataCallback = _this.getMembersDataCallback.bind(_this);
        _this.getMembersDataError = _this.getMembersDataError.bind(_this);
        return _this;
    }
    Members.prototype.componentDidMount = function () {
        this.getMembersData();
    };
    Members.prototype.getMembersData = function () {
        getMembers()
            // @ts-ignore
            .then(this.getMembersDataCallback)
            .catch(this.getMembersDataError);
        return true;
    };
    Members.prototype.getMembersDataError = function (error_message) {
        this.setState({ error_message: error_message || "An error occured" });
    };
    Members.prototype.getMembersDataCallback = function (members) {
        var newMembers = members ? members.map(function (member) {
            return {
                person_id: member.person_id,
                firstname: member.firstname,
                lastname: member.lastname,
                business_unit: member.business_unit,
                is_user: member.is_user,
                title: member.title,
            };
        }) : [];
        this.props.dispatch(setMembersData(newMembers));
        this.setState({ error_message: "" });
    };
    Members.prototype.render = function () {
        var members = this.props.members;
        var error_message = this.state.error_message;
        return (<StyledMembers>
        {error_message ? (<ErrorMessage retry={this.getMembersData}>
            {error_message.toString()}
          </ErrorMessage>) : (members ? (<MemberList members={members}/>) : (<Spinner />))}
        <AddMemberRow />
      </StyledMembers>);
    };
    return Members;
}(React.Component));
// Store connection
var mapStateToProps = function (state) {
    var members = state.members;
    return ({
        members: members
    });
};
export default connect(mapStateToProps)(Members);
//# sourceMappingURL=Members.jsx.map