var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { createGlobalStyle } from 'styled-components';
import Scrollbar from './../../styles/Scrollbar';
import Colors from './../../styles/Colors';
import { defaultFontSize } from '../../styles/Fonts';
export var GlobalStyle = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["  \n  html,\n  body,\n  #___gatsby,\n  #___gatsby > div[role=\"group\"][tabindex] {\n    height: 100%;\n  }\n  \n  body {\n    background: ", ";\n    margin: 0;\n    padding: 0;\n    overflow: auto;\n    font-size: ", "px;\n    ", "\n  }\n"], ["  \n  html,\n  body,\n  #___gatsby,\n  #___gatsby > div[role=\"group\"][tabindex] {\n    height: 100%;\n  }\n  \n  body {\n    background: ", ";\n    margin: 0;\n    padding: 0;\n    overflow: auto;\n    font-size: ", "px;\n    ", "\n  }\n"])), Colors.pageBackground, defaultFontSize, Scrollbar());
export var Layout = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  color: ", ";\n  flex-direction: column;\n  height: 100%;\n  margin: 0 auto;\n"], ["\n  display: flex;\n  color: ", ";\n  flex-direction: column;\n  height: 100%;\n  margin: 0 auto;\n"])), Colors.pageText);
var templateObject_1, templateObject_2;
//# sourceMappingURL=LightLayout.style.js.map