import axios from 'axios';

const instance = axios
  .create
  //   {
  //   baseURL: 'http://localhost:5000',
  //   // headers: {
  //   //   'Access-Control-Allow-Origin': '*',
  //   //   crossorigin: true,
  //   //   useCredentails: true
  //   // }
  // }
  ();

instance.interceptors.request.use(
  async config => {
    const token = await sessionStorage.getItem('root');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default instance;
