'use client';
import styled from 'styled-components';

import { ButtonLink } from '@/components/actions/Button';
import { ButtonGlobalStyle } from './Button.global.styles';

export const RootElement = styled(ButtonLink)`
  ${ButtonGlobalStyle}
`;
