<template>
  <div v-if="!loading">
    <div class="col-xl-12 mt-4">
      <div class="d-flex justify-content-between p-4 bg-white shadow rounded-top">
        <h6 class="fw-bold mb-0">Purchases</h6>
        <div class="mb-0 position-relative">
          <select @change="sortData" v-model="so" class="form-select form-control" id="yearchart">
            <option value="All Products">All Products</option>
            <option v-for="item in products" :key="item._id" :value="item._id">
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="table-responsive shadow rounded-bottom" data-simplebar style="height: 550px;">
        <table class="table table-center bg-white mb-0">
          <thead>
            <tr>
              <th class="border-bottom p-3">No.</th>
              <th class="text-center border-bottom p-3">Product</th>
              <th class="text-center border-bottom p-3">Customer Name</th>
              <th class="text-center border-bottom p-3">Customer Email</th>
              <th class="text-center border-bottom p-3">Amount</th>
              <th class="text-center border-bottom p-3">Time</th>
              <th class="text-center border-bottom p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in purchases" :key="index">
              <th class="p-3">{{ index + 1 }}</th>
              <td class="p-3">
                <router-link :to="`/dashboard/edit/${item.product._id}`" class="text-primary">
                  <div class="text-center">
                    {{ item.product.name }}
                  </div>
                </router-link>
              </td>
              <td class="text-center p-3">{{ item.customerName }}</td>
              <td class="text-center p-3">{{ item.customerEmail }}</td>
              <td class="text-center p-3">₹{{ item.amount.toFixed(2) }}</td>
              <td class="text-center p-3">{{ new Date(item.createdAt).toLocaleString() }}</td>
              <td class="text-center p-3">
                <div class="badge rounded px-3 py-1"
                  :class="item.status === 'success' ? 'bg-soft-success' : 'bg-soft-danger'"
                >
                  {{ item.status }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
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
      loading: true,
      allPurchases: [],
      purchases: [],
      products: [],
      so: 'All Products',
    });
  },
  mounted() {
    this.loading = true;
    this.$http.get('product/purchases')
      .then((response) => {
        this.purchases = response.data.purchases;
        this.allPurchases = response.data.purchases;
        this.products = response.data.products;
        this.loading = false;
      });
  },
  methods: {
    sortData() {
      if (this.so !== 'All Products') {
        // eslint-disable-next-line no-underscore-dangle
        this.purchases = this.allPurchases.filter((item) => item.product._id === this.so);
      } else {
        this.purchases = this.allPurchases;
      }
    },
  },
};
</script>
