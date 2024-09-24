import type { Meta, StoryObj } from '@storybook/react';

import { Header as Component } from '.';
import CoreHeaderMeta, {
  Header as CoreHeader,
} from '@/aether-ui-core/components/navigations/Header/Header.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Navigations/Header',
  component: Component,
  argTypes: {
    ...CoreHeaderMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Header: Story = {
  args: {
    ...CoreHeader.args,
  },
};
