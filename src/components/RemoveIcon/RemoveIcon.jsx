import * as React from 'react';
import { StyledRemoveIcon, iconSize } from './RemoveIcon.style';
// Main
export default (function (_a) {
    var className = _a.className, title = _a.title, size = _a.size, onClick = _a.onClick;
    return (<StyledRemoveIcon title={title} size={size || iconSize} className={className} onClick={onClick}/>);
});
//# sourceMappingURL=RemoveIcon.jsx.map