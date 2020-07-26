import * as React from 'react';
import { StyledTableCell } from './TableCell.style';
export default (function (_a) {
    var children = _a.children, isHeader = _a.isHeader;
    return (<StyledTableCell isHeader={isHeader}>
    {children}
  </StyledTableCell>);
});
//# sourceMappingURL=TableCell.jsx.map