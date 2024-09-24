'use client';
import styled from 'styled-components';
import { Footer } from '@/aether-ui-core/components/navigations/Footer';

export const RootElement = styled(Footer)`
  background: #003f5f;
  color: white;
  padding: 8px 0;
  .footer__inner {
    display: flex;
    gap: 20px;
  }
`;
