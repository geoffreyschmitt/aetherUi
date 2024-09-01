import styled from 'styled-components';

export const RootElement = styled.div`
  .tabs__title-list {
    padding-left: 0;
    display: flex;
    width: 100%;
  }

  .tabs__title {
    cursor: pointer;
    background: transparent;
    transition: all 0.3s ease-in-out;
    border-bottom: 1px solid var(--color-gray-30);

    &:focus-visible {
      background: red;
    }

    &:hover,
    &.tabs__title--is-current {
      border-bottom: 1px solid red;
    }
  }

  .tabs__content:not(.tabs__content--is-current) {
    display: none;
  }
`;
