'use client';
import styled from 'styled-components';
import { Table } from '@/aether-ui-core/components/dataDisplay/Table';

export const RootElement = styled(Table)`
  border-collapse: collapse;
  .table__row--header {
    font-weight: 600;
    border-bottom: 1px solid black;
    text-align: left;
  }
`;
