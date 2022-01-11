import axios from 'axios';



export const listCompanies = (criteria) => axios
  .get(
    'http://localhost:3001/api/v1/companies',
    {
      params: criteria,
      paramsSerializer: (params) => {
        const result = Object.keys(params).reduce((accum, key) => {
          if (Array.isArray(params[key])) {
            params[key].forEach((ele) => {
              accum += `${key}=${encodeURIComponent(ele)}&`;
            });
          } else {
            accum += `${key}=${encodeURIComponent(params[key])}&`;
          }
          return accum;
        }, '');
        return result.substring(0, result.length - 1);
      },
    },
  );
