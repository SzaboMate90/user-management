import * as React from 'react';
import TableRow from '../TableRow/TableRow';
import { StyledTableBody } from './TableBody.style';

// Types
export interface TableBodyType {
  rows : Array<any>
}

// Main
export default ({ rows } : TableBodyType) => (
  <StyledTableBody>
    {rows.map((cells, index) => (
      <TableRow
        key={index}
        cells={cells}
      />
    ))}
  </StyledTableBody>
);
