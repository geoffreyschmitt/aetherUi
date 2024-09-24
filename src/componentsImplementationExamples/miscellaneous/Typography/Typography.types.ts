import { TTypography as TCoreTypography } from '@/aether-ui-core/components/miscellaneous/Typography';

export enum ETypographyVariant {
  HEADING = 'heading',
  BODY = 'body',
}

export type TTypography = TCoreTypography &
  Readonly<{
    variant?: ETypographyVariant;
  }>;
