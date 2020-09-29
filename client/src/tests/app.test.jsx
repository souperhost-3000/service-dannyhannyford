import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App';
import Carousel from '../components/Carousel';

describe('A suite', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<App />).contains(<div><Carousel /></div>)).toBe(true);
  });
  xit('should be selectable by class "app"', () => {
    expect(shallow(<App />).is('.app')).toBe(true);
  });
  xit('should mount in a full DOM', () => {
    expect(mount(<App />).find('.app').length).toBe(1);
  });

  xit('should render to static HTML', () => {
    expect(render(<App />).text()).toEqual('Hello');
  });
});
