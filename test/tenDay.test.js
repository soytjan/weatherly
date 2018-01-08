import mockData from './testCleanMockData.js';
import { shallow, mount } from 'enzyme';
import mockIcons from './testIcons.js';
import TenDay from '../lib/TenDay.js';
import React from 'react';

describe('TenDay', () => {
  let wrapper = shallow(<TenDay days={mockData.days} icons={mockIcons} />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
});