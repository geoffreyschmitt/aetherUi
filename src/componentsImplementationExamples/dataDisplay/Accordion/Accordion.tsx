'use client';
import React from 'react';

import { RootElement } from './Accordion.styles';
import { TAccordion } from './Accordion.types';

export const Accordion = ({ ...props }: TAccordion) => {
  return <RootElement {...props} className={'test'} />;
};
