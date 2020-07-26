import * as React from 'react';
import { StyledRemoveIcon, iconSize } from './RemoveIcon.style';

// Types
export interface RemoveIconType {
  className ?: string,
  onClick ?: React.MouseEventHandler,
  size ?: number,
  title ?: string
}

// Main
export default ({ className, title, size, onClick } : RemoveIconType) => (
  <StyledRemoveIcon
    title={title}
    size={size || iconSize}
    className={className}
    onClick={onClick}
  />
);
