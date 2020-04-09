import api from './hr.api';

export const login = async ({ userName, password }) => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  const qs = require('querystring');
  return await api.post(
    '/token',
    qs.stringify({ userName, password, grant_type: 'password' }),
    config
  );
};

export const loadLeaveType = async () => {
  return await api.get('api/Leave/GetLeaveType');
};
