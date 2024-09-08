import type { Meta, StoryObj } from '@storybook/react';

import { Carousel as Component } from './Carousel';
import { expect, within } from '@storybook/test';

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

const defaultComponentFallBack = (
  <div className={'fallback-component'}>This is the fallback component</div>
);

export const Carousel: Story = {
  args: {
    itemList: Array.from({ length: 10 }, (_, index) => (
      <span key={index}>item {index}</span>
    )),
  },
};

export const EmptyCarouselWithFallback: Story = {
  args: {
    itemList: [],
    componentFallBack: defaultComponentFallBack,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const componentElement = canvas.queryByTestId('Carousel');
    const fallbackComponent = canvasElement.querySelector(
      '.fallback-component',
    );
    await expect(componentElement).toBeFalsy();
    await expect(fallbackComponent).toBeInTheDocument();
  },
};
