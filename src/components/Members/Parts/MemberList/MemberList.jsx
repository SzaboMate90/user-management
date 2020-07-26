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
import MemberSelector from './Parts/MemberSelector/MemberSelector';
import AccessLevelSelector from './Parts/AccessLevelSelector/AccessLevelSelector';
import RoleSelector from './Parts/RoleSelector/RoleSelector';
import RemoveMember from './Parts/RemoveMember/RemoveMember';
import { StyledMemberList, StyledTable } from './MemberList.style';
// Main
var MemberList = /** @class */ (function (_super) {
    __extends(MemberList, _super);
    function MemberList(props) {
        var _this = _super.call(this, props) || this;
        _this.getTableRowsData = _this.getTableRowsData.bind(_this);
        _this.getTableHeader = _this.getTableHeader.bind(_this);
        _this.getRowContents = _this.getRowContents.bind(_this);
        _this.getMemberCellContent = _this.getMemberCellContent.bind(_this);
        _this.getRoleCellContent = _this.getRoleCellContent.bind(_this);
        _this.getAccessLevelCellContent = _this.getAccessLevelCellContent.bind(_this);
        _this.getRemoveMemberCellContent = _this.getRemoveMemberCellContent.bind(_this);
        return _this;
    }
    MemberList.prototype.getRowContents = function (rowCells, index) {
        var person_id = rowCells.person_id, role = rowCells.role, access_level = rowCells.access_level;
        return [
            this.getMemberCellContent(person_id, index),
            this.getRoleCellContent(role, index),
            this.getAccessLevelCellContent(access_level, role, index),
            this.getRemoveMemberCellContent(index)
        ];
    };
    MemberList.prototype.getMemberCellContent = function (selectedPersonId, rowIndex) {
        return (<MemberSelector selectedPersonId={selectedPersonId} rowIndex={rowIndex}/>);
    };
    MemberList.prototype.getRoleCellContent = function (role, rowIndex) {
        return (<RoleSelector selectedRole={role} rowIndex={rowIndex}/>);
    };
    MemberList.prototype.getAccessLevelCellContent = function (selectedAccessLevel, selectedRole, rowIndex) {
        return (<AccessLevelSelector selectedAccessLevel={selectedAccessLevel} selectedRole={selectedRole} rowIndex={rowIndex}/>);
    };
    MemberList.prototype.getRemoveMemberCellContent = function (rowIndex) {
        return (<RemoveMember rowIndex={rowIndex}/>);
    };
    MemberList.prototype.getTableRowsData = function () {
        return this.props.rows ? this.props.rows.map(this.getRowContents) : [];
    };
    MemberList.prototype.getTableHeader = function () {
        return ["Member", "Role", "Access Level", ""];
    };
    MemberList.prototype.render = function () {
        return (<StyledMemberList>
        <StyledTable headerCells={this.getTableHeader()} rows={this.getTableRowsData()}/>
      </StyledMemberList>);
    };
    return MemberList;
}(React.Component));
// Store connection
var mapStateToProps = function (state) {
    var rows = state.rows;
    return ({
        rows: rows
    });
};
export default connect(mapStateToProps)(MemberList);
//# sourceMappingURL=MemberList.jsx.map