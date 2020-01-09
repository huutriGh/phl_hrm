import api from './cis.api';

export const login = async ({ userName, password }) => {
  return await api.post('/api/Auth/login', { userName, password });
};
