import React from "react";

function SplitSection2() {
  return (
    <>
      <section class="pt-30">
        <div class="container"></div>
        <div class="row g-0">
          <div class="col-lg-6 mt-n30 mt-md-0 mb-30 mb-md-0">
            <div
              class="split-column-right bg-dark-2 light-content position-relative d-flex align-items-center"
              data-rellax-y
              data-rellax-speed="0.5"
              data-rellax-percentage="0.5"
            >
              <div class="position-absolute top-0 start-0 pt-2 ps-2 opacity-02">
                <img src="images/demo-strong/decoration.svg" alt="" />
              </div>

              <div>
                <h2 class="section-title mb-30">
                  Responsive, <span class="font-alt">flexible</span> and
                  customizable.
                </h2>

                <p class="mb-50">
                  Phasellus nisl lectus, tincidunt eget fermentum quis, accumsan
                  a sem efficitur augue ac ex maximus, eget viverra sem aliquam.
                  Donec blandit ante nunc, nec pellentesque arcu egestas a
                  lorem.
                </p>

                <div class="row mt-n20">
                  <div class="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20">
                    <div class="features-list-icon">
                      <i class="mi-check"></i>
                    </div>
                    <div class="features-list-text">Agency Website</div>
                  </div>

                  <div class="col-sm-6 col-lg-12 col-xl-6 col-lg-6 d-flex mt-20">
                    <div class="features-list-icon">
                      <i class="mi-check"></i>
                    </div>
                    <div class="features-list-text">Personal Website</div>
                  </div>

                  <div class="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20">
                    <div class="features-list-icon">
                      <i class="mi-check"></i>
                    </div>
                    <div class="features-list-text">Landing Page</div>
                  </div>

                  <div class="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20">
                    <div class="features-list-icon">
                      <i class="mi-check"></i>
                    </div>
                    <div class="features-list-text">Portfolio and Gallery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 d-flex align-items-stretch order-lg-first">
            <div class="split-image-left">
              <img
                src="images/demo-strong/split-image-2.jpg"
                alt="Image Description"
              />

              <div class="position-absolute bottom-0 start-0 ps-4 pb-4 d-none d-sm-block">
                <img
                  src="images/demo-strong/circle-text.svg"
                  width="138"
                  height="138"
                  alt="Image Description"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SplitSection2;
