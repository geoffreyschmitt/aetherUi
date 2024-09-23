import { eventbus } from '@/utils';

export const formEventChannel = eventbus<{
  submitForm: (payload: { id: string; formData: FormData }) => void;
}>();
