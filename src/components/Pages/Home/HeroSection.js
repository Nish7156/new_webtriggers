import React from "react";

function HeroSection() {
  return (
    <>
      <section
        class="home-section bg-dark-alpha-30 light-content parallax-5"
        style={{ backgroundImage: "url(images/demo-strong/section-bg-1.jpg)" }}
        id="home"
      >
        <div class="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
          <div class="home-content text-center">
            <h1 class="hs-title-7 mb-40">
              <span class="wow charsAnimIn-1" data-splitting="chars">
                Resonance <span class="font-alt">Creative</span> Studio
              </span>
            </h1>

            <div class="row">
              <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <hr
                  class="white mt-0 mb-30 wow scalexIn"
                  data-wow-delay="0.85s"
                />
                <div class="row wow fadeInUpShort" data-wow-delay="1.35s">
                  <div class="col-sm-6 col-md-7 text-center text-sm-start mb-xs-30">
                    <p class="mb-0">
                      Resonance is an award-winning studio specializing in
                      branding, design and engineering.
                    </p>
                  </div>
                  <div class="col-sm-6 col-md-5 text-center text-sm-end local-scroll">
                    <a
                      href="strong-portfolio-dark.html"
                      class="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                    >
                      <span>Discover Works</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="local-scroll scroll-down-wrap-4 wow fadeInUp"
            data-wow-offset="0"
          >
            <div class="full-wrapper text-end">
              <a href="#about" class="scroll-down-4">
                <i class="icon-arrow-down"></i>
              </a>
            </div>
          </div>
          <div class="hs-status uppercase wow fadeInUp" data-wow-offset="0">
            Based in Mumbai, India
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
