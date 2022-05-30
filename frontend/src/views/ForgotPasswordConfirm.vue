<template>
  <section class="bg-home d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7 col-md-6">
          <div class="me-lg-5">
            <img src="@/assets/images/user/recovery.svg" class="img-fluid d-block mx-auto" alt="">
          </div>
        </div>
        <div class="col-lg-5 col-md-6">
          <div class="card shadow rounded border-0">
            <div class="card-body">
              <h4 class="card-title text-center">Recover Account</h4>
              <form class="login-form mt-4" @submit.prevent="forgot">
                <div class="row" v-if="!sent">
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label">Password <span class="text-danger">*</span></label>
                      <div class="form-icon position-relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key fea icon-sm icons"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                        <input
                          type="password" class="form-control ps-5"
                          placeholder="Password" required="" v-model="formData.password1"
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label">Password Confirm
                        <span class="text-danger">*</span>
                      </label>
                      <div class="form-icon position-relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key fea icon-sm icons"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                        <input
                          type="password" class="form-control ps-5"
                          placeholder="Password" required="" v-model="formData.password2"
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <p v-if="error" class="text-danger text-center fw-bolder">{{ error }}</p>
                      <div class="d-grid">
                        <button class="btn btn-primary">
                          {{ loading ? 'Loading...' : 'Send' }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="font-size: 15px;"
                  class="alert alert-success mb-3" role="alert" v-else
                >
                  Your Password has been set. Please
                  <router-link to="/login" class="text-white">
                    Login
                  </router-link>
                  here to continue.
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
    return ({
      formData: {
        password1: '',
        password2: '',
        token: this.$route.query.token,
      },
      error: '',
      loading: false,
      sent: false,
    });
  },
  methods: {
    forgot() {
      this.loading = true;
      this.$http.post('auth/password-reset', this.formData)
        .then(() => {
          this.sent = true;
          this.error = '';
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
