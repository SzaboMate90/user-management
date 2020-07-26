import styled from 'styled-components'
import Colors from '../../../../styles/Colors';
import Breakpoints from '../../../../styles/Breakpoints';

export const StyledNewMemberSection = styled.section`
  display: inline-block;
  position: relative;
  vertical-align: top;
  padding: 15px 5px;
  margin: 0 5px;
  width: 300px;
  
  &:first-child {
    border-right: 1px solid ${Colors.grey400};
    padding-right: 16px;
  }
  
  ${Breakpoints.global(`
    display: block;
    margin: 0;
    padding: 0;
    width: unset;
    
     &:first-child {
      border-right: 0;
      padding-right: 0;
    }
  `)}
`;