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
import { memberChanged } from '../../../../../../redux/actions';
import { StyledMemberSelector } from './MemberSelector.style';
// Main
var MemberSelector = /** @class */ (function (_super) {
    __extends(MemberSelector, _super);
    function MemberSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    MemberSelector.prototype.onChange = function (newPersonId) {
        var _a = this.props, dispatch = _a.dispatch, rowIndex = _a.rowIndex;
        dispatch(memberChanged(rowIndex, newPersonId));
    };
    MemberSelector.prototype.getCurrentRowUnsavedChangesHasMember = function (rowIndex, memberId) {
        var unsavedChanges = this.props.unsavedChanges;
        var unsavedChangesHasMemberId = false;
        if (unsavedChanges && unsavedChanges[rowIndex]) {
            unsavedChangesHasMemberId = unsavedChanges[rowIndex].person_id !== memberId;
        }
        return unsavedChangesHasMemberId;
    };
    MemberSelector.prototype.getAnyOtherUnsavedChangesHasMember = function (memberId) {
        var unsavedChanges = this.props.unsavedChanges;
        var anyOtherUnsavedChangesHasMember = false;
        if (unsavedChanges) {
            Object.keys(unsavedChanges).forEach(function (key) {
                var currentUnsavedChanges = unsavedChanges[key];
                if (!anyOtherUnsavedChangesHasMember && currentUnsavedChanges) {
                    anyOtherUnsavedChangesHasMember = currentUnsavedChanges.person_id === memberId;
                }
            });
        }
        return anyOtherUnsavedChangesHasMember;
    };
    MemberSelector.prototype.getOptions = function (selectedPersonId) {
        var _this = this;
        var _a = this.props, members = _a.members, rows = _a.rows;
        return members.filter(function (member) {
            var memberAlreadySelected = rows.find(function (row, index) {
                var currentRowUnsavedChangesHasMemberId = _this.getCurrentRowUnsavedChangesHasMember(index, member.person_id);
                var anyOtherUnsavedChangesHasMember = _this.getAnyOtherUnsavedChangesHasMember(member.person_id);
                return ((row.person_id === member.person_id && !currentRowUnsavedChangesHasMemberId) ||
                    anyOtherUnsavedChangesHasMember) &&
                    member.person_id !== selectedPersonId;
            });
            return !memberAlreadySelected;
        }).map(function (member) { return ({
            "id": member.person_id,
            "label": member.firstname + " " + member.lastname
        }); });
    };
    MemberSelector.prototype.getSelectedMember = function () {
        var property = "person_id";
        var _a = this.props, selectedPersonId = _a.selectedPersonId, unsavedChanges = _a.unsavedChanges, rowIndex = _a.rowIndex;
        var hasUnsavedPersonId = unsavedChanges && unsavedChanges[rowIndex] && unsavedChanges[rowIndex][property];
        // @ts-ignore
        return hasUnsavedPersonId ? unsavedChanges[rowIndex][property] : selectedPersonId;
    };
    MemberSelector.prototype.render = function () {
        var selectedPersonId = this.getSelectedMember();
        var options = this.getOptions(selectedPersonId);
        return (<StyledMemberSelector noOptionsMessage={"All members are selected"} placeholder={"Choose member"} onChange={this.onChange} options={options} selectedId={selectedPersonId}/>);
    };
    return MemberSelector;
}(React.Component));
// Store connection
var mapStateToProps = function (state) {
    var rows = state.rows, members = state.members, unsavedChanges = state.unsavedChanges;
    return ({
        rows: rows,
        members: members,
        unsavedChanges: unsavedChanges
    });
};
export default connect(mapStateToProps)(MemberSelector);
//# sourceMappingURL=MemberSelector.jsx.map