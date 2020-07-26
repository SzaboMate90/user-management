import * as React from 'react';
import { ChildrenType } from '../../tools/globalTypes';
import { StyledLink } from './Link.style';

// Types
export interface LinkType {
  onClick ?: React.MouseEventHandler,
  href ?: string,
  children : ChildrenType
}

// Main
export default ({ href, children, onClick} : LinkType) => (
  <StyledLink
    href={href}
    onClick={onClick}
  >
    {children}
  </StyledLink>
);
