'use client';
import styled from 'styled-components';

import { LinkGlobalStyle } from './Link.global.styles';
import { TLinkGlobalStyle } from './Link.global.types';

export const RootElement = styled.button<TLinkGlobalStyle>`
  background: transparent;
  border: none;

  ${LinkGlobalStyle}

  &[disabled] {
    pointer-events: none;
    color: var(--color-gray-40);
  }
`;
