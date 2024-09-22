import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentProps } from '@/utils';

import { Form as Component } from './Form';
import { formEntryListMock } from './mocks';

const meta: Meta<typeof Component> = {
  title: 'Components/Forms/Form',
  component: Component,
  argTypes: {
    ...SATComponentProps,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Form: Story = {
  args: {
    formEntryList: formEntryListMock,
  },
};
