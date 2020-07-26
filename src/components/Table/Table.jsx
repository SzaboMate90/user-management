import * as React from 'react';
import TableHeader from './Parts/TableHeader/TableHeader';
import TableBody from './Parts/TableBody/TableBody';
import { StyledTable } from './Table.style';
// Main
export default (function (_a) {
    var headerCells = _a.headerCells, rows = _a.rows;
    return (<StyledTable>
    <TableHeader cells={headerCells}/>
    <TableBody rows={rows}/>
  </StyledTable>);
});
//# sourceMappingURL=Table.jsx.map