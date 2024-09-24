import React from 'react';

import { RootElement } from './MultiColumnLayout.styles';
import { TMultiColumnLayout } from './MultiColumnLayout.types';

export const MultiColumnLayout = ({ ...props }: TMultiColumnLayout) => {
  return <RootElement {...props} />;
};
