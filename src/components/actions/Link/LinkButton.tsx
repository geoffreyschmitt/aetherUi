import React from 'react';

import { classNames } from '@/utils';

import { RootElement } from './LinkButton.styles';
import { TLinkButton } from './LinkButton.types';

export const LinkButton: React.FC<TLinkButton> = ({
  className,
  children,
  disabled,
  ...props
}) => {
  return (
    <RootElement
      data-testid={'LinkButton'}
      {...props}
      className={classNames(
        'link',
        { 'link--is-disabled': disabled },
        className,
      )}
      disabled={disabled}
    >
      {children}
    </RootElement>
  );
};
