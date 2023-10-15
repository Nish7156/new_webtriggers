import React from "react";

function NewsSection() {
  return (
    <>
      <section class="page-section bg-dark-1 light-content" id="blog">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 mb-md-90 mb-sm-50">
              <h2 class="section-caption-border">Our Blog</h2>
              <h3 class="section-title-strong mb-40">
                Latest <span class="font-alt">News</span>
              </h3>
              <p class="mb-40">
                Etiam metus felis, dapibus sit amet consequat a, convallis
                mollis odio. Quisque scelerisque dui id fermentum venenatis.
                Aliquam lobortis ligula id efficitur iaculis.
              </p>
              <div class="local-scroll">
                <a
                  href="strong-blog-dark.html"
                  class="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                >
                  <span>View Blog</span>
                </a>
              </div>
            </div>
          </div>

          <div class="row gy-4">
            <div
              class="post-prev-2 col-md-6 col-lg-4"
              data-rellax-y
              data-rellax-speed="-1"
              data-rellax-percentage="0.37"
            >
              <div class="mt-140 mt-md-0">
                <div class="post-prev-2-img">
                  <a href="strong-blog-single-dark.html">
                    <img
                      src="images/demo-modern/blog/1.jpg"
                      alt="Image Description"
                    />
                  </a>
                </div>

                <h3 class="post-prev-2-title">
                  <a href="strong-blog-single-dark.html">
                    Natura Insects Series: Crafting Insects Made by Flowers
                  </a>
                </h3>

                <div class="post-prev-2-info">December 3, 2023</div>
              </div>
            </div>

            <div class="post-prev-2 col-md-6 col-lg-4">
              <div class="post-prev-2-img">
                <a href="strong-blog-single-dark.html">
                  <img
                    src="images/demo-modern/blog/2.jpg"
                    alt="Image Description"
                  />
                </a>
              </div>

              <h3 class="post-prev-2-title">
                <a href="strong-blog-single-dark.html">
                  Minimalistic Design Concept for Balmain Online Store
                </a>
              </h3>

              <div class="post-prev-2-info">December 2, 2023</div>
            </div>

            <div
              class="post-prev-2 col-md-6 col-lg-4"
              data-rellax-y
              data-rellax-speed="1"
              data-rellax-percentage="0.37"
            >
              <div class="mt-n140 mt-md-0">
                <div class="post-prev-2-img">
                  <a href="strong-blog-single-dark.html">
                    <img
                      src="images/demo-modern/blog/3.jpg"
                      alt="Image Description"
                    />
                  </a>
                </div>

                <h3 class="post-prev-2-title">
                  <a href="strong-blog-single-dark.html">
                    Spotlight — Equinox Collection by Shane Griffin
                  </a>
                </h3>

                <div class="post-prev-2-info">November 29, 2023</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsSection;
