import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  const handleLinkClick = () => {
    // Scroll to top when link is clicked
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  };
  return (
    <>
      <footer class="footer-1 bg-dark-2 light-content">
        <div class="container">
          <div class="page-section">
            <div class="row">
              <div class="col-lg-3 text-center text-lg-start mb-md-50">
                © Webtriggers 2024.
                <div class="small mt-10">
                  <NavLink to="/terms" className="text-white opacity-75 me-3" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>Terms & Conditions</NavLink>
                  <NavLink to="/refund" className="text-white opacity-75 me-3" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>Refund Policy</NavLink>
                  <NavLink to="/privacy" className="text-white opacity-75" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>Privacy Policy</NavLink>
                </div>
              </div>

              <div class="col-lg-6 footer-social-links text-center mb-md-40">
                <a
                  href="https://www.facebook.com/profile.php?id=100062609944930"
                  title="Facebook"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  <span class="visually-hidden">Facebook</span>
                  <i class="fa-facebook-f"></i>
                </a>
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

          <div class="footer-text text-center opacity-75 mt-n10 pb-50">
            <div class="small">
              <NavLink to="/terms" className="text-white opacity-75 me-2" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
                Terms & Conditions
              </NavLink>
              <span className="text-white opacity-50">|</span>
              <NavLink to="/refund" className="text-white opacity-75 ms-2 me-2" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
                Refund Policy
              </NavLink>
              <span className="text-white opacity-50">|</span>
              <NavLink to="/privacy" className="text-white opacity-75 ms-2" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
                Privacy Policy
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
