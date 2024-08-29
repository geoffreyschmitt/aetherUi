'use client';
import React, { useEffect, useState } from 'react';

import { classNames } from '@/utils/classNames';

import { RootElement } from './Checkbox.styles';
import { TCheckbox } from './Checkbox.types';

export const Checkbox = ({
  id,
  className,
  children,
  color,
  checkColor,
  defaultChecked,
  onChange,
  checkboxProps,
  ...props
}: TCheckbox) => {
  const [checked, setChecked] = useState(defaultChecked ?? false);

  useEffect(() => {
    setChecked(defaultChecked ?? false);
  }, [defaultChecked]);

  const handleChange = () => {
    setChecked(!checked);

    onChange?.(!checked);
  };

  return (
    <RootElement
      data-testid={`Checkbox`}
      {...props}
      className={classNames(
        'checkbox',
        { 'checkbox--is-checked': checked },
        className,
      )}
      $color={color}
      $checkColor={checkColor}
    >
      <label className={'checkbox__label'}>
        <input
          {...checkboxProps}
          type="checkbox"
          id={id}
          className="checkbox__input"
          checked={checked}
          onChange={handleChange}
        />
        <div className="checkbox__input-visual" />
        {children && (
          <span className="checkbox__input-content">{children}</span>
        )}
      </label>
    </RootElement>
  );
};
