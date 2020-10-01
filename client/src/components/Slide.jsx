import React from 'react';
import '../style.css';

// review_count: 145,
// review_average: 4.85,
// price: 426,

const Slide = ({ slide }) => (
  <li className="slide">
    <div className="imageContainer">
      <div className="heartShapedBox">
        <img className="heart" src="https://souperhost.s3-us-west-2.amazonaws.com/instagram-icon-24x24-27.jpg" alt="" />
        <img className="pink_heart" src="https://souperhost.s3-us-west-2.amazonaws.com/pinkheart.png" alt="" />
      </div>
      <div className="outline_box">
        <img className="heart_outline" src="https://souperhost.s3-us-west-2.amazonaws.com/heart.png" alt="" />
      </div>
      <img className="image" src={slide.image} alt="house" />
    </div>
    <div className="review_nums">
      <img className="star" alt="" src="https://souperhost.s3-us-west-2.amazonaws.com/star2.png" />
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
