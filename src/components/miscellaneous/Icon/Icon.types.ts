import { TComponentProps } from '@/utils';

export enum EIconVariant {
  CHEVRON = 'chevron',
}

export type TIcon = TComponentProps & {
  /**
   * Available variant of the icon.
   */
  readonly variant: EIconVariant;
};
