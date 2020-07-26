import * as React from 'react';
import { Container, Field, Label, ErrorMessage } from './Field.style';
// Main
function getRealErrorMessage(errorMessage, label, value, required) {
    var realErrorMessage;
    if (required && !value) {
        realErrorMessage = label + " is required. Please fill this field";
    }
    if (errorMessage) {
        realErrorMessage = errorMessage;
    }
    return realErrorMessage;
}
export default (function (_a) {
    var type = _a.type, name = _a.name, label = _a.label, errorMessage = _a.errorMessage, placeholder = _a.placeholder, value = _a.value, onChange = _a.onChange, required = _a.required, hasError = _a.hasError;
    var realErrorMessage = hasError ? getRealErrorMessage(errorMessage, label, value, required) : null;
    var localChangeCallback = function (event) {
        onChange(event.target.value);
    };
    return (<Container hasError={hasError}>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <Field id={name} name={name} type={type || "text"} value={value} required={required} placeholder={placeholder} onChange={localChangeCallback}/>
      {realErrorMessage ? (<ErrorMessage>
          {realErrorMessage}
        </ErrorMessage>) : null}
    </Container>);
});
//# sourceMappingURL=Field.jsx.map