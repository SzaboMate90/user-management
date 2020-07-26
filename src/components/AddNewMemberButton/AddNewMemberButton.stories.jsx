import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import AddNewMemberButton from './AddNewMemberButton';
export default {
    title: 'AddNewMemberButton',
    component: AddNewMemberButton,
    decorators: [withKnobs]
};
var label = "Button text";
var value = "New member";
export var Default = function () { return (<AddNewMemberButton onClick={function () { }}>
    {text(label, value)}
  </AddNewMemberButton>); };
//# sourceMappingURL=AddNewMemberButton.stories.jsx.map