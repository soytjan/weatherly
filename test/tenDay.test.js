import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from '../lib/TenDay.js';
import mockData from './testCleanMockData.js';
import mockIcons from './testIcons.js';

describe('TenDay', () => {
  let wrapper = shallow(<TenDay days={mockData.days} icons={mockIcons} />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
});