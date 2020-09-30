import React from 'react';
import '../style.css';

// review_count: 145,
// review_average: 4.85,
// price: 426,

const Slide = ({ slide }) => (
  <li className="slide">
    <img className="image" src={slide.image} alt="house" />
    <div className="review_nums">
      <div className="avg">{slide.review_average}</div>
      <div className="review_count">{`(${slide.review_count})`}</div>
    </div>
    <div className="place_title">{slide.place_title}</div>
    <div className="place_title">{slide.sleeping_arrangement}</div>
    <div className="review_nums">
      <div className="price">
        {`$${slide.price}`}
      </div>
      <span className="night"> / night</span>
    </div>
  </li>
);

export default Slide;
