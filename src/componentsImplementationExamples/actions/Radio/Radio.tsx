import React from 'react';

import { RootElement } from './Radio.styles';
import { TRadio } from './Radio.types';

export const Radio = ({ ...props }: TRadio) => {
  return <RootElement {...props} />;
};
