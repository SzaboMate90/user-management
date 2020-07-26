import * as React from 'react';
import { StyledModalFooter, StyledPrimaryButton, StyledCancelButton } from './ModalFooter.style';
// Main
export default (function (_a) {
    var onCancel = _a.onCancel, onSave = _a.onSave, cancelButtonText = _a.cancelButtonText, saveButtonText = _a.saveButtonText;
    return (<StyledModalFooter>
    <StyledCancelButton onClick={onCancel}>
      {cancelButtonText}
    </StyledCancelButton>
    <StyledPrimaryButton onClick={onSave}>
      {saveButtonText}
    </StyledPrimaryButton>
  </StyledModalFooter>);
});
//# sourceMappingURL=ModalFooter.jsx.map