import * as React from 'react';
import { Container, Field, Label, ErrorMessage } from './Field.style';

// Types
export interface FieldType {
  type ?: string,
  name : string,
  label : string,
  placeholder ?: string,
  errorMessage ?: string,
  value : string,
  onChange : (value : string) => void,
  required ?: boolean,
  hasError ?: boolean
}

// Main
function getRealErrorMessage(errorMessage, label, value, required) {
  let realErrorMessage;

  if (required && !value) {
    realErrorMessage = `${label} is required. Please fill this field`;
  }
  if (errorMessage) {
    realErrorMessage = errorMessage;
  }

  return realErrorMessage;
}
export default ({ type, name, label, errorMessage, placeholder, value, onChange, required, hasError } : FieldType) => {
  const realErrorMessage = hasError ? getRealErrorMessage(errorMessage, label, value, required) : null;
  const localChangeCallback = event => {
    onChange(event.target.value);
  };

  return (
    <Container hasError={hasError}>
      <Label
        htmlFor={name}
        required={required}
      >
        {label}
      </Label>
      <Field
        id={name}
        name={name}
        type={type || "text"}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={localChangeCallback}
      />
      {realErrorMessage ? (
        <ErrorMessage>
          {realErrorMessage}
        </ErrorMessage>
      ) : null}
    </Container>
  )
};
