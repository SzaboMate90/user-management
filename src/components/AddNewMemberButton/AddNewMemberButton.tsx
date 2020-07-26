import * as React from 'react';
import { StyledAddNewMemberButton } from './AddNewMemberButton.style';
import { ButtonType } from '../Button/Button';

export default (props : ButtonType) => {
  return (
    <StyledAddNewMemberButton
      {...props}
    >
      {props.children || "New member"}
    </StyledAddNewMemberButton>
  );
};
