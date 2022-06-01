<template>
  <header id="topnav" class="defaultscroll sticky">
    <div class="container">
      <router-link class="logo" to="/">
        <h3 class="fw-bolder" style="display: inline; vertical-align: middle">Sellify</h3>
      </router-link>
      <div class="menu-extras">
        <div class="menu-item">
          <a class="navbar-toggle" id="isToggle" @click="toggleMenu">
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
          </div>
        </div>
        <div id="navigation">
          <ul class="buy-button list-inline mb-0">
            <li v-if="!$store.token" class="list-inline-item mb-0">
              <router-link to="/login" class="btn rounded-pill btn-outline-primary">
                Login
              </router-link>
            </li>
            <li v-if="!$store.token" class="list-inline-item ps-1 mb-0">
              <router-link to="/register" class="btn rounded-pill btn-primary">
                Try For Free
              </router-link>
            </li>
            <li v-if="$store.token" class="list-inline-item mb-0">
              <router-link to="/dashboard" class="btn rounded-pill btn-outline-primary">
                Dashboard
              </router-link>
            </li>
          </ul>
          <ul class="navigation-menu">
            <li :class="$route.path === '/' ? 'active' : ''">
              <router-link to="/" class="sub-menu-item">Home</router-link>
            </li>
            <li :class="$route.path === '/discover' ? 'active' : ''">
              <router-link to="/discover" class="sub-menu-item">Discover</router-link>
            </li>
            <li class="has-submenu parent-menu-item">
              <a href="javascript:void(0)">Features</a><span class="menu-arrow"></span>
              <ul class="submenu">
                <li><a href="/#feat" class="sub-menu-item">Unlimited Products</a></li>
                <li><a href="/#feat" class="sub-menu-item">Analytics Dashboard</a></li>
                <li><a href="/#feat" class="sub-menu-item">Multiple Pricing Types</a></li>
                <li><a href="/#feat" class="sub-menu-item">Start For Free</a></li>
                <li><a href="/#feat" class="sub-menu-item">Easy Withdrawals</a></li>
                <li><a href="/#feat" class="sub-menu-item">Seamless Support</a></li>

              </ul>
            </li>
            <li :class="$route.path === '/pricing' ? 'active' : ''">
              <router-link to="/pricing" class="sub-menu-item">Pricing</router-link>
            </li>
          </ul>
        </div>
      </div>
  </header>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', (ev) => {
      ev.preventDefault();
      this.windowScroll();
    });
    this.activateSubMenus();
  },
  methods: {
    windowScroll() {
      const navbar = document.getElementById('topnav');
      if (navbar != null) {
        if (
          document.body.scrollTop >= 50
            || document.documentElement.scrollTop >= 50
        ) {
          navbar.classList.add('nav-sticky');
        } else {
          navbar.classList.remove('nav-sticky');
        }
      }
    },
    toggleMenu() {
      document.getElementById('isToggle').classList.toggle('open');
      const isOpen = document.getElementById('navigation');
      if (isOpen.style.display === 'block') {
        isOpen.style.display = 'none';
      } else {
        isOpen.style.display = 'block';
      }
    },
    activateSubMenus() {
      const elements = document.getElementById('navigation').getElementsByTagName('a');
      for (let i = 0, len = elements.length; i < len; i += 1) {
        elements[i].onclick = (elem) => {
          // eslint-disable-next-line no-script-url
          if (elem.target.getAttribute('href') === 'javascript:void(0)') {
            const submenu = elem.target.nextElementSibling.nextElementSibling;
            submenu.classList.toggle('open');
          }
        };
      }
    },
  },

};
</script>
