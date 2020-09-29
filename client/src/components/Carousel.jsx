import React, { useState } from 'react';
import CurrentPage from './CurrentPage';
import '../style.css';

const simpleData = [];
for (let i = 0; i < 100; i += 1) {
  simpleData.push(i);
}

const Carousel = () => {
  // set to empty array when you have axios running
  const [slides, setSlides] = useState(simpleData);
  // prev, curr, next 4 slides
  const [currSlide, setCurrSlide] = useState(slides.slice(0, 4));
  const [prevSlide, setPrevSlide] = useState(currSlide);
  const [nextSlide, setNextSlide] = useState(slides.slice(4, 8));
  const [slideIdx, setSlideIdx] = useState(0);

  const maxPages = Math.ceil(slides.length / 4);

  const handlePrev = () => {
  };

  const handleNext = () => {

  };

  const prev = '<';
  const next = '>';
  return (
    <div>
      <h1>More places to stay</h1>
      <CurrentPage currPage={slideIdx} lastPage={maxPages} />
      <button type="button" onClick={handlePrev}>{prev}</button>
      <button type="button" onClick={handleNext}>{next}</button>
    </div>
  );
};

export default Carousel;
