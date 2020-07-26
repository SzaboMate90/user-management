import * as React from 'react';
import { connect } from 'react-redux';
import { removeRow, RemoveRowType } from '../../../../../../redux/actions';
import { StyledRemoveMember, iconSize } from './RemoveMember.style';

// Types
interface RemoveMemberType {
  dispatch : (action: RemoveRowType) => void,
  rowIndex : number
}

// Main
class RemoveMember extends React.Component<RemoveMemberType> {
  constructor(props : RemoveMemberType) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const {dispatch, rowIndex} = this.props;

    dispatch(removeRow(rowIndex));
  }

  render() {
    return (
      <StyledRemoveMember
        title={"Remove"}
        onClick={this.onClick}
        size={iconSize}
      />
    );
  }
}

// Store connection
export default connect()(RemoveMember);