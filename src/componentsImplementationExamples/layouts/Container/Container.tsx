'use client';
import React from 'react';

import { RootElement } from './Container.styles';
import { TContainer } from './Container.types';

export const Container = ({ ...props }: TContainer) => {
  return <RootElement {...props} />;
};
