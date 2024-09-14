import React from 'react';
import { RootElement } from './Dialog.styles';
import { TDialog } from './Dialog.types';

export const Dialog = ({ children, ...props }: TDialog) => {
  return (
    <RootElement
      {...props}
      closeButtonContentSlot={props.closeButtonContentSlot}
    >
      <div>Children customized by Dialog</div>
      {children}
    </RootElement>
  );
};
