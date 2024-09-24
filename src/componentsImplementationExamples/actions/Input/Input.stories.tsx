import type { Meta, StoryObj } from '@storybook/react';

import { Input as Component } from '.';
import CoreInputMeta, {
  Input as CoreInput,
  InputWithDefaultValue as CoreInputWithDefaultValue,
} from '@/aether-ui-core/components/actions/Input/Input.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Actions/Input',
  component: Component,
  argTypes: {
    ...CoreInputMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Input: Story = { ...CoreInput };
export const InputWithDefaultValue: Story = {
  ...CoreInputWithDefaultValue,
};
