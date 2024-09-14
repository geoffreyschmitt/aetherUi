import React from 'react';

import { RootElement } from './Button.styles';
import { TButton } from './Button.types';

export const Button = ({ ...props }: TButton) => {
  return <RootElement {...props} />;
};
