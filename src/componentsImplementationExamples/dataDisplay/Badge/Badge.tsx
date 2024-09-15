'use client';
import React from 'react';

import { RootElement } from './Badge.styles';
import { TBadge } from './Badge.types';

export const Badge = ({ ...props }: TBadge) => {
  return <RootElement {...props} />;
};
