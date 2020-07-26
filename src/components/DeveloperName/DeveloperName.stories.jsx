import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import DeveloperName from './DeveloperName';
export default {
    title: 'DeveloperName',
    component: DeveloperName,
    decorators: [withKnobs]
};
var label = "Label";
var value = "Test developer name";
export var Default = function () { return (<DeveloperName>
    {text(label, value)}
  </DeveloperName>); };
//# sourceMappingURL=DeveloperName.stories.jsx.map