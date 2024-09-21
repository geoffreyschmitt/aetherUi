'use client';
import React, { ChangeEvent, forwardRef, useState } from 'react';

import { classNames } from '@/utils/classNames';

import { RootElement } from './Input.styles';
import { TInput } from './Input.types';

export const Input = forwardRef<HTMLLabelElement, TInput>(
  (
    {
      className,
      label,
      defaultValue,
      onChange,
      inputProps,
      hasError,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState(defaultValue ?? '');
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event?.currentTarget?.value);
      if (onChange) {
        onChange(event?.currentTarget?.value);
      }
    };

    return (
      <RootElement
        data-testid={'Input'}
        {...props}
        ref={ref}
        className={classNames(
          'input',
          {
            'input--is-filled': (props.value ?? value) as string,
            'input--has-error': hasError,
          },
          className,
        )}
      >
        <span className={'input__label'}>{label}</span>
        <input
          {...inputProps}
          type="text"
          value={value}
          className={'input__input'}
          onChange={handleInputChange}
        />
      </RootElement>
    );
  },
);
