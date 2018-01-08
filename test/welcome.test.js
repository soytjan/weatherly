import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../lib/Welcome.js';

// How do we test for the props and the method that is being passed in? 
describe('Welcome', () => {
  const mockFn = jest.fn();
  let wrapper = shallow(<Welcome getWeatherData={mockFn} />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  // it('should start with props', () => {
  //   expect(mockFn).toHaveBeenCalled();
  // })

  it('should render 1 Search component', () => {
    expect(wrapper.find('Search').length).toEqual(1);
  })

  it('should mount 1 Search component', () => {
    wrapper = mount(<Welcome />);
    expect(wrapper.find('p').length).toEqual(1);
    expect(wrapper.find('p').first().text()).toEqual('Show me the weather in...')
  })
});