import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Slide from '../components/Slide';
import sampleData from '../components/sampleData';

const toggleSave = jest.fn(() => !sampleData[0].saved);

it('should render slide', () => {
  const wrapper = shallow(
    <Slide
      slide={sampleData[0]}
      toggleSave={toggleSave}
    />,
  );
  expect(wrapper.exists()).toBe(true);
});

it('Clicking the heart should run the function one time', () => {
  const wrapper = shallow(<Slide
    slide={sampleData[0]}
    toggleSave={toggleSave}
  />);
  const button = wrapper.find('button');
  button.simulate('click');
  expect(toggleSave).toHaveBeenCalledTimes(1);
});
