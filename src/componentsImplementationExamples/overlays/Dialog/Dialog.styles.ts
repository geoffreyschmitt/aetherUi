'use client';
import styled from 'styled-components';
import { Dialog } from '@/components/overlays/Dialog';

export const RootElement = styled(Dialog)`
  position: relative;
  background: tan;
  min-width: 400px;
  min-height: 400px;
  .dialog__close-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
