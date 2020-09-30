import React from 'react';
import Slide from './Slide';
import '../style.css';

const SlideList = ({ slides }) => (
  <ul className="display">
    {slides.map((slide, idx) => (
      <Slide
        // eslint-disable-next-line react/no-array-index-key
        key={idx}
        slide={slide}
      />
    ))}
  </ul>
);

export default SlideList;
