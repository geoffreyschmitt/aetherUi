import { eventbus } from '@/utils';

export const dialogEventChannel = eventbus<{
  openDialog: (payload: { dialogId: string }) => void;
  closeDialog: (payload: { dialogId: string }) => void;
}>();
