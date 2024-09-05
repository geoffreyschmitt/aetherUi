import { ReactNode } from 'react';
import { TComponentProps } from '@/utils';

export type TCarousel = TComponentProps &
  Readonly<{
    itemList: ReactNode[];
  }>;
