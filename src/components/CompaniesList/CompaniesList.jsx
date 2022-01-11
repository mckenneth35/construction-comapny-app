import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
// import throttle from 'lodash.throttle';
// import debounce from 'lodash.debounce';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import chroma from 'chroma-js';

import CompanySummary from '../CompanySummary';
import Company from '../../types/Company';

// import { COMPANIES_LIST_PAGING_SIZE } from '../../constants/pagingConfig';
import { SPECIALTY_TYPES, SPECIALTY_TYPES_NAME, DEFAULT_CHECKED_SPECIALTY_TYPES } from '../../constants/specialties';

const CompaniesList = ({
  companiesMap,
  companyIds,
  companiesLoading,
  onLoad,
}) => {
  useEffect(() => {
    onLoad();
  }, []);

  const [filteredName, setFilteredName] = useState('');
  const [checkedSpecialties, setCheckedSpecialties] = useState({ ...DEFAULT_CHECKED_SPECIALTY_TYPES });
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      const criteria = {};
      if (filteredName) {
        criteria.name = filteredName;
      }

      const checkedSpecialtiesKeys = Object.keys(checkedSpecialties).filter((key) => checkedSpecialties[key]);
      if (checkedSpecialtiesKeys.length) {
        criteria.specialties = checkedSpecialtiesKeys;
      }
      onLoad(criteria);
    }
  }, [filteredName, checkedSpecialties]);

  return (
    <div>
      <div className='sticky-top top-panel'>
        <span id='Heading'>
          <h1>
            Companies
          </h1>
          <h3>
            {` (${companyIds.length} Result${companyIds.length > 1 ? 's' : ''})`}
          </h3>
        </span>

        <div className='name-search-div'>
          <input
            type='search'
            placeholder='Search by Company Name'
            onChange={(e) => setFilteredName(e.target.value)}
            id='Search-name'
            className='name-search-input'
          />
        </div>

        <span className='checkboxes-container'>
          {Object.keys(SPECIALTY_TYPES).map((code) => (
            <label className='checkbox-container' key={code}>
              <input
                type='checkbox'
                defaultChecked={checkedSpecialties[code]}
                onChange={(e) => setCheckedSpecialties({
                  ...checkedSpecialties,
                  [code]: !checkedSpecialties[code],
                })}
                id={code}
                className='specialty-checkbox'
              />
              <span className='checkbox-label'>
                {SPECIALTY_TYPES_NAME[code]}
              </span>
            </label>
          ))}
        </span>

        <hr />

        {/* table head */}
        <div className='companies-list-table-head'>
          <div className='company-summary-img' />
          <div className='company-summary-name'>Name</div>
          <div className='company-summary-specialties'>Specialties</div>
          <div className='company-summary-city'>City</div>
        </div>
        <hr />
      </div>

      {companiesLoading
        ? <h4>Loading</h4>
        : <div id='Companies-list' className='companies-list'>
          {companyIds.length === 0
            ? <h4>No Relevant Record Found</h4>
            : <>
              {companyIds.map((cId) => (
                <div key={cId}>
                  <CompanySummary company={companiesMap[cId]} />
                  <hr />
                </div>
              ))
              }
            </>
          }
        </div>
      }
    </div >
  );
};

// *********************************************************************************************************************
// PROPS
// *********************************************************************************************************************
CompaniesList.propTypes = {
  companiesMap: PropTypes.objectOf(PropTypes.exact(Company)).isRequired,
  companyIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  companiesLoading: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired,
};

export default CompaniesList;
