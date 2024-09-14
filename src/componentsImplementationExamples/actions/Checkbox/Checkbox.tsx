import React from 'react';

import { RootElement } from './Checkbox.styles';
import { TCheckbox } from './Checkbox.types';

export const Checkbox = ({ ...props }: TCheckbox) => {
  return <RootElement {...props} />;
};
