import type { Meta, StoryObj } from '@storybook/react';

import { HorizontalSlider as Component } from '.';
import CoreHorizontalSliderMeta, {
  EmptyHorizontalSliderWithFallback as CoreEmptyHorizontalSliderWithFallback,
  HorizontalSlider as CoreHorizontalSlider,
} from '@/components/dataDisplay/HorizontalSlider/HorizontalSlider.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/dataDisplay/HorizontalSlider',
  component: Component,
  argTypes: {
    ...CoreHorizontalSliderMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const HorizontalSlider: Story = {
  args: {
    ...CoreHorizontalSlider.args,
  },
};

export const EmptyHorizontalSliderWithFallback: Story = {
  ...CoreEmptyHorizontalSliderWithFallback,
};
