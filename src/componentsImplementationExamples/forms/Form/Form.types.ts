import { TForm as TCoreForm } from '@/aether-ui-core/components/forms/Form';

export type TForm = Omit<
  TCoreForm,
  | 'InputComponent'
  | 'TextAreaComponent'
  | 'CheckboxComponent'
  | 'RadioComponent'
  | 'RadioListComponent'
  | 'SelectComponent'
>;
