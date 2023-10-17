import React, { useState } from "react";

function Header() {
  const [isOpen, setisOpen] = useState(false);
  const HeaderMenus = [
    {
      id: 1,
      title: "Home",
      link: "",
    },
    {
      id: 2,
      title: "About",
      link: "",
    },
    {
      id: 3,
      title: "Services",
      link: "",
    },
    {
      id: 4,
      title: "Portfolio",
      link: "",
    },
    {
      id: 5,
      title: "Contact",
      link: "",
    },
  ];
  let isActive = true;
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
                  <li key={data.id}>
                    <a
                      href={`${data.link}`}
                      className={isActive && index === 0 ? "active" : ""}
                    >
                      {data.title}
                    </a>
                  </li>
                );
              })}
            </ul>

            <ul class="items-end clearlist local-scroll">
              <li>
                <a href="strong-contact-dark.html" class="opacity-1 no-hover">
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
