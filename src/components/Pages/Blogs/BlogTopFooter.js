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
                      <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0 }}>
                        Branding
                      </button>
                      <small>- 7</small>
                    </li>
                    <li>
                      <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0 }}>
                        Design
                      </button>
                      <small>- 15</small>
                    </li>
                    <li>
                      <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0 }}>
                        Development
                      </button>
                      <small>- 3</small>
                    </li>
                    <li>
                      <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0 }}>
                        Photography
                      </button>
                      <small>- 5</small>
                    </li>
                    <li>
                      <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0 }}>
                        Other
                      </button>
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
                    <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0, margin: '0 5px' }}>Design</button>
                    <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0, margin: '0 5px' }}>Portfolio</button>
                    <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0, margin: '0 5px' }}>Digital</button>
                    <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0, margin: '0 5px' }}>Branding</button>
                    <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0, margin: '0 5px' }}>Theme</button>
                    <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0, margin: '0 5px' }}>Clean</button>
                    <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0, margin: '0 5px' }}>UI &amp; UX</button>
                    <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0, margin: '0 5px' }}>Love</button>
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
                      <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0 }}>
                        February 2021
                      </button>
                    </li>
                    <li>
                      <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0 }}>
                        January 2021
                      </button>
                    </li>
                    <li>
                      <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0 }}>
                        December 2020
                      </button>
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
                        <a href="/terms">Terms &amp; Conditions</a> and{" "}
                        <a href="/privacy">Privacy Policy</a>.
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