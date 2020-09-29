import React from 'react';
import Slide from './Slide';

const SlideList = ({ slides }) => (
  <div>
    {slides.map((fourPack) => (fourPack.map((slide, sdx) => (
      <Slide
        // eslint-disable-next-line react/no-array-index-key
        key={sdx}
        slide={slide}
      />
    ))
    ))}
  </div>
);

export default SlideList;
