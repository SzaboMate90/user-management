import * as React from 'react';
import TableRow from '../TableRow/TableRow';
import { StyledTableBody } from './TableBody.style';
// Main
export default (function (_a) {
    var rows = _a.rows;
    return (<StyledTableBody>
    {rows.map(function (cells, index) { return (<TableRow key={index} cells={cells}/>); })}
  </StyledTableBody>);
});
//# sourceMappingURL=TableBody.jsx.map