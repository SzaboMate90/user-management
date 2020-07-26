var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import Colors from '../../styles/Colors';
var getHighlightedHeaderStyle = function () { return "\n  background-color: " + Colors.yellow100 + ";\n"; };
export var StyledHeader = styled.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  background-color: ", ";\n  padding: 10px;\n  margin: 0 auto;\n  \n  ", "\n  \n  &:after {\n    content: \"\";\n    clear: both;\n    display: block;\n  }\n"], ["\n  display: block;\n  background-color: ", ";\n  padding: 10px;\n  margin: 0 auto;\n  \n  ", "\n  \n  &:after {\n    content: \"\";\n    clear: both;\n    display: block;\n  }\n"])), Colors.blockBackground, function (props) { return props.highlighted ? getHighlightedHeaderStyle() : ""; });
var templateObject_1;
//# sourceMappingURL=Header.style.js.map