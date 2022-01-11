import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import CompaniesList from './CompaniesList';
import { mapByKey } from '../../utils/utils'
import { mockCompanies } from '../../tests/data/Companies';

describe('component:CompaniesList', () => {
  it('Should render CompaniesList with 3 companies', () => {
    const wrapper = shallow(
      <CompaniesList
        companiesMap={mapByKey(mockCompanies, 'id')}
        companyIds={[1, 2, 3]}
        companiesLoading={true}
        onLoad={jest.fn()}
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
