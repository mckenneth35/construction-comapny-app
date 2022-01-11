import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Company from '../../types/Company';
import { SPECIALTY_TYPES_NAME, SPECIALTY_TYPES_TAG_COLOR_THEME } from '../../constants/specialties';

const CompanySummary = ({
  company,
}) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={clsx('company-summary', {
        'company-summary-hover': hovering,
      })}
    >
      <div className='company-summary-img'>
        <img
          className='logo-img'
          src={company.logoUrl}
        />
      </div>

      <div id='Company-summary-name' className='company-summary-name cut-text'>
        {company.name}
      </div>

      <div className='company-summary-specialties'>
        <span id='Specialty-tags' className='flexwrap'>
          {company?.specialties?.map((spec) => (
            <div id='Specialty-tag' className={clsx('specialty-tag', SPECIALTY_TYPES_TAG_COLOR_THEME[spec])} key={spec}>
              {SPECIALTY_TYPES_NAME[spec]}
            </div>
          ))}
        </span>
      </div>

      <div className='company-summary-city cut-text'>
        {company.city}
      </div>
    </div>
  );
};

// *********************************************************************************************************************
// PROPS
// *********************************************************************************************************************
CompanySummary.propTypes = {
  company: PropTypes.exact(Company),
};


export default CompanySummary;
