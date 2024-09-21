import React from 'react';

import { RootElement } from './Select.styles';
import { TSelect } from './Select.types';

export const Select = ({ ...props }: TSelect) => {
  return <RootElement {...props} />;
};
