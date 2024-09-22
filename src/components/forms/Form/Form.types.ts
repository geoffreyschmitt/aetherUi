import { TComponentProps } from '@/utils';
import { ComponentType } from 'react';
import { TInput } from '@/components/actions/Input';
import { TCheckbox } from '@/components/actions/Checkbox';
import { TRadio } from '@/components/actions/Radio';
import { TSelect } from '@/components/actions/Select';
import { TRadioList } from '@/components/lists/RadioList';

export type TInputFormEntry = { componentType: 'input' } & TInput;
export type TCheckboxFormEntry = { componentType: 'checkbox' } & TCheckbox;
export type TRadioFormEntry = { componentType: 'radio' } & TRadio;
export type TRadioListFormEntry = { componentType: 'radioList' } & TRadioList;
export type TSelectFormEntry = { componentType: 'select' } & TSelect;

export type TFormEntry =
  | TInputFormEntry
  | TCheckboxFormEntry
  | TRadioFormEntry
  | TRadioListFormEntry
  | TSelectFormEntry;

export type TForm = TComponentProps &
  Readonly<{
    formEntryList: TFormEntry[];
    InputComponent: ComponentType<TInput>;
    CheckboxComponent: ComponentType<TCheckbox>;
    RadioComponent: ComponentType<TRadio>;
    RadioListComponent: ComponentType<TRadioList>;
    SelectComponent: ComponentType<TSelect>;
  }>;
