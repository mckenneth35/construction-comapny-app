import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import CompanySummary from './CompanySummary';
import { mockCompanies } from '../../tests/data/Companies';

describe('component:CompanySummary', () => {
  it('Should render Company Summary', () => {
    const wrapper = shallow(
      <CompanySummary
        company={mockCompanies[0]}
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
