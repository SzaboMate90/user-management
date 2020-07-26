import * as React from 'react';
import { connect } from 'react-redux';
import { MemberAccessLevelChangedType, memberAccessLevelChanged } from '../../../../../../redux/actions';
import { StyledAccessLevelSelector } from './AccessLevelSelector.style';
import { BaseStateType } from '../../../../../../redux/reducers';
import {
  AccessLevelType,
  MembersType,
  RoleType,
  RowsType,
  UnsavedChangesType,
} from '../../../../../../tools/globalTypes';
import { DataRoleType } from '../RoleSelector/RoleSelector';
import RolesData from './../../../../../../data/roles.json';
import AccessLevels from './../../../../../../data/accessLevels.json';
import { StyledRoleSelector } from '../RoleSelector/RoleSelector.style';

// Types
interface AccessLevelSelectorType {
  dispatch : (action: MemberAccessLevelChangedType) => void,
  rowIndex : number,
  members : MembersType,
  rows : RowsType,
  selectedAccessLevel : AccessLevelType,
  selectedRole : RoleType,
  unsavedChanges : UnsavedChangesType,
}

// Main
class AccessLevelSelector extends React.Component<AccessLevelSelectorType> {
  constructor(props : AccessLevelSelectorType) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(newAccessLevel : any) {
    const {dispatch, rowIndex} = this.props;

    dispatch(memberAccessLevelChanged(rowIndex, newAccessLevel));
  }

  getOptions() {
    const selectedRole = this.getSelectedRole();
    const currentRole = RolesData.find((role : DataRoleType) => role.name === selectedRole);

    return AccessLevels
      .filter(accessLevel => currentRole ? currentRole.allowedAccessLevels.indexOf(accessLevel) > -1 : null)
      .map((accessLevel : string) => ({
        "id" : accessLevel,
        "label" : accessLevel
      }));
  }

  getRealSelectedProperty(propertyName, selectedProperty) {
    const {unsavedChanges, rowIndex} = this.props;
    const hasUnsavedAccessLevel = unsavedChanges && unsavedChanges[rowIndex] && unsavedChanges[rowIndex][propertyName];

    // @ts-ignore
    return hasUnsavedAccessLevel ? unsavedChanges[rowIndex][propertyName] : selectedProperty;
  }

  getSelectedAccessLevel() {
    const {selectedAccessLevel} = this.props;
    return this.getRealSelectedProperty("access_level", selectedAccessLevel);
  }

  getSelectedRole() {
    const {selectedRole} = this.props;
    return this.getRealSelectedProperty("role", selectedRole);
  }

  render() {
    const options = this.getOptions();
    const selectedId = this.getSelectedAccessLevel();

    return (
      <StyledAccessLevelSelector
        noOptionsMessage={"Choose the role please"}
        placeholder={"Choose access level"}
        onChange={this.onChange}
        options={options}
        selectedId={selectedId}
      />
    );
  }
}

const mapStateToProps = (state : BaseStateType) => {
  const {rows, members, unsavedChanges} = state;

  return ({
    rows,
    members,
    unsavedChanges
  })
};

export default connect(mapStateToProps)(AccessLevelSelector);