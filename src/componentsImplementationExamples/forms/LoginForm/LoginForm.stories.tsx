import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm as Component } from '.';
import CoreFormMeta from '@/componentsImplementationExamples/forms/Form/Form.stories';
import { expect, fn, userEvent, within } from '@storybook/test';
import { formEventChannel } from '@/eventChannels';

const meta: Meta<typeof Component> = {
  title: 'Implementation Example/Forms/LoginForm',
  component: Component,
  argTypes: {
    ...CoreFormMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const LoginForm: Story = {
  args: {
    buttonCtaProps: { children: 'Login' },
  },
};

export const LoginFormWithInteraction: Story = {
  ...LoginForm,
  play: async ({ canvasElement }) => {
    const onSubmitSpy = fn();

    formEventChannel.on('submitForm', onSubmitSpy);

    const canvas = within(canvasElement);

    const componentElement = canvas.getByTestId('Form');
    const usernameInputElement = componentElement.querySelector(
      '.login-form__input--username',
    ) as HTMLElement;
    const passwordInputElement = componentElement.querySelector(
      '.login-form__input--password',
    ) as HTMLElement;
    const submitButtonElement = canvas.getByTestId('Button') as HTMLElement;

    await userEvent.type(usernameInputElement, 'username', {
      delay: 100,
    });
    await userEvent.type(passwordInputElement, 'password', {
      delay: 100,
    });

    await userEvent.click(submitButtonElement);

    let formData = new FormData(componentElement as HTMLFormElement);

    expect(onSubmitSpy).toHaveBeenCalledWith({
      id: 'login-form',
      formData,
    });

    expect(formData.get('username')).toBe('username');
    expect(formData.get('password')).toBe('password');
  },
};
