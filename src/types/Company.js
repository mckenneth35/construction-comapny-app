import * as PropTypes from 'prop-types';

const Company = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  logoUrl: PropTypes.string,
  specialties: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string.isRequired,
};

export default Company;
