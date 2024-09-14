import type { Meta, StoryObj } from '@storybook/react';

import CoreButtonMeta, {
  Button as CoreButton,
} from '@/components/actions/Button/Button.stories';
import { Button as Component } from './index';

const meta: Meta<typeof Component> = {
  title: 'ImplementationExample/Actions/Button',
  component: Component,
  argTypes: {
    ...CoreButtonMeta.argTypes,
  },
  decorators: [...(CoreButtonMeta.decorators as [])],
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Button: Story = {
  args: CoreButton.args,
};

export const ButtonDisabled: Story = {
  args: {
    ...Button.args,
    disabled: true,
  },
};

export const ButtonIsLoading: Story = {
  args: {
    ...Button.args,
    isLoading: true,
  },
};
