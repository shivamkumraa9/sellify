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
                <div class="row">
                  <div class="col-lg-12">
                    <p class="text-muted">
                      Please enter your email address. You will receive a link to
                       create a new password via email.
                    </p>
                    <div class="mb-3" v-if="!sent">
                      <label class="form-label">
                        Email address <span class="text-danger">*</span>
                      </label>
                      <div class="form-icon position-relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user fea icon-sm icons">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <input
                          type="email" class="form-control ps-5"
                          placeholder="Enter Your Email Address"
                          name="email" required="" v-model="email"
                          >
                      </div>
                      <p v-if="error" class="text-danger text-center fw-bolder mt-3">{{ error }}</p>
                      <div class="col-lg-12 mt-3">
                        <div class="d-grid">
                          <button class="btn btn-primary">
                            {{ loading ? 'Loading...' : 'Send' }}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div style="font-size: 15px;" v-else
                      class="alert alert-warning mb-3" role="alert"
                    >
                      Email with instructions to reset password has been sent.
                    </div>
                  </div>
                  <div class="mx-auto">
                    <p class="mb-0">
                      <small class="text-dark me-2">Remember your password ?</small>
                       <router-link to="/login" class="text-dark fw-bold">
                         Login
                       </router-link>
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
    return ({
      email: '',
      error: '',
      loading: false,
      sent: false,
    });
  },
  methods: {
    forgot() {
      this.loading = true;
      this.$http.post('auth/request-password-reset', { email: this.email })
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
