import type { Meta, StoryObj } from '@storybook/react';

import { Accordion as Component } from '.';
import CoreAccordionMeta, {
  Accordion as CoreAccordion,
} from '@/aether-ui-core/components/dataDisplay/Accordion/Accordion.stories';
import { expect, within } from '@storybook/test';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/dataDisplay/Accordion',
  component: Component,
  argTypes: {
    ...CoreAccordionMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

const defaultComponentFallBack = (
  <div className={'fallback-component'}>This is the fallback component</div>
);

export const Accordion: Story = {
  args: {
    ...CoreAccordion.args,
  },
};

export const AccordionWithAllowOnlyOneOpenElement: Story = {
  args: {
    ...Accordion.args,
    allowOnlyOneOpenElement: true,
  },
};

export const EmptyAccordionWithFallback: Story = {
  args: {
    accordionItemList: [],
    componentFallBack: defaultComponentFallBack,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const componentElement = canvas.queryByTestId('Accordion');
    const fallbackComponent = canvasElement.querySelector(
      '.fallback-component',
    );
    await expect(componentElement).toBeFalsy();
    await expect(fallbackComponent).toBeInTheDocument();
  },
};

export const EmptyAccordionWithoutFallback: Story = {
  args: {
    accordionItemList: [],
  },
  play: async ({ canvasElement }) => {
    await expect(canvasElement).toBeEmptyDOMElement();
  },
};
