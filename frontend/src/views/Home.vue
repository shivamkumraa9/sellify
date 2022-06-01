<template>
  <div>
    <section class="bg-home d-flex align-items-center" style="height: auto;" id="home">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
            <div class="title-heading margin-top-100">
              <h1 class="heading fw-bold mb-3">The Easiest Way To<br> Sell Digital Products</h1>
              <p class="para-desc mx-auto text-muted">
                Sellify is the simplified platform making it easy
                 to sell any digital product or accept any other payment online.
              </p>
              <div class="mt-4 pt-2">
                <router-link to="/register" class="btn btn-primary">
                  Start For Free <i class="uil uil-angle-right-b"></i>
                </router-link>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="home-dashboard"> <img src="@/assets/images/email/home.png" alt=""
                    class="img-fluid rounded-md shadow-lg" style="z-index: 0;"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section py-4 bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img src="@/assets/images/client/amazon.svg" class="avatar avatar-ex-sm" alt="">
          </div>
          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img src="@/assets/images/client/google.svg" class="avatar avatar-ex-sm" alt="">
          </div>
          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img src="@/assets/images/client/lenovo.svg" class="avatar avatar-ex-sm" alt="">
          </div>
          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img src="@/assets/images/client/paypal.svg" class="avatar avatar-ex-sm" alt="">
          </div>
          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img src="@/assets/images/client/shopify.svg" class="avatar avatar-ex-sm" alt="">
          </div>
          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img src="@/assets/images/client/spotify.svg" class="avatar avatar-ex-sm" alt="">
          </div>
        </div>
      </div>
    </section>
    <section id="feat" class="section border-bottom">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <h4 class="title mb-4">Our Features</h4>
              <p class="text-muted para-desc mb-0 mx-auto">Selling digital downloadable products
                can be clunky and difficult, but not anymore with sellify.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 mt-5">
            <div class="d-flex features feature-clean">
              <div class="icons text-primary text-center mx-auto">
                <i class="uil uil-shopping-cart d-block rounded h3 mb-0"></i>
              </div>
              <div class="flex-1 content ms-4">
                <h5 class="mb-1">
                  <a href="javascript:void(0)" class="text-dark title">Unlimited Products</a>
                </h5>
                <p class="text-muted mb-0">
                  Create unlimited products within minutes with different pricing strategies.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-5">
            <div class="d-flex features feature-clean">
              <div class="icons text-primary text-center mx-auto"> <i
                  class="uil uil-chart d-block rounded h3 mb-0"></i> </div>
              <div class="flex-1 content ms-4">
                <h5 class="mb-1">
                  <a href="javascript:void(0)" class="text-dark title">
                    Analytics Dashboard
                  </a>
                </h5>
                <p class="text-muted mb-0">
                  A built-in analytics dashboard to track and give some meaningful insights.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-5">
            <div class="d-flex features feature-clean">
              <div class="icons text-primary text-center mx-auto"> <i
                  class="uil uil-tag d-block rounded h3 mb-0"></i> </div>
              <div class="flex-1 content ms-4">
                <h5 class="mb-1">
                  <a href="javascript:void(0)" class="text-dark title">Multiple Pricing Types</a>
                </h5>
                <p class="text-muted mb-0">
                  Set the pricing strategy that suits you the most eg: Fixed, Free, or Variable.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-5">
            <div class="d-flex features feature-clean">
              <div class="icons text-primary text-center mx-auto">
                <i class="uil uil-comment-verify d-block rounded h3 mb-0"></i>
              </div>
              <div class="flex-1 content ms-4">
                <h5 class="mb-1">
                  <a href="javascript:void(0)" class="text-dark title">Start For Free</a>
                </h5>
                <p class="text-muted mb-0">
                  You can get started for free and don't need to opt for a
                  paid plan till you feel it.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-5">
            <div class="d-flex features feature-clean">
              <div class="icons text-primary text-center mx-auto">
                <i class="uil uil-dollar-alt d-block rounded h3 mb-0"></i>
                <!-- <i class="uil uil-apps d-block rounded h3 mb-0"></i> -->
              </div>
              <div class="flex-1 content ms-4">
                <h5 class="mb-1">
                  <a href="javascript:void(0)" class="text-dark title">
                    Easy Withdrawals
                  </a>
                </h5>
                <p class="text-muted mb-0">
                  Easily withdraw the money to your Paypal account with a few
                  clicks from the dashboard.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-5">
            <div class="d-flex features feature-clean">
              <div class="icons text-primary text-center mx-auto"> <i
                  class="uil uil-users-alt d-block rounded h3 mb-0"></i> </div>
              <div class="flex-1 content ms-4">
                <h5 class="mb-1">
                  <a href="javascript:void(0)" class="text-dark title">Seamless Support</a>
                </h5>
                <p class="text-muted mb-0">
                  Got stuck? Please feel free to contact us. Our support team will get
                  back to you in no time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <!-- <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <img src="@/assets/images/laptop.png" class="img-fluid" alt="">
          </div>
          <div class="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="section-title ms-lg-5">
              <h4 class="title mb-4">Make your website <br> growth with next level visitors</h4>
              <p class="text-muted">You can combine all the Landrick templates into a
                 single one, you can take
                a component from the Application theme and use it in the Website.
              </p>
              <ul class="list-unstyled text-muted">
                <li class="mb-1">
                  <span class="text-primary h5 me-2">
                    <i class="uil uil-check-circle align-middle"></i>
                  </span>
                Digital Marketing Solutions for Tomorrow
              </li>
                <li class="mb-1">
                  <span class="text-primary h5 me-2">
                    <i class="uil uil-check-circle align-middle"></i>
                  </span>Our Talented & Experienced Marketing Agency
                </li>
                <li class="mb-1">
                  <span class="text-primary h5 me-2">
                    <i class="uil uil-check-circle align-middle"></i>
                  </span>Create your own skin to match your brand
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div> -->

      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="section-title me-lg-5">
              <h4 class="title mb-4">Its never been that easy to sell online</h4>
              <p class="text-muted">You focus more on creating killar products and leave
                everything else to us. With sellify, you can sell books, courses,
                software, design assets, music, or any type of digital product
                directly to your customers.
              </p>
              <ul class="list-unstyled text-muted">
                <li class="mb-1">
                  <span class="text-primary h5 me-2">
                    <i class="uil uil-check-circle align-middle"></i>
                  </span>Start Selling within few minutes.
                </li>
                <li class="mb-1">
                  <span class="text-primary h5 me-2">
                    <i class="uil uil-check-circle align-middle"></i>
                  </span>Select the pricing strategy that suits you the most.
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 order-1 order-md-2">
            <img src="@/assets/images/illustrator/app_development_SVG.svg" alt="">
          </div>
        </div>
      </div>

    </section>
    <section class="section bg-light">
      <div class="container pb-lg-4 mb-md-5 mb-4">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title">
              <h4 class="title mb-2">Are you ready to make some money online?</h4>
              <p class="text-muted para-desc mx-auto mb-0">Click on the button below
                to start for free.</p>
              <div class="mt-2">
                <router-link to="/register" class="btn btn-lg rounded-pill btn-primary mt-3">
                Try For Free</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
