import { TComponentPropsWithRequiredChildren } from '@/utils';

export type TButtonCommonProps = TComponentPropsWithRequiredChildren & {
  /**
   * Flag to show loading spinner.
   */
  readonly isLoading?: boolean;
};
