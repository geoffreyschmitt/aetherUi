'use client';
import React from 'react';

import { RootElement } from './ReadMoreText.styles';
import { TReadMoreText } from './ReadMoreText.types';
import { Button } from '@/componentsImplementationExamples/actions/Button';

export const ReadMoreText = ({ ...props }: TReadMoreText) => {
  return <RootElement {...props} ButtonComponent={Button} />;
};
