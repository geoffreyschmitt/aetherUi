import React from 'react';

import { RootElement } from './PageLayout.styles';
import { TPageLayout } from './PageLayout.types';
import { Header } from '@/componentsImplementationExamples/navigations/Header';
import { Footer } from '@/componentsImplementationExamples/navigations/Footer';

export const PageLayout = ({ ...props }: TPageLayout) => {
  return (
    <RootElement {...props} HeaderComponent={Header} FooterComponent={Footer} />
  );
};
