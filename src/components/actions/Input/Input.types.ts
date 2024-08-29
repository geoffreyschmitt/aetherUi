import { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';

import { TComponentProps } from '@/utils';

export type TInput = TComponentProps &
  InputHTMLAttributes<HTMLLabelElement> &
  Readonly<{
    label: ReactNode;
    defaultValue?: InputHTMLAttributes<HTMLInputElement>['value'];
    hasError?: boolean;
    onChange?: (value: string) => void;
    beforeContentSlot?: ReactNode;
    afterContentSlot?: ReactNode;
    inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;
  }>;
