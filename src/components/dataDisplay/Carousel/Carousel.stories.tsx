import type { Meta, StoryObj } from '@storybook/react';

import { Carousel as Component } from './Carousel';

const meta: Meta = {
  title: 'Components/dataDisplay/Carousel',
  component: Component,
  argTypes: {
    itemList: {
      table: {
        category: 'Data',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Carousel: Story = {
  args: {
    itemList: Array.from({ length: 10 }, (_, index) => (
      <span key={index}>item {index}</span>
    )),
  },
};
