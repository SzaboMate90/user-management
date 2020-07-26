import * as React from 'react';
import TableCell from '../TableCell/TableCell';
import { StyledTableRow } from './TableRow.style';
// Main
export default (function (_a) {
    var cells = _a.cells, isHeader = _a.isHeader;
    return (<StyledTableRow>
    {cells ? cells.map(function (cellContent, index) { return (<TableCell key={index} isHeader={isHeader}>
        {cellContent}
      </TableCell>); }) : []}
  </StyledTableRow>);
});
//# sourceMappingURL=TableRow.jsx.map