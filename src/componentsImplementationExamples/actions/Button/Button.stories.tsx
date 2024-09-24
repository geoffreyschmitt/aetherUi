import type { Meta, StoryObj } from '@storybook/react';

import CoreButtonMeta, {
  Button as CoreButton,
} from '@/aether-ui-core/components/actions/Button/Button.stories';
import { Button as Component } from './index';
import { EButtonVariant } from './Button.global.types';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Actions/Button',
  component: Component,
  argTypes: {
    ...CoreButtonMeta.argTypes,
    style: {
      options: Object.values(EButtonVariant),
      control: { type: 'select' as const },
      table: {
        category: 'Styles',
      },
    },
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

export const ButtonSecondary: Story = {
  args: { ...CoreButton.args, variant: EButtonVariant.SECONDARY },
};
