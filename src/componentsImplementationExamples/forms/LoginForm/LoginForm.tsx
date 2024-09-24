import React from 'react';

import { RootElement } from './LoginForm.styles';
import { TLoginForm } from './LoginForm.types';
import { classNames } from 'src/aether-ui-core/utils';

export const LoginForm = ({ className, ...props }: TLoginForm) => {
  const formEntryList: TLoginForm['formEntryList'] = [
    {
      componentType: 'input',
      label: 'Username',
      className: 'login-form__input--username',
      name: 'username',
    },
    {
      componentType: 'input',
      label: 'Password',
      className: 'login-form__input--password',
      name: 'password',
      inputProps: {
        type: 'password',
      },
    },
  ];

  return (
    <RootElement
      {...props}
      id={'login-form'}
      className={classNames('login-form', className)}
      formEntryList={formEntryList}
    />
  );
};
