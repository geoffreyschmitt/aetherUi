'use client';
import styled from 'styled-components';
import { Radio } from '@/components/actions/Radio';

export const RootElement = styled(Radio)`
  display: inline-block;
  position: relative;

  .radio__input {
    appearance: none;
    position: absolute;
  }

  .radio__label {
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    white-space: nowrap;
  }

  .radio__input-visual {
    position: relative;
    display: inline-block;
    border-radius: 100%;
    top: 0;
    left: 0;
    min-width: 18px;
    min-height: 18px;
    margin-right: 4px;
    background: white;
    border: 1px solid black;
    transition: all ease-in-out 0.3s;
  }

  .radio__input-visual::after {
    content: '';
    position: absolute;
    border-radius: 100%;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    background: black;
    transform: translate(-50%, -50%) scale(0);
    transform-origin: center;
    transition: all ease-in-out 0.3s;
  }

  .radio__input:focus + .radio__input-visual:after {
    transform: translate(-50%, -50%) scale(0.4);
  }

  .radio__input:checked + .radio__input-visual:after {
    transform: translate(-50%, -50%) scale(1);
  }
`;
