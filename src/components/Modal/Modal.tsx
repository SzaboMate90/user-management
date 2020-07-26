import * as React from 'react';
import ModalHeader from './Parts/ModalHeader/ModalHeader';
import ModalFooter from './Parts/ModalFooter/ModalFooter';
import { ChildrenType } from '../../tools/globalTypes';
import { StyledModal, StyledContent, StyledModalBackground } from './Modal.style';

// Types
export interface ModalType {
  children : ChildrenType,
  title : string,
  onClose : () => void,
  onCancel : React.MouseEventHandler,
  onSave : () => void,
  cancelButtonText : string,
  saveButtonText : string
}

// Main
export default ({
  children,
  title,
  onClose,
  saveButtonText,
  onSave,
  cancelButtonText,
  onCancel
} : ModalType) => (
  <>
    <StyledModalBackground
      onClick={onClose}
    />
    <StyledModal>
      <ModalHeader
        title={title}
        onClose={onClose}
      />
      <StyledContent>
        {children}
      </StyledContent>
      <ModalFooter
        onCancel={onCancel}
        onSave={onSave}
        cancelButtonText={cancelButtonText}
        saveButtonText={saveButtonText}
      />
    </StyledModal>
  </>
);
