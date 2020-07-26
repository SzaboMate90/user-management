import * as React from 'react';
import Field from './Field';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
export default {
    title: 'Field',
    component: Field,
    decorators: [withKnobs]
};
export var Default = function () { return (<Field name={text("Field name", "name")} label={text("Field label", "My name")} placeholder={text("Field placeholder", "Text placeholder")} type={text("Field type", "text")} required={boolean("Is required", true)} hasError={boolean("Has error", false)} value={text("Field value", "Lorem ipsum")} onChange={function (value) { }}/>); };
//# sourceMappingURL=Field.stories.jsx.map