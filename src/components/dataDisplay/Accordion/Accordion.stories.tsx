import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentProps } from '@/utils';

import { Accordion as Component } from './Accordion';
import { accordionItemListMock } from './mock';

const meta: Meta<typeof Component> = {
  title: 'Components/DataDisplay/Accordion',
  component: Component,
  argTypes: {
    ...SATComponentProps,
    accordionItemList: {
      table: {
        category: 'Data',
      },
    },
    accordionId: {
      table: {
        category: 'Data',
      },
    },
    allowOnlyOneOpenElement: {
      table: {
        category: 'Data',
      },
    },
    componentFallBack: {
      table: {
        category: 'Slots',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Accordion: Story = {
  args: {
    accordionItemList: accordionItemListMock,
  },
};

export const AccordionWithAllowOnlyOneOpenElement: Story = {
  args: {
    accordionItemList: accordionItemListMock,
    allowOnlyOneOpenElement: true,
  },
};

export const AccordionWithFallback: Story = {
  args: {
    accordionItemList: [],
    componentFallBack: <div>This is the fallback component</div>,
  },
};
