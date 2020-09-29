import React, { useState } from 'react';
import CurrentPage from './CurrentPage';
import '../style.css';

const simpleData = [];
for (let i = 1; i <= 100; i += 1) {
  simpleData.push(`https://souperhost.s3-us-west-2.amazonaws.com/stay${i}.jpg`);
}

const Carousel = () => {
  // prev, curr, next 4 slides
  const [prevSlide, setPrevSlide] = useState(
    simpleData.slice(simpleData.length - 4, simpleData.length),
  );
  const [currSlide, setCurrSlide] = useState(simpleData.slice(0, 4));
  const [nextSlide, setNextSlide] = useState(simpleData.slice(4, 8));
  const [slideIdx, setSlideIdx] = useState(1);

  const maxPages = Math.ceil(simpleData.length / 4);

  const getWidth = () => window.innerWidth;

  const handlePrev = () => {
    if (slideIdx !== 1) {
      setSlideIdx(slideIdx - 1);
    } else {
      setSlideIdx(maxPages);
    }
  };

  const handleNext = () => {
    if (slideIdx !== maxPages) {
      setSlideIdx(slideIdx + 1);
    } else {
      setSlideIdx(1);
    }
  };

  const prev = '<';
  const next = '>';
  return (
    <div>
      <div>
        <h1>More places to stay</h1>
        <CurrentPage currPage={slideIdx} lastPage={maxPages} />
        <button type="button" onClick={handlePrev}>{prev}</button>
        <button type="button" onClick={handleNext}>{next}</button>
      </div>
      <div>
        <SlideList />
      </div>
    </div>
  );
};

export default Carousel;
