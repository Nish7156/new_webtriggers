import React from "react";

function BlogBannerDetails() {
  return (
    <>
      <section
        className="page-section bg-dark-alpha-30 light-content parallax-5"
        style={{ backgroundImage: "url(/images/demo-strong/section-bg-1.jpg)" }}
        id="home"
      >
        <div className="container position-relative pt-sm-30">
          {/* Home Section Content */}
          <div className="home-content text-center">
            <h1 className="section-title-medium mb-0">
              <span className="wow charsAnimIn" data-splitting="chars">
                The Most Popular Web Design Trends in 2023 Year
              </span>
            </h1>
            {/* Author, Categories, Comments */}
            <div
              className="blog-item-data mt-30 mt-sm-10 mb-0 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="d-inline-block me-3">
                <span>
                  <i className="mi-clock size-16" />
                  <span className="visually-hidden">Date:</span> December 25
                </span>
              </div>
              <div className="d-inline-block me-3">
                <span>
                  <i className="mi-user size-16" />
                  <span className="visually-hidden">Author:</span> John Doe
                </span>
              </div>
              <div className="d-inline-block me-3">
                <i className="mi-folder size-16" />
                <span className="visually-hidden">Categories:</span>
                <span>Design</span>, <span>Branding</span>
              </div>
              <div className="d-inline-block me-3">
                <span>
                  <i className="mi-message size-16" /> 5 Comments
                </span>
              </div>
            </div>
            {/* End Author, Categories, Comments */}
          </div>
          {/* End Home Section Content */}
        </div>
      </section>
    </>
  );
}

export default BlogBannerDetails;
