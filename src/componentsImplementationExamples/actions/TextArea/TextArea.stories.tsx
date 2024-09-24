import type { Meta, StoryObj } from '@storybook/react';

import { TextArea as Component } from '.';
import CoreTextAreaMeta, {
  TextArea as CoreTextArea,
  TextAreaWithDefaultValue as CoreTextAreaWithDefaultValue,
} from '@/aether-ui-core/components/actions/TextArea/TextArea.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Actions/TextArea',
  component: Component,
  argTypes: {
    ...CoreTextAreaMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const TextArea: Story = { ...CoreTextArea };
export const TextAreaWithDefaultValue: Story = {
  ...CoreTextAreaWithDefaultValue,
};
