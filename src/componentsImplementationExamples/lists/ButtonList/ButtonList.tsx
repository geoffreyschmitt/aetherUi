import React from 'react';

import { RootElement } from './ButtonList.styles';
import { TButtonList } from './ButtonList.types';
import {
  Button,
  ButtonLink,
} from '@/componentsImplementationExamples/actions/Button';

export const ButtonList = ({ ...props }: TButtonList) => {
  return (
    <RootElement
      {...props}
      ButtonComponent={Button}
      ButtonLinkComponent={ButtonLink}
    />
  );
};
