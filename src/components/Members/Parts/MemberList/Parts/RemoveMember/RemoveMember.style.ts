import styled from 'styled-components'
import RemoveIcon from './../../../../../RemoveIcon/RemoveIcon';
import Colors from '../../../../../../styles/Colors';
import Breakpoints from '../../../../../../styles/Breakpoints';

export const iconSize = 35;
export const StyledRemoveMember = styled(RemoveIcon)`
  display: inline;
  color: ${Colors.primary};
  cursor: pointer;
  float: right;
  
  ${Breakpoints.global(`
    display: block;
    float: none;
    margin: 0 auto;
  `)}
`;