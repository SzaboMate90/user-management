import * as React from 'react';
import { connect } from 'react-redux';
import MemberSelector from './Parts/MemberSelector/MemberSelector';
import AccessLevelSelector from './Parts/AccessLevelSelector/AccessLevelSelector';
import RoleSelector from './Parts/RoleSelector/RoleSelector';
import RemoveMember from './Parts/RemoveMember/RemoveMember';
import { StyledMemberList, StyledTable } from './MemberList.style';
import {
  AccessLevelType,
  MembersType,
  MemberIdType,
  RowType,
  RoleType,
  RowsType,
} from '../../../../tools/globalTypes';
import {
  BaseStateType
} from '../../../../redux/reducers';

// Types
interface MemberListType {
  rows : RowsType,
  members : MembersType
}

// Main
class MemberList extends React.Component<MemberListType> {
  constructor(props : MemberListType) {
    super(props);

    this.getTableRowsData = this.getTableRowsData.bind(this);
    this.getTableHeader = this.getTableHeader.bind(this);
    this.getRowContents = this.getRowContents.bind(this);
    this.getMemberCellContent = this.getMemberCellContent.bind(this);
    this.getRoleCellContent = this.getRoleCellContent.bind(this);
    this.getAccessLevelCellContent = this.getAccessLevelCellContent.bind(this);
    this.getRemoveMemberCellContent = this.getRemoveMemberCellContent.bind(this);
  }

  getRowContents(rowCells : RowType, index : number) {
    const {person_id, role, access_level} = rowCells;

    return [
      this.getMemberCellContent(person_id, index),
      this.getRoleCellContent(role, index),
      this.getAccessLevelCellContent(access_level, role, index),
      this.getRemoveMemberCellContent(index)
    ];
  }

  getMemberCellContent(selectedPersonId : MemberIdType, rowIndex : number) {
    return (
      <MemberSelector
        selectedPersonId={selectedPersonId}
        rowIndex={rowIndex}
      />
    );
  }

  getRoleCellContent(role : RoleType, rowIndex : number) {
    return (
      <RoleSelector
        selectedRole={role}
        rowIndex={rowIndex}
      />
    );
  }

  getAccessLevelCellContent(selectedAccessLevel : AccessLevelType, selectedRole : RoleType, rowIndex : number) {
    return (
      <AccessLevelSelector
        selectedAccessLevel={selectedAccessLevel}
        selectedRole={selectedRole}
        rowIndex={rowIndex}
      />
      );
  }

  getRemoveMemberCellContent(rowIndex : number) {
    return (
      <RemoveMember rowIndex={rowIndex} />
    );
  }

  getTableRowsData() {
    return this.props.rows ? this.props.rows.map(this.getRowContents) : [];
  }

  getTableHeader() {
    return ["Member", "Role", "Access Level", ""];
  }

  render() {
    return (
      <StyledMemberList>
        <StyledTable
          headerCells={this.getTableHeader()}
          rows={this.getTableRowsData()}
        />
      </StyledMemberList>
    );
  }
}

// Store connection
const mapStateToProps = (state : BaseStateType) => {
  const {rows} = state;

  return ({
    rows
  })
};

export default connect(mapStateToProps)(MemberList);