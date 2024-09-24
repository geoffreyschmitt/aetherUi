'use client';
import styled from 'styled-components';

import { ButtonLink } from '@/aether-ui-core/components/actions/Button';
import { ButtonGlobalStyle } from './Button.global.styles';

export const RootElement = styled(ButtonLink)`
  ${ButtonGlobalStyle}
`;
