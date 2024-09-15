'use client';
import React from 'react';

import { RootElement } from './Breadcrumb.styles';
import { TBreadcrumb } from './Breadcrumb.types';

export const Breadcrumb = ({ ...props }: TBreadcrumb) => {
  return <RootElement {...props} className={'test'} />;
};
