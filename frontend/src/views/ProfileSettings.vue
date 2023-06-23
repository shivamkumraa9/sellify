<template>
  <div v-if="!loading">
    <div class="d-md-flex justify-content-between align-items-center">
      <h5 class="mb-0">Profile Setting</h5>
    </div>
    <div class="row">
      <div class="col-md-6 mt-4">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <h5 class="text-md-start text-center mb-0">Personal Detail :</h5>
            <div class="mt-4 text-md-start text-center d-sm-flex">
              <svg v-if="!formData.profilePic" class="avatar float-md-left avatar-medium rounded-circle shadow me-md-4" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path fill="#494c4e" d="M9 0a9 9 0 0 0-9 9 8.654 8.654 0 0 0 .05.92 9 9 0 0 0 17.9 0A8.654 8.654 0 0 0 18 9a9 9 0 0 0-9-9zm5.42 13.42c-.01 0-.06.08-.07.08a6.975 6.975 0 0 1-10.7 0c-.01 0-.06-.08-.07-.08a.512.512 0 0 1-.09-.27.522.522 0 0 1 .34-.48c.74-.25 1.45-.49 1.65-.54a.16.16 0 0 1 .03-.13.49.49 0 0 1 .43-.36l1.27-.1a2.077 2.077 0 0 0-.19-.79v-.01a2.814 2.814 0 0 0-.45-.78 3.83 3.83 0 0 1-.79-2.38A3.38 3.38 0 0 1 8.88 4h.24a3.38 3.38 0 0 1 3.1 3.58 3.83 3.83 0 0 1-.79 2.38 2.814 2.814 0 0 0-.45.78v.01a2.077 2.077 0 0 0-.19.79l1.27.1a.49.49 0 0 1 .43.36.16.16 0 0 1 .03.13c.2.05.91.29 1.65.54a.49.49 0 0 1 .25.75z"></path></svg>
              <img
                v-else
                :src="formData.profilePic"
                class="avatar float-md-left avatar-medium rounded-circle shadow me-md-4" alt=""
              >
              <div class="mt-md-4 mt-3 mt-sm-0">
                <input
                  style="display: none" type="file"
                  id="fileInput" name="fileInput" accept=".jpg,.png,.jpeg" @change="uploadPic"
                />
                <a
                  href="javascript:void(0)"
                  class="btn btn-primary mt-2"
                  @click="clickFileInput"
                >
                {{ updatingPic ? 'Uploading...' : 'Change Picture' }}
                </a>
                <p style="font-size: 14px;" class="mt-1">
                  Recommended size: 500x500, Max size: 2MB
                </p>
              </div>
            </div>
            <p v-if="picError" class="text-danger fw-bolder mt-1">
              {{ picError }}
            </p>
            <form @submit.prevent="updateProfile">
              <div class="row mt-4">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">First Name</label>
                    <div class="form-icon position-relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user fea icon-sm icons">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <input
                        name="name" id="first" type="text" class="form-control ps-5"
                        placeholder="First Name :" v-model="formData.firstName"
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Last Name</label>
                    <div class="form-icon position-relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-check fea icon-sm icons">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <polyline points="17 11 19 13 23 9"></polyline>
                      </svg>
                      <input
                        name="name" id="last" type="text" class="form-control ps-5"
                        placeholder="Last Name :" v-model="formData.lastName"
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Your Email</label>
                    <div class="form-icon position-relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail fea icon-sm icons"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                      <input
                        name="email" id="email" type="email"
                        class="form-control ps-5" placeholder="Your email :"
                        v-model="formData.email" required="true"
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="mb-3">
                    <label class="form-label">Description</label>
                    <div class="form-icon position-relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle fea icon-sm icons"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                      <textarea
                        name="comments" id="comments" rows="4"
                        class="form-control ps-5" placeholder="Description :"
                        v-model="formData.description"
                      >
                      </textarea>
                    </div>
                  </div>
                </div>
              </div>
              <p v-if="profileError" class="text-danger fw-bolder">
                {{ profileError }}
              </p>
              <div class="row">
                <div class="col-sm-12">
                  <button class="btn btn-primary">
                    {{ updatingProfile ? 'Updating...' : 'Update' }}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6 mt-4">
        <div class="card border-0 rounded shadow p-4">
          <h5 class="mb-0">Change password :</h5>
          <form @submit.prevent="updatePassword">
            <div class="row mt-4">
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Old password :</label>
                  <div class="form-icon position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key fea icon-sm icons"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                    <input
                      type="password" class="form-control ps-5"
                      placeholder="Old password" required=""
                      v-model="changePasswordData.oldPassword"
                    >
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">New password :</label>
                  <div class="form-icon position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key fea icon-sm icons"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                    <input
                      type="password" class="form-control ps-5"
                      placeholder="New password" required=""
                      v-model="changePasswordData.password1"
                    >
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Re-type New password :</label>
                  <div class="form-icon position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key fea icon-sm icons"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                    <input
                      type="password" class="form-control ps-5"
                      placeholder="Re-type New password" required=""
                      v-model="changePasswordData.password2"
                    >
                  </div>
                </div>
              </div>
              <p v-if="passwordError" class="text-danger fw-bolder">
                {{ passwordError }}
              </p>
              <div class="col-lg-12 mt-2 mb-0">
                <button class="btn btn-primary">
                  {{ changingPassword ? 'Changing...' : 'Change' }}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <Loader v-else />
</template>

<script>
import Loader from '../components/Loader.vue';

export default {
  components: {
    Loader,
  },
  data() {
    return ({
      formData: {
        description: '',
        email: '',
        firstName: '',
        lastName: '',
        profilePic: '',
      },
      changePasswordData: {
        oldPassword: '',
        password1: '',
        password2: '',
      },
      loading: true,
      updatingProfile: false,
      updatingPic: false,
      changingPassword: false,
      profileError: '',
      picError: '',
      passwordError: '',
    });
  },
  mounted() {
    this.$http.get('profile')
      .then((response) => {
        this.formData = response.data;
        this.loading = false;
      });
  },
  methods: {
    uploadPic(event) {
      this.updatingPic = true;
      const formData = new FormData();
      formData.append('file', event.target.files[0]);
      this.$http.post('profile/profile-pic', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
        .then((response) => {
          this.formData.profilePic = response.data.path;
          this.picError = '';
        })
        .catch((error) => {
          this.picError = error.response.data.error;
        })
        .finally(() => {
          this.updatingPic = false;
        });
    },
    clickFileInput() {
      document.querySelector('#fileInput').click();
    },
    updateProfile() {
      this.updatingProfile = true;
      const data = structuredClone(JSON.parse(JSON.stringify(this.formData)));
      delete data.profilePic;
      this.$http.post('profile', data)
        .then(() => {
          this.profileError = '';
        })
        .catch((error) => {
          this.profileError = error.response.data.error;
        })
        .finally(() => {
          this.updatingProfile = false;
        });
    },
    updatePassword() {
      this.changingPassword = true;
      this.$http.post('profile/change-password', this.changePasswordData)
        .then(() => {
          this.passwordError = '';
        })
        .catch((error) => {
          this.passwordError = error.response.data.error;
        })
        .finally(() => {
          this.changingPassword = false;
        });
    },
  },
};
</script>
