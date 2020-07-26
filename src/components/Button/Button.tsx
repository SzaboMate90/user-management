import * as React from 'react';
import { StyledButton } from './Button.style';
import { ChildrenType } from '../../tools/globalTypes';

// Types
export interface ButtonType {
  children ?: ChildrenType,
  className ?: string,
  onClick : React.MouseEventHandler
}

// Main
export default ({ children, className, onClick } : ButtonType) => {
  return (
    <StyledButton 
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
