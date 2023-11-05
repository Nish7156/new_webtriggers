import React from "react";

function AboutSection() {
  return (
    <>
      <section class="page-section bg-dark-1 light-content" id="about">
        <div class="container">
          <div class="row">
            <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 class="section-caption-border">About Company</h2>
              <h3 class="section-title-strong mb-90 mb-sm-50">
                Simplify Web Design:{" "}
                <span class="font-alt">Join Us at webtriggers developers</span>
              </h3>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-4 mb-xs-50">
              <div class="call-action-4-images">
                <div class="call-action-4-image-1">
                  <img
                    src="images/banners/uiux-7.jpg"
                    alt="Image description"
                    class="wow scaleOutIn"
                    data-wow-duration="1.2s"
                  />
                </div>
                <div class="call-action-4-image-2">
                  <img
                    src="images/banners/uiux-2.jpg"
                    alt="Image description"
                    class="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset="0"
                  />
                </div>
              </div>
            </div>

            <div class="col-sm-8 col-lg-6 col-xl-4 offset-xl-1 mt-n10">
              <div class="wow linesAnimIn" data-splitting="lines">
                <p class="lead mt-0 mb-40">
                  Crafting Digital Excellence: Design (HTML, CSS, JavaScript),
                  Structure (Server, Database), Functionality (React), Secure,
                  Optimize (SEO), Test for a Robust Web Presence.
                </p>
                <p class="mb-40">
                  Web development is like constructing a digital space.
                  Front-end (HTML, CSS, JavaScript) is the visual design,
                  back-end (server, database) is the infrastructure, and
                  frameworks like React and Django are the tools. Security, SEO,
                  and testing are the finishing touches in this dynamic field.
                </p>
              </div>

              <div class="local-scroll wow fadeInUp" data-wow-offset="0">
                <a
                  href="strong-about-dark.html"
                  class="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                >
                  <span>
                    Learn More
                    <span class="visually-hidden">About Us</span>
                  </span>
                </a>
              </div>
            </div>

            <div class="col-lg-2 offset-xl-1 d-none d-lg-block">
              <div class="round overflow-hidden">
                <img
                  src="images/banners/uiux-3.jpg"
                  alt="Image description"
                  class="wow scaleOutIn"
                  data-wow-duration="1.2s"
                />
              </div>
              <div class="round overflow-hidden">
                <img
                  src="images/banners/uiux-4.jpg"
                  alt="Image description"
                  class="wow scaleOutIn"
                  data-wow-duration="1.2s"
                />
              </div>
              <div class="round overflow-hidden">
                <img
                  src="images/banners/uiux-6.jpg"
                  alt="Image description"
                  class="wow scaleOutIn"
                  data-wow-duration="1.2s"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
