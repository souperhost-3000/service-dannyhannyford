import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrentPage from './CurrentPage';
import SlideList from './SlideList';
import ArrowButtons from './ArrowButtons';
import '../style.css';

require('regenerator-runtime');

const Carousel = () => {
  // prev, curr, next 4 slides

  const [listingData, setListingData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [slideIdx, setSlideIdx] = useState(1);
  const [maxSlideIdx, setMaxSlideIdx] = useState(0);
  const [style, setStyle] = useState({
    transition: 'transform ease-out 0.45s',
    transform: 'translateX(-0%)',
  });

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setIsLoading(true);
      const { data } = await axios.get('/api/listings');
      setListingData(data);
      if (data) {
        setMaxSlideIdx(Math.ceil(data.length / 4));
      }
      setIsLoading(false);
    };
    if (mounted) {
      fetchData();
    }
    return () => {
      mounted = false;
    };
  }, []);

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
      setSlideIdx(maxSlideIdx);
    }
  };

  const handleNext = () => {
    if (slideIdx !== maxSlideIdx) {
      setSlideIdx(slideIdx + 1);
    } else {
      setSlideIdx(1);
    }
  };

  let itemsToRender;
  if (listingData) {
    itemsToRender = (
      <div className="display">
        <SlideList
          move={style}
          slides={listingData}
          toggleSave={toggleSave}
        />
      </div>
    );
  }

  const prev = '<';
  const next = '>';
  return (
    <div>
      <div className="header">
        <div className="title">
          <h2>More places to stay</h2>
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="rightSide">
            <CurrentPage currPage={slideIdx} lastPage={maxSlideIdx} />
            <ArrowButtons
              prev={prev}
              next={next}
              handlePrev={handlePrev}
              handleNext={handleNext}
            />
          </div>
        )}
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        itemsToRender
      )}
    </div>
  );
};

export default Carousel;
