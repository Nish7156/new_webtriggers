import React from "react";

function BlogBanner() {
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
            <h1 className="hs-title-7 mb-0">
              <span className="wow charsAnimIn-2" data-splitting="chars">
                Latest <span className="font-alt">Blogs</span>
              </span>
            </h1>
          </div>
          {/* End Home Section Content */}
        </div>
      </section>
    </>
  );
}

export default BlogBanner;
