import { InputHTMLAttributes } from 'react';

import { TComponentPropsWithChildren } from '@/utils';

export type TRadio = TComponentPropsWithChildren &
  Readonly<{
    /**
     * The value of the radio
     */
    value?: string;
    /**
     * Props that can be passed to a checkbox html element
     */
    checkboxProps?: InputHTMLAttributes<HTMLInputElement>;
  }>;
