import styled from 'styled-components'
import PrimaryButton from '../../../PrimaryButton/PrimaryButton';
import Button from '../../../Button/Button';
import Breakpoints from '../../../../styles/Breakpoints';

export const StyledModalFooter = styled.footer`
  display: block;
  text-align: right;
  margin-top: 50px;
  
  ${Breakpoints.global(`
    margin: 0 auto;
    text-align: center;
  `)}
`;

export const StyledPrimaryButton = styled(PrimaryButton)`
  ${Breakpoints.global(`
    display: block;
    margin: 0 auto;
    width: 150px;
  `)}
`;

export const StyledCancelButton = styled(Button)`
  margin-right: 12px;
  
  ${Breakpoints.global(`
    display: block;
    margin: 0 auto;
    width: 150px;
  `)}
`;