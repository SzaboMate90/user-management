import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import DeveloperName from './DeveloperName';

export default {
  title: 'DeveloperName',
  component: DeveloperName,
  decorators: [withKnobs]
};

const label = "Label";
const value = "Test developer name";

export const Default = () => (
  <DeveloperName>
    {text(label, value)}
  </DeveloperName>
);