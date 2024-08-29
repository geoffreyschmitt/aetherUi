import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SATComponentProps } from '@/utils';

import { Input as Component } from '.';

const meta: Meta<typeof Component> = {
  title: 'Components/Actions/Input',
  component: Component,
  argTypes: {
    ...SATComponentProps,
    label: {
      table: {
        category: 'Data',
      },
    },
    defaultValue: {
      table: {
        category: 'Data',
      },
      control: 'text',
    },
    beforeContentSlot: {
      table: {
        category: 'Slots',
      },
      control: 'text',
    },
    afterContentSlot: {
      table: {
        category: 'Slots',
      },
      control: 'text',
    },
    inputProps: {
      table: {
        category: 'Data',
      },
    },
    hasError: {
      table: {
        category: 'Data',
      },
      control: 'boolean',
    },
    onChange: {
      table: {
        category: 'Events',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Input: Story = {
  args: {
    label: 'label',
    onChange: fn(),
  },
};
export const InputWithDefaultValue: Story = {
  args: {
    ...Input.args,
    defaultValue: 'default-value',
  },
};

export const InputWithBeforeContentSlot: Story = {
  args: {
    ...Input.args,
    beforeContentSlot: 'beforeContentSlot',
  },
};

export const InputWithAfterContentSlot: Story = {
  args: {
    ...Input.args,
    afterContentSlot: 'afterContentSlot',
  },
};
