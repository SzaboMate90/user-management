import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import AddNewMemberButton from './AddNewMemberButton';

export default {
  title: 'AddNewMemberButton',
  component: AddNewMemberButton,
  decorators: [withKnobs]
};

const label = "Button text";
const value = "New member";

export const Default = () => (
  <AddNewMemberButton onClick={() => {}}>
    {text(label, value)}
  </AddNewMemberButton>
);
