import type { Meta, StoryObj } from '@storybook/react';

import { Select as Component } from '.';
import CoreSelectMeta, {
  Select as CoreSelect,
} from '@/components/actions/Select/Select.stories';

const meta: Meta<typeof Component> = {
  title: 'ImplementationExample/Actions/Select',
  component: Component,
  argTypes: {
    ...CoreSelectMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Select: Story = {
  args: {
    ...CoreSelect.args,
  },
};
