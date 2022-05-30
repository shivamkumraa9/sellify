import { defineStore } from 'pinia';
import { VueCookieNext } from 'vue-cookie-next';

export default defineStore('auth', {
  state: () => ({
    token: VueCookieNext.getCookie('token'),
    imageBase: import.meta.env.MODE === 'development' ? 'http://localhost:5000/' : '/',
  }),
  actions: {
    login(token) {
      this.token = token;
      VueCookieNext.setCookie('token', token, { expire: '7d' });
    },
    logout() {
      this.token = '';
      VueCookieNext.removeCookie('token');
    },
  },
});
