import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentProps } from '@/utils';

import { Select as Component } from '.';
import { selectOptionListMock } from './mocks';

const meta: Meta<typeof Component> = {
  title: 'Components/Actions/Select',
  component: Component,
  argTypes: {
    ...SATComponentProps,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Select: Story = {
  args: {
    id: 'select',
    optionList: selectOptionListMock,
  },
};
