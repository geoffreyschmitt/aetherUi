import { TComponentProps } from '@/utils';

export type TProgressBar = TComponentProps & {
  readonly widthPercentageOfProgressBar?: number;
};

export type TProgressBarStyled = {
  readonly $widthPercentageOfProgressBar?: string;
};
