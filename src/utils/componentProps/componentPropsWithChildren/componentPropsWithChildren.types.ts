import type { ReactNode } from 'react';

import type { TComponentProps } from '../componentProps';

export type TComponentPropsWithChildren = TComponentProps & {
  /**
   * Children of the component
   */
  readonly children?: ReactNode;
};
