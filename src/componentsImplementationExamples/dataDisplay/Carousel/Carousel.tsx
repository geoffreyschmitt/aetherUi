import React from 'react';

import { RootElement } from './Carousel.styles';
import { TCarousel } from './Carousel.types';

export const Carousel = ({ ...props }: TCarousel) => {
  return <RootElement {...props} />;
};
