import { put, takeLatest } from 'redux-saga/effects';
import {
  companiesListClearRequest,
  companiesListRequest,
  companiesListRequestFailure,
  companiesListRequestSuccess,
} from '../../actions/companies';

import { listCompanies } from '../../clients/companiesClient';

function* companiesListResultWorker(action) {
  const criteria = action.payload;
  // TODO: paging
  // if (criteria?.page === 1) {
  //   yield put(companiesListClearRequest());
  // }
  yield put(companiesListClearRequest());
  try {
    const { data: payload } = yield listCompanies(criteria);

    yield put(companiesListRequestSuccess(payload));
  } catch (error) {
    yield put(companiesListRequestFailure(error));
  }
}

export function* companiesListRequestSaga() {
  yield takeLatest(companiesListRequest().type, companiesListResultWorker);
}
