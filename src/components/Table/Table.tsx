import * as React from 'react';
import TableHeader from './Parts/TableHeader/TableHeader';
import TableBody from './Parts/TableBody/TableBody';
import { StyledTable } from './Table.style';

// Types
export interface TableType {
  headerCells : Array<string>,
  rows : Array<any>
}

// Main
export default ({ headerCells, rows } : TableType) => (
  <StyledTable>
    <TableHeader cells={headerCells} />
    <TableBody rows={rows} />
  </StyledTable>
);
