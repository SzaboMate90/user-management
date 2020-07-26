import * as React from 'react';
import { connect } from 'react-redux';
import { StyledHeader } from './Header.style';
import DeveloperName from './../DeveloperName/DeveloperName';
import AddNewMemberButton from './../AddNewMemberButton/AddNewMemberButton';
import SaveChangesButton from './../SaveChangesButton/SaveChangesButton';
import NewMemberForm from './../NewMemberForm/NewMemberForm';
import { isEmptyObject } from '../../tools/tools';
import { BaseStateType } from '../../redux/reducers';
import { UnsavedChangesType } from '../../tools/globalTypes';

// Types
export interface HeaderType {
  developerName : string,
  unsavedChanges : UnsavedChangesType
}

// Main
class Header extends React.Component<HeaderType> {
  state : {
    isModalOpened : boolean
  };

  constructor(props : HeaderType) {
    super(props);

    this.state = {
      isModalOpened : false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isModalOpened : true });
  }

  closeModal() {
    this.setState({ isModalOpened : false });
  }

  render() {
    const {unsavedChanges, developerName} = this.props;
    const {isModalOpened} = this.state;
    const hasSaveChangesButton = !((unsavedChanges && isEmptyObject(unsavedChanges)) || !unsavedChanges);
    const showCandidateName = !hasSaveChangesButton;

    return (
      <StyledHeader highlighted={hasSaveChangesButton}>
        {showCandidateName ? (
          <DeveloperName>
            {developerName}
          </DeveloperName>
        ) : null}
        {hasSaveChangesButton ? <SaveChangesButton /> : null}
        <AddNewMemberButton onClick={this.openModal} />
        {isModalOpened ? <NewMemberForm closeModal={this.closeModal} /> : null}
      </StyledHeader>
    );
  }
}

// Store connection
const mapStateToProps = (state : BaseStateType) => {
  const {unsavedChanges} = state;

  return ({
    unsavedChanges
  })
};

export default connect(mapStateToProps)(Header);
