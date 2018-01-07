import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Welcome.js';

describe('Card', () => {
  let wrapper = shallow(<Card />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
});