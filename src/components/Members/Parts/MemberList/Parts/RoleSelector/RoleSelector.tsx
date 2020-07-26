import * as React from 'react';
import { connect } from 'react-redux';
import { memberRoleChanged, MemberRoleChangedType } from '../../../../../../redux/actions';
import { StyledRoleSelector } from './RoleSelector.style';
import { BaseStateType } from '../../../../../../redux/reducers';
import { MembersType, RowsType, RoleType, UnsavedChangesType } from '../../../../../../tools/globalTypes';
import RolesData from './../../../../../../data/roles.json';
import { StyledMemberSelector } from '../MemberSelector/MemberSelector.style';

// Types
export interface DataRoleType {
  name : string,
  allowedAccessLevels : Array<string>
}
export interface RoleSelectorType {
  dispatch : (action: MemberRoleChangedType) => void,
  rowIndex : number,
  members : MembersType,
  rows : RowsType,
  unsavedChanges : UnsavedChangesType,
  selectedRole : RoleType
}

// Main
class RoleSelector extends React.Component<RoleSelectorType> {
  constructor(props : RoleSelectorType) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(newRoleName : any) {
    const {dispatch, rowIndex} = this.props;

    dispatch(memberRoleChanged(rowIndex, newRoleName));
  }

  getOptions() {
    return RolesData.map(({name} : DataRoleType) => ({
      id : name,
      label : name
    }));
  }

  getSelectedRole() {
    const property = "role";
    const {selectedRole, unsavedChanges, rowIndex} = this.props;
    const hasUnsavedRole = unsavedChanges && unsavedChanges[rowIndex] && unsavedChanges[rowIndex][property];

    // @ts-ignore
    return hasUnsavedRole ? unsavedChanges[rowIndex][property] : selectedRole;
  }

  render() {
    const options = this.getOptions();
    const selectedId = this.getSelectedRole();

    return (
      <StyledRoleSelector
        placeholder={"Choose role"}
        onChange={this.onChange}
        options={options}
        selectedId={selectedId}
      />
    );
  }
}

// Store connection
const mapStateToProps = (state : BaseStateType) => {
  const {rows, members, unsavedChanges} = state;

  return ({
    rows,
    members,
    unsavedChanges
  })
};

export default connect(mapStateToProps)(RoleSelector);