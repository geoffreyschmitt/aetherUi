import React from 'react';

import { classNames } from '@/utils';

import { RootElement } from './Table.styles';
import { TTable } from './Table.types';

export const Table = ({ className, headerList, rowList, ...props }: TTable) => {
  if (!headerList.length) {
    return null;
  }

  return (
    <RootElement
      data-testid={`Table`}
      {...props}
      className={classNames('table', className)}
      $columnNumber={headerList.length}
    >
      <div className={'table__row table__row--header'}>
        {headerList.map((header, i) => (
          <div key={`header-${i}`}>{header}</div>
        ))}
      </div>
      {rowList?.map((row, i) => (
        <div key={`row-${row.id}`} className={'table__row'}>
          {Object.entries(row).map(([key, value], index) => (
            <div key={`row-value-${key}-${value}`}>{value}</div>
          ))}
        </div>
      ))}
    </RootElement>
  );
};
