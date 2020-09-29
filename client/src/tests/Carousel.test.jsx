import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Carousel from '../components/Carousel';

describe('A suite', () => {
  xit('should render without throwing an error', () => {
    expect(shallow(<Carousel />).contains(
      <div>
        <h1>More places to stay</h1>
        <button type="button" onClick={handlePrev}></button>
        <button type="button" onClick={handleNext}></button>
      </div>,
    ).toBe(true));
  });

  it('should render to static HTML', () => {
    expect(render(<Carousel />).text()).toEqual('More places to stay<>');
  });
});
