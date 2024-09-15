'use client';
import { css } from 'styled-components';

export const LinkGlobalStyle = css`
  position: relative;
  color: black;
  padding: 8px 0;

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: currentColor;
    width: 100%;
    height: 1px;
    transform-origin: left;
  }

  @keyframes borderAnimation {
    from {
      scale: 1 1;
    }
    50% {
      scale: 0 1;
    }
    to {
      scale: 1 1;
    }
  }

  &:hover,
  &:focus-visible {
    &:after {
      animation: borderAnimation 0.4s ease-in-out forwards;
    }
  }
`;
