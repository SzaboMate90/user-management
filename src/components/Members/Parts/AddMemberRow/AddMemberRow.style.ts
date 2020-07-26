import styled from 'styled-components'
import Breakpoints from '../../../../styles/Breakpoints';

export const StyledAddMemberRow = styled.section`
  display: inline-block;    
  padding: 15px 35px 30px;
  
  ${Breakpoints.global(`
    display: block;
    text-align: center;
  `)}
`;
