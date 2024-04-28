import React from 'react'

function Feat() {
  return (
    <>
       <section className="pt-30">
  <div className="container" />
  <div className="row g-0">
    <div className="col-lg-6 mt-n30 mt-md-0 mb-30 mb-md-0">
      <div
        className="split-column-right bg-dark-1 light-content position-relative d-flex align-items-center js-in-viewport"
        data-rellax-y=""
        data-rellax-speed="0.5"
        data-rellax-percentage="0.5"
        style={{ paddingRight: 75, transform: "translate3d(0px, 12px, 0px)" }}
      >
        {/* Decorative Dots */}
        <div className="position-absolute top-0 start-0 pt-2 ps-2 opacity-02">
          <img src="images/demo-strong/decoration.svg" alt="" />
        </div>
        {/* End Decorative Dots */}
        <div>
          <h2 className="section-title mb-30">
            Responsive, <span className="font-alt">flexible</span> and
            customizable.
          </h2>
          <p className="mb-50">
            Phasellus nisl lectus, tincidunt eget fermentum quis, accumsan a sem
            efficitur augue ac ex maximus, eget viverra sem aliquam. Donec
            blandit ante nunc, nec pellentesque arcu egestas a lorem.
          </p>
          {/* Features List */}
          <div className="row mt-n20">
            {/* Features List Item */}
            <div className="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20">
              <div className="features-list-icon">
                <i className="mi-check" aria-hidden="true" />
              </div>
              <div className="features-list-text">Agency Website</div>
            </div>
            {/* End Features List Item */}
            {/* Features List Item */}
            <div className="col-sm-6 col-lg-12 col-xl-6 col-lg-6 d-flex mt-20">
              <div className="features-list-icon">
                <i className="mi-check" aria-hidden="true" />
              </div>
              <div className="features-list-text">Personal Website</div>
            </div>
            {/* End Features List Item */}
            {/* Features List Item */}
            <div className="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20">
              <div className="features-list-icon">
                <i className="mi-check" aria-hidden="true" />
              </div>
              <div className="features-list-text">Landing Page</div>
            </div>
            {/* End Features List Item */}
            {/* Features List Item */}
            <div className="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20">
              <div className="features-list-icon">
                <i className="mi-check" aria-hidden="true" />
              </div>
              <div className="features-list-text">Portfolio and Gallery</div>
            </div>
            {/* End Features List Item */}
          </div>
          {/* End Features List */}
        </div>
      </div>
    </div>
    <div className="col-lg-6 d-flex align-items-stretch order-lg-first">
      <div className="split-image-left">
        <img
          src="images/banners/uiux-1.jpg"
          alt="Image Description"
        />
        {/* Circle Text */}
        <div className="position-absolute bottom-0 start-0 ps-4 pb-4 d-none d-sm-block">
          <img
            src="images/demo-strong/circle-text.svg"
            width={138}
            height={138}
            alt="Image Description"
          />
        </div>
        {/* End Circle Text */}
      </div>
    </div>
  </div>
</section>
 
    </>
  )
}

export default Feat