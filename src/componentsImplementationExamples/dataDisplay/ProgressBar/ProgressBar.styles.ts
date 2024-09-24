'use client';
import styled from 'styled-components';
import { ProgressBar } from '@/aether-ui-core/components/dataDisplay/ProgressBar';

export const RootElement = styled(ProgressBar)`
  --progress-bar-height: 8px;
  --progress-bar-background: #e1e1e1e0;
  --progress-bar-current-progress-background: #2727c7e0;
  border-radius: 25px;
  overflow: hidden;
`;
