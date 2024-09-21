'use client';
import styled from 'styled-components';
import { Select } from '@/components/actions/Select';

export const RootElement = styled(Select)`
  position: relative;

  .select__select {
    display: none;
  }

  .select__trigger {
    position: relative;
    background: white;
    border: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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

  .select__value-icon {
    transform: rotate(180deg);
    transition: all 0.3s ease-in-out;
  }

  .select__option-list,
  .select__option {
    width: 100%;
  }

  .select__option-list {
    display: none;
  }
  .select__option {
    background: white;
    border: 1px solid lightgray;
    border-top: none;
    transition: all ease-in-out 0.3s;
    padding: 12px 8px;
    &:hover,
    &--focused {
      background-color: lightgray;
    }
  }

  &.select__is-open {
    .select__option-list {
      display: block;
      position: absolute;
      top: calc(100% + 1px);
      max-height: 225px;
      overflow: auto;
    }

    .select__value-icon {
      transform: rotate(0deg);
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
