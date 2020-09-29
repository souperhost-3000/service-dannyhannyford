import React, { useState, useEffect } from 'react';
import CurrentPage from './CurrentPage';
import SlideList from './SlideList';
import '../style.css';
import sampleData from './sampleData';

const Carousel = () => {
  // prev, curr, next 4 slides
  let prevSlide = sampleData.slice(sampleData.length - 4, sampleData.length);
  let currSlide = sampleData.slice(0, 4);
  let nextSlide = sampleData.slice(4, 8);
  const [bigSlide, setBigSlide] = useState([[prevSlide], [currSlide], [nextSlide]]);
  const [slideIdx, setSlideIdx] = useState(1);

  const maxPages = Math.ceil(sampleData.length / 4);

  useEffect(() => {
    // on change set all 3 slides
    const currEnd = slideIdx * 4;
    currSlide = sampleData.slice(currEnd - 4, currEnd);
    if (slideIdx === 1) {
      prevSlide = sampleData.slice((maxPages * 4) - 4, maxPages * 4);
      nextSlide = sampleData.slice(currEnd, currEnd + 4);
    } else if (slideIdx === maxPages) {
      nextSlide = sampleData.slice(0, 4);
      prevSlide = sampleData.slice(currEnd - 8, currEnd - 4);
    } else {
      prevSlide = sampleData.slice(currEnd - 8, currEnd - 4);
      nextSlide = sampleData.slice(currEnd, currEnd + 4);
    }
    setBigSlide([[prevSlide], [currSlide], [nextSlide]]);
  }, [slideIdx]);

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
        <SlideList slides={bigSlide} />
      </div>
    </div>
  );
};

export default Carousel;
