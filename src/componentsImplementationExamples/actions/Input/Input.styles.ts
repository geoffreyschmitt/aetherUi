'use client';
import styled from 'styled-components';
import { Input } from '@/components/actions/Input';

export const RootElement = styled(Input)`
  position: relative;
  display: inline-block;

  .input__label {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translate(0, -50%);
    padding: 0;
    background: white;

    transition: all ease-out 0.2s;
  }

  .input__input {
    padding: 12px 8px;
  }

  &:has(.input__input:hover),
  &:has(.input__input:focus-visible),
  &.input--is-filled {
    .input__label {
      top: 0;
      padding: 0 4px;
    }
  }
`;
