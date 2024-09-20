import { TComponentPropsWithRequiredChildren } from '@/utils';

export type TContainer = TComponentPropsWithRequiredChildren &
  Readonly<{
    /**
     * Tag of the root element of the component in case there is a customisation need.
     */
    tag?: keyof HTMLElementTagNameMap;
  }>;
