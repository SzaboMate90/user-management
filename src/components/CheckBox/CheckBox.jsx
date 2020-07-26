import * as React from 'react';
import { Container, Input, Label, LabelText, Hint } from './Checkbox.style';
// Main
export default (function (_a) {
    var name = _a.name, label = _a.label, onChange = _a.onChange, hint = _a.hint, hasError = _a.hasError, value = _a.value;
    var localChangeCallback = function (event) {
        onChange(event.target.checked);
    };
    return (<Container hasError={hasError}>
      <Input type="checkbox" id={name} name={name} onChange={localChangeCallback} checked={value}/>
      <Label htmlFor={name}>
        <LabelText>
          {label}
        </LabelText>
        {hint ? (<Hint>
            {hint}
          </Hint>) : null}
      </Label>
    </Container>);
});
//# sourceMappingURL=CheckBox.jsx.map