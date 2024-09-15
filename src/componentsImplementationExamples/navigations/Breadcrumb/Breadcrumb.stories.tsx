import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb as Component } from '.';
import CoreBreadcrumbMeta, {
  Breadcrumb as CoreBreadcrumb,
} from '@/components/navigations/Breadcrumb/Breadcrumb.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Navigations/Breadcrumb',
  component: Component,
  argTypes: {
    ...CoreBreadcrumbMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Breadcrumb: Story = {
  args: {
    ...CoreBreadcrumb.args,
  },
};
