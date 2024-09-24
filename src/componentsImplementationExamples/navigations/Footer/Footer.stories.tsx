import type { Meta, StoryObj } from '@storybook/react';

import { Footer as Component } from '.';
import CoreFooterMeta, {
  Footer as CoreFooter,
} from '@/components/navigations/Footer/Footer.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Navigations/Footer',
  component: Component,
  argTypes: {
    ...CoreFooterMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Footer: Story = {
  args: {
    ...CoreFooter.args,
  },
};
