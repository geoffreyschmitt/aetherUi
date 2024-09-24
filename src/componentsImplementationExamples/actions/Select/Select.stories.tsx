import type { Meta, StoryObj } from '@storybook/react';

import { Select as Component } from '.';
import CoreSelectMeta, {
  Select as CoreSelect,
  SelectWithLabel as CoreSelectWithLabel,
  SelectWithAutoSelectFirstOption as CoreSelectWithAutoSelectFirstOption,
} from '@/aether-ui-core/components/actions/Select/Select.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Actions/Select',
  component: Component,
  argTypes: {
    ...CoreSelectMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Select: Story = { ...CoreSelect };

export const SelectWithLabel: Story = { ...CoreSelectWithLabel };

export const SelectWithAutoSelectFirstOption: Story = {
  ...CoreSelectWithAutoSelectFirstOption,
};
