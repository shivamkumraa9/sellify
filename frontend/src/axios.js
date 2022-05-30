import axios from 'axios';
import { VueCookieNext } from 'vue-cookie-next';

const Axios = axios.create({
  baseURL: import.meta.env.MODE === 'development' ? 'http://localhost:5000/api/' : '/api/',
});

Axios.interceptors.request.use((config) => {
  const token = VueCookieNext.getCookie('token');
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default Axios;
