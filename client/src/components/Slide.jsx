import React from 'react';

const Slide = ({ slide }) => (
  <div className="slide">
    {/* {console.log(slide)} */}
    <div>
      <img src={slide[0]} alt="house" />
    </div>
    <div>
      <img src={slide[1]} alt="house" />
    </div>
    <div>
      <img src={slide[2]} alt="house" />
    </div>
    <div>
      <img src={slide[3]} alt="house" />
    </div>
  </div>
);

export default Slide;
