import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import PrimaryButton from './PrimaryButton';
export default {
    title: 'PrimaryButton',
    component: PrimaryButton,
    decorators: [withKnobs]
};
var label = "Primary button text";
var value = "Primary button";
export var Default = function () { return (<PrimaryButton onClick={function () { }}>
    {text(label, value)}
  </PrimaryButton>); };
//# sourceMappingURL=PrimaryButton.stories.jsx.map