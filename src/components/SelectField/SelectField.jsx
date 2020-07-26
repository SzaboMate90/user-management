import * as React from 'react';
import { StyledSelect } from './SelectField.style';
// Main
export default (function (_a) {
    var className = _a.className, noOptionsMessage = _a.noOptionsMessage, placeholder = _a.placeholder, options = _a.options, selectedId = _a.selectedId, onChange = _a.onChange;
    var localOnChange = function (valueObj) {
        var newValue = valueObj ? valueObj.id : null;
        onChange(newValue);
    };
    return (<StyledSelect className={className} noOptionsMessage={function () { return noOptionsMessage || "No options"; }} value={options.find(function (option) { return option.id === selectedId; })} getOptionValue={function (option) { return option.id; }} placeholder={placeholder} options={options} onChange={localOnChange} isSearchable={false} isMulti={false} hideSelectedOptions={true}/>);
});
//# sourceMappingURL=SelectField.jsx.map