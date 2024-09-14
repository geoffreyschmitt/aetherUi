import type { Meta, StoryObj } from '@storybook/react';

import { ButtonLink as Component } from './index';
import CoreButtonLinkMeta, {
  ButtonLink as CoreButtonLink,
} from '@/components/actions/Button/ButtonLink.stories';

const meta: Meta<typeof Component> = {
  title: 'ImplementationExample/Actions/ButtonLink',
  component: Component,
  argTypes: {
    ...CoreButtonLinkMeta.argTypes,
  },
  decorators: [...(CoreButtonLinkMeta.decorators as [])],
};

export default meta;

type Story = StoryObj<typeof Component>;

export const ButtonLink: Story = {
  args: {
    ...CoreButtonLink.args,
  },
};
