import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Button from './Button';
export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs]
};
var label = "Button text";
var value = "Test button text";
export var Default = function () { return (<Button onClick={function () { }}>
    {text(label, value)}
  </Button>); };
//# sourceMappingURL=Button.stories.jsx.map