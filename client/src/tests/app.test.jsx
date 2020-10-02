import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App';
import Carousel from '../components/Carousel';
import CurrentPage from '../components/CurrentPage';
import SlideList from '../components/SlideList';

describe('App suite', () => {
  xit('should render without throwing an error', () => {
    expect(shallow(<App />).contains(<div><Carousel /></div>)).toBe(true);
  });
});
