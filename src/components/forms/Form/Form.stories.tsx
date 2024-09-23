import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentProps } from '@/utils';

import { Form as Component } from './Form';
import { formEntryListMock } from './mocks';
import { Input } from '@/components/actions/Input';
import { Radio } from '@/components/actions/Radio';
import { Checkbox } from '@/components/actions/Checkbox';
import { Select } from '@/components/actions/Select';

const meta: Meta<typeof Component> = {
  title: 'Components/Forms/Form',
  component: Component,
  argTypes: {
    ...SATComponentProps,
    formEntryList: {
      table: {
        category: 'Data',
      },
    },
    InputComponent: {
      table: {
        category: 'Component',
      },
    },
    RadioComponent: {
      table: {
        category: 'Component',
      },
    },
    CheckboxComponent: {
      table: {
        category: 'Component',
      },
    },
    SelectComponent: {
      table: {
        category: 'Component',
      },
    },
    RadioListComponent: {
      table: {
        category: 'Component',
      },
    },
    beforeFormContentSlots: {
      table: {
        category: 'Slots',
      },
    },
    afterFormContentSlots: {
      table: {
        category: 'Slots',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Form: Story = {
  args: {
    formEntryList: formEntryListMock,
  },
};
