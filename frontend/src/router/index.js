import { createRouter, createWebHistory } from 'vue-router';

import useAuthStore from '../stores/auth';
import Default from '../layouts/Default.vue';
import Dashboard from '../layouts/Dashboard.vue';

import Home from '../views/Home.vue';
import Pricing from '../views/Pricing.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import ForgotPassword from '../views/ForgotPassword.vue';
import ForgotPasswordConfirm from '../views/ForgotPasswordConfirm.vue';
import Analytics from '../views/Analytics.vue';
import ProfileSettings from '../views/ProfileSettings.vue';
import Plans from '../views/Plans.vue';
import Withdrawals from '../views/Withdrawals.vue';
import AddEditProduct from '../views/AddEditProduct.vue';
import Purchases from '../views/Purchases.vue';
import Discover from '../views/Discover.vue';
import Product from '../views/Product.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Default,
      children: [
        {
          path: '/',
          component: Home,
        },
        {
          path: '/pricing',
          component: Pricing,
        },
        {
          path: '/discover',
          component: Discover,
        },
      ],
    },
    {
      path: '/dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          component: Analytics,
        },
        {
          path: 'settings',
          component: ProfileSettings,
        },
        {
          path: 'plans',
          component: Plans,
        },
        {
          path: 'withdrawals',
          component: Withdrawals,
        },
        {
          path: 'add-new',
          component: AddEditProduct,
        },
        {
          path: 'purchases',
          component: Purchases,
        },
        {
          path: 'edit/:id',
          component: AddEditProduct,
        },
      ],
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/register',
      component: Register,
    },
    {
      path: '/forgot-password',
      component: ForgotPassword,
    },
    {
      path: '/forgot-password/confirm',
      component: ForgotPasswordConfirm,
    },
    {
      path: '/p/:url',
      component: Product,
    },
  ],
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !useAuthStore().token) {
    return { path: '/login' };
  }
  return true;
});

export default router;
