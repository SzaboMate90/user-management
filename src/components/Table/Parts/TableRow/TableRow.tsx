import * as React from 'react';
import TableCell from '../TableCell/TableCell';
import { StyledTableRow } from './TableRow.style';
import { ChildrenType } from '../../../../tools/globalTypes';

// Types
export interface TableRowType {
  key ?: number,
  isHeader ?: boolean,
  cells : Array<ChildrenType>
}

// Main
  export default ({ cells, isHeader } : TableRowType) => (
  <StyledTableRow>
    {cells ? cells.map((cellContent : any, index : number) => (
      <TableCell
        key={index}
        isHeader={isHeader}
      >
        {cellContent}
      </TableCell>
    )) : []}
  </StyledTableRow>
);
