'use client';
import styled from 'styled-components';
import { Select } from '@/aether-ui-core/components/actions/Select';

export const RootElement = styled(Select)`
  --select-option-background-interacting-color: lightgray;

  .select__trigger {
    background: white;
    border: 1px solid lightgray;
    padding: 8px;
    .select__label {
      position: absolute;
      top: 50%;
      left: 8px;
      transform: translate(0, -50%);
    }
  }

  .select__label {
    background: white;
    padding: 0;
    color: gray;
  }

  .select__option {
    border: 1px solid lightgray;
    border-top: none;
    padding: 12px 8px;
    transition: all ease-in-out 0.3s;
  }

  &.select__is-open {
    .select__option-list {
      top: calc(100% + 1px);
      max-height: 225px;
      overflow: auto;
    }
  }

  .select__trigger:hover,
  .select__trigger:focus,
  &.select__with-selected-option {
    .select__label {
      top: 0;
      transform: translate(0, -50%);
      padding: 0 4px;
      color: black;
    }
  }
`;
