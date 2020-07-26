var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { blockBackground, primary } from '../../styles/Colors';
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : {
        r: 0,
        g: 0,
        b: 0
    };
}
var primaryRgb = hexToRgb(primary);
var r = primaryRgb.r, g = primaryRgb.g, b = primaryRgb.b;
export var StyledSpinner = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 10px;\n  margin: 50px auto;\n  text-indent: -9999em;\n  width: 11em;\n  height: 11em;\n  border-radius: 50%;\n  background: ", ";\n  background: linear-gradient(to right, ", " 10%, rgba(", ",", ",", ", 0) 42%);\n  position: relative;\n  animation: spinner 1.4s infinite linear;\n  transform: translateZ(0);\n  \n  &:before {\n    width: 50%;\n    height: 50%;\n    background: ", ";\n    border-radius: 100% 0 0 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: '';\n  }\n  &:after {\n    background: ", ";\n    width: 75%;\n    height: 75%;\n    border-radius: 50%;\n    content: '';\n    margin: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n  @keyframes spinner {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"], ["\n  font-size: 10px;\n  margin: 50px auto;\n  text-indent: -9999em;\n  width: 11em;\n  height: 11em;\n  border-radius: 50%;\n  background: ", ";\n  background: linear-gradient(to right, ", " 10%, rgba(", ",", ",", ", 0) 42%);\n  position: relative;\n  animation: spinner 1.4s infinite linear;\n  transform: translateZ(0);\n  \n  &:before {\n    width: 50%;\n    height: 50%;\n    background: ", ";\n    border-radius: 100% 0 0 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: '';\n  }\n  &:after {\n    background: ", ";\n    width: 75%;\n    height: 75%;\n    border-radius: 50%;\n    content: '';\n    margin: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n  @keyframes spinner {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])), primary, primary, r, g, b, primary, blockBackground);
var templateObject_1;
//# sourceMappingURL=Spinner.style.js.map