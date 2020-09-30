import React from 'react';
import '../style.css';

const Slide = ({ slide }) => (
  <div className="slideBlock">
    {/* {console.log(slide)} */}
    <div className="slide">
      <img src={slide[0]} alt="house" />
    </div>
    <div className="slide">
      <img src={slide[1]} alt="house" />
    </div>
    <div className="slide">
      <img src={slide[2]} alt="house" />
    </div>
    <div className="slide">
      <img src={slide[3]} alt="house" />
    </div>
  </div>
);

export default Slide;
