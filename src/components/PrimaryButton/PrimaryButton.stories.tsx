import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import PrimaryButton from './PrimaryButton';

export default {
  title: 'PrimaryButton',
  component: PrimaryButton,
  decorators: [withKnobs]
};

const label = "Primary button text";
const value = "Primary button";

export const Default = () => (
  <PrimaryButton
    onClick={() => {}}
  >
    {text(label, value)}
  </PrimaryButton>
);
