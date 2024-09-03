import { TComponentPropsWithRequiredChildren } from '@/utils';

export type TBadge = TComponentPropsWithRequiredChildren & {
  /**
   * Tag of the root element of the component in case there is a customisation need.
   */
  readonly tag?: keyof HTMLElementTagNameMap;
};
