import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../lib/Welcome.js';

describe.only('Welcome', () => {
  let wrapper = shallow(<Welcome />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
});