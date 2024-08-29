import { HTMLAttributes } from 'react';

export type TComponentProps = HTMLAttributes<HTMLElement> & {
  /**
   * Custom classname of the component
   */
  readonly className?: string;
};
