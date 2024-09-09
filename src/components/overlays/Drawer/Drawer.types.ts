import { TComponentPropsWithRequiredChildren } from '@/utils';
import { TDialog } from '@/components/overlays/Dialog';

export enum EDrawerPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

export type TDrawer = TComponentPropsWithRequiredChildren &
  Omit<TDialog, 'isModal'> &
  Readonly<{
    position: EDrawerPosition;
  }>;

export type TDrawerStyled = Readonly<{
  $position: TDrawer['position'];
}>;
