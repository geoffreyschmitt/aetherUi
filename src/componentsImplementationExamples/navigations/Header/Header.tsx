import React from 'react';

import { RootElement } from './Header.styles';
import { THeader } from './Header.types';
import { Container } from '@/componentsImplementationExamples/layouts/Container';

export const Header = ({ ...props }: THeader) => {
  return (
    <RootElement {...props}>
      <Container className={'header__inner'}>
        <div>Logo</div>
        <div>Menu</div>
        <div>Actions</div>
      </Container>
    </RootElement>
  );
};
