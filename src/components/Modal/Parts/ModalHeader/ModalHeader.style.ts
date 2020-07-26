import styled from 'styled-components';
import { Close } from '@styled-icons/material';
import { getFontSans } from '../../../../styles/Fonts';

export const StyledModalHeader = styled.header`
  display: block;
  position: relative;
  margin-bottom: 10px;
`;

export const StyledTitle = styled.h2`
  display: inline-block;
  margin: 5px 0;
  ${getFontSans()};
`;

export const iconSize = 30;
export const StyledCloseIcon = styled(Close)`
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0;
  margin: 3px 0;
  cursor: pointer;
`;