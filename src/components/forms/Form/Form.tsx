import React, { ReactNode } from 'react';

import { classNames } from '@/utils';

import { RootElement } from './Form.styles';
import { TForm, TFormEntry } from './Form.types';
import { Input } from '@/components/actions/Input';
import { Radio } from '@/components/actions/Radio';
import { Checkbox } from '@/components/actions/Checkbox';
import { Select } from '@/components/actions/Select';
import { RadioList } from '@/components/lists/RadioList';

export const Form = ({
  className,
  formEntryList,
  InputComponent = Input,
  RadioComponent = Radio,
  CheckboxComponent = Checkbox,
  SelectComponent = Select,
  RadioListComponent = RadioList,
  ...props
}: TForm) => {
  const renderFormEntry: (formEntry: TFormEntry) => ReactNode = ({
    componentType,
    ...formEntryProps
  }: TFormEntry) => {
    switch (componentType) {
      case 'input':
        return (
          <InputComponent
            {...formEntryProps}
            className={classNames('form-entry', formEntryProps.className)}
          />
        );
      case 'radio':
        return (
          <RadioComponent
            {...formEntryProps}
            className={classNames('form-entry', formEntryProps.className)}
          />
        );
      case 'checkbox':
        return (
          <CheckboxComponent
            {...formEntryProps}
            className={classNames('form-entry', formEntryProps.className)}
          />
        );
      case 'select':
        return (
          <SelectComponent
            {...formEntryProps}
            className={classNames('form-entry', formEntryProps.className)}
          />
        );
      case 'radioList':
        return (
          <RadioListComponent
            {...formEntryProps}
            className={classNames('form-entry', formEntryProps.className)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <RootElement
      data-testid={`Form`}
      {...props}
      className={classNames('form', className)}
    >
      {formEntryList.map(formEntry => renderFormEntry(formEntry))}
    </RootElement>
  );
};
