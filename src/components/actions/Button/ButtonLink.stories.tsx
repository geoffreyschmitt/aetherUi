import type { Meta, StoryObj } from '@storybook/react';

import {
  ButtonArgs,
  decoratorButton,
  SATButton,
} from './Button.global.storybook';
import { ButtonLink as Component } from '.';

const meta: Meta<typeof Component> = {
  title: 'Components/Actions/ButtonLink',
  component: Component,
  argTypes: SATButton,
  decorators: decoratorButton,
};

export default meta;

type Story = StoryObj;

export const ButtonLink: Story = {
  args: {
    ...ButtonArgs,
    href: '#',
  },
};
