import type { Meta, StoryObj } from '@storybook/react';

import { BadgeList as Component } from '.';
import CoreBadgeListMeta, {
  BadgeList as CoreBadgeList,
} from '@/components/lists/BadgeList/BadgeList.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Lists/BadgeList',
  component: Component,
  argTypes: {
    ...CoreBadgeListMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const BadgeList: Story = { ...CoreBadgeList };
