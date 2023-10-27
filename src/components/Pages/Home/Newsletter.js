import React from "react";

function Newsletter() {
  return (
    <>
      <section
        class="page-section bg-dark-1 light-content"
      style={{backgroundImage:'url(images/full-width-images/section-bg-2.jpg)'}}
      >
        <div class="container position-relative">
          <div class="row">
            <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3 wow fadeInUp">
              <h2 class="section-title text-center mb-40">
                Looking for{' '}
                <span class="font-alt">exclusive creative</span> content?
              </h2>

              <form id="mailchimp" class="form newsletter-strong">
                <div class="d-sm-flex justify-content-between mb-20">
                  <label for="newsletter-email" class="visually-hidden">
                    Your email
                  </label>
                  <input
                    placeholder="Enter your email"
                    class="newsletter-field input-lg round"
                    id="newsletter-email"
                    name="newsletter-email"
                    type="email"
                    pattern=".{5,100}"
                    required
                    aria-required="true"
                  />
                  <button
                    type="submit"
                    aria-controls="subscribe-result"
                    class="newsletter-button btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                  >
                    <span>Subscribe Now</span>
                  </button>
                </div>

                <div class="form-tip">
                  <i class="icon-info size-16"></i>
                  By sending the form you agree to the
                  <a href="#">Terms & Conditions</a> and
                  <a href="#">Privacy Policy</a>.
                </div>

                <div
                  id="subscribe-result"
                  role="region"
                  aria-live="polite"
                  aria-atomic="true"
                ></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
