'use client';
import React, { useEffect, useState } from 'react';

import { classNames } from '@/utils';

import { RootElement } from './Radio.styles';
import { TRadio } from './Radio.types';

export const Radio = ({
  id,
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
        id={id}
        className="radio__input"
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
