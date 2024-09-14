'use client';
import styled from 'styled-components';
import { Button } from '@/components/actions/Button';
import { ButtonGlobalStyle } from './Button.global.styles';

export const RootElement = styled(Button)`
  ${ButtonGlobalStyle}

  &[disabled] {
    background: gray;
  }
`;
