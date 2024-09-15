import type { Meta, StoryObj } from '@storybook/react';

import { Badge as Component } from '.';
import CoreBadgeMeta, {
  Badge as CoreBadge,
} from '@/components/dataDisplay/Badge/Badge.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/dataDisplay/Badge',
  component: Component,
  argTypes: {
    ...CoreBadgeMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Badge: Story = {
  args: {
    ...CoreBadge.args,
  },
};
