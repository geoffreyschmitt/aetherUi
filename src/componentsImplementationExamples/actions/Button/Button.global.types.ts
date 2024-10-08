export enum EButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export type TButtonCommonProps = Readonly<{
  variant?: EButtonVariant;
}>;
