import React from 'react';

import { RootElement } from './TextArea.styles';
import { TTextArea } from './TextArea.types';

export const TextArea = ({ ...props }: TTextArea) => {
  return <RootElement {...props} />;
};
