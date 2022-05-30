<template>
<nav id="sidebar" class="sidebar-wrapper sidebar-dark">
  <div class="sidebar-content" style="height: calc(100% - 60px);">
    <div class="sidebar-brand">
      <router-link to="/dashboard">
        <span class="sidebar-colored">
          <h3 class="fw-bolder text-white mt-3" style="">Sellify</h3>
        </span>
      </router-link>
    </div>
    <ul class="sidebar-menu">
      <li :class="$route.path === '/dashboard' ? 'active' : ''">
        <router-link to="/dashboard">
          <i class="ti ti-home me-2"></i>Dashboard
        </router-link>
      </li>
      <li :class="$route.path === '/dashboard/add-new' ? 'active' : ''">
        <router-link to="/dashboard/add-new">
          <i class="ti ti-shopping-cart me-2"></i>Add New
        </router-link>
      </li>
      <li :class="$route.path === '/dashboard/plans' ? 'active' : ''">
        <router-link to="/dashboard/plans">
          <i class="ti ti-file-invoice me-2"></i>Plans
        </router-link>
      </li>
      <li :class="$route.path === '/dashboard/withdrawals' ? 'active' : ''">
        <router-link to="/dashboard/withdrawals">
          <i class="ti ti-currency-dollar me-2"></i>Withdrawals
        </router-link>
      </li>
      <li :class="$route.path === '/dashboard/purchases' ? 'active' : ''">
        <router-link to="/dashboard/purchases">
          <i class="ti ti-user me-2"></i>Purchases
        </router-link>
      </li>
      <li :class="$route.path === '/dashboard/settings' ? 'active' : ''">
        <router-link to="/dashboard/settings">
          <i class="ti ti-settings me-2"></i>Settings
        </router-link>
      </li>
    </ul>
  </div>
</nav>
</template>
