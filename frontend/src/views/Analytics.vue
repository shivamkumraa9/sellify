<template>
  <div v-if="!loading">
    <div class="d-flex align-items-center justify-content-between">
      <div>
        <h5 class="mb-0">Dashboard</h5>
      </div>
      <!-- <div class="mb-0 position-relative">
        <select class="form-select form-control" id="dailychart">
          <option selected="">This Month</option>
          <option value="aug">August</option>
          <option value="jul">July</option>
          <option value="jun">June</option>
        </select>
      </div> -->
    </div>
    <div class="row row-cols-xl-4 row-cols-md-2 row-cols-1">
      <div class="col mt-4">
        <a href="#"
          class="features feature-primary d-flex \
          justify-content-between align-items-center bg-white rounded shadow p-3">
          <div class="d-flex align-items-center">
            <div class="icon text-center rounded-pill">
              <i class="uil uil-usd-circle fs-4 mb-0"></i>
            </div>
            <div class="flex-1 ms-3">
              <h6 class="mb-0 text-muted">Revenue</h6>
              <p class="fs-5 text-dark fw-bold mb-0">
                ₹{{ data.analytics.revenue }}
              </p>
            </div>
          </div>
        </a>
      </div>
      <!--end col-->
      <div class="col mt-4">
        <a href="#!" class="features feature-primary d-flex \
          justify-content-between align-items-center bg-white rounded shadow p-3">
          <div class="d-flex align-items-center">
            <div class="icon text-center rounded-pill">
              <i class="uil uil-shopping-bag fs-4 mb-0"></i>
            </div>
            <div class="flex-1 ms-3">
              <h6 class="mb-0 text-muted">Orders</h6>
              <p class="fs-5 text-dark fw-bold mb-0">
                {{ data.analytics.orders }}
              </p>
            </div>
          </div>
        </a>
      </div>
      <div class="col mt-4">
        <a href="#!" class="features feature-primary d-flex \
          justify-content-between align-items-center bg-white rounded shadow p-3">
          <div class="d-flex align-items-center">
            <div class="icon text-center rounded-pill">
              <i class="uil uil-store fs-4 mb-0"></i>
            </div>
            <div class="flex-1 ms-3">
              <h6 class="mb-0 text-muted">Products</h6>
              <p class="fs-5 text-dark fw-bold mb-0">
                {{ data.products.length }}
              </p>
            </div>
          </div>
        </a>
      </div>
      <!--end col-->
      <div class="col mt-4">
        <a href="#!" class="features feature-primary d-flex \
        justify-content-between align-items-center bg-white rounded shadow p-3">
          <div class="d-flex align-items-center">
            <div class="icon text-center rounded-pill">
              <i class="uil uil-users-alt fs-4 mb-0"></i>
            </div>
            <div class="flex-1 ms-3">
              <h6 class="mb-0 text-muted">Avg Order</h6>
              <p class="fs-5 text-dark fw-bold mb-0">
                ₹{{ data.analytics.avgOrderValue }}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-8 col-lg-7 mt-4">
        <div class="card shadow border-0 p-4 pb-0 rounded">
          <div class="d-flex justify-content-between">
            <h6 class="mb-0 fw-bold">Sales Analytics</h6>
            <div class="mb-0 position-relative">
              <select
                @change="getChart" v-model="selectedOption"
                class="form-select form-control" id="yearchart"
              >
                <option value="This Month">This Month</option>
                <option value="Last 30 Days">Last 30 Days</option>
                <option value="Last 90 Days">Last 90 Days</option>
              </select>
            </div>
          </div>
          <Loader v-if="loadingChart" />
          <apexchart :options="option" :series="series" :key="renderKey"></apexchart>
        </div>
      </div>
      <div v-if="data.transactions.length > 0" class="col-xl-4 col-lg-5 mt-4 rounded">
        <div class="card shadow border-0">
          <div class="p-4 border-bottom">
            <div class="d-flex justify-content-between">
              <h6 class="mb-0 fw-bold">Recent Purchases</h6>
              <router-link to="/dashboard/purchases" class="text-primary">
                See More <i class="uil uil-arrow-right align-middle"></i>
              </router-link>
            </div>
          </div>
          <div class="p-4">
            <a v-for="item in data.transactions" :key="item._id" href="javascript:void(0)"
              class="features feature-primary key-feature d-flex \
                align-items-center justify-content-between mb-3">
              <div class="d-flex align-items-center">
                <div class="icon text-center rounded-circle me-3">
                  <i class="ti ti-users"></i>
                </div>
                <div class="flex-1">
                  <h6 class="mb-0 text-dark">{{ item.customerName }}</h6>
                  <small class="text-muted">
                    ₹{{ item.amount }}
                    ({{ new Date(item.createdAt).toLocaleString() }})
                  </small>
                </div>
              </div>
              <i class="ti ti-arrow-up text-success"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4" v-if="data.products.length > 0">
      <div class="d-flex justify-content-between p-4 bg-white shadow rounded-top">
        <h6 class="fw-bold mb-0">Your Products</h6>
      </div>
      <div class="table-responsive shadow rounded-bottom" data-simplebar style="height: 550px;">
        <table class="table table-center bg-white mb-0">
          <thead>
            <tr>
              <th class="border-bottom p-3">No.</th>
              <th class="text-center border-bottom p-3">Client Name</th>
              <th class="text-center border-bottom p-3">Revenue</th>
              <th class="text-center border-bottom p-3">Sales</th>
              <th class="text-center border-bottom p-3">Price</th>
              <th class="text-center border-bottom p-3">Price Type</th>
              <th class="text-center border-bottom p-3">Status</th>
              <th class="text-center border-bottom p-3">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data.products" :key="index">
              <th class="p-3">#{{ index + 1 }}</th>
              <td class="text-center p-3">
                <router-link
                  :to="`/dashboard/edit/${item._id}`" class="text-primary">
                  {{ item.name }}
                </router-link>
              </td>
              <td class="text-center p-3">
                ₹{{ item.revenue }}
              </td>
              <td class="text-center p-3">
                {{ item.orders }}
              </td>
              <td v-if="item.priceStrategy === 'free'" class="text-center p-3">
                ₹0
              </td>
              <td v-if="item.priceStrategy === 'fixed'" class="text-center p-3">
                ₹{{ item.price }}
              </td>
              <td v-if="item.priceStrategy === 'variable'" class="text-center p-3">
                ₹{{ item.minPrice }}
              </td>
              <td class="text-center p-3">
                {{ item.priceStrategy }}
              </td>
              <td class="text-center p-3">
                <div class="badge rounded px-3 py-1"
                  :class="item.hide ? 'bg-soft-danger' : 'bg-soft-success'"
                >
                  {{ item.hide ? 'Hidden' : 'Active' }}
                </div>
              </td>
              <td class="text-center p-3">
                <a
                  target="" :href="`/p/${item.url}`" class="text-primary">
                  View
                </a>
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
      data: {},
      loading: true,
      loadingChart: true,
      selectedOption: 'This Month',
      renderKey: 0,
      series: [{
        name: 'Total Orders',
        data: [],
      }, {
        name: 'Revenue',
        data: [],
      }],
      option: {
        chart: {
          height: 360,
          type: 'area',
          width: '100%',
          stacked: true,
          toolbar: {
            show: false,
            autoSelected: 'zoom',
          },
        },
        colors: ['#2f55d4', '#2eca8b'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
          width: [1.5, 1.5],
          dashArray: [0, 4],
          lineCap: 'round',
        },
        grid: {
          padding: {
            left: 0,
            right: 0,
          },
          strokeDashArray: 3,
        },
        markers: {
          size: 0,
          hover: {
            size: 0,
          },
        },
        xaxis: {
          type: 'datetime',
          categories: [],
          axisBorder: {
            show: true,
          },
          axisTicks: {
            show: true,
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 0.8,
            opacityFrom: 0.3,
            opacityTo: 0.2,
            stops: [0, 80, 100],
          },
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy',
          },
        },
        legend: {
          position: 'bottom',
          offsetY: 0,
          itemMargin: {
            horizontal: 10,
            vertical: 24,
          },
        },
      },
    });
  },
  mounted() {
    this.$http.get('product/dashboard-data')
      .then((response) => {
        if (!response.data.analytics) {
          response.data.analytics = {
            revenue: 0,
            orders: 0,
            avgOrderValue: 0,
          };
        }
        this.data = response.data;
        this.loading = false;
      });
    this.getChart();
  },
  methods: {
    async getChart() {
      this.loadingChart = true;
      const start = new Date();
      if (this.selectedOption === 'This Month') {
        start.setDate(1);
        start.setHours(0, 0, 0, 0);
      } else if (this.selectedOption === 'Last 30 Days') {
        start.setDate(start.getDate() - 30);
      } else {
        start.setDate(start.getDate() - 90);
      }
      const query = `?end=${Date.now()}&start=${start.getTime()}`;

      const response = await this.$http.get(`product/chart${query}`);
      this.loadingChart = false;
      this.option.xaxis.categories = response.data.dates;
      this.series[1].data = response.data.revenues;
      this.series[0].data = response.data.orders;
      this.renderKey += 1;
    },
  },
};
</script>
