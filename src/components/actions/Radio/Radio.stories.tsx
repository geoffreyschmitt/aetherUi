import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SATComponentProps } from '@/utils';

import { Radio as Component } from '.';

const meta: Meta<typeof Component> = {
  title: 'Components/Actions/Radio',
  component: Component,
  argTypes: {
    ...SATComponentProps,
  },
};

export default meta;

type Story = StoryObj;

export const Radio: Story = {
  args: {
    id: 'Radio',
    children: 'Couleur Nectarine',
    checked: false,
    onChange: fn(),
  },
};

export const RadioDefaultChecked: Story = {
  args: {
    ...Radio.args,
    checked: true,
  },
};
