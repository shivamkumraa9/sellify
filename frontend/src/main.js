/* eslint-disable import/first */
import { createApp } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import { createPinia } from 'pinia';
import useAuthStore from './stores/auth';

import App from './App.vue';
import Axios from './axios';
import router from './router';

import './assets/style.css';
import './assets/dashboard.css';

const app = createApp(App);

app.use(VueApexCharts);
app.use(createPinia());

app.use(router);
app.config.globalProperties.$http = Axios;
app.config.globalProperties.$store = useAuthStore();

app.mount('#app');
