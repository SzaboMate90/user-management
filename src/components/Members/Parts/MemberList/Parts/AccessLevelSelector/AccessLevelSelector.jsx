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
import { memberAccessLevelChanged } from '../../../../../../redux/actions';
import { StyledAccessLevelSelector } from './AccessLevelSelector.style';
import RolesData from './../../../../../../data/roles.json';
import AccessLevels from './../../../../../../data/accessLevels.json';
// Main
var AccessLevelSelector = /** @class */ (function (_super) {
    __extends(AccessLevelSelector, _super);
    function AccessLevelSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    AccessLevelSelector.prototype.onChange = function (newAccessLevel) {
        var _a = this.props, dispatch = _a.dispatch, rowIndex = _a.rowIndex;
        dispatch(memberAccessLevelChanged(rowIndex, newAccessLevel));
    };
    AccessLevelSelector.prototype.getOptions = function () {
        var selectedRole = this.getSelectedRole();
        var currentRole = RolesData.find(function (role) { return role.name === selectedRole; });
        return AccessLevels
            .filter(function (accessLevel) { return currentRole ? currentRole.allowedAccessLevels.indexOf(accessLevel) > -1 : null; })
            .map(function (accessLevel) { return ({
            "id": accessLevel,
            "label": accessLevel
        }); });
    };
    AccessLevelSelector.prototype.getRealSelectedProperty = function (propertyName, selectedProperty) {
        var _a = this.props, unsavedChanges = _a.unsavedChanges, rowIndex = _a.rowIndex;
        var hasUnsavedAccessLevel = unsavedChanges && unsavedChanges[rowIndex] && unsavedChanges[rowIndex][propertyName];
        // @ts-ignore
        return hasUnsavedAccessLevel ? unsavedChanges[rowIndex][propertyName] : selectedProperty;
    };
    AccessLevelSelector.prototype.getSelectedAccessLevel = function () {
        var selectedAccessLevel = this.props.selectedAccessLevel;
        return this.getRealSelectedProperty("access_level", selectedAccessLevel);
    };
    AccessLevelSelector.prototype.getSelectedRole = function () {
        var selectedRole = this.props.selectedRole;
        return this.getRealSelectedProperty("role", selectedRole);
    };
    AccessLevelSelector.prototype.render = function () {
        var options = this.getOptions();
        var selectedId = this.getSelectedAccessLevel();
        return (<StyledAccessLevelSelector noOptionsMessage={"Choose the role please"} placeholder={"Choose access level"} onChange={this.onChange} options={options} selectedId={selectedId}/>);
    };
    return AccessLevelSelector;
}(React.Component));
var mapStateToProps = function (state) {
    var rows = state.rows, members = state.members, unsavedChanges = state.unsavedChanges;
    return ({
        rows: rows,
        members: members,
        unsavedChanges: unsavedChanges
    });
};
export default connect(mapStateToProps)(AccessLevelSelector);
//# sourceMappingURL=AccessLevelSelector.jsx.map