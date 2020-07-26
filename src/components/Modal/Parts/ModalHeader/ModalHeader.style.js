var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { Close } from '@styled-icons/material';
import { getFontSans } from '../../../../styles/Fonts';
export var StyledModalHeader = styled.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  position: relative;\n  margin-bottom: 10px;\n"], ["\n  display: block;\n  position: relative;\n  margin-bottom: 10px;\n"])));
export var StyledTitle = styled.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  margin: 5px 0;\n  ", ";\n"], ["\n  display: inline-block;\n  margin: 5px 0;\n  ", ";\n"])), getFontSans());
export var iconSize = 30;
export var StyledCloseIcon = styled(Close)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 3px 0;\n  cursor: pointer;\n"], ["\n  display: inline-block;\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 3px 0;\n  cursor: pointer;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=ModalHeader.style.js.map