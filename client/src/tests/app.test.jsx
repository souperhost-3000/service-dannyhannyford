import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import Carousel from '../components/Carousel';
import sampleData from '../components/sampleData';

describe('App suite', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<App />).contains(<div><Carousel sampleData={sampleData} /></div>)).toBe(true);
  });
});
