import React from 'react';

import { RootElement } from './BadgeList.styles';
import { TBadgeList } from './BadgeList.types';
import { Badge } from '@/componentsImplementationExamples/dataDisplay/Badge';

export const BadgeList = ({ ...props }: TBadgeList) => {
  return <RootElement {...props} BadgeComponent={Badge} />;
};
