var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import PrimaryButton from '../../../PrimaryButton/PrimaryButton';
import Button from '../../../Button/Button';
import Breakpoints from '../../../../styles/Breakpoints';
export var StyledModalFooter = styled.footer(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  text-align: right;\n  margin-top: 50px;\n  \n  ", "\n"], ["\n  display: block;\n  text-align: right;\n  margin-top: 50px;\n  \n  ",
    "\n"])), Breakpoints.global("\n    margin: 0 auto;\n    text-align: center;\n  "));
export var StyledPrimaryButton = styled(PrimaryButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), Breakpoints.global("\n    display: block;\n    margin: 0 auto;\n    width: 150px;\n  "));
export var StyledCancelButton = styled(Button)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-right: 12px;\n  \n  ", "\n"], ["\n  margin-right: 12px;\n  \n  ",
    "\n"])), Breakpoints.global("\n    display: block;\n    margin: 0 auto;\n    width: 150px;\n  "));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=ModalFooter.style.js.map