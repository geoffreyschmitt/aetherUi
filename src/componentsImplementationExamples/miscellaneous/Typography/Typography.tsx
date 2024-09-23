import React from 'react';

import { RootElement } from './Typography.styles';
import { ETypographyVariant, TTypography } from './Typography.types';
import { classNames } from '@/utils';

export const Typography = ({
  variant = ETypographyVariant.BODY,
  ...props
}: TTypography) => {
  return (
    <RootElement
      {...props}
      className={classNames(`typography--${variant}`, props.className)}
    />
  );
};
