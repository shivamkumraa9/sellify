<template>
  <div class="page-wrapper landrick-theme toggled">
    <Sidebar />
    <main class="page-content bg-light">
      <TopHeader />
      <div class="container-fluid">
        <div class="layout-specing">
          <router-view></router-view>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import TopHeader from '../components/TopHeader.vue';
import Sidebar from '../components/Sidebar.vue';

export default {
  components: {
    TopHeader,
    Sidebar,
  },
};
</script>
