import React from 'react';

import { RootElement } from './RadioList.styles';
import { TRadioList } from './RadioList.types';
import { Radio } from '@/componentsImplementationExamples/actions/Radio';

export const RadioList = ({ ...props }: TRadioList) => {
  return <RootElement {...props} RadioComponent={Radio} />;
};
