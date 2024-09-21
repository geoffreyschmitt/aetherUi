import React from 'react';

import { RootElement } from './HorizontalSlider.styles';
import { THorizontalSlider } from './HorizontalSlider.types';

export const HorizontalSlider = ({ ...props }: THorizontalSlider) => {
  return <RootElement {...props} />;
};
