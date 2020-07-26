import * as React from 'react';
import { StyledDeveloperName, StyledLogo, StyledName } from './DeveloperName.style';
// @ts-ignore
import DeveloperLogo from '../../../static/developer_logo.jpg';
export default (function (_a) {
    var children = _a.children;
    return (<StyledDeveloperName>
    <StyledLogo src={DeveloperLogo}/>
    <StyledName>
      {children}
    </StyledName>
  </StyledDeveloperName>);
});
//# sourceMappingURL=DeveloperName.jsx.map