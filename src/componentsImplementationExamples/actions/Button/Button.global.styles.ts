'use client';
import { css } from 'styled-components';

export const ButtonGlobalStyle = css`
  --button-color: #13a6e0;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;

  &.button--primary {
    background: var(--button-color);
    color: white;
  }

  &.button--secondary {
    border: 1px solid var(--button-color);
    color: var(--button-color);
  }
`;
