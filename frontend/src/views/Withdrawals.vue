<template>
  <div v-if="!loading">
    <div class="d-md-flex justify-content-between align-items-center">
      <h5 class="mb-0">Withdrawals</h5>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <div class="card border-0 rounded shadow p-4 mt-4">
          <h4 class="mb-0">Balance : ₹{{ data.balance.toFixed(2) }}</h4>
          <div class="mt-4">
            <h6 class="mb-0">Withdrawal generally takes 24-48 hours.</h6>
            <div class="mt-4">
              <form @submit.prevent="request">
                <div class="row mt-4">
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <div class="form-icon position-relative">
                        <input
                          name="name" id="last" type="number" required="" min="10"
                          class="form-control" placeholder="Amount :" v-model="amount"
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <div class="form-icon position-relative">
                        <input
                          name="name" id="last" type="email" required=""
                          class="form-control" placeholder="Paypal Email :" v-model="paypalEmail"
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <p v-if="error" class="text-danger fw-bolder">{{ error }}</p>
                  <div class="col-sm-12">
                    <button class="btn btn-primary">
                      {{ sendingRequest ? 'Requesting...' : 'Request' }}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- <div class="card border-0 rounded shadow p-4 mt-4">
          <h5 class="mb-0">Connect Stripe :</h5>
          <div class="mt-4">
            <h6 class="mb-0">Connect your stripe account to accept payments</h6>
            <div class="mt-4">
              <button class="btn btn-primary">Connect Stripe</button>
            </div>
          </div>
        </div> -->
      </div>
      <div class="col-lg-8">
        <div class="row">
          <div class="col-12 mt-4">
            <div class="d-flex justify-content-between p-3 bg-white shadow rounded-top">
              <h6 class="fw-bold mb-0">Past Withdrawal Requests</h6>
            </div>
            <div class="table-responsive shadow rounded">
              <table class="table table-center bg-white mb-0">
                <thead>
                  <tr>
                    <th class="border-bottom p-3">No.</th>
                    <th class="text-center border-bottom p-3">Amount</th>
                    <th class="text-center border-bottom p-3">
                      Paypal
                    </th>
                    <th class="text-center border-bottom p-3">Time</th>
                    <th class="text-center border-bottom p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in data.withdrawals" :key="index">
                    <th class="p-3">{{ index + 1 }}</th>
                    <td class="text-center p-3">₹{{ item.amount }}</td>
                    <td class="text-center p-3">{{ item.paypalEmail }}</td>
                    <td class="text-center p-3">{{ new Date(item.createdAt).toLocaleString() }}</td>
                    <td class="text-center p-3">
                      <div class="badge rounded px-3 py-1"
                        :class="item.status === 'failed' || item.status === 'cancelled'
                                  ? 'bg-soft-danger'
                                  : 'bg-soft-success'"
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
      data: {},
      amount: 10,
      paypalEmail: '',
      sendingRequest: false,
      error: '',
    });
  },
  mounted() {
    this.loading = true;
    this.$http.get('payments/withdraw')
      .then((response) => {
        this.data = response.data;
        this.loading = false;
      });
  },
  methods: {
    request() {
      this.sendingRequest = true;
      this.error = '';
      this.$http.post('payments/withdraw', { amount: this.amount, paypalEmail: this.paypalEmail })
        .then((response) => {
          this.data.withdrawals.unshift(response.data);
          this.data.balance -= this.amount;
        })
        .catch((error) => {
          this.error = error.response.data.error;
        })
        .finally(() => {
          this.sendingRequest = false;
        });
    },
  },
};
</script>
