<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="footer-py-60">
            <div class="row">
              <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                <a href="#" class="logo-footer">
                  <h3 class="fw-bolder text-white" style="">Sellify</h3>
                    <!-- <img src="@/assets/images/logo-light.png" height="24" alt=""> -->
                </a>
                <p class="mt-3">
                  With sellify, you can sell books, courses, software, design assets, music, or
                   any type of digital product directly to your customers.
                </p>
                <ul class="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                    <li class="list-inline-item">
                      <a href="javascript:void(0)" class="rounded">
                        <i data-feather="facebook" class="fea icon-sm fea-social"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)" class="rounded">
                        <i data-feather="instagram" class="fea icon-sm fea-social"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)" class="rounded">
                        <i data-feather="twitter" class="fea icon-sm fea-social"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)" class="rounded">
                        <i data-feather="linkedin" class="fea icon-sm fea-social"></i>
                      </a>
                    </li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 class="footer-head">Company</h5>
                <ul class="list-unstyled footer-list mt-4">
                  <li>
                    <router-link to="/register" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i> Register
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/login" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i> Login
                    </router-link>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i> About us
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i> Services
                    </a>
                  </li>
                  <li>
                    <a href="https://shivamkumraa.com" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i> Team
                    </a>
                  </li>
                  <li>
                    <router-link to="/pricing" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i> Pricing
                    </router-link>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i> Project
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="text-foot">
                      <i class="uil uil-angle-right-b me-1"></i> Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 class="footer-head">Usefull Links</h5>
                <ul class="list-unstyled footer-list mt-4">
                    <li>
                      <a href="javascript:void(0)" class="text-foot">
                        <i class="uil uil-angle-right-b me-1"></i> Terms of Services
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="text-foot">
                        <i class="uil uil-angle-right-b me-1"></i> Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="text-foot">
                        <i class="uil uil-angle-right-b me-1"></i> Documentation
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="text-foot">
                        <i class="uil uil-angle-right-b me-1"></i> Changelog
                      </a>
                    </li>
                    <li>
                      <router-link to="/dashboard" class="text-foot">
                        <i class="uil uil-angle-right-b me-1"></i> Dashboard
                      </router-link>
                    </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 class="footer-head">Newsletter</h5>
                <p class="mt-4">Sign up and receive the latest tips via email.</p>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="foot-subscribe mb-3">
                      <label class="form-label">
                        Write your email
                        <span class="text-danger">*</span>
                      </label>
                      <div class="form-icon position-relative">
                        <!-- <i data-feather="mail" class="fea icon-sm icons"></i> -->
                        <input type="email" name="email" id="emailsubscribe"
                          class="form-control rounded" placeholder="Your email :" required>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="d-grid">
                      <input type="submit" id="submitsubscribe" name="send"
                        class="btn btn-soft-primary" value="Subscribe">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-py-30 footer-bar">
      <div class="container text-center">
        <div class="text-sm-center">
          <p class="mb-0">© Sellify 2022 all rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
