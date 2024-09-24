import type { Meta, StoryObj } from '@storybook/react';

import { Tabs as Component } from '.';
import CoreTabsMeta, {
  Tabs as CoreTabs,
  TabsListWithEmptyContent as CoreTabsListWithEmptyContent,
  EmptyTabsWithFallback as CoreEmptyTabsWithFallback,
  EmptyTabsWithoutFallback as CoreEmptyTabsWithoutFallback,
} from '@/aether-ui-core/components/dataDisplay/Tabs/Tabs.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/dataDisplay/Tabs',
  component: Component,
  argTypes: {
    ...CoreTabsMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Tabs: Story = {
  args: {
    ...CoreTabs.args,
  },
};

export const TabsListWithEmptyContent: Story = {
  args: {
    ...CoreTabsListWithEmptyContent.args,
  },
};

export const EmptyTabsWithFallback: Story = {
  args: {
    ...CoreEmptyTabsWithFallback.args,
  },
  play: CoreEmptyTabsWithFallback.play,
};

export const EmptyTabsWithoutFallback: Story = {
  args: {
    ...CoreEmptyTabsWithoutFallback.args,
  },
  play: CoreEmptyTabsWithoutFallback.play,
};
