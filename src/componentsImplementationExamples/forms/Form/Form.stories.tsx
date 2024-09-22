import type { Meta, StoryObj } from '@storybook/react';

import { Form as Component } from '.';
import CoreFormMeta, {
  Form as CoreForm,
} from '@/components/forms/Form/Form.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Forms/Form',
  component: Component,
  argTypes: {
    ...CoreFormMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Form: Story = { ...CoreForm };
