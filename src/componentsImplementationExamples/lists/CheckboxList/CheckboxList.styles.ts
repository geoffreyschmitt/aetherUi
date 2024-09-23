'use client';
import styled from 'styled-components';
import { CheckboxList } from '@/components/lists/CheckboxList';

export const RootElement = styled(CheckboxList)`
  --checkbox-list-gap: 4px;
  flex-direction: column;
`;
