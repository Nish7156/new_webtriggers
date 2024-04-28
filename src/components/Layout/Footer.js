import React from "react";

function Footer() {
  return (
    <>
      <footer class="footer-1 bg-dark-2 light-content">
        <div class="container">
          <div class="page-section">
            <div class="row">
              <div class="col-lg-3 text-center text-lg-start mb-md-50">
                © Webtriggers 2024.
              </div>

              <div class="col-lg-6 footer-social-links text-center mb-md-40">
                {/* <a
                  href="#"
                  title="Facebook"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  <span class="visually-hidden">Facebook</span>
                  <i class="fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  title="Twitter"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  <span class="visually-hidden">Youtube</span>
                  <i class="fa-youtube"></i>
                </a> */}
                <a
                  href="https://www.instagram.com/webtriggers11"
                  title="Instagram"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  <span class="visually-hidden">Instagram</span>
                  <i class="fa-instagram"></i>
                </a>
                {/* <a
                  href="#"
                  title="Behance"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  <span class="visually-hidden">Behance</span>
                  <i class="fa-behance"></i>
                </a>
                <a
                  href="#"
                  title="Dribbble"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  <span class="visually-hidden">Dribbble</span>
                  <i class="fa-dribbble"></i>
                </a> */}
              </div>

              <div class="col-lg-3 text-center text-lg-end local-scroll">
                <a href="#top" class="fw-top-link">
                  <span class="fw-top-link-underline">Back to top</span>
                  <span class="icon ms-1">
                    <i class="icon-arrow-up size-17"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* <div class="footer-text text-center opacity-75 mt-n10 pb-50">
            Made with love for great people.
            <div class="small">
              Read <a href="#">Terms & Conditions</a> and
              <a href="#">Privacy Policy</a>.
            </div>
          </div> */}
        </div>
      </footer>
    </>
  );
}

export default Footer;
