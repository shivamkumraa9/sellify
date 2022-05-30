<template>
  <div>
    <section class="section bg-light">
      <div class="container mt-5">
        <div class="section-title text-center mb-4 pb-2">
          <h2 class="mb-3">Choose the best one for you</h2>
          <p class="text-muted mb-0 text-center"> Start working with that can provide everything
            you need to
          </p>
        </div>
        <div class="mt-4 mt-sm-0 text-center text-md-end">
          <ul class="nav nav-pills bg-white rounded-lg \
          justify-content-center d-inline-block shadow py-1 px-2 mb-0"
            id="pills-tab" role="tablist">
            <li class="nav-item d-inline-block">
              <a
                class="nav-link px-3 rounded-lg active monthly" id="Monthly"
                data-bs-toggle="pill" href="#Month"
                role="tab" aria-controls="Month" aria-selected="true"
              >
                Monthly
              </a>
            </li>
            <li class="nav-item d-inline-block">
              <a
                class="nav-link px-3 rounded-lg yearly" id="Yearly"
                data-bs-toggle="pill" href="#Year" role="tab"
                aria-controls="Year" aria-selected="false"
              >
                Yearly
              </a>
            </li>
          </ul>
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
                        <h6 class="title fw-bold text-uppercase text-primary mb-4">Free</h6>
                        <div class="d-flex mb-4">
                          <span class="h6 mb-0 mt-2">$</span>
                          <span class="price h1 mb-0">0</span>
                          <span class="h5 align-self-end mb-1"> /mo</span>
                        </div>
                        <ul class="list-unstyled mb-0 ps-0">
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>
                              Full Access
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>Source Files
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>Free Appointments
                          </li>
                        </ul>
                        <a href="javascript:void(0)" class="btn btn-primary mt-4">Buy Now</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                    <div class="card pricing-rates business-rate shadow bg-white border-0 rounded">
                      <div class="ribbon ribbon-right ribbon-warning overflow-hidden">
                        <span class="text-center d-block shadow small h6">Best</span>
                      </div>
                      <div class="card-body">
                        <h6 class="title fw-bold text-uppercase text-primary mb-4">Starter</h6>
                        <div class="d-flex mb-4">
                          <span class="h6 mb-0 mt-2">$</span>
                          <span class="price h1 mb-0">39</span>
                          <span class="h5 align-self-end mb-1"> /mo</span>
                        </div>
                        <ul class="list-unstyled mb-0 ps-0">
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>Full
                            Access
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>Source Files
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>Free Appointments
                          </li>
                        </ul>
                        <a href="javascript:void(0)" class="btn btn-primary mt-4">Get Started</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                    <div class="card pricing-rates business-rate shadow bg-white border-0 rounded">
                      <div class="card-body">
                        <h6 class="title fw-bold text-uppercase text-primary mb-4">Ultimate</h6>
                        <div class="d-flex mb-4">
                          <span class="h6 mb-0 mt-2">$</span>
                          <span class="price h1 mb-0">79</span>
                          <span class="h5 align-self-end mb-1"> /mo</span>
                        </div>
                        <ul class="list-unstyled mb-0 ps-0">
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>Full Access
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>Enhanced Security
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>Source Files
                          </li>
                        </ul>
                        <a href="javascript:void(0)" class="btn btn-primary mt-4">Started Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="Year" role="tabpanel" aria-labelledby="Yearly">
                <div class="row justify-content-center">
                  <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                    <div class="card pricing-rates business-rate shadow bg-light border-0 rounded">
                      <div class="card-body">
                        <h6 class="title fw-bold text-uppercase text-primary mb-4">Free</h6>
                        <div class="d-flex mb-4">
                          <span class="h6 mb-0 mt-2">$</span>
                          <span class="price h1 mb-0">0</span>
                          <span class="h5 align-self-end mb-1"> /mo</span>
                        </div>
                        <ul class="list-unstyled mb-0 ps-0">
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>Full Access
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>Source Files
                          </li>
                        </ul>
                        <a href="javascript:void(0)" class="btn btn-primary mt-4">Buy Now</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                    <div class="card pricing-rates business-rate shadow bg-white border-0 rounded">
                      <div class="ribbon ribbon-right ribbon-warning overflow-hidden">
                        <span class="text-center d-block shadow small h6">Best</span>
                      </div>
                      <div class="card-body">
                        <h6 class="title fw-bold text-uppercase text-primary mb-4">Starter</h6>
                        <div class="d-flex mb-4">
                          <span class="h6 mb-0 mt-2">$</span>
                          <span class="price h1 mb-0">29</span>
                          <span class="h5 align-self-end mb-1"> /mo</span>
                          </div>
                        <ul class="list-unstyled mb-0 ps-0">
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>Full Access
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>Source Files
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>Free Appointments
                          </li>
                        </ul>
                        <a href="javascript:void(0)" class="btn btn-primary mt-4">Get Started</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                    <div class="card pricing-rates business-rate shadow bg-light border-0 rounded">
                      <div class="card-body">
                        <h6 class="title fw-bold text-uppercase text-primary mb-4">Ultimate</h6>
                        <div class="d-flex mb-4">
                          <span class="h6 mb-0 mt-2">$</span>
                          <span class="price h1 mb-0">69</span>
                          <span class="h5 align-self-end mb-1"> /mo</span>
                        </div>
                        <ul class="list-unstyled mb-0 ps-0">
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>Full Access
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>Enhanced Security
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>Source Files
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>1 Domain Free
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2">
                              <i class="uil uil-check-circle align-middle"></i>
                            </span>Free Installment
                          </li>
                        </ul>
                        <a href="javascript:void(0)" class="btn btn-primary mt-4">Started Now</a>
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
                  How does it work ?
                  </button>
                </h2>
                <div
                  id="collapsefive"
                  class="accordion-collapse border-0 collapse show" aria-labelledby="headingfive"
                  data-bs-parent="#generalquestion">
                  <div class="accordion-body text-muted bg-white"
                >
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form.
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
                  Do I need a designer to use Landrick ?
                  </button>
                </h2>
                <div
                  id="collapsesix"
                  class="accordion-collapse border-0 collapse"
                  aria-labelledby="headingsix"
                  data-bs-parent="#generalquestion">
                  <div class="accordion-body text-muted bg-white">
                    There are many variations of passages of Lorem Ipsum available,
                     but the majority have suffered alteration in some form.
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
                  What do I need to do to start selling ?
                  </button>
                </h2>
                <div
                  id="collapseseven" class="accordion-collapse border-0 collapse"
                  aria-labelledby="headingseven"
                  data-bs-parent="#generalquestion"
                >
                  <div class="accordion-body text-muted bg-white">
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form.
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
                  What happens when I receive an order ?
                  </button>
                </h2>
                <div
                  id="collapseeight" class="accordion-collapse border-0 collapse"
                  aria-labelledby="headingeight"
                  data-bs-parent="#generalquestion">
                  <div class="accordion-body text-muted bg-white">
                    There are many variations of passages of Lorem Ipsum available,
                     but the majority have suffered alteration in some form.
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
