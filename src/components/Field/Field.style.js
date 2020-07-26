var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import Colors from './../../styles/Colors';
export var Label = styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  display: block;\n  font-weight: 600;\n  line-height: 15px;\n  transition: color linear 200ms;\n  margin-bottom: 3px;\n  \n  ", "\n"], ["\n  color: ", ";\n  display: block;\n  font-weight: 600;\n  line-height: 15px;\n  transition: color linear 200ms;\n  margin-bottom: 3px;\n  \n  ",
    "\n"])), Colors.pageText, function (props) { return props.required ? "\n    &:after {\n      content: \"*\";\n      color: " + Colors.red100 + ";\n      font-size: 17px;\n      margin-left: 4px;\n    }\n  " : ""; });
export var Field = styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: transparent;\n  border: 1px solid ", ";\n  color: ", ";\n  display: block;\n  font-weight: 500;\n  margin: 0 0 15px 0;\n  outline: none;\n  padding: 10px;\n  transition: border-color linear 300ms;\n  width: calc(100% - 20px);\n"], ["\n  background: transparent;\n  border: 1px solid ", ";\n  color: ", ";\n  display: block;\n  font-weight: 500;\n  margin: 0 0 15px 0;\n  outline: none;\n  padding: 10px;\n  transition: border-color linear 300ms;\n  width: calc(100% - 20px);\n"])), Colors.grey400, Colors.pageText);
var getErrorStyle = function () { return "\n  " + Label + ",\n  " + Field + " {\n    color: " + Colors.red100 + ";\n  }\n"; };
export var ErrorMessage = styled.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 11px;\n  margin: -10px 0 15px 0;\n"], ["\n  color: ", ";\n  font-size: 11px;\n  margin: -10px 0 15px 0;\n"])), Colors.red100);
export var Container = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  \n  ", "\n"], ["\n  position: relative;\n  \n  ", "\n"])), function (props) { return props.hasError ? getErrorStyle() : ""; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Field.style.js.map