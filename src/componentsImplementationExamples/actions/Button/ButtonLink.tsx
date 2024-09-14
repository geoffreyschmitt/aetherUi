import React from 'react';

import { RootElement } from './ButtonLink.styles';
import { TButtonLink } from './ButtonLink.types';

export const ButtonLink = ({ ...props }: TButtonLink) => {
  return <RootElement {...props} />;
};
