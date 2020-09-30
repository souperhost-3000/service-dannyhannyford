import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrentPage from './CurrentPage';
import SlideList from './SlideList';
import '../style.css';
// import listingData from './listingData';

const Carousel = () => {
  // prev, curr, next 4 slides
  const [listingData, setListingData] = useState([]);
  const [bigSlide, setBigSlide] = useState([]);
  const [slideIdx, setSlideIdx] = useState(1);
  const maxPages = Math.ceil(listingData.length / 4);

  useEffect(() => {
    axios.get('/api/listings')
      .then(({ data }) => setListingData(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const prevSlide = listingData.slice(listingData.length - 4, listingData.length);
    const currSlide = listingData.slice(0, 4);
    const nextSlide = listingData.slice(4, 8);
    setBigSlide(prevSlide.concat(currSlide, nextSlide));
  }, [listingData]);
  useEffect(() => {
    // on change set all 3 slides
    const currEnd = slideIdx * 4;
    const currSlide = listingData.slice(currEnd - 4, currEnd);
    let prevSlide;
    let nextSlide;
    if (slideIdx === 1) {
      prevSlide = listingData.slice((maxPages * 4) - 4, maxPages * 4);
      nextSlide = listingData.slice(currEnd, currEnd + 4);
    } else if (slideIdx === maxPages) {
      nextSlide = listingData.slice(0, 4);
      prevSlide = listingData.slice(currEnd - 8, currEnd - 4);
    } else {
      prevSlide = listingData.slice(currEnd - 8, currEnd - 4);
      nextSlide = listingData.slice(currEnd, currEnd + 4);
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
