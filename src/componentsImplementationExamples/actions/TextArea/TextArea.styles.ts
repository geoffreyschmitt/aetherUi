'use client';
import styled from 'styled-components';
import { TextArea } from '@/components/actions/TextArea';

export const RootElement = styled(TextArea)`
  position: relative;
  display: inline-block;

  .text-area__label {
    position: absolute;
    top: 12px;
    left: 16px;
    padding: 0;
    background: white;

    transition: all ease-out 0.2s;
  }

  .text-area__text-area {
    padding: 12px 8px;
  }

  &:has(.text-area__text-area:hover),
  &:has(.text-area__text-area:focus-visible),
  &.text-area--is-filled {
    .text-area__label {
      top: 0;
      transform: translate(0, -50%);
      padding: 0 4px;
    }
  }
`;
