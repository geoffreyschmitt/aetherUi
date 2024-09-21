import { HTMLAttributes } from 'react';

import { TComponentPropsWithChildren } from '@/utils';

export type TRadio = TComponentPropsWithChildren &
  Readonly<{
    /**
     * Denotes whether the checkbox is checked or not.
     */
    checked: boolean;
    /**
     * Props that can be passed to a checkbox html element
     */
    checkboxProps?: HTMLAttributes<HTMLInputElement>;
  }>;
