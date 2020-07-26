import * as React from 'react';
import { StyledErrorMessageContainer, StyledErrorMessage, StyledRetryButton } from './ErrorMessage.style';
// Main
export default (function (_a) {
    var children = _a.children, retry = _a.retry;
    return (<StyledErrorMessageContainer>
      <StyledErrorMessage>
        {children}
      </StyledErrorMessage>
      <StyledRetryButton onClick={retry}>
        {"Try again"}
      </StyledRetryButton>
    </StyledErrorMessageContainer>);
});
//# sourceMappingURL=ErrorMessage.jsx.map