import React from 'react';

import { RootElement } from './Form.styles';
import { TForm } from './Form.types';
import { Input } from '@/componentsImplementationExamples/actions/Input';
import { Radio } from '@/componentsImplementationExamples/actions/Radio';
import { Checkbox } from '@/componentsImplementationExamples/actions/Checkbox';
import { Select } from '@/componentsImplementationExamples/actions/Select';
import { RadioList } from '@/componentsImplementationExamples/lists/RadioList';

export const Form = ({ ...props }: TForm) => {
  return (
    <RootElement
      {...props}
      InputComponent={Input}
      RadioComponent={Radio}
      CheckboxComponent={Checkbox}
      SelectComponent={Select}
      RadioListComponent={RadioList}
    />
  );
};
