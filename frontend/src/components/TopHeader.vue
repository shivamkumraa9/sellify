<template>
  <div class="top-header">
    <div class="header-bar d-flex justify-content-between border-bottom">
      <div class="d-flex align-items-center">
        <a href="#" class="logo-icon me-3">
          <span class="big">
          </span>
        </a>
        <a id="close-sidebar" class="btn btn-icon btn-soft-light" href="javascript:void(0)"
          @click="toogle"
          >
          <i class="ti ti-menu-2"></i>
        </a>
      </div>
      <ul class="list-unstyled mb-0">
        <li class="list-inline-item mb-0 ms-1">
          <div class="dropdown dropdown-primary">
            <button
              type="button"
              class="dropdown-toggle p-0"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style="background-color: #fff; border: none;"
            >
            <svg class="avatar avatar-ex-small rounded" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path fill="#494c4e" d="M9 0a9 9 0 0 0-9 9 8.654 8.654 0 0 0 .05.92 9 9 0 0 0 17.9 0A8.654 8.654 0 0 0 18 9a9 9 0 0 0-9-9zm5.42 13.42c-.01 0-.06.08-.07.08a6.975 6.975 0 0 1-10.7 0c-.01 0-.06-.08-.07-.08a.512.512 0 0 1-.09-.27.522.522 0 0 1 .34-.48c.74-.25 1.45-.49 1.65-.54a.16.16 0 0 1 .03-.13.49.49 0 0 1 .43-.36l1.27-.1a2.077 2.077 0 0 0-.19-.79v-.01a2.814 2.814 0 0 0-.45-.78 3.83 3.83 0 0 1-.79-2.38A3.38 3.38 0 0 1 8.88 4h.24a3.38 3.38 0 0 1 3.1 3.58 3.83 3.83 0 0 1-.79 2.38 2.814 2.814 0 0 0-.45.78v.01a2.077 2.077 0 0 0-.19.79l1.27.1a.49.49 0 0 1 .43.36.16.16 0 0 1 .03.13c.2.05.91.29 1.65.54a.49.49 0 0 1 .25.75z"></path></svg>
              <!-- <img src="@/assets/images/profile-user.png"
                class="avatar avatar-ex-small rounded" alt=""> -->
            </button>
            <div
              class="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3"
              style="min-width: 200px;"
              >
              <router-link class="dropdown-item text-dark" to="/dashboard">
                <span class="mb-0 d-inline-block me-1">
                <i class="ti ti-home"></i>
                </span> Dashboard
              </router-link>
              <router-link class="dropdown-item text-dark" to="/dashboard/settings">
                <span class="mb-0 d-inline-block me-1">
                  <i class="ti ti-settings"></i>
                </span> Settings
                </router-link>
              <div class="dropdown-divider border-top"></div>
                <router-link @click="logout" class="dropdown-item text-dark" to="/login">
                  <span class="mb-0 d-inline-block me-1">
                    <i class="ti ti-logout"></i>
                  </span> Logout
                </router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    toogle() {
      const page = document.getElementsByClassName('page-wrapper')[0];
      page.classList.toggle('toggled');
    },
    logout() {
      this.$store.logout();
    },
  },
};
</script>
