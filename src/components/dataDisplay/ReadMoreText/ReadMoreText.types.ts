import { TComponentProps } from '@/utils';
import { ReactNode } from 'react';

export type TReadMoreText = TComponentProps & {
  text: ReactNode;
  buttonContentWhenOpenSlot: ReactNode;
  buttonContentWhenCloseSlot: ReactNode;
  numberOfLineToDisplayWhenTruncate: number;
};

export type TReadMoreTextStyled = Readonly<{
  $numberOfLineToDisplayWhenTruncate: TReadMoreText['numberOfLineToDisplayWhenTruncate'];
}>;
