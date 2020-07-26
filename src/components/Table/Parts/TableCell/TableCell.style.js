var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import Breakpoints from '../../../../styles/Breakpoints';
var getHeaderStyle = function () { return "\n  font-weight: 600;\n"; };
export var StyledTableCell = styled.td(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 15px 15px 15px 35px;\n  \n  ", "\n  \n  ", "\n"], ["\n  padding: 15px 15px 15px 35px;\n  \n  ", "\n  \n  ",
    "\n"])), function (props) { return props.isHeader ? getHeaderStyle() : ""; }, Breakpoints.global("\n    display: block;\n  "));
var templateObject_1;
//# sourceMappingURL=TableCell.style.js.map