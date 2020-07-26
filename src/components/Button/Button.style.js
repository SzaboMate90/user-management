var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import Colors from './../../styles/Colors';
import { getFontSans } from '../../styles/Fonts';
import Breakpoints from '../../styles/Breakpoints';
var transitionDuration = '300ms';
export var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 3px;\n  color: ", ";\n  cursor: pointer;\n  font-weight: 500;\n  padding: 5px 15px;\n  outline: none;\n  text-transform: capitalize;\n  transition: border-color ", ", color ", ", background ", ";\n\n  ", "\n\n  &:hover {\n    color: ", ";\n    border-color: ", ";\n  }\n  \n  ", "\n"], ["\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 3px;\n  color: ", ";\n  cursor: pointer;\n  font-weight: 500;\n  padding: 5px 15px;\n  outline: none;\n  text-transform: capitalize;\n  transition: border-color ", ", color ", ", background ", ";\n\n  ", "\n\n  &:hover {\n    color: ", ";\n    border-color: ", ";\n  }\n  \n  ",
    "\n"])), Colors.white100, Colors.pageText, Colors.pageText, transitionDuration, transitionDuration, transitionDuration, getFontSans(), Colors.primary, Colors.primary, Breakpoints.global("\n    padding: 10px 15px;\n  "));
var templateObject_1;
//# sourceMappingURL=Button.style.js.map