import type { Meta, StoryObj } from '@storybook/react';

import { MultiColumnLayout as Component } from '.';
import CoreMultiColumnLayoutMeta, {
  MultiColumnLayout as CoreMultiColumnLayout,
} from '@/aether-ui-core/components/layouts/MultiColumnLayout/MultiColumnLayout.stories';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Layouts/MultiColumnLayout',
  component: Component,
  argTypes: CoreMultiColumnLayoutMeta.argTypes,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const MultiColumnLayout: Story = {
  ...CoreMultiColumnLayout,
};
