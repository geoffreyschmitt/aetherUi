import React from 'react';

import { RootElement } from './ContactForm.styles';
import { TContactForm } from './ContactForm.types';
import { classNames } from '@/utils';

export const ContactForm = ({ className, ...props }: TContactForm) => {
  const formEntryList: TContactForm['formEntryList'] = [
    {
      componentType: 'input',
      label: 'First name',
      className: 'contact-form__input--first-name',
      name: 'first-name',
    },
    {
      componentType: 'input',
      label: 'Last name',
      className: 'contact-form__input--last-name',
      name: 'last-name',
    },
    {
      componentType: 'input',
      label: 'Email',
      className: 'contact-form__input--email',
      name: 'email',
    },
    {
      componentType: 'select',
      id: 'you-are-select',
      label: 'You are',
      className: 'contact-form__select--you-are',
      name: 'you-are',
      optionList: [
        {
          value: 'company',
          label: 'Company',
        },
        {
          value: 'user',
          label: 'User',
        },
      ],
      optionListAriaLabel: 'Select what type of customer you are.',
    },
    {
      componentType: 'select',
      id: 'your-demand-relate-to-select',
      label: 'Your demand',
      className: 'contact-form__select--your-demand',
      name: 'your-demand',
      optionList: [
        {
          value: 'design',
          label: 'Design',
        },
        {
          value: 'dev',
          label: 'Development',
        },
        {
          value: 'marketing',
          label: 'Marketing',
        },
      ],
      optionListAriaLabel: 'Select what type of service you need.',
    },
  ];

  return (
    <RootElement
      data-testid={'LoginForm'}
      {...props}
      id={'contact-form'}
      className={classNames('contact-form', className)}
      formEntryList={formEntryList}
      buttonCtaProps={{ children: 'Send' }}
    />
  );
};
