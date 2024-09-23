import React from 'react';

import { RootElement } from './CheckboxList.styles';
import { TCheckboxList } from './CheckboxList.types';
import { Checkbox } from '@/componentsImplementationExamples/actions/Checkbox';

export const CheckboxList = ({ ...props }: TCheckboxList) => {
  return <RootElement {...props} CheckboxComponent={Checkbox} />;
};
