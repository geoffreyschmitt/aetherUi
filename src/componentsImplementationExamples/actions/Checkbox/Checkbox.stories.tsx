import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox as Component } from '.';
import CoreCheckboxMeta, {
  Checkbox as CoreCheckbox,
  CheckboxWithCustomColor as CoreCheckboxWithCustomColor,
  CheckboxWithNoChildren as CoreCheckboxWithNoChildren,
} from '@/components/actions/Checkbox/Checkbox.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Actions/Checkbox',
  component: Component,
  argTypes: {
    ...CoreCheckboxMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Checkbox: Story = { ...CoreCheckbox };

export const CheckboxWithCustomColor: Story = {
  ...CoreCheckboxWithCustomColor,
};

export const CheckboxWithNoChildren: Story = {
  ...CoreCheckboxWithNoChildren,
};
