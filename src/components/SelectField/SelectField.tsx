import * as React from 'react';
import { StyledSelect } from './SelectField.style';

// Types
export interface SelectFieldType {
  className ?: string,
  noOptionsMessage ?: string,
  placeholder ?: string,
  options : Array<object>,
  selectedId : number | string,
  onChange : (newValue : string | number | null) => void
}
type SelectedValueType = {
  id : string | number
};

// Main
export default({ className, noOptionsMessage, placeholder, options, selectedId, onChange } : SelectFieldType) => {
  const localOnChange = (valueObj : SelectedValueType) => {
    const newValue = valueObj ? valueObj.id : null;

    onChange(newValue);
  };

  return (
    <StyledSelect
      className={className}
      noOptionsMessage={() => noOptionsMessage || "No options"}
      value={options.find((option : any) => option.id === selectedId)}
      getOptionValue={option => option.id}
      placeholder={placeholder}
      options={options}
      onChange={localOnChange}
      isSearchable={false}
      isMulti={false}
      hideSelectedOptions={true}
    />
  );
};
