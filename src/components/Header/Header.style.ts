import styled from 'styled-components'
import Colors from '../../styles/Colors';

const getHighlightedHeaderStyle = () => `
  background-color: ${Colors.yellow100};
`;
interface StyledHeaderType {
  highlighted ?: boolean
}
export const StyledHeader = styled.header`
  display: block;
  background-color: ${Colors.blockBackground};
  padding: 10px;
  margin: 0 auto;
  
  ${(props : StyledHeaderType) => props.highlighted ? getHighlightedHeaderStyle() : ""}
  
  &:after {
    content: "";
    clear: both;
    display: block;
  }
`;