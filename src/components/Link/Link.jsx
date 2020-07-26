import * as React from 'react';
import { StyledLink } from './Link.style';
// Main
export default (function (_a) {
    var href = _a.href, children = _a.children, onClick = _a.onClick;
    return (<StyledLink href={href} onClick={onClick}>
    {children}
  </StyledLink>);
});
//# sourceMappingURL=Link.jsx.map