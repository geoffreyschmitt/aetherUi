import { TComponentPropsWithRequiredChildren } from '@/utils';
import { ReactNode } from 'react';

export type TDialog = TComponentPropsWithRequiredChildren &
  Readonly<{
    id: string;
    closeButtonContentSlot?: ReactNode;
    closeButtonAriaLabel?: string;
    isModal?: boolean;
  }>;
