import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:44358',
});

instance.interceptors.request.use(
  async (config) => {
    const user = await sessionStorage.getItem('persist:root');
    const currentUser = JSON.parse(JSON.parse(user).user).currentUser;
    if (currentUser) {
      config.headers.Authorization = `Bearer ${
        currentUser.token ? currentUser.token : ''
      }`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
