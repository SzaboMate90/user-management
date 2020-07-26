import styled from 'styled-components'
import PrimaryButton from './../PrimaryButton/PrimaryButton';
import Breakpoints from '../../styles/Breakpoints';

export const StyledSaveChangesButton = styled(PrimaryButton)`
   padding: 12px 15px;
   float: right;
   margin-left: 12px;
   
   ${Breakpoints.global(`
    display: block;
    float: none;
    margin: 0 auto; 
  `)}
`;
