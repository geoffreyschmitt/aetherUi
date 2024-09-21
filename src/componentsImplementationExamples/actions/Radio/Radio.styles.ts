'use client';
import styled from 'styled-components';
import { Radio } from '@/components/actions/Radio';

export const RootElement = styled(Radio)`
  --radio-gap: 16px;
  --radio-size: 14px;
  --radio-check-size: 5px;

  .radio__input:focus + .radio__input-visual:after {
    transform: translate(-50%, -50%) scale(0.4);
  }
`;
