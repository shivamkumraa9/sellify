<template>
  <div v-if="!loading && found" style="max-width: 1080px;" class="mx-auto my-md-5">
    <div class="mx-auto shadow-lg product-container">
      <img
        class="text-center" style="width: 100%"
        :src="data.cover" alt="">
      <div class="py-3 px-3 px-md-4 py-md-4">
        <div class="d-flex justify-content-between">
          <div>
            <h4 style="margin-bottom: 0px; font-weight: 900;">
              {{ data.name }}
            </h4>
            <p
              class="fw-light mt-0 fs-6" style="margin-bottom: 0px;"
            >
              By
              {{
                data.owner.firstName + data.owner.lastName ?
                  data.owner.firstName + ' ' + data.owner.lastName
                :
                  'Anonymous'
              }}
            </p>
            <p v-if="data.priceStrategy === 'free'" class="fs-5 fw-bold text-dark">Free</p>
            <p v-if="data.priceStrategy === 'fixed'" class="fs-5 fw-bold text-dark">
              ₹{{ data.price }}
            </p>
            <p v-if="data.priceStrategy === 'variable'" class="fs-5 fw-bold text-dark">
              Min Price: ₹{{ data.minPrice }}
            </p>
          </div>
          <div class="d-none d-md-block">
            <Buy :data="data" />
          </div>
        </div>
        <div class="mt-2">
          <span v-html="data.description"></span>
        </div>
        <Buy class="d-grid d-md-none mt-3" :data="data" />
      </div>
    </div>
  </div>
  <NotFound class="m-5" v-else-if="!loading && !found" />
  <Loader class="mt-5" v-else />
</template>

<script>
import Loader from '../components/Loader.vue';
import NotFound from '../components/NotFound.vue';
import Buy from '../components/Buy.vue';

export default {
  components: {
    Loader,
    NotFound,
    Buy,
  },
  data() {
    return ({
      loading: true,
      data: {},
      found: true,
    });
  },
  mounted() {
    this.$http.get(`product/get/${this.$route.params.url}`)
      .then((response) => {
        this.data = response.data;
      })
      .catch(() => {
        this.found = false;
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>

<style scoped>
@media only screen and (min-width: 640px) {
  .product-container {
    width: 83.3333%;
  }
}
</style>
