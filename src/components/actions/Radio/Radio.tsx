'use client';
import React from 'react';

import { classNames } from '@/utils';

import { RootElement } from './Radio.styles';
import { TRadio } from './Radio.types';

export const Radio = ({
  className,
  children,
  defaultChecked,
  checkboxProps,
  value,
  ...props
}: TRadio) => {
  return (
    <RootElement
      data-testid={`Radio`}
      {...props}
      className={classNames('radio', className)}
    >
      <input
        {...checkboxProps}
        type="radio"
        className={classNames('radio__input', checkboxProps?.className)}
        value={value}
        defaultChecked={defaultChecked}
      />
      <div className="radio__input-visual" />
      <span className="radio__text">{children}</span>
    </RootElement>
  );
};
