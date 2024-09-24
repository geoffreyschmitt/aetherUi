'use client';
import styled from 'styled-components';
import { Accordion } from '@/aether-ui-core/components/dataDisplay/Accordion';

export const RootElement = styled(Accordion)`
  .accordion-item {
    position: relative;
  }

  .accordion-item:after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: black;
    opacity: 0.2;
  }

  .accordion-item__title-icon {
    rotate: 0;
    transition: all ease-in-out 0.25s;
  }

  .accordion-item__title {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
  }

  .accordion-item__content {
    padding-bottom: 24px;
  }

  .accordion-item[open] {
    .accordion-item__title-Icon {
      rotate: -180deg;
    }
  }
`;
