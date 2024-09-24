'use client';
import styled from 'styled-components';
import { Header } from '@/aether-ui-core/components/navigations/Header';

export const RootElement = styled(Header)`
  background: #f6f6f6;
  border-bottom: 1px solid lightgray;
  padding: 8px 0;
  .header__inner {
    display: flex;
    justify-content: space-between;
  }
`;
