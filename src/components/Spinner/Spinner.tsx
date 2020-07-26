import * as React from 'react';
import { StyledSpinner } from './Spinner.style';

// Types
export interface SpinnerType {
  className ?: string
}

// Main
export default ({ className } : SpinnerType) => (
  <StyledSpinner
    className={className}
  />
);
