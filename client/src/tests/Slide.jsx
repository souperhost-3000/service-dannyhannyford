import React from 'react';
import { shallow } from 'enzyme';
import Slide from '../components/Carousel';

describe('A suite', () => {
  it('renderes without crashing', () => {
    shallow(<Slide />);
  });
});
