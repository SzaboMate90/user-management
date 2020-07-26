import * as React from 'react';
import { PropsChildrenType } from '../../../../tools/globalTypes';
import { StyledNewMemberSection } from './NewMemberSection.style';

export default ({ children } : PropsChildrenType) => (
  <StyledNewMemberSection>
    {children}
  </StyledNewMemberSection>
);
