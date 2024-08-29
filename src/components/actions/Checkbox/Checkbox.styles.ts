'use client';
import styled from 'styled-components';

import { TCheckboxStyled } from './Checkbox.types';

export const RootElement = styled.div<TCheckboxStyled>`
  display: inline-block;
  position: relative;

  .checkbox__input {
    appearance: none;
    position: absolute;
  }

  .checkbox__label {
    cursor: pointer;
  }

  .checkbox__input-visual {
    position: relative;
    display: inline-block;
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    background: ${({ $color }) => $color ?? 'white'};
    border: 1px solid black;
    transition: all ease-in-out 0.3s;
  }

  .checkbox__input-visual::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 11px;
    border: solid ${({ $checkColor }) => $checkColor ?? 'black'};
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg);
    display: none;
  }

  &.checkbox--is-checked {
    .checkbox__label {
      .checkbox__input-visual {
        background: ${({ $color }) => $color ?? 'gray'};
        &::after {
          display: block;
        }
      }
    }
  }
`;
