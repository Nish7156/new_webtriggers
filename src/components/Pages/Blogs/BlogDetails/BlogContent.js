import React from "react";

function BlogContent() {
  return (
    <>
      <section className="page-section" style={{ backgroundColor: "white" }}>
        <div className="container relative">
          <div className="row">
            {/* Content */}
            <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
              {/* Post */}
              <div className="blog-item mb-80 mb-xs-40">
                <div className="blog-item-body">
                  <div className="mb-40 mb-xs-30">
                    <img
                      src="/images/demo-bold/portfolio/4.jpg"
                      alt=""
                    />
                  </div>
                  <p>
                    Morbi lacus massa, euismod ut turpis molestie, tristique
                    sodales est. Integer sit amet mi id sapien tempor molestie
                    in nec massa. Fusce non ante sed lorem rutrum feugiat. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                    non laoreet dui. Morbi lacus massa, euismod ut turpis
                    molestie, tristique sodales est. Integer sit amet mi id
                    sapien tempor molestie in nec massa.
                  </p>
                  <p>
                    Fusce non ante sed lorem rutrum feugiat. Vestibulum
                    pellentesque, purus ut&nbsp;dignissim consectetur, nulla
                    erat ultrices purus, ut&nbsp;consequat sem elit non sem.
                    Morbi lacus massa, euismod ut turpis molestie, tristique
                    sodales est. Integer sit amet mi id sapien tempor molestie
                    in nec massa. Fusce non ante sed lorem rutrum feugiat.
                  </p>
                  <blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a&nbsp;ante. Vestibulum pellentesque,
                      purus ut dignissim consectetur, nulla erat ultrices purus.
                    </p>
                    <footer>
                      Someone famous in
                      <cite title="Source Title"> Source Title </cite>
                    </footer>
                  </blockquote>
                  <p>
                    Praesent ultricies ut ipsum non laoreet. Nunc ac
                    <span>ultricies</span> leo. Nulla ac ultrices arcu.
                    Nullam adipiscing lacus in consectetur posuere. Nunc
                    malesuada tellus turpis, ac pretium orci molestie vel. Morbi
                    lacus massa, euismod ut turpis molestie, tristique sodales
                    est. Integer sit amet mi id sapien tempor molestie in nec
                    massa. Fusce non ante sed lorem rutrum feugiat.
                  </p>
                  <ul>
                    <li>First item of the list</li>
                    <li>Second item of the list</li>
                    <li>Third item of the list</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris non laoreet dui. Morbi lacus massa, euismod ut turpis
                    molestie, tristique sodales est. Integer sit amet mi id
                    sapien tempor molestie in nec massa. Fusce non ante sed
                    lorem rutrum feugiat. Vestibulum pellentesque, purus
                    ut&nbsp;dignissim consectetur, nulla erat ultrices purus,
                    ut&nbsp;consequat sem elit non sem.
                  </p>
                </div>
              </div>
              {/* End Post */}

              {/* Prev/Next Post */}
              <div className="clearfix mt-40">
                <button type="button" className="blog-item-more left" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>
                  <i className="mi-chevron-left" />
                  &nbsp;Prev post
                </button>
                <button type="button" className="blog-item-more right" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>
                  Next post&nbsp;
                  <i className="mi-chevron-right" />
                </button>
              </div>
              {/* End Prev/Next Post */}
            </div>
            {/* End Content */}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogContent;
