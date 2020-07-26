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
import { memberRoleChanged } from '../../../../../../redux/actions';
import { StyledRoleSelector } from './RoleSelector.style';
import RolesData from './../../../../../../data/roles.json';
// Main
var RoleSelector = /** @class */ (function (_super) {
    __extends(RoleSelector, _super);
    function RoleSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    RoleSelector.prototype.onChange = function (newRoleName) {
        var _a = this.props, dispatch = _a.dispatch, rowIndex = _a.rowIndex;
        dispatch(memberRoleChanged(rowIndex, newRoleName));
    };
    RoleSelector.prototype.getOptions = function () {
        return RolesData.map(function (_a) {
            var name = _a.name;
            return ({
                id: name,
                label: name
            });
        });
    };
    RoleSelector.prototype.getSelectedRole = function () {
        var property = "role";
        var _a = this.props, selectedRole = _a.selectedRole, unsavedChanges = _a.unsavedChanges, rowIndex = _a.rowIndex;
        var hasUnsavedRole = unsavedChanges && unsavedChanges[rowIndex] && unsavedChanges[rowIndex][property];
        // @ts-ignore
        return hasUnsavedRole ? unsavedChanges[rowIndex][property] : selectedRole;
    };
    RoleSelector.prototype.render = function () {
        var options = this.getOptions();
        var selectedId = this.getSelectedRole();
        return (<StyledRoleSelector placeholder={"Choose role"} onChange={this.onChange} options={options} selectedId={selectedId}/>);
    };
    return RoleSelector;
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
export default connect(mapStateToProps)(RoleSelector);
//# sourceMappingURL=RoleSelector.jsx.map