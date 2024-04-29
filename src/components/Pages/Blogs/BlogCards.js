import React from "react";
import { Link } from "react-router-dom";

function BlogCards() {
  const vv = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <section
        className="page-section"
        id="blog"
        style={{ backgroundColor: "white" }}
      >
        <div className="container position-relative">
          {/* Blog Grid */}
          <div
            className="row mt-n50 mt-sm-n30 mb-50 mb-sm-30 wow fadeInUp"
            data-wow-offset={0}
          >
            {/* Post Item */}
            {vv.map((data, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="post-prev-2 col-md-6 col-lg-4 mt-50 mt-sm-30"
                  >
                    <div className="post-prev-2-img">
                      <Link to="/blog/123">
                        <img
                          src="/images/demo-modern/blog/1.jpg"
                          alt="Image Description"
                        />
                      </Link>
                    </div>
                    <h3 className="post-prev-2-title">
                      <Link to="/blog/123">
                        Natura Insects Series: Crafting Insects Made by Flowers
                      </Link>
                    </h3>
                    <div className="post-prev-2-info">December 3, 2023</div>
                  </div>
                </>
              );
            })}
          </div>
          {/* Pagination */}
          <div className="pagination justify-content-center">
            <a href="#">
              <i className="mi-chevron-left" />
              <span className="visually-hidden">Previous page</span>
            </a>
            <a href="#" className="active">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <span className="no-active">...</span>
            <a href="#">9</a>
            <a href="#">
              <i className="mi-chevron-right" />
              <span className="visually-hidden">Next page</span>
            </a>
          </div>
          {/* End Pagination */}
        </div>
      </section>
    </>
  );
}

export default BlogCards;
