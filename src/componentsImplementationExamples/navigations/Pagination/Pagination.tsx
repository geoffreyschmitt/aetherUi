'use client';
import React from 'react';

import { RootElement } from './Pagination.styles';
import { TPagination } from './Pagination.types';

export const Pagination = ({ ...props }: TPagination) => {
  return <RootElement {...props} className={'test'} />;
};
