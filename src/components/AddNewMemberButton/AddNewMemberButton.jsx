import * as React from 'react';
import { StyledAddNewMemberButton } from './AddNewMemberButton.style';
export default (function (props) {
    return (<StyledAddNewMemberButton {...props}>
      {props.children || "New member"}
    </StyledAddNewMemberButton>);
});
//# sourceMappingURL=AddNewMemberButton.jsx.map