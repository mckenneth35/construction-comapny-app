import { connect } from 'react-redux';

import MainPage from '../pages/MainPage';
import { companiesListRequest } from '../actions/companies';

const mapDispatchToProps = (dispatch) => ({
  onLoad: (criteria) => {
    dispatch(companiesListRequest(criteria));
  },
});

export default connect(null, mapDispatchToProps)(MainPage);
