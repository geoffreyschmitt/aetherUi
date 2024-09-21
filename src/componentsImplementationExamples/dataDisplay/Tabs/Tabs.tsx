import React from 'react';

import { RootElement } from './Tabs.styles';
import { TTabs } from './Tabs.types';

export const Tabs = ({ ...props }: TTabs) => {
  return <RootElement {...props} />;
};
