import React from 'react';

import { RootElement } from './ButtonLink.styles';
import { TButtonLink } from './ButtonLink.types';
import { EButtonVariant } from '@/componentsImplementationExamples/actions/Button/Button.global.types';
import { classNames } from '@/utils';

export const ButtonLink = ({
  className,
  variant = EButtonVariant.PRIMARY,
  ...props
}: TButtonLink) => {
  return (
    <RootElement
      {...props}
      className={classNames(`button--${variant}`, className)}
    />
  );
};
