import React from 'react';
import axios from 'axios';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Carousel from '../components/Carousel';
import sampleData from '../components/sampleData';

require('regenerator-runtime');

jest.mock('axios');

describe('Carousel', () => {
  let wrapper;
  beforeEach(async () => {
    await act(async () => {
      await axios.get.mockImplementationOnce(() => Promise.resolve(sampleData));
      wrapper = mount(<Carousel />);
    });
    wrapper.update();
  });

  it('should mount after fetching data', async () => {
    await expect(wrapper.exists()).toBe(true);
    await expect(axios.get).toHaveBeenCalledWith('/api/listings');
    await expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
