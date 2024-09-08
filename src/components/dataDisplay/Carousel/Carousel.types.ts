import { ReactNode } from 'react';
import { TComponentProps } from '@/utils';

export type TCarousel = TComponentProps &
  Readonly<{
    /**
     * list of slide to display
     */
    itemList: ReactNode[];
    /**
     * fallback displayed when itemList is empty
     */
    componentFallBack?: ReactNode;
  }>;
