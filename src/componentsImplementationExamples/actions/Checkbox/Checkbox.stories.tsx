import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox as Component } from '.';
import CoreCheckboxMeta, {
  Checkbox as CoreCheckbox,
} from '@/components/actions/Checkbox/Checkbox.stories';

const meta: Meta<typeof Component> = {
  title: 'ImplementationExample/Actions/Checkbox',
  component: Component,
  argTypes: {
    ...CoreCheckboxMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Checkbox: Story = {
  args: {
    ...CoreCheckbox.args,
  },
};

export const CheckboxWithCustomColor: Story = {
  args: {
    ...Checkbox.args,
    color: '#F2A93B',
    checkColor: '#78a185',
  },
};

export const CheckboxWithNoChildren: Story = {
  args: {
    ...Checkbox.args,
    children: undefined,
  },
};
