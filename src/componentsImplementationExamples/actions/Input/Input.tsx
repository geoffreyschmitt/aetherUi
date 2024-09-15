'use client';
import React from 'react';

import { RootElement } from './Input.styles';
import { TInput } from './Input.types';

export const Input = ({ ...props }: TInput) => {
  return <RootElement {...props} />;
};
