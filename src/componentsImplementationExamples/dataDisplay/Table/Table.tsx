'use client';
import React from 'react';

import { RootElement } from './Table.styles';
import { TTable } from './Table.types';

export const Table = ({ ...props }: TTable) => {
  return <RootElement {...props} />;
};
