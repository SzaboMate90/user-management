import * as React from 'react';
import { connect } from 'react-redux';
import { addNewRow, AddNewRowType } from '../../../../redux/actions';
import { StyledAddMemberRow } from './AddMemberRow.style';
import Link from '../../../Link/Link';

// Types
interface AddMemberRowType {
  dispatch : (action: AddNewRowType) => void
}

// Main
class AddMemberRow extends React.Component<AddMemberRowType> {
  constructor(props : AddMemberRowType) {
    super(props);

    this.onAddNewRow = this.onAddNewRow.bind(this);
  }

  onAddNewRow() {
    this.props.dispatch(addNewRow());
  }

  render() {
    return (
      <StyledAddMemberRow>
        <Link onClick={this.onAddNewRow}>
          {"Add new member"}
        </Link>
      </StyledAddMemberRow>
    );
  }
}

// Store connection
export default connect()(AddMemberRow);