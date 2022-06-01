<template>
  <div>
    <section class="section bg-light">
      <div class="container mt-5">
        <div class="section-title text-center mb-4 pb-2">
          <h2 class="mb-3">Choose the best one for you</h2>
          <p class="text-muted mb-0 text-center"> Cancel anytime in few clicks.
          </p>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade active show" id="Month" role="tabpanel"
                aria-labelledby="Monthly"
              >
                <div class="row justify-content-center">
                  <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                    <div class="card pricing-rates business-rate shadow bg-white border-0 rounded">
                      <div class="card-body">
                        <h6 class="title fw-bold text-uppercase text-primary mb-4">FREE</h6>
                        <div class="d-flex mb-4">
                          <span class="h6 mb-0 mt-2">₹</span>
                          <span class="price h1 mb-0">0</span>
                          <span class="h5 align-self-end mb-1"> /mo</span>
                        </div>
                        <ul class="list-unstyled mb-0 ps-0">
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>Commission: 7% + Stripe Fees
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
                        <router-link to="/dashboard/plans" class="btn btn-primary mt-4">
                          Buy Now
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                    <div class="card pricing-rates business-rate shadow bg-white border-0 rounded">
                      <div class="ribbon ribbon-right ribbon-warning overflow-hidden">
                        <span class="text-center d-block shadow small h6">Best</span>
                      </div>
                      <div class="card-body">
                        <h6 class="title fw-bold text-uppercase text-primary mb-4">STANDARD</h6>
                        <div class="d-flex mb-4">
                          <span class="h6 mb-0 mt-2">₹</span>
                          <span class="price h1 mb-0">3500</span>
                          <span class="h5 align-self-end mb-1"> /mo</span>
                        </div>
                        <ul class="list-unstyled mb-0 ps-0">
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>Commission: 3% + Stripe Fees
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
                        <router-link to="/dashboard/plans" class="btn btn-primary mt-4">
                          Buy Now
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                    <div class="card pricing-rates business-rate shadow bg-white border-0 rounded">
                      <div class="card-body">
                        <h6 class="title fw-bold text-uppercase text-primary mb-4">PREMIUM</h6>
                        <div class="d-flex mb-4">
                          <span class="h6 mb-0 mt-2">₹</span>
                          <span class="price h1 mb-0">7500</span>
                          <span class="h5 align-self-end mb-1"> /mo</span>
                        </div>
                        <ul class="list-unstyled mb-0 ps-0">
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>Commission: 0% + Stripe Fees
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
                        <router-link to="/dashboard/plans" class="btn btn-primary mt-4">
                          Buy Now
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-7 col-12">
            <h2 class="text-center">General Questions</h2>
            <div class="accordion mt-4 pt-2" id="generalquestion">
              <div class="accordion-item rounded">
                <h2 class="accordion-header" id="headingfive">
                  <button
                    class="accordion-button border-0 bg-light" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapsefive"
                    aria-expanded="true" aria-controls="collapsefive"
                  >
                  Do I have to opt for the paid plan to start selling?
                  </button>
                </h2>
                <div
                  id="collapsefive"
                  class="accordion-collapse border-0 collapse show" aria-labelledby="headingfive"
                  data-bs-parent="#generalquestion">
                  <div class="accordion-body text-muted bg-white"
                >
                    No, you can start selling for free. But the commissions are higher in the free
                     plan and are 0% in the premium plan.
                  </div>
                </div>
              </div>
              <div class="accordion-item rounded mt-2">
                <h2 class="accordion-header" id="headingsix">
                  <button
                    class="accordion-button border-0 bg-light collapsed"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsesix"
                    aria-expanded="false" aria-controls="collapsesix"
                  >
                  How will I withdraw the money?
                  </button>
                </h2>
                <div
                  id="collapsesix"
                  class="accordion-collapse border-0 collapse"
                  aria-labelledby="headingsix"
                  data-bs-parent="#generalquestion">
                  <div class="accordion-body text-muted bg-white">
                    You can easily withdraw the money into your Paypal account from the
                    withdrawals section of the sidebar. On average, withdrawals take
                    24-48 hours to process.
                  </div>
                </div>
              </div>
              <div class="accordion-item rounded mt-2">
                <h2 class="accordion-header" id="headingseven">
                  <button
                    class="accordion-button border-0 bg-light collapsed"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseseven" aria-expanded="false"
                    aria-controls="collapseseven"
                  >
                  How much commission you take in the paid plan?
                  </button>
                </h2>
                <div
                  id="collapseseven" class="accordion-collapse border-0 collapse"
                  aria-labelledby="headingseven"
                  data-bs-parent="#generalquestion"
                >
                  <div class="accordion-body text-muted bg-white">
                    We take a 3% commission per sale in the standard plan
                    and 0% in the premium plan.
                  </div>
                </div>
              </div>
              <div class="accordion-item rounded mt-2">
                <h2 class="accordion-header" id="headingeight">
                  <button
                    class="accordion-button border-0 bg-light collapsed"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseeight" aria-expanded="false"
                    aria-controls="collapseeight"
                  >
                  Where can I see my customers data?
                  </button>
                </h2>
                <div
                  id="collapseeight" class="accordion-collapse border-0 collapse"
                  aria-labelledby="headingeight"
                  data-bs-parent="#generalquestion">
                  <div class="accordion-body text-muted bg-white">
                    You can see the customer's data in the purchase section of the sidebar.
                  </div>
                </div>
              </div>
              <div class="accordion-item rounded mt-2">
                <h2 class="accordion-header" id="headingeight">
                  <button
                    class="accordion-button border-0 bg-light collapsed"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseeight" aria-expanded="false"
                    aria-controls="collapseeight"
                  >
                  Can I cancel my subscription?
                  </button>
                </h2>
                <div
                  id="collapseeight" class="accordion-collapse border-0 collapse"
                  aria-labelledby="headingeight"
                  data-bs-parent="#generalquestion">
                  <div class="accordion-body text-muted bg-white">
                    Yes, you can easily cancel your subscription anytime from the plans section of
                    the dashboard.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
