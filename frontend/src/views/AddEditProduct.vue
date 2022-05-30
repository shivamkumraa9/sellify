<template>
  <div v-if="!loadingData && found">
    <div class="d-md-flex justify-content-between align-items-center">
      <h5 class="mb-0">{{ id ? 'Update' : 'Add a new' }} product</h5>
    </div>
    <div class="row">
      <div class="col-md-8 mt-4">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <form @submit.prevent="addEditProduct">
              <div class="mb-3">
                <label class="form-label">Product Name</label>
                <div class="form-icon position-relative">
                  <input
                    name="name" id="first" type="text" class="form-control" required
                    placeholder="Enter Product Name: " v-model="formData.name"
                  >
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Upload a Zip or Txt File (upto 5MB)</label>
                <input
                  style="display: none" type="file"
                  id="fileInput" name="fileInput" accept=".zip,.txt" @change="upload"
                />
                <div @click="clickFileInput('#fileInput')"
                  class="text-center shadow rounded text-dark upload-btn">
                  <div>
                    <svg style="width: 2.2rem; height: 2.2rem;" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"></path></svg>
                    <h6>{{ uploadingFile ? 'Uploading...' : 'UPLOAD PRODUCT' }}</h6>
                    <p v-if="formData.file">{{ formData.file }}</p>
                    <p v-if="fileError" class="text-danger fw-bolder">{{ fileError }}</p>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Price Type</label>
                <select
                  class="form-select form-control" id="yearchart"
                  v-model="formData.priceStrategy"
                >
                  <option value="fixed">Fixed</option>
                  <option value="variable">Variable</option>
                  <option value="free">Free</option>
                </select>
              </div>
              <div v-if="formData.priceStrategy === 'fixed'" class="mb-3">
                <label class="form-label">Price</label>
                <div class="form-icon position-relative">
                  <input
                    name="name" id="first" type="text" required
                    class="form-control" placeholder="₹" v-model="formData.price"
                  >
                </div>
              </div>
              <div v-if="formData.priceStrategy === 'variable'" class="mb-3">
                <label class="form-label">Min Price</label>
                <div class="form-icon position-relative">
                  <input
                    name="name" id="first" type="text" required
                    class="form-control" placeholder="₹" v-model="formData.minPrice"
                  >
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Description</label>
                <div class="form-icon position-relative">
                  <textarea
                    rows="4" class="form-control" required
                    placeholder="Description :" v-model="formData.description"
                  >
                  </textarea>
                </div>
                <p><a href="https://ej2.syncfusion.com/demos/rich-text-editor/online-html-editor/">HTML</a> description is supported</p>
              </div>
              <div class="mb-3">
                <label class="form-label">Ideal size of 900 X 650 (upto 2MB)</label>
                <input
                  style="display: none" type="file"
                  id="coverInput" name="coverInput" accept=".jpg,.png,.jpeg" @change="upload"
                />
                <div @click="clickFileInput('#coverInput')"
                  class="text-center shadow rounded text-dark upload-btn">
                  <div>
                    <svg style="width: 2.2rem; height: 2.2rem;" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"></path></svg>
                    <h6>{{ uploadingCover ? 'Uploading...' : 'UPLOAD COVER IMAGE' }}</h6>
                    <p v-if="formData.cover">{{ formData.cover }}</p>
                    <p v-if="coverError" class="text-danger fw-bolder">{{ coverError }}</p>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Product URL</label>
                <div class="input-group mb-3">
                  <span class="input-group-text">www.sellify.com/p/</span>
                  <input
                    type="text" class="form-control" placeholder="text-product/"
                    v-model="formData.url" required
                  >
                </div>
              </div>
              <div class="mt-4">
                <div class="mb-1">
                  <div class="form-check">
                    <input
                      v-model="formData.showSales" class="form-check-input"
                      type="checkbox" value="" id="noti1"
                    >
                    <label class="form-check-label" for="noti1">
                      Show total sales on the product page
                    </label>
                  </div>
                </div>
                <div class="mb-1">
                  <div class="form-check">
                    <input
                      v-model="formData.hide" class="form-check-input"
                      type="checkbox" value="" id="noti1"
                    >
                    <label class="form-check-label" for="noti1">Hide the product</label>
                  </div>
                </div>
                <div class="mb-1">
                  <div class="form-check">
                    <input
                      v-model="formData.allowNewSales" class="form-check-input"
                      type="checkbox" value="" id="noti1"
                    >
                    <label class="form-check-label" for="noti1">Don't allow new sales</label>
                  </div>
                </div>
              </div>
              <p v-if="error" class="text-danger fw-bolder">{{ error }}</p>
              <button class="mt-3 btn btn-primary">
                {{ loading ? 'Loading...' : 'Submit' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <NotFound v-else-if="!loadingData && !found" />
  <Loader v-else />
</template>

<script>
import Loader from '../components/Loader.vue';
import NotFound from '../components/NotFound.vue';

export default {
  components: {
    Loader,
    NotFound,
  },
  data() {
    return ({
      id: this.$route.params.id,
      loadingData: false,
      found: true,
      error: '',
      loading: false,
      uploadingCover: false,
      coverError: '',
      uploadingFile: false,
      fileError: '',
      formData: {},
    });
  },
  mounted() {
    this.mount();
  },
  methods: {
    mount() {
      if (this.id) {
        this.loadingData = true;
        this.$http.get(`product/owner-get/${this.id}`)
          .then((response) => {
            // eslint-disable-next-line no-underscore-dangle
            delete response.data._id;
            // eslint-disable-next-line no-underscore-dangle
            delete response.data.__v;
            delete response.data.owner;
            delete response.data.createdAt;
            this.formData = response.data;
            this.loadingData = true;
          })
          .catch(() => {
            this.found = false;
          })
          .finally(() => {
            this.loadingData = false;
          });
      } else {
        this.formData = {
          name: '',
          price: 1,
          minPrice: 1,
          priceStrategy: 'fixed',
          description: '',
          file: '',
          cover: '',
          url: '',
          showSales: true,
          hide: false,
          allowNewSales: true,
        };
      }
    },
    addEditProduct() {
      this.loading = true;
      this.$http.post(this.id ? `product/edit/${this.id}` : 'product/add', this.formData)
        .then(() => {
          if (!this.id) {
            this.$router.push('/dashboard');
          }
        })
        .catch((error) => {
          this.error = error.response.data.error;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    upload(event) {
      const isFile = event.target.id === 'fileInput';
      const url = isFile ? 'product/upload-file' : 'product/upload-image';
      const uploading = isFile ? 'uploadingFile' : 'uploadingCover';
      const errors = isFile ? 'fileError' : 'coverError';
      const field = isFile ? 'file' : 'cover';

      const formData = new FormData();
      formData.append('file', event.target.files[0]);
      this.$http.post(url, formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
        .then((response) => {
          this.formData[field] = response.data.file.replace('public/', '');
        })
        .catch((error) => {
          this[errors] = error.response.data.error;
        })
        .finally(() => {
          this[uploading] = false;
        });
    },
    clickFileInput(id) {
      document.querySelector(id).click();
    },
  },
  watch: {
    $route() {
      this.id = this.$route.params.id;
      this.mount();
    },
  },
};
</script>

<style scoped>
  .upload-btn{
    border: 2px dashed #3c4858;
    cursor: pointer;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
</style>
