import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxList as Component } from '.';
import CoreCheckboxListMeta, {
  CheckboxList as CoreCheckboxList,
} from '@/aether-ui-core/components/lists/CheckboxList/CheckboxList.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Lists/CheckboxList',
  component: Component,
  argTypes: {
    ...CoreCheckboxListMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const CheckboxList: Story = { ...CoreCheckboxList };
