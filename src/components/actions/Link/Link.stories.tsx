import type { Meta, StoryObj } from '@storybook/react';

import { LinkArgs, SATLink } from './Link.global.storybook';
import { Link as Component } from '.';

const meta: Meta<typeof Component> = {
  title: 'Components/Actions/Link',
  component: Component,
  argTypes: {
    ...SATLink,
    href: {
      table: {
        category: 'Data',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Link: Story = {
  args: {
    ...LinkArgs,
    href: 'LinkHref',
  },
};
