import React from "react";

function PortfolioSection() {
  return (
    <>
      <section
        class="page-section bg-dark-1 light-content overflow-hidden"
        id="portfolio"
      >
        <div class="container">
          <div class="row mb-90 mb-sm-50">
            <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 class="section-caption-border">Our Portfolio</h2>
              <h3 class="section-title-strong mb-40">
                Creativity meets <span class="font-alt">technology</span> here
              </h3>
              <p class="mb-0">
              Creative Fusion: The Intersection of Artistry and Technology in Photography. Here, innovative techniques and cutting-edge tools blend seamlessly with artistic vision, pushing the boundaries of visual storytelling.
              </p>
            </div>
          </div>

          <div class="wow fadeInUp">
            <div class="portfolio-4-carousel slider-strong">
              <div class="portfolio-4-item">
                <a href="strong-portfolio-single-dark.html">
                  <div class="portfolio-4-image">
                    <img
                      src="images/demo-strong/portfolio/1.jpg"
                      alt="Image Description"
                    />
                  </div>
                  <div class="portfolio-4-intro">
                    <h4 class="portfolio-4-title">Rise of Design</h4>
                    <div class="portfolio-4-descr">Branding, UI/UX Design</div>
                  </div>
                </a>
              </div>

              <div class="portfolio-4-item">
                <a href="strong-portfolio-single-dark.html">
                  <div class="portfolio-4-image">
                    <img
                      src="images/demo-strong/portfolio/2.jpg"
                      alt="Image Description"
                    />
                  </div>
                  <div class="portfolio-4-intro">
                    <h4 class="portfolio-4-title">Amplitude</h4>
                    <div class="portfolio-4-descr">
                      UI/UX Design, Development
                    </div>
                  </div>
                </a>
              </div>

              <div class="portfolio-4-item">
                <a href="strong-portfolio-single-dark.html">
                  <div class="portfolio-4-image">
                    <img
                      src="images/demo-strong/portfolio/3.jpg"
                      alt="Image Description"
                    />
                  </div>
                  <div class="portfolio-4-intro">
                    <h4 class="portfolio-4-title">Medium Scene</h4>
                    <div class="portfolio-4-descr">Branding, Design</div>
                  </div>
                </a>
              </div>

              <div class="portfolio-4-item">
                <a href="strong-portfolio-single-dark.html">
                  <div class="portfolio-4-image">
                    <img
                      src="images/demo-strong/portfolio/4.jpg"
                      alt="Image Description"
                    />
                  </div>
                  <div class="portfolio-4-intro">
                    <h4 class="portfolio-4-title">Rise of Design</h4>
                    <div class="portfolio-4-descr">Branding, UI/UX Design</div>
                  </div>
                </a>
              </div>

              <div class="portfolio-4-item">
                <a href="strong-portfolio-single-dark.html">
                  <div class="portfolio-4-image">
                    <img
                      src="images/demo-strong/portfolio/5.jpg"
                      alt="Image Description"
                    />
                  </div>
                  <div class="portfolio-4-intro">
                    <h4 class="portfolio-4-title">Amplitude</h4>
                    <div class="portfolio-4-descr">
                      UI/UX Design, Development
                    </div>
                  </div>
                </a>
              </div>

              <div class="portfolio-4-item">
                <a href="strong-portfolio-single-dark.html">
                  <div class="portfolio-4-image">
                    <img
                      src="images/demo-strong/portfolio/6.jpg"
                      alt="Image Description"
                    />
                  </div>
                  <div class="portfolio-4-intro">
                    <h4 class="portfolio-4-title">Medium Scene</h4>
                    <div class="portfolio-4-descr">Branding, Design</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PortfolioSection;
