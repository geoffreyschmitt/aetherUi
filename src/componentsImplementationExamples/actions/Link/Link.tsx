import React from 'react';

import { RootElement } from './Link.styles';
import { TLink } from './Link.types';

export const Link = ({ ...props }: TLink) => {
  return <RootElement {...props} />;
};
