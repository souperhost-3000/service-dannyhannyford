import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Carousel from '../components/Carousel';

describe('A suite', () => {
  it('renderes without crashing', () => {
    shallow(<Carousel />);
  });

  xit('should render to static HTML', () => {
    expect(render(<Carousel />).text()).toEqual('More places to stay<>');
  });
});
