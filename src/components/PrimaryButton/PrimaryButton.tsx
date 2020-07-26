import * as React from 'react';
import { StyledPrimaryButton } from './PrimaryButton.style';
import { ButtonType } from '../Button/Button';

export default (props : ButtonType) => {
  return (
    <StyledPrimaryButton
      {...props}
    />
  );
};
