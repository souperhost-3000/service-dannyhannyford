import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrentPage from './CurrentPage';
import SlideList from './SlideList';
import '../style.css';
// import listingData from './listingData';

const Carousel = () => {
  // prev, curr, next 4 slides

  const [listingData, setListingData] = useState([]);
  const [slideIdx, setSlideIdx] = useState(1);
  const [style, setStyle] = useState({
    transition: 'transform ease-out 0.45s',
    transform: 'translateX(-0%)',
  });

  const maxPages = Math.ceil(listingData.length / 4);

  useEffect(() => {
    axios.get('/api/listings')
      .then(({ data }) => setListingData(data))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, []);

  // on change set all 3 slides
  useEffect(() => {
    setStyle({
      transition: 'transform ease-out 0.45s',
      transform: `translateX(-${((slideIdx - 1) * 100)}%)`,
    });
  }, [slideIdx]);

  const toggleSave = (slide) => {
    const updatedSlide = slide;
    updatedSlide.saved = !slide.saved;
    const updatedData = [...listingData.slice(0, (slide.listing_id - 1)),
      updatedSlide,
      ...listingData.slice(slide.listing_id)];
    setListingData(updatedData);
  };

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
      <div className="display">
        <SlideList
          move={style}
          slides={listingData}
          toggleSave={toggleSave}
        />
      </div>
    </div>
  );
};

export default Carousel;
