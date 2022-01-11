import { connect } from 'react-redux';

import CompaniesList from '../components/CompaniesList';
import { companiesMapSelector, companyIdsSelector, companiesLoadingSelector } from '../selectors/companiesSelectors';

const mapStateToProps = (state) => ({
  companiesMap: companiesMapSelector(state),
  companyIds: companyIdsSelector(state),
  companiesLoading: companiesLoadingSelector(state),
});

export default connect(mapStateToProps)(CompaniesList);
