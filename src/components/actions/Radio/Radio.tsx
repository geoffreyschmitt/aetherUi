'use client';
import React, { useEffect, useState } from 'react';

import { classNames } from '@/utils';

import { RootElement } from './Radio.styles';
import { TRadio } from './Radio.types';

export const Radio = ({
  className,
  children,
  checked,
  checkboxProps,
  ...props
}: TRadio) => {
  const [localChecked, setLocalChecked] = useState<boolean>(checked ?? false);

  useEffect(() => {
    setLocalChecked(checked);
  }, [checked]);

  return (
    <RootElement
      data-testid={`Radio`}
      {...props}
      className={classNames(
        'radio',
        { 'radio--is-checked': localChecked },
        className,
      )}
    >
      <input
        {...checkboxProps}
        type="radio"
        className={classNames('radio__input', checkboxProps?.className)}
        checked={localChecked}
        onChange={() =>
          setLocalChecked(currentCheckedValue => !currentCheckedValue)
        }
      />
      <div className="radio__input-visual" />
      <span className="radio__text">{children}</span>
    </RootElement>
  );
};
