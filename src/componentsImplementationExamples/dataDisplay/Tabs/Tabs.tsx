import React from 'react';

import { RootElement } from './Tabs.styles';
import { TTabs } from './Tabs.types';
import { Button } from '@/componentsImplementationExamples/actions/Button';

export const Tabs = ({ ...props }: TTabs) => {
  return <RootElement {...props} ButtonComponent={Button} />;
};
