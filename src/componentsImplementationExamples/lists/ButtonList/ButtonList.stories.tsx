import type { Meta, StoryObj } from '@storybook/react';

import { ButtonList as Component } from '.';
import CoreButtonListMeta, {
  ButtonList as CoreButtonList,
} from '@/aether-ui-core/components/lists/ButtonList/ButtonList.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Lists/ButtonList',
  component: Component,
  argTypes: {
    ...CoreButtonListMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const ButtonList: Story = { ...CoreButtonList };
