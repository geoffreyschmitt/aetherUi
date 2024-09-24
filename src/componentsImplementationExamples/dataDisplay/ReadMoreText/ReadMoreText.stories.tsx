import type { Meta, StoryObj } from '@storybook/react';

import { ReadMoreText as Component } from '.';
import CoreReadMoreTextMeta, {
  ReadMoreText as CoreReadMoreText,
} from '@/aether-ui-core/components/dataDisplay/ReadMoreText/ReadMoreText.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/dataDisplay/ReadMoreText',
  component: Component,
  argTypes: {
    ...CoreReadMoreTextMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const ReadMoreText: Story = {
  args: {
    ...CoreReadMoreText.args,
  },
};
