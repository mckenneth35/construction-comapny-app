import React from 'react';
import PropTypes from 'prop-types';

import CompaniesList from '../containers/CompaniesList';

import '../styles/main-page.css';

const MainPage = ({
  onLoad,
}) => (
  <div className='main-page'>
    <CompaniesList
      onLoad={onLoad}
    />
  </div>
);

MainPage.propTypes = {
  onLoad: PropTypes.func.isRequired,
};

export default MainPage;
