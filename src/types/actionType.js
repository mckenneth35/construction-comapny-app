import keyMirror from 'keymirror';

const ActionType = keyMirror({
  COMPANIES_LIST_REQUEST: null,
  COMPANIES_LIST_REQUEST_SUCCESS: null,
  COMPANIES_LIST_REQUEST_FAILURE: null,
  COMPANIES_LIST_CLEAR_REQUEST: null,
});

export default (ActionType);
