import type { Meta, StoryObj } from '@storybook/react';

import { Form as Component } from '.';
import CoreFormMeta, {
  Form as CoreForm,
  FormWithInteraction as CoreFormWithInteraction,
} from '@/components/forms/Form/Form.stories';

const omittedArgTypes = [
  'InputComponent',
  'SelectComponent',
  'CheckboxComponent',
  'RadioComponent',
  'RadioListComponent',
];

const formArgTypes = Object.entries(CoreFormMeta.argTypes ?? {}).reduce(
  (acc, [key, value]) => {
    if (!omittedArgTypes.includes(key)) {
      acc[key] = value;
    }
    return acc;
  },
  {} as Record<string, any>,
);

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Forms/Form',
  component: Component,
  argTypes: formArgTypes,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Form: Story = { ...CoreForm };
export const FormWithInteraction: Story = { ...CoreFormWithInteraction };
