import ActionType from '../types/actionType';

import { mapByKey } from '../utils/utils';

const initialState = {
  companiesMap: {},
  companyIds: [],
  loading: false,
};

const Companies = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.COMPANIES_LIST_REQUEST:
      console.log('>>>',process.env)
      return {
        ...state,
        loading: true,
      };

    // payload: companies,
    case ActionType.COMPANIES_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        companiesMap: {
          ...state.companiesMap,
          ...mapByKey(action.payload, 'id'),
        },
        companyIds: [
          ...state.companyIds,
          ...action.payload.map((company) => company.id),
        ],
        loading: false,
      };

    case ActionType.COMPANIES_LIST_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case ActionType.COMPANIES_LIST_CLEAR_REQUEST:
      return {
        ...state,
        companyIds: [],
      };

    default:
      return state;
  }
};

export default Companies;
