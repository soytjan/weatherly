import { shallow, mount } from 'enzyme';
import Search from '../lib/Search.js';
import React from 'react';

describe('Search', () => {
  let wrapper = shallow(<Search />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
});