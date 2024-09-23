import { TTypography as TCoreTypography } from '@/components/miscellaneous/Typography';

export enum ETypographyVariant {
  HEADING = 'heading',
  BODY = 'body',
}

export type TTypography = TCoreTypography &
  Readonly<{
    variant?: ETypographyVariant;
  }>;
