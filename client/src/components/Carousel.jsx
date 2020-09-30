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
  const [bigSlide, setBigSlide] = useState([prevSlide.concat(currSlide, nextSlide)]);
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
    setBigSlide(prevSlide.concat(currSlide, nextSlide));
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
      <div className="header">
        <div className="title">
          <h2>More places to stay</h2>
        </div>
        <div className="rightSide">
          <CurrentPage currPage={slideIdx} lastPage={maxPages} />
          <div className="lbtndiv">
            <button
              className="lbtn"
              type="button"
              onClick={handlePrev}
            >
              <span className="spanner">{prev}</span>
            </button>
          </div>
          <div className="rbtndiv">
            <button
              className="rbtn"
              type="button"
              onClick={handleNext}
            >
              <span className="spanner">{next}</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <SlideList slides={bigSlide} />
      </div>
    </div>
  );
};

export default Carousel;
