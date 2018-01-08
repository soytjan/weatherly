import { shallow, mount } from 'enzyme';
import Card from '../lib/Welcome.js';
import React from 'react';

describe('Card', () => {
  let wrapper = shallow(<Card />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
});