import * as React from 'react';
import { connect } from 'react-redux';
import { MemberChangedType, memberChanged } from '../../../../../../redux/actions';
import { StyledMemberSelector } from './MemberSelector.style';
import { BaseStateType } from '../../../../../../redux/reducers';
import {
  MemberIdType,
  MembersType,
  MemberType,
  RowsType,
  RowType,
  UnsavedChangesType
} from '../../../../../../tools/globalTypes';

// Types
interface MemberSelectorType {
  dispatch : (action: MemberChangedType) => void,
  rowIndex : number,
  members : MembersType,
  rows : RowsType,
  unsavedChanges : UnsavedChangesType,
  selectedPersonId : MemberIdType
}

// Main
class MemberSelector extends React.Component<MemberSelectorType> {
  constructor(props : MemberSelectorType) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(newPersonId : any) {
    const {dispatch, rowIndex} = this.props;

    dispatch(memberChanged(rowIndex, newPersonId));
  }

  getCurrentRowUnsavedChangesHasMember(rowIndex, memberId) {
    const {unsavedChanges} = this.props;
    let unsavedChangesHasMemberId = false;

    if (unsavedChanges && unsavedChanges[rowIndex]) {
        unsavedChangesHasMemberId = unsavedChanges[rowIndex].person_id !== memberId;
    }

    return unsavedChangesHasMemberId;
  }

  getAnyOtherUnsavedChangesHasMember(memberId) {
    const {unsavedChanges} = this.props;
    let anyOtherUnsavedChangesHasMember = false;

    if (unsavedChanges) {
      Object.keys(unsavedChanges).forEach(key => {
        const currentUnsavedChanges = unsavedChanges[key];

        if (!anyOtherUnsavedChangesHasMember && currentUnsavedChanges) {
          anyOtherUnsavedChangesHasMember = currentUnsavedChanges.person_id === memberId;
        }
      });
    }

    return anyOtherUnsavedChangesHasMember;
  }

  getOptions(selectedPersonId) {
    const {members, rows} = this.props;

    return members.filter((member : MemberType) => {
      const memberAlreadySelected = rows.find((row : RowType, index : number) => {
        const currentRowUnsavedChangesHasMemberId = this.getCurrentRowUnsavedChangesHasMember(index, member.person_id);
        const anyOtherUnsavedChangesHasMember = this.getAnyOtherUnsavedChangesHasMember(member.person_id);

        return (
          (
            row.person_id === member.person_id && !currentRowUnsavedChangesHasMemberId) ||
            anyOtherUnsavedChangesHasMember
          ) &&
          member.person_id !== selectedPersonId;
      });

      return !memberAlreadySelected;
    }).map((member : MemberType) => ({
      "id" : member.person_id,
      "label" : `${member.firstname} ${member.lastname}`
    }));
  }

  getSelectedMember() {
    const property = "person_id";
    const {selectedPersonId, unsavedChanges, rowIndex} = this.props;
    const hasUnsavedPersonId = unsavedChanges && unsavedChanges[rowIndex] && unsavedChanges[rowIndex][property];

    // @ts-ignore
    return hasUnsavedPersonId ? unsavedChanges[rowIndex][property] : selectedPersonId;
  }

  render() {
    const selectedPersonId = this.getSelectedMember();
    const options = this.getOptions(selectedPersonId);

    return (
      <StyledMemberSelector
        noOptionsMessage={"All members are selected"}
        placeholder={"Choose member"}
        onChange={this.onChange}
        options={options}
        selectedId={selectedPersonId}
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

export default connect(mapStateToProps)(MemberSelector);
