<template>
  <div>
    <form v-if="data.priceStrategy === 'variable'" @submit.prevent="buy">
      <input
        :min="data.minPrice" v-model="price" type="number"
        class="form-control" required
      >
      <button class="btn btn-lg btn-primary mt-2" :disabled="buying">
        {{ !buying ? 'Pay what you feels right' : 'Loading...' }}
      </button>
    </form>
    <button v-if="data.priceStrategy === 'free'" @click="buy"
      class="btn btn-lg btn-primary" :disabled="buying">
      {{ !buying ? 'Download for Free' : 'Loading...' }}
    </button>
    <button v-if="data.priceStrategy === 'fixed'" @click="buy"
      class="btn btn-lg btn-primary" :disabled="buying">
      {{ !buying ? 'Buy Now For ₹' + data.price : 'Loading...' }}
    </button>
    <p v-if="data.showSales && data.priceStrategy !== 'free'" class="mt-1 text-center">
      Total sales: {{ data.totalSales }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return ({
      price: this.data.minPrice,
      buying: false,
    });
  },
  methods: {
    buy() {
      this.buying = true;
      // eslint-disable-next-line no-underscore-dangle
      this.$http.post(`product/buy/${this.data._id}`, { price: this.price })
        .then((response) => {
          window.open(response.data.url, '_blank');
          this.buying = false;
        });
    },
  },
};
</script>
