import * as React from 'react';
import { StyledTableHeader, StyledTableRow } from './TableHeader.style';

// Types
export interface TableHeaderType {
  cells : Array<any>
}

// Main
export default ({ cells } : TableHeaderType) => (
  <StyledTableHeader>
    <StyledTableRow
      isHeader={true}
      cells={cells}
    />
  </StyledTableHeader>
);
