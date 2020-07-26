import * as React from 'react';
import { ChildrenType } from '../../../../tools/globalTypes';
import { StyledTableCell } from './TableCell.style';

interface TableCellType {
  children : ChildrenType,
  isHeader ?: boolean
}
export default ({ children, isHeader } : TableCellType) => (
  <StyledTableCell
    isHeader={isHeader}
  >
    {children}
  </StyledTableCell>
);
