import type { Meta, StoryObj } from '@storybook/react';

import { Radio as Component } from '.';
import CoreRadioMeta, {
  Radio as CoreRadio,
} from '@/components/actions/Radio/Radio.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Actions/Radio',
  component: Component,
  argTypes: {
    ...CoreRadioMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Radio: Story = {
  args: {
    ...CoreRadio.args,
  },
};

export const RadioDefaultChecked: Story = {
  args: {
    ...Radio.args,
    checked: true,
  },
};
