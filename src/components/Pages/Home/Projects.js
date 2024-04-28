import React from "react";
import { Link, animateScroll as scroll, scroller } from "react-scroll";

function Projects() {
  const TeamList = [
    {
      id: 1,
      name: "Nishant Shedage",
      link: "https://personal-portfolio-brown-three.vercel.app/",
      profile: "/images/banners/me.jpeg",
      about:
        "I'm a full-stack developer skilled in HTML, CSS, JavaScript, PHP, and Python, creating user-friendly web applications with end-to-end solutions.",
      instaLink: "ff",
      githubLink: "",
    },
    {
      id: 2,
      name: "Rahul Gupta",
      link: "https://rahulgupta.web.app/",
      profile: "/images/banners/Rahul_1.jpg",
      about:
        "A Highly Skilled Full-Stack Developer with Expertise in MERN and PERN Stacks and React Native Specializing in Building User-Friendly Web Applications and Comprehensive Solutions",
      instaLink: "ff",
      githubLink: "https://github.com/Rahul869g",
    },
    // {
    //   id: 1,
    //   name: "Nishant Shedage",
    //   link: "https://personal-portfolio-brown-three.vercel.app/",
    //   profile: "/images/banners/me.jpeg",
    //   about:
    //     "I'm a full-stack developer skilled in HTML, CSS, JavaScript, PHP, and Python, creating user-friendly web applications with end-to-end solutions.",
    //   instaLink: "ff",
    //   githubLink: ""
    // },
    // {
    //   id: 1,
    //   name: "Nishant Shedage",
    //   link: "https://personal-portfolio-brown-three.vercel.app/",
    //   profile: "/images/banners/me.jpeg",
    //   about:
    //     "I'm a full-stack developer skilled in HTML, CSS, JavaScript, PHP, and Python, creating user-friendly web applications with end-to-end solutions.",
    //   instaLink: "ff",
    //   githubLink: ""
    // }
  ];
  return (
    <>
      <section class="page-section bg-dark-1 light-content" id="team">
        <div class="container">
          <div class="row">
            <div class="col-xl-5 d-flex align-items-center team-1-column-sticky mb-lg-90 mb-sm-50">
              <div>
                <h2 class="section-caption-border">Our Team</h2>
                <h3 class="section-title-strong mb-40">
                  Meet the <span class="font-alt">team of</span> experts
                </h3>
                <p class="mb-40">
                  Aliquam erat volutpat. Proin luctus interdum orci, euismod
                  ultrices placerat ultricies pretium sem euismod et. Nam
                  consequat lectus nec nunc faucibus.
                </p>
                <div class="local-scroll">
                  <Link
                    to={"contact-us"}
                    spy={false}
                    smooth={true}
                    duration={1000}
                  >
                    <div class="btn btn-mod btn-w btn-large btn-round btn-hover-anim">
                      <span>Join our Team</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-xl-6 offset-xl-1">
              <div class="row mb-n30 masonry ">
                {TeamList.map((data, index) => {
                  return (
                    <div
                      key={data.id}
                      class={` ${
                        index == 1
                          ? "col-sm-6 mb-30 mt-140 mt-xs-0 pt-140 pt-xs-0"
                          : "col-sm-6 mb-30 mt-30"
                      }`}
                    >
                      <a
                        href={`${data.link}`}
                        target="_blank"
                        rel="noopener nofollow"
                        style={{ textDecoration: "none" }}
                      >
                        <div class="team-1-item round">
                          <h4 class="team-1-title">{data.name}</h4>

                          <div class="team-1-image">
                            <img
                              src={`${data.profile}`}
                              alt="Image Description"
                            />
                          </div>

                          <h5 class="team-1-role">Creative director</h5>

                          <p class="team-1-descr" style={{ textAlign: "left" }}>
                            {data.about}
                          </p>

                          <div class="team-1-social-links">
                            {(data.instaLink || data.githubLink) && (
                              <>
                                <a
                                  href={`${data.instaLink}`}
                                  target="_blank"
                                  rel="noopener nofollow"
                                >
                                  <div class="visually-hidden">Instagram</div>
                                  <i class="fa-instagram"></i>
                                </a>
                                <a
                                  href={`${data.githubLink}`}
                                  target="_blank"
                                  rel="noopener nofollow"
                                >
                                  <div class="visually-hidden">Github</div>
                                  <i class="fa-github"></i>
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
