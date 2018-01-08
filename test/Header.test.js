import { shallow, mount } from 'enzyme';
import Header from '../lib/Header.js';
import React from 'react';

describe.only('Header', () => {
  let wrapper = shallow(<Header />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should return an h1', () => {
    expect(wrapper.find('h1').node).toEqual(<h1>Weatherly</h1>);
  });

  it('should have 2 <div>', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('should have an image', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });
});