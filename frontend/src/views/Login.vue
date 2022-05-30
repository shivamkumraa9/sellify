<template>
  <section class="bg-home d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7 col-md-6">
          <div class="me-lg-5">
            <img src="@/assets/images/user/login.svg" class="img-fluid d-block mx-auto" alt="">
          </div>
        </div>
        <div class="col-lg-5 col-md-6">
          <div class="card login-page bg-white shadow rounded border-0">
            <div class="card-body">
              <h4 class="card-title text-center">Login</h4>
              <form class="login-form mt-4" @submit.prevent="login">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label">
                        Your Email <span class="text-danger">*</span>
                      </label>
                      <div class="form-icon position-relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user fea icon-sm icons">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <input
                          type="email" class="form-control ps-5" placeholder="Email"
                          name="email" required="" v-model="formData.email"
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label">Password <span class="text-danger">*</span></label>
                      <div class="form-icon position-relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key fea icon-sm icons"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                        <input
                          type="password" class="form-control ps-5"
                          placeholder="Password" required="" v-model="formData.password"
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="d-flex justify-content-between">
                      <p class="forgot-pass mb-3">
                        <router-link to="/forgot-password" class="text-dark fw-bold">
                          Forgot password?
                        </router-link>
                      </p>
                    </div>
                  </div>
                  <p v-if="error" class="text-danger text-center fw-bolder">{{ error }}</p>
                  <div class="col-lg-12 mb-0">
                    <div class="d-grid">
                      <button class="btn btn-primary">
                        {{ loading ? 'Loading...' : 'Login' }}
                      </button>
                    </div>
                  </div>
                  <!-- <div class="col-lg-12 mt-4 text-center">
                    <h6>Or Login With</h6>
                    <div class="row">
                      <div class="col mt-3">
                        <div class="d-grid">
                          <a href="javascript:void(0)" class="btn btn-light">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="18px" height="18px"><path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                            </svg>
                            Google
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> -->
                  <div class="col-12 text-center">
                    <p class="mb-0 mt-3">
                      <small class="text-dark me-2">Don't have an account ?</small>
                      <router-link to="/register" class="text-dark fw-bold">Register</router-link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
      loading: false,
      error: '',
    };
  },
  methods: {
    async login() {
      this.loading = true;
      this.$http.post('auth/login', this.formData)
        .then((response) => {
          this.$store.login(response.data.token);
          this.$router.push('/dashboard');
        })
        .catch((error) => {
          this.error = error.response.data.error;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
