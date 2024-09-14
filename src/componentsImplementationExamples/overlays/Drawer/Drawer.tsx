import React from 'react';
import { RootElement } from './Drawer.styles';
import { TDrawer } from './Drawer.types';
import { Dialog } from '@/componentsImplementationExamples/overlays/Dialog';

export const Drawer = ({ children, ...props }: TDrawer) => {
  return (
    <RootElement {...props} DialogComponent={Dialog}>
      {children}
    </RootElement>
  );
};
