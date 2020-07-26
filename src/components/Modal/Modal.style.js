var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import Colors from '../../styles/Colors';
import Breakpoints from '../../styles/Breakpoints';
export var StyledModal = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  display: inline-block;\n  position: absolute;\n  left: 50%;\n  padding: 15px;\n  top: 50%;\n  margin: 0 auto;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  \n  ", "\n"], ["\n  background-color: ", ";\n  display: inline-block;\n  position: absolute;\n  left: 50%;\n  padding: 15px;\n  top: 50%;\n  margin: 0 auto;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  \n  ",
    "\n"])), Colors.white100, Breakpoints.global("\n    display: block;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    transform: none;\n  "));
export var StyledModalBackground = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  bottom: 0;\n  background-color: rgba(0, 0, 0, .4);\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 1; \n"], ["\n  bottom: 0;\n  background-color: rgba(0, 0, 0, .4);\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 1; \n"])));
export var StyledContent = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  \n  ", "\n"], ["\n  display: inline-block;\n  \n  ",
    "\n"])), Breakpoints.global("\n    display: block;\n  "));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Modal.style.js.map