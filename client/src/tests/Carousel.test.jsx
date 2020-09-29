import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CurrentPage from '../components/Carousel';

describe('A suite', () => {
  it('renderes without crashing', () => {
    shallow(<CurrentPage />);
  });
});
