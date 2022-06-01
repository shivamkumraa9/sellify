<template>
  <div>
    <section class="section bg-light">
      <div class="container mt-5">
        <div class="section-title text-center mb-4 pb-2">
          <h2 class="mb-3">Search any product</h2>
          <form @submit.prevent="search">
            <div class="col-md-6 col-lg-5 mx-auto">
              <div class="input-group mb-3">
                  <input type="text" v-model="text" class="form-control"
                    aria-label="Amount (to the nearest dollar)">
                  <span @click="search" style="cursor: pointer;" class="input-group-text">
                    <svg style="width: 1.2rem; height: 1.2rem;" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <circle cx="10" cy="10" r="7" />
                      <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                  </span>
              </div>
            </div>
          </form>
        </div>
        <div class="row" v-if="!loading">
          <div v-for="item in data" :key="item._id" class="col-xl-3 col-lg-4 col-md-6 mt-4">
            <div class="card blog blog-primary rounded border-0 shadow overflow-hidden">
              <div class="position-relative">
                <img :src="$store.imageBase + item.cover" class="card-img-top" alt="...">
                <div class="overlay rounded-top"></div>
              </div>
              <div class="card-body content">
                <h5>
                  <router-link :to="`/p/${item.url}`" class="card-title title text-dark">
                    {{ item.name }}
                  </router-link>
                </h5>
                <div class="post-meta d-flex justify-content-between mt-3">
                  <ul class="list-unstyled mb-0">
                    <p
                      class="fw-light mt-0 fs-6" style="margin-bottom: 0px;"
                    >
                      By
                      {{
                        item.owner.firstName + item.owner.lastName ?
                          item.owner.firstName + ' ' + item.owner.lastName
                        :
                          'Anonymous'
                      }}
                  </p>
                    <li class="list-inline-item me-2 mb-0">
                      <p v-if="item.priceStrategy === 'free'" class="text-muted like">Free</p>
                      <p v-if="item.priceStrategy === 'fixed'" class="text-muted like">
                        ₹{{ item.price }}
                      </p>
                      <p v-if="item.priceStrategy === 'variable'" class="text-muted like">
                        Min Price: ₹{{ item.minPrice }}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Loader v-else />
      </div>
    </section>
  </div>
</template>

<script>
import Loader from '../components/Loader.vue';

export default {
  components: {
    Loader,
  },
  data() {
    return ({
      loading: true,
      data: [],
      text: '',
    });
  },
  mounted() {
    this.search();
  },
  methods: {
    search() {
      this.loading = true;
      const query = this.text ? `text=${this.text}` : '';
      this.$http.get(`product/search?${query}`)
        .then((response) => {
          this.data = response.data;
          this.loading = false;
        });
    },
  },
};
</script>
