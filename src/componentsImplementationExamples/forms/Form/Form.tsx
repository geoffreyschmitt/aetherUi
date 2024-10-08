import React from 'react';

import { RootElement } from './Form.styles';
import { TForm } from './Form.types';
import { Input } from '@/componentsImplementationExamples/actions/Input';
import { TextArea } from '@/componentsImplementationExamples/actions/TextArea';
import { Radio } from '@/componentsImplementationExamples/actions/Radio';
import { Checkbox } from '@/componentsImplementationExamples/actions/Checkbox';
import { Select } from '@/componentsImplementationExamples/actions/Select';
import { RadioList } from '@/componentsImplementationExamples/lists/RadioList';
import { Button } from '@/componentsImplementationExamples/actions/Button';

export const Form = ({ ...props }: TForm) => {
  return (
    <RootElement
      {...props}
      InputComponent={Input}
      TextAreaComponent={TextArea}
      RadioComponent={Radio}
      CheckboxComponent={Checkbox}
      SelectComponent={Select}
      RadioListComponent={RadioList}
      ButtonComponent={Button}
    />
  );
};
