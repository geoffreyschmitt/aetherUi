'use client';
import React from 'react';

import { RootElement } from './ProgressBar.styles';
import { TProgressBar } from './ProgressBar.types';

export const ProgressBar = ({ ...props }: TProgressBar) => {
  return <RootElement {...props} />;
};
