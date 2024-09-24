import type { Meta, StoryObj } from '@storybook/react';

import { ContactForm as Component } from '.';
import CoreFormMeta from '@/componentsImplementationExamples/forms/Form/Form.stories';
import { expect, fn, userEvent, within } from '@storybook/test';
import { formEventChannel } from 'src/aether-ui-core/eventChannels';
import { LoginForm } from '@/componentsImplementationExamples/forms/LoginForm/LoginForm.stories';

const omittedArgTypes = ['buttonCtaProps'];

const formArgTypes = Object.entries(CoreFormMeta.argTypes ?? {}).reduce(
  (acc, [key, value]) => {
    if (!omittedArgTypes.includes(key)) {
      acc[key] = value;
    }
    return acc;
  },
  {} as Record<string, any>,
);
const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Forms/ContactForm',
  component: Component,
  argTypes: formArgTypes,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const ContactForm: Story = {
  args: {},
};

export const ContactFormWithInteraction: Story = {
  ...ContactForm,
  play: async ({ canvasElement }) => {
    const onSubmitSpy = fn();

    formEventChannel.on('submitForm', onSubmitSpy);

    const canvas = within(canvasElement);

    const componentElement = canvas.getByTestId('LoginForm');
    const firstNameInputElement = componentElement.querySelector(
      '.contact-form__input--first-name',
    ) as HTMLElement;
    const lestNameInputElement = componentElement.querySelector(
      '.contact-form__input--last-name',
    ) as HTMLElement;
    const emailInputElement = componentElement.querySelector(
      '.contact-form__input--email',
    ) as HTMLElement;
    const youAreSelectElement = componentElement.querySelector(
      '.contact-form__select--you-are',
    ) as HTMLElement;
    const youAreSelectTriggerElement = youAreSelectElement.querySelector(
      '.select__trigger',
    ) as HTMLElement;
    const youAreSelectSecondOptionElement = youAreSelectElement.querySelector(
      '#you-are-select-1',
    ) as HTMLElement;
    const yourDemandSelectElement = componentElement.querySelector(
      '.contact-form__select--your-demand',
    ) as HTMLElement;
    const yourDemandSelectTriggerElement =
      yourDemandSelectElement.querySelector('.select__trigger') as HTMLElement;
    const yourDemandSecondOptionElement = yourDemandSelectElement.querySelector(
      '#your-demand-relate-to-select-2',
    ) as HTMLElement;
    const submitButtonElement = canvas.getByTestId('Button') as HTMLElement;

    await userEvent.type(firstNameInputElement, 'firstName', {
      delay: 100,
    });
    await userEvent.type(lestNameInputElement, 'lastName', {
      delay: 100,
    });
    await userEvent.type(emailInputElement, 'email', {
      delay: 100,
    });
    await userEvent.click(youAreSelectTriggerElement, {
      delay: 100,
    });
    await userEvent.click(youAreSelectSecondOptionElement, {
      delay: 100,
    });
    await userEvent.click(yourDemandSelectTriggerElement, {
      delay: 100,
    });
    await userEvent.click(yourDemandSecondOptionElement, {
      delay: 100,
    });

    await userEvent.click(submitButtonElement);

    let formData = new FormData(componentElement as HTMLFormElement);

    expect(onSubmitSpy).toHaveBeenCalledWith({
      id: 'contact-form',
      formData,
    });

    expect(formData.get('first-name')).toBe('firstName');
    expect(formData.get('last-name')).toBe('lastName');
    expect(formData.get('email')).toBe('email');
    expect(formData.get('you-are')).toBe('user');
    expect(formData.get('your-demand')).toBe('marketing');
  },
};
