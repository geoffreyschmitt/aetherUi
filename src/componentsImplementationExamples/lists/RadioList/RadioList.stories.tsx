import type { Meta, StoryObj } from '@storybook/react';

import { RadioList as Component } from '.';
import CoreRadioListMeta, {
  RadioList as CoreRadioList,
} from '@/aether-ui-core/components/lists/RadioList/RadioList.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Lists/RadioList',
  component: Component,
  argTypes: {
    ...CoreRadioListMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const RadioList: Story = { ...CoreRadioList };
