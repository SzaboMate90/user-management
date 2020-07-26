import * as React from 'react';
import { StyledModalHeader, StyledTitle, StyledCloseIcon, iconSize } from './ModalHeader.style';

// Types
export interface ModalHeaderType {
  onClose : React.MouseEventHandler,
  title : string
}

// Main
export default ({ title, onClose } : ModalHeaderType) => (
  <StyledModalHeader>
    <StyledTitle>
      {title}
    </StyledTitle>
    <StyledCloseIcon
      onClick={onClose}
      size={iconSize}
    />
  </StyledModalHeader>
);
