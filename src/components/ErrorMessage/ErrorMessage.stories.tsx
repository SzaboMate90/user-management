import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ErrorMessage from './ErrorMessage';

export default {
  title: 'ErrorMessage',
  component: ErrorMessage,
  decorators: [withKnobs]
};

const label = "Error message";
const value = "An error occured";
const retry = () => {
  console.log("try again");
};

export const Default = () => (
  <ErrorMessage retry={retry}>
    {text(label, value)}
  </ErrorMessage>
);
