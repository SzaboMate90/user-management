import * as React from 'react';
import { StyledModalHeader, StyledTitle, StyledCloseIcon, iconSize } from './ModalHeader.style';
// Main
export default (function (_a) {
    var title = _a.title, onClose = _a.onClose;
    return (<StyledModalHeader>
    <StyledTitle>
      {title}
    </StyledTitle>
    <StyledCloseIcon onClick={onClose} size={iconSize}/>
  </StyledModalHeader>);
});
//# sourceMappingURL=ModalHeader.jsx.map