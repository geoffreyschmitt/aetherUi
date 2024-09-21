import type { Meta, StoryObj } from '@storybook/react';

import { Container as Component } from '.';
import CoreContainerMeta, {
  Container as CoreContainer,
} from '@/components/layouts/Container/Container.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Layouts/Container',
  component: Component,
  argTypes: {
    ...CoreContainerMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Container: Story = {
  args: {
    ...CoreContainer.args,
  },
};
