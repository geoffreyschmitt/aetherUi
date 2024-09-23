import { TForm as TCoreForm } from '@/components/forms/Form';

export type TForm = Omit<
  TCoreForm,
  | 'InputComponent'
  | 'CheckboxComponent'
  | 'RadioComponent'
  | 'RadioListComponent'
  | 'SelectComponent'
>;
