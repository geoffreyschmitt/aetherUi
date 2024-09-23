'use client';
import { css } from 'styled-components';

export const ButtonGlobalStyle = css`
  --button-main-color: #13a6e0;
  outline: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;

  &.button--primary {
    --button-background: var(--button-main-color);
    --button-color: white;
    transition: all 0.3s;

    &:hover {
      --button-background: #136fe0;
    }
  }

  &.button--secondary {
    --button-border: 1px solid var(--button-main-color);
    --button-color: var(--button-main-color);
  }
`;
