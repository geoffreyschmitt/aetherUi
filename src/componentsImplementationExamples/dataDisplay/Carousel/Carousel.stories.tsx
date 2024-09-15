import type { Meta, StoryObj } from '@storybook/react';

import { Carousel as Component } from '.';
import CoreCarouselMeta, {
  Carousel as CoreCarousel,
  CarouselWithButtons as CoreCarouselWithButtons,
  EmptyCarouselWithFallback as CoreEmptyCarouselWithFallback,
} from '@/components/dataDisplay/Carousel/Carousel.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/dataDisplay/Carousel',
  component: Component,
  argTypes: {
    ...CoreCarouselMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Carousel: Story = {
  args: {
    ...CoreCarousel.args,
  },
};

export const CarouselWithButtons: Story = {
  args: {
    ...CoreCarouselWithButtons.args,
  },
};

export const EmptyCarouselWithFallback: Story = {
  args: {
    ...CoreEmptyCarouselWithFallback.args,
  },
};
