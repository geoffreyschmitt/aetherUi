import styled from 'styled-components';
import { Breadcrumb } from '@/components/navigations/Breadcrumb';

export const RootElement = styled(Breadcrumb)`
  .breadcrumb__item-list {
    display: flex;
    flex-wrap: wrap;
  }

  .breadcrumb__item {
    list-style-type: none;
    text-transform: capitalize;
    display: flex;
    align-items: center;

    &:after {
      content: ' / ';
      display: inline-block;
      padding: 0 8px;
    }
    &--is-home {
      &:after {
        margin-left: 8px;
      }
    }
    &--is-current {
      &:after {
        content: unset;
      }
    }
  }

  .breadcrumb__link {
    &--is-current {
      pointer-events: none;
      cursor: default;
    }
  }
`;
