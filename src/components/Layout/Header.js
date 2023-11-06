import React, { useState } from "react";
import { Link, animateScroll as scroll, scroller } from "react-scroll";

function Header() {
  const [isOpen, setisOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const HeaderMenus = [
    { id: 1, title: "Home", link: "home" },
    { id: 2, title: "About", link: "about" },
    { id: 3, title: "Services", link: "services" },
    { id: 4, title: "Portfolio", link: "portfolio" },
  ];
  const handleSetActive = (to) => {
    console.log(to);
    setActiveSection(to);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    setisOpen(false);
  };

  const scrollToSection = (link) => {
    scroller.scrollTo(link, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: 60,
      spy: true,
      activeClass: "active",
      onSetActive: handleSetActive,
    });
    setisOpen(false);
  };
  return (
    <>
      <nav class="main-nav dark dark-mode transparent stick-fixed wow-menubar wch-unset">
        <div class="main-nav-sub full-wrapper">
          <div class="nav-logo-wrap local-scroll">
            <a href="index.html" class="logo font-alt">
              <img
                src="/images/logo/main_logo.png"
                alt="Your Company Logo"
                width="176"
                height="34"
              />
            </a>
          </div>

          <div
            class={`mobile-nav ${isOpen ? "active" : ""}`}
            role="button"
            tabindex="0"
            onClick={() => setisOpen(!isOpen)}
          >
            <i class="mobile-nav-icon"></i>
            <span class="visually-hidden">Menu</span>
          </div>

          <div
            class={`inner-nav desktop-nav ${isOpen ? "" : "js-opened"}`}
            style={{ display: isOpen ? "block" : "" }}
          >
            <ul class="clearlist local-scroll">
              {HeaderMenus.map((data, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={data.link}
                      spy={true}
                      smooth={true}
                      duration={500}
                      onClick={() => scrollToSection(data.link)}
                      className={activeSection === data.link ? "active" : ""}
                    >
                      {data.title}
                    </Link>
                  </li>
                );
              })}
              <li>
                <a href="/contact-us">Contact-us</a>
              </li>
            </ul>

            <ul class="items-end clearlist local-scroll">
              <li>
                <a href="/contact-us" class="opacity-1 no-hover">
                  <span class="link-hover-anim" data-link-animate="y">
                    <span class="icon-ellipse me-1"></span> Get Touch
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
