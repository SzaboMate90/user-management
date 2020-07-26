import * as React from 'react';
import ModalHeader from './Parts/ModalHeader/ModalHeader';
import ModalFooter from './Parts/ModalFooter/ModalFooter';
import { StyledModal, StyledContent, StyledModalBackground } from './Modal.style';
// Main
export default (function (_a) {
    var children = _a.children, title = _a.title, onClose = _a.onClose, saveButtonText = _a.saveButtonText, onSave = _a.onSave, cancelButtonText = _a.cancelButtonText, onCancel = _a.onCancel;
    return (<>
    <StyledModalBackground onClick={onClose}/>
    <StyledModal>
      <ModalHeader title={title} onClose={onClose}/>
      <StyledContent>
        {children}
      </StyledContent>
      <ModalFooter onCancel={onCancel} onSave={onSave} cancelButtonText={cancelButtonText} saveButtonText={saveButtonText}/>
    </StyledModal>
  </>);
});
//# sourceMappingURL=Modal.jsx.map