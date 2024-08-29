import { InputHTMLAttributes, HTMLAttributes } from 'react';

import { TComponentPropsWithChildren } from '@/utils';

export type TCheckbox = HTMLAttributes<HTMLElement> &
  TComponentPropsWithChildren &
  Readonly<{
    /**
     * Id of the checkbox
     */
    id: string;
    /**
     * Color of the checkbox
     */
    color?: string;
    /**
     * Color of the check
     */
    checkColor?: string;
    /**
     * CheckboxProps is an optional property that represents the HTML input attributes for a checkbox element.
     *
     * @typedef {Object} CheckboxProps
     * @property {InputHTMLAttributes<HTMLInputElement>} checkboxProps - The input attributes for a checkbox element.
     */
    checkboxProps?: Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;
    /**
     * Callback on checkbox value check
     *
     * @param {string} value - The new value of the variable.
     * @returns {void}
     */
    onChange?: (value: boolean) => void;
  }>;

export type TCheckboxStyled = {
  $color: TCheckbox['color'];
  $checkColor: TCheckbox['checkColor'];
};
