import styled from 'styled-components';
import { Pagination } from '@/components/navigations/Pagination';

export const RootElement = styled(Pagination)`
  .pagination__item-list {
    display: flex;
    align-items: baseline;
    list-style: none;
  }
  .pagination__link {
    color: #696969;
    padding: 2px;
    background: transparent;
    border: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    outline: none;
    &.pagination__link--current,
    &:focus,
    &:hover {
      color: black;
    }
    &:focus {
      background: lightgray;
    }
    &:hover {
      background: lightgray;
    }
    &:disabled {
      color: lightgray;
      background: transparent;
      cursor: default;
    }
  }
  .pagination__link--prev {
    margin-right: 8px;
  }
  .pagination__link--next {
    margin-left: 8px;
  }
  .pagination__link--page {
    min-width: 24px;
    min-height: 28px;
  }
`;
