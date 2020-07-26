import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ErrorMessage from './ErrorMessage';
export default {
    title: 'ErrorMessage',
    component: ErrorMessage,
    decorators: [withKnobs]
};
var label = "Error message";
var value = "An error occured";
var retry = function () {
    console.log("try again");
};
export var Default = function () { return (<ErrorMessage retry={retry}>
    {text(label, value)}
  </ErrorMessage>); };
//# sourceMappingURL=ErrorMessage.stories.jsx.map