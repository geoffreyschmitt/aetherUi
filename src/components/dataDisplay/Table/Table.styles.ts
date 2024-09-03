'use client';
import styled from 'styled-components';
import { TTableStyled } from './Table.types';

export const RootElement = styled.div<TTableStyled>`
  display: grid;
  grid-template-columns: ${({ $columnNumber }) =>
    `repeat(${$columnNumber}, auto)`};

  .table__row {
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;
  }
`;
