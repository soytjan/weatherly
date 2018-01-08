import Welcome from '../lib/Welcome.js';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe.only('Welcome', () => {
  let wrapper = shallow(<Welcome />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
});