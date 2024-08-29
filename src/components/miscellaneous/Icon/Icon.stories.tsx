import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentProps } from '@/utils/componentProps/componentProps';

import { EIconVariant, Icon as Component } from '.';

const meta: Meta<typeof Component> = {
  title: 'Components/Icon',
  component: Component,
  argTypes: {
    ...SATComponentProps,
    variant: {
      options: Object.values(EIconVariant),
      control: { type: 'select' },
      table: {
        category: 'Data',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Icon: Story = {
  args: {
    variant: EIconVariant.CHEVRON,
  },
};
