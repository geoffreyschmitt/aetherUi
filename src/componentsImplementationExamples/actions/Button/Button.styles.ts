'use client';
import styled from 'styled-components';
import { Button } from '@/aether-ui-core/components/actions/Button';
import { ButtonGlobalStyle } from './Button.global.styles';

export const RootElement = styled(Button)`
  ${ButtonGlobalStyle}

  &[disabled] {
    background: gray;
  }
`;
