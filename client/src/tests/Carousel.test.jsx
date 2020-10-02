import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Carousel from '../components/Carousel';
import CurrentPage from '../components/CurrentPage';
import SlideList from '../components/SlideList';

// it('renderes without crashing', () => {
//   shallow(<Carousel />);
// });

xit('should render CurrentPage and SlideList components', () => {
  const wrapper = shallow(<Carousel />);
  const currentPage = wrapper.find(CurrentPage);
  const slideList = wrapper.find(SlideList);
  // expect(currentPage.exists()).toBe(true);
  expect(slideList.exists()).tobe(true);
});
