import * as React from 'react';
import { StyledDeveloperName, StyledLogo, StyledName } from './DeveloperName.style';
// @ts-ignore
import DeveloperLogo from '../../../static/developer_logo.jpg';
import { PropsChildrenType } from '../../tools/globalTypes';

export default ({ children } : PropsChildrenType) => (
  <StyledDeveloperName>
    <StyledLogo
      src={DeveloperLogo}
    />
    <StyledName>
      {children}
    </StyledName>
  </StyledDeveloperName>
);
