import React from 'react';
import { shallow } from 'enzyme';
import SlideList from '../components/Carousel';

describe('A suite', () => {
  it('renderes without crashing', () => {
    shallow(<SlideList />);
  });
});
