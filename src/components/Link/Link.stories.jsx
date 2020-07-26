import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Link from './Link';
export default {
    title: 'Link',
    component: Link,
    decorators: [withKnobs]
};
var label = "Link text";
var value = "This link goes to my CV";
export var Default = function () { return (<Link href={text("Link target", "http://findersen.com")}>
    {text(label, value)}
  </Link>); };
//# sourceMappingURL=Link.stories.jsx.map