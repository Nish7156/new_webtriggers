import React from "react";

function SplitSection() {
  return (
    <>
      <section class="pt-30">
        <div class="container"></div>
        <div class="row g-0">
          <div class="col-lg-6">
            <div class="split-column-left bg-dark-2 light-content position-relative d-flex align-items-center">
              <div class="position-absolute top-0 end-0 pt-2 pe-2 opacity-02">
                <img src="images/demo-strong/decoration.svg" alt="" />
              </div>

              <div>
                <h2 class="section-title mb-30">
                  Looking for
                  <span class="font-alt"> exclusive creative</span> services?
                </h2>
                <p class="mb-50">
                  Exclusive Creative Services Redefined: Elevate Your Vision
                  with AI-Powered Ingenuity."
                </p>
                <div class="local-scroll">
                  <a
                    href="strong-contact-dark.html"
                    class="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                  >
                    <span>Start a Project</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 d-flex align-items-stretch mt-n30 mt-md-0 mb-30 mb-md-0">
            <div
              class="split-image-right"
              data-rellax-y
              data-rellax-speed="0.5"
              data-rellax-percentage="0.5"
            >
              <img src="images/banners/ai-3.jpg" alt="Image Description" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SplitSection;
