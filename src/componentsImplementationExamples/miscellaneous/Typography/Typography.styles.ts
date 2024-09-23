'use client';
import styled from 'styled-components';
import { Typography } from '@/components/miscellaneous/Typography';

export const RootElement = styled(Typography)`
  &.typography--heading {
    --typography-font-family: 'Times New Roman', Helvetica, sans-serif;
    --typography-font-size: 40px;
    --typography-line-height: 2;
    --typography-font-weight: 600;
  }
  &.typography--body {
    --typography-font-size: 18px;
  }
`;
