import React from 'react';

import { RootElement } from './Button.styles';
import { TButton } from './Button.types';
import { EButtonVariant } from '@/componentsImplementationExamples/actions/Button/Button.global.types';
import { classNames } from 'src/aether-ui-core/utils';

export const Button = ({
  className,
  variant = EButtonVariant.PRIMARY,
  ...props
}: TButton) => {
  return (
    <RootElement
      {...props}
      className={classNames(`button--${variant}`, className)}
    />
  );
};
