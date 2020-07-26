import * as React from 'react';
import { connect } from 'react-redux';
import { saveChanges, SaveChangesType } from '../../redux/actions';
import { StyledSaveChangesButton } from './SaveChangesButton.style';

// Types
interface SaveChangesButtonType {
  dispatch : (action: SaveChangesType) => void,
  props ?: any
}

// Main
class SaveChangesButton extends React.Component<SaveChangesButtonType> {
  constructor(props : SaveChangesButtonType) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.dispatch(saveChanges());
  }

  render() {
    return (
      <StyledSaveChangesButton
        onClick={this.onClick}
        children={"Save changes"}
      />
    );
  }
}

// Store connection
export default connect()(SaveChangesButton);