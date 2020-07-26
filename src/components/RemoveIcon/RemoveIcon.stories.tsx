import * as React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import RemoveIcon from './RemoveIcon';

export default {
  title: 'RemoveIcon',
  component: RemoveIcon,
  decorators: [withKnobs]
};

export const Default = () => (
  <RemoveIcon size={number("Icon size", 20)} />
);