'use client';
import styled from 'styled-components';
import { Tabs } from '@/aether-ui-core/components/dataDisplay/Tabs';

export const RootElement = styled(Tabs)`
  width: 100%;

  .tabs__title-list {
    position: relative;
    width: 100%;
    margin-bottom: 16px;
    overflow: auto;
    white-space: nowrap;
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }

    &:before {
      content: '';
      display: inline-block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: lightgray;
    }
  }

  .tabs__title {
    position: relative;

    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px 8px 4px;
    color: black;
    border: none;
    border-bottom: 1px solid lightgray;

    &:focus-visible {
      background: lightgray;
    }

    &:after {
      content: '';
      display: inline-block;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 1px;
      scale: 0 1;
      background: black;
      transform-origin: left;
      transition: all 0.3s ease-out;
    }

    &:hover,
    &.tabs__title--is-current {
      &:after {
        scale: 1 1;
      }
    }
  }
`;
