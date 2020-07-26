import * as React from 'react';
import { ChildrenType } from '../../tools/globalTypes';
import { StyledErrorMessageContainer, StyledErrorMessage, StyledRetryButton } from './ErrorMessage.style';

// Types
export interface ErrorMessageType {
  children : string,
  retry : React.MouseEventHandler
}

// Main
export default ({ children, retry } : ErrorMessageType) => {
  return (
    <StyledErrorMessageContainer>
      <StyledErrorMessage>
        {children}
      </StyledErrorMessage>
      <StyledRetryButton onClick={retry}>
        {"Try again"}
      </StyledRetryButton>
    </StyledErrorMessageContainer>
  );
};
