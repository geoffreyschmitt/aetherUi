import type { Meta, StoryObj } from '@storybook/react';

import { PageLayout as Component } from '.';
import CorePageLayoutMeta, {
  PageLayout as CorePageLayout,
} from '@/aether-ui-core/components/layouts/PageLayout/PageLayout.stories';
import CoreFormMeta from '@/aether-ui-core/components/forms/Form/Form.stories';

const omittedArgTypes = ['headerContentSlot', 'footerContentSlot'];

const formArgTypes = Object.entries(CorePageLayoutMeta.argTypes ?? {}).reduce(
  (acc, [key, value]) => {
    if (!omittedArgTypes.includes(key)) {
      acc[key] = value;
    }
    return acc;
  },
  {} as Record<string, any>,
);

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Layouts/PageLayout',
  component: Component,
  argTypes: formArgTypes,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const PageLayout: Story = {
  args: {},
};
