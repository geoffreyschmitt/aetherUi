import type { Meta, StoryObj } from '@storybook/react';

import { Input as Component } from '.';
import CoreInputMeta, {
  Input as CoreInput,
} from '@/components/actions/Input/Input.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Actions/Input',
  component: Component,
  argTypes: {
    ...CoreInputMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Input: Story = {
  args: {
    ...CoreInput.args,
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
