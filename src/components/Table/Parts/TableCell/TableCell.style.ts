import styled from 'styled-components'
import Breakpoints from '../../../../styles/Breakpoints';

const getHeaderStyle = () => `
  font-weight: 600;
`;

interface StyledTableCellType {
  isHeader ?: boolean
}
export const StyledTableCell = styled.td`
  padding: 15px 15px 15px 35px;
  
  ${(props : StyledTableCellType) => props.isHeader ? getHeaderStyle() : ""}
  
  ${Breakpoints.global(`
    display: block;
  `)}
`;
