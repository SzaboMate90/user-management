import * as React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import RemoveIcon from './RemoveIcon';
export default {
    title: 'RemoveIcon',
    component: RemoveIcon,
    decorators: [withKnobs]
};
export var Default = function () { return (<RemoveIcon size={number("Icon size", 20)}/>); };
//# sourceMappingURL=RemoveIcon.stories.jsx.map