import styled from 'styled-components'
import Button from '../Button/Button';
import Breakpoints from '../../styles/Breakpoints';

export const StyledAddNewMemberButton = styled(Button)`
  padding: 12px 15px;
  float: right;
  
  ${Breakpoints.global(`
    display: block; 
    float: none;
    margin: 15px auto 0;
  `)}
`;
