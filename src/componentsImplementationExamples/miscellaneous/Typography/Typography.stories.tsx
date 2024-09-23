import type { Meta, StoryObj } from '@storybook/react';

import { Typography as Component } from '.';
import CoreTypographyMeta, {
  Typography as CoreTypography,
} from '@/components/miscellaneous/Typography/Typography.stories';
import { ETypographyVariant } from './Typography.types';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Miscellaneous/Typography',
  component: Component,
  argTypes: {
    ...CoreTypographyMeta.argTypes,
    variant: {
      options: Object.values(ETypographyVariant),
      control: { type: 'select' },
      table: {
        category: 'Styles',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Typography: Story = {
  args: {
    ...CoreTypography.args,
  },
};
