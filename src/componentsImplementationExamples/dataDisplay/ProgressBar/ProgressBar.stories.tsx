import type { Meta, StoryObj } from '@storybook/react';

import { ProgressBar as Component } from './index';
import CoreProgressBarMeta, {
  ProgressBar as CoreProgressBar,
} from '@/aether-ui-core/components/dataDisplay/ProgressBar/ProgressBar.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/dataDisplay/ProgressBar',
  component: Component,
  argTypes: {
    ...CoreProgressBarMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const ProgressBar: Story = {
  args: {
    ...CoreProgressBar.args,
  },
};
