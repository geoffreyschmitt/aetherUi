import React from 'react';

import { RootElement } from './LinkButton.styles';
import { TLinkButton } from './LinkButton.types';

export const LinkButton = ({ ...props }: TLinkButton) => {
  return <RootElement {...props} />;
};
