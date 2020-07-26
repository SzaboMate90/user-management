import styled from 'styled-components'
import Colors from '../../styles/Colors';
import Breakpoints from '../../styles/Breakpoints';

export const StyledModal = styled.div`
  background-color: ${Colors.white100};
  display: inline-block;
  position: absolute;
  left: 50%;
  padding: 15px;
  top: 50%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  z-index: 2;
  
  ${Breakpoints.global(`
    display: block;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transform: none;
  `)}
`;
export const StyledModalBackground = styled.div`
  bottom: 0;
  background-color: rgba(0, 0, 0, .4);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1; 
`;
export const StyledContent = styled.div`
  display: inline-block;
  
  ${Breakpoints.global(`
    display: block;
  `)}
`;