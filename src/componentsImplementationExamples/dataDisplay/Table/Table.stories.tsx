import type { Meta, StoryObj } from '@storybook/react';

import { Table as Component } from '.';
import CoreTableMeta, {
  Table as CoreTable,
} from '@/components/dataDisplay/Table/Table.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/dataDisplay/Table',
  component: Component,
  argTypes: {
    ...CoreTableMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Table: Story = {
  args: {
    ...CoreTable.args,
  },
};
