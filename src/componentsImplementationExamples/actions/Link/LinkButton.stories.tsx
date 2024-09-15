import type { Meta, StoryObj } from '@storybook/react';

import { Link as Component } from '.';
import CoreLinkButtonMeta, {
  LinkButton as CoreLinkButton,
} from '@/components/actions/Link/LinkButton.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Actions/LinkButton',
  component: Component,
  argTypes: {
    ...CoreLinkButtonMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const LinkButton: Story = {
  args: {
    ...CoreLinkButton.args,
  },
};
