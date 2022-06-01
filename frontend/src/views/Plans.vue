<template>
  <div v-if="!loading">
    <div class="d-md-flex justify-content-between align-items-center">
      <h5 class="mb-0">Plans</h5>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade active show" id="Month" role="tabpanel" aria-labelledby="Monthly"
          >
            <div class="row justify-content-center">
              <div
                v-for="item in data.plans" :key="item._id"
                class="col-lg-4 col-md-6 col-12 mt-4 pt-2"
              >
                <div class="card pricing-rates business-rate shadow bg-white border-0 rounded">
                  <div
                    v-if="item.name === 'Standard'"
                    class="ribbon ribbon-right ribbon-warning overflow-hidden"
                  >
                    <span class="text-center d-block shadow small h6">Best</span>
                  </div>
                  <div class="card-body">
                    <h6 class="title fw-bold text-uppercase text-primary mb-4">{{ item.name }}</h6>
                    <div class="d-flex mb-4">
                       <span class="h6 mb-0 mt-2">₹</span>
                       <span class="price h1 mb-0">{{ item.price }}</span>
                       <span class="h5 align-self-end mb-1"> /mo</span>
                    </div>
                    <ul class="list-unstyled mb-0 ps-0">
                      <li class="h6 text-muted mb-0">
                        <span class="text-primary h5 me-2">
                          <i class="uil uil-check-circle align-middle"></i>
                        </span>Commission: {{ item.SaleCommission }}% + Stripe Fees
                      </li>
                      <li class="h6 text-muted mb-0">
                        <span class="text-primary h5 me-2">
                          <i class="uil uil-check-circle align-middle"></i>
                        </span>Unlimited Products
                      </li>
                      <li class="h6 text-muted mb-0">
                        <span class="text-primary h5 me-2">
                          <i class="uil uil-check-circle align-middle"></i>
                        </span>Dashboard Access
                      </li>
                      <li class="h6 text-muted mb-0">
                        <span class="text-primary h5 me-2">
                          <i class="uil uil-check-circle align-middle"></i>
                        </span>Access to all features
                      </li>
                      <li class="h6 text-muted mb-0">
                        <span class="text-primary h5 me-2">
                          <i class="uil uil-check-circle align-middle"></i>
                        </span>Withdrawal Time: 24-48 hrs
                      </li>
                    </ul>
                    <button v-if="data.userDetails.plan === item._id" :disabled="true"
                      class="btn btn-primary mt-4">
                      Current
                    </button>
                    <button v-else-if="item.name === 'Free'"
                      class="btn btn-primary mt-4">
                      Free
                    </button>
                    <button v-else @click="selectPlan(item.name)"
                      data-bs-toggle="modal" data-bs-target="#exampleModal2"
                      class="btn btn-primary mt-4">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="data.userDetails.subscriptionStatus">
      <h6 class="mt-3">
        {{ !data.userDetails.isCancelled? 'Next Billing' : 'Will be cancelled on' }}
        : {{ new Date(data.userDetails.StripeNextDate).toDateString() }}
      </h6>
      <h6
        data-bs-toggle="modal" data-bs-target="#exampleModal"
        style="cursor: pointer;"
        :class="data.userDetails.isCancelled ? 'text-success' : 'text-danger'">
        {{ data.userDetails.isCancelled ? 'Resume' : 'Cancel' }} Subscription
      </h6>
    </div>
    <div class="row" v-if="data.transctions.length > 0">
      <div class="mt-4 d-md-flex justify-content-between align-items-center">
        <h5 class="mb-0">Transactions</h5>
      </div>
      <div class="col-12 mt-2">
        <div class="table-responsive shadow rounded">
          <table class="table table-center bg-white mb-0">
            <thead>
              <tr>
                <th class="border-bottom p-3">No.</th>
                <th class="text-center border-bottom p-3">Plan</th>
                <th class="text-center border-bottom p-3">Date</th>
                <th class="text-center border-bottom p-3">Amount</th>
                <th class="text-center border-bottom p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in data.transctions" :key="item._id">
                <th class="p-3">{{ index + 1 }}</th>
                <td class="p-3">
                  <a href="#" class="text-primary">
                    <div class="d-flex align-items-center">
                      <span class="ms-2">{{ item.plan }}</span>
                    </div>
                  </a>
                </td>
                <td class="text-center p-3">{{ new Date(item.createdAt).toLocaleString() }}</td>
                <td class="text-center p-3">₹{{ item.amount }}</td>
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
    <div
      class="modal fade" id="exampleModal" tabindex="-1"
      aria-labelledby="exampleModalLabel" aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Alert</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Are you sure you want to perform this action?
          </div>
          <div class="modal-footer">
            <button
              id="close-model" type="button" class="btn btn-secondary"
              data-bs-dismiss="modal"
            >Close</button>
            <button type="button" class="btn" @click="toogle"
              :class="data.userDetails.isCancelled ? 'btn-success' : 'btn-danger'"
            >
              {{ data.userDetails.isCancelled ? 'Resume' : 'Cancel' }} Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade" id="exampleModal2" tabindex="-1"
      aria-labelledby="exampleModalLabel2" aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel2">Alert</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            {{
              !this.data.userDetails.subscriptionStatus ?
                `Are you sure you want to buy ${selectedPlan} plan?` :
                `Are you sure you want to switch to ${selectedPlan} plan?
                this can cause extra money if upgrading.
                `
            }}
          </div>
          <div class="modal-footer">
            <button
              id="close-model" type="button" class="btn btn-secondary"
              data-bs-dismiss="modal"
            >Close</button>
            <button type="button" class="btn btn-success" @click="buy"
            >
              Buy
            </button>
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
      selectedPlan: '',
      data: {},
    });
  },
  mounted() {
    this.$http.get('payments/user-details')
      .then((response) => {
        this.data = response.data;
        this.loading = false;
      });
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan;
    },
    buy(event) {
      const button = event.target;
      button.disabled = true;
      button.innerHTML = 'Loading...';
      const url = this.data.userDetails.subscriptionStatus ? 'payments/change-plan' : 'payments/subscribe';
      this.$http.post(url, { plan: this.selectedPlan })
        .then((response) => {
          if (!this.data.userDetails.subscriptionStatus) {
            window.location = response.data.url;
          } else {
            setTimeout(() => window.location.reload(), 10000);
          }
        });
    },
    toogle(event) {
      const button = event.target;
      button.disabled = true;
      button.innerHTML = 'Loading...';
      this.$http.post('payments/toogle-subscription')
        .then(() => {
          this.data.userDetails.isCancelled = !this.data.userDetails.isCancelled;
          button.disabled = false;
          button.previousElementSibling.click();
        });
    },
  },
};
</script>
