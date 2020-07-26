import * as React from 'react';
import { StyledModalFooter, StyledPrimaryButton, StyledCancelButton } from './ModalFooter.style';

// Types
export interface ModalFooterType {
  onCancel : React.MouseEventHandler,
  onSave : () => void,
  cancelButtonText : string,
  saveButtonText : string
}

// Main
export default ({ onCancel, onSave, cancelButtonText, saveButtonText } : ModalFooterType) => (
  <StyledModalFooter>
    <StyledCancelButton onClick={onCancel}>
      {cancelButtonText}
    </StyledCancelButton>
    <StyledPrimaryButton onClick={onSave}>
      {saveButtonText}
    </StyledPrimaryButton>
  </StyledModalFooter>
);
