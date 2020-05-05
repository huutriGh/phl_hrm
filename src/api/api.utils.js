import api from './hr.api';

const config = (token) => ({
  headers: {
    Authorization: `Bearer ${token ? token : ''}`,
  },
});

export const login = async ({ userName, password }) => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  const qs = require('querystring');
  return await api.post(
    '/token',
    qs.stringify({ userName, password, grant_type: 'password' }),
    config
  );
};

export const loadLeaveType = async (token = null) => {
  return await api.get('api/Leave/GetLeaveType', config(token));
};
export const loadLeaveStatus = async (token = null) => {
  return await api.get('api/Leave/GetLeaveStatus', config(token));
};
export const loadRemainingHours = async (token = null) => {
  return await api.get(
    'api/Employee/EmployeeLeaveRemainingHours',
    config(token)
  );
};
export const loadAssignee = async (token = null) => {
  return await api.get('api/Employee/GetAssignee', config(token));
};
