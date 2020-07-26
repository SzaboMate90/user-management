import * as React from 'react';
import { StyledButton } from './Button.style';
// Main
export default (function (_a) {
    var children = _a.children, className = _a.className, onClick = _a.onClick;
    return (<StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>);
});
//# sourceMappingURL=Button.jsx.map