import React from 'react'

function BlogTopFooter() {
  return (
    <>
         <section className="page-section" style={{backgroundColor:"white"}}>
        <div className="container relative">
          <div className="row mt-n60">
            <div className="col-sm-6 col-lg-3 mt-60">
              {/* Widget */}
              <div className="widget mb-0">
                <h3 className="widget-title">Categories</h3>
                <div className="widget-body">
                  <ul className="clearlist widget-menu">
                    <li>
                      <a href="#" title="">
                        Branding
                      </a>
                      <small>- 7</small>
                    </li>
                    <li>
                      <a href="#" title="">
                        Design
                      </a>
                      <small>- 15</small>
                    </li>
                    <li>
                      <a href="#" title="">
                        Development
                      </a>
                      <small>- 3</small>
                    </li>
                    <li>
                      <a href="#" title="">
                        Photography
                      </a>
                      <small>- 5</small>
                    </li>
                    <li>
                      <a href="#" title="">
                        Other
                      </a>
                      <small>- 1</small>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Widget */}
            </div>
            <div className="col-sm-6 col-lg-3 mt-60">
              {/* Widget */}
              <div className="widget mb-0">
                <h3 className="widget-title">Tags</h3>
                <div className="widget-body">
                  <div className="tags">
                    <a href="">Design</a>
                    <a href="">Portfolio</a>
                    <a href="">Digital</a>
                    <a href="">Branding</a>
                    <a href="">Theme</a>
                    <a href="">Clean</a>
                    <a href="">UI &amp; UX</a>
                    <a href="">Love</a>
                  </div>
                </div>
              </div>
              {/* End Widget */}
            </div>
            <div className="col-sm-6 col-lg-3 mt-60">
              {/* Widget */}
              <div className="widget mb-0">
                <h3 className="widget-title">Archive</h3>
                <div className="widget-body">
                  <ul className="clearlist widget-menu">
                    <li>
                      <a href="#" title="">
                        February 2021
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        January 2021
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        December 2020
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Widget */}
            </div>
            <div className="col-sm-6 col-lg-3 mt-60">
              {/* Widget */}
              <div className="widget mb-0">
                <h3 className="widget-title">Newsletter</h3>
                <div className="widget-body">
                  <div className="widget-text clearfix">
                    <form className="form" id="mailchimp" noValidate="true">
                      <div className="mb-20">
                        Stay informed with our newsletter.
                      </div>
                      <div className="mb-20">
                        <input
                          placeholder="Enter your email"
                          className="newsletter-field form-control input-md round mb-10"
                          type="email"
                          pattern=".{5,100}"
                          required=""
                          aria-required="true"
                          id="newsletter_field"
                          name="EMAIL"
                        />
                        <button
                          type="submit"
                          className="btn btn-mod btn-gray btn-medium btn-round form-control mb-xs-10"
                        >
                          Subscribe
                        </button>
                      </div>
                      <div className="form-tip">
                        <i className="icon-info size-16" aria-hidden="true" />
                        By sending the form you agree to the{" "}
                        <a href="#">Terms &amp; Conditions</a> and{" "}
                        <a href="#">Privacy Policy</a>.
                      </div>
                      <div
                        id="subscribe-result"
                        role="region"
                        aria-live="polite"
                        aria-atomic="true"
                      >
                        <label htmlFor="newsletter_field" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* End Widget */}
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}

export default BlogTopFooter