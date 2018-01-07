import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search.js';

describe('Search', () => {
  let wrapper = shallow(<Search />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
});