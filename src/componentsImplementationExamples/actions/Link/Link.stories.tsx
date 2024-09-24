import type { Meta, StoryObj } from '@storybook/react';

import { Link as Component } from '.';
import CoreLinkMeta, {
  Link as CoreLink,
} from '@/aether-ui-core/components/actions/Link/Link.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Actions/Link',
  component: Component,
  argTypes: {
    ...CoreLinkMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Link: Story = {
  args: {
    ...CoreLink.args,
  },
};
