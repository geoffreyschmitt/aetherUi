import React from 'react';

import { RootElement } from './Footer.styles';
import { TFooter } from './Footer.types';
import { Container } from '@/componentsImplementationExamples/layouts/Container';

export const Footer = ({ ...props }: TFooter) => {
  return (
    <RootElement {...props}>
      <Container className={'footer__inner'}>
        <div>Legal Mentions</div>
        <div>Terms and conditions</div>
      </Container>
    </RootElement>
  );
};
