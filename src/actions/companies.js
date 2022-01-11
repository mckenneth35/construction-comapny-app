import ActionType from '../types/actionType';

export const companiesListRequest = (criteria) => ({
  type: ActionType.COMPANIES_LIST_REQUEST,
  payload: criteria,
});
export const companiesListRequestSuccess = (companies) => ({
  type: ActionType.COMPANIES_LIST_REQUEST_SUCCESS,
  payload: companies,
});
export const companiesListRequestFailure = (error) => ({
  type: ActionType.COMPANIES_LIST_REQUEST_FAILURE,
  payload: error,
});

export const companiesListClearRequest = () => ({
  type: ActionType.COMPANIES_LIST_CLEAR_REQUEST,
});
