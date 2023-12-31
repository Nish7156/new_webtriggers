import React from "react";

function ServicesSection() {
  return (
    <>
      <section class="page-section bg-dark-1 light-content" id="services">
        <div class="container">
          <div class="row">
            <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 class="section-caption-border">Our Services</h2>
              <h3 class="section-title-strong mb-90 mb-sm-50">
                We provide the
                <span class="font-alt">{' '}full stack of</span> creative services
              </h3>
            </div>
          </div>

          <ul
            class="nav nav-tabs tpl-alt-tabs mb-20 mb-xs-0 wow fadeInUp"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <a
                href="#service-branding"
                class="nav-link active"
                data-bs-toggle="tab"
                role="tab"
                aria-selected="true"
              >
                <div class="alt-tabs-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 58 64"
                    aria-hidden="true"
                  >
                    <path d="M40.875 10c8.625 0 15.125 5.375 15.125 14.5 0 3.875-1.625 8.875-5.125 13.125s-5.625 6.5-12.5 11-10.375 5.375-10.375 5.375-3.5-0.875-10.375-5.375-9-6.75-12.5-11-5.125-9.25-5.125-13.125c0-9.125 6.5-14.5 15.125-14.5 4.875 0 10.25 2.25 12.875 6.625 2.625-4.375 8-6.625 12.875-6.625zM49.375 36.375c1.5-1.75 2.75-3.875 3.5-6.125 0.75-2 1.125-3.875 1.125-5.75 0-3.75-1.25-7-3.625-9.25-1.125-1-2.5-1.875-4.125-2.375-1.625-0.625-3.5-0.875-5.375-0.875-4.75 0-9.125 2.25-11.125 5.625l-1.75 2.875-1.75-2.875c-2-3.375-6.375-5.625-11.125-5.625-1.875 0-3.75 0.25-5.375 0.875-1.625 0.5-3 1.375-4.125 2.375-2.375 2.25-3.625 5.5-3.625 9.25 0 1.875 0.375 3.75 1.125 5.75 0.75 2.25 2 4.375 3.5 6.125 3.375 4 5.25 6.125 12.125 10.625 5 3.375 8.125 4.5 9.25 4.875 1.125-0.375 4.25-1.5 9.25-4.875 6.875-4.5 8.75-6.625 12.125-10.625z"></path>
                  </svg>
                </div>
                Branding
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                href="#service-ui-ux-design"
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <div class="alt-tabs-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="64"
                    viewBox="0 0 60 64"
                    aria-hidden="true"
                  >
                    <path d="M60 48h-22v2h8v2h-32.125v-2h8v-2h-21.875v-36h60v36zM2 14v32h56v-32h-56z"></path>
                  </svg>
                </div>
                UI/UX Design
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                href="#service-animation"
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <div class="alt-tabs-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="64"
                    viewBox="0 0 50 64"
                    aria-hidden="true"
                  >
                    <path d="M0 11h50v42h-50v-42zM9 51v-6h-7v6h7zM9 43v-6h-7v6h7zM9 35v-6h-7v6h7zM9 27v-6h-7v6h7zM9 19v-6h-7v6h7zM39 51v-18h-28v18h28zM39 31v-18h-28v18h28zM48 51v-6h-7v6h7zM48 43v-6h-7v6h7zM48 35v-6h-7v6h7zM48 27v-6h-7v6h7zM48 19v-6h-7v6h7z"></path>
                  </svg>
                </div>
                Animation Design
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                href="#service-development"
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <div class="alt-tabs-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="64"
                    viewBox="0 0 48 64"
                    aria-hidden="true"
                  >
                    <path d="M24.125 20c3.25 0 6.25 1.25 8.5 3.5s3.5 5.25 3.5 8.5-1.25 6.25-3.5 8.5-5.25 3.5-8.5 3.5-6.25-1.25-8.5-3.5-3.5-5.25-3.5-8.5 1.25-6.25 3.5-8.5 5.25-3.5 8.5-3.5zM24.125 42c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10zM17.25 10.375c-1.25 0.375-2.5 0.875-3.75 1.5 0.25 1 0.125 2 0 3-0.25 1.625-1 3.125-2.25 4.375-1.5 1.5-3.625 2.375-5.75 2.375-0.5 0-1.125 0-1.625-0.125-0.625 1.25-1.125 2.5-1.5 3.75 0.875 0.5 1.5 1.25 2.125 2.125 1 1.375 1.5 3 1.5 4.625s-0.5 3.25-1.5 4.625c-0.625 0.875-1.25 1.625-2.125 2.125 0.375 1.25 0.875 2.5 1.5 3.75 0.5-0.125 1.125-0.125 1.625-0.125 2.125 0 4.25 0.875 5.75 2.375 1.25 1.25 2 2.75 2.25 4.375 0.125 1 0.25 2 0 3 1.25 0.625 2.5 1.125 3.75 1.5 0.5-0.875 1.25-1.5 2.125-2.125 1.375-1 3-1.5 4.625-1.5s3.25 0.5 4.625 1.5c0.875 0.625 1.625 1.25 2.125 2.125 1.25-0.375 2.5-0.875 3.75-1.5-0.25-1-0.125-2 0-3 0.25-1.625 1-3.125 2.25-4.375 1.5-1.5 3.625-2.375 5.75-2.375 0.5 0 1.125 0 1.625 0.125 0.625-1.25 1.125-2.5 1.5-3.75-0.875-0.5-1.5-1.25-2.125-2.125-1-1.375-1.5-3-1.5-4.625s0.5-3.25 1.5-4.625c0.625-0.875 1.25-1.625 2.125-2.125-0.375-1.25-0.875-2.5-1.5-3.75-0.5 0.125-1.125 0.125-1.625 0.125-2.125 0-4.25-0.875-5.75-2.375-1.25-1.25-2-2.75-2.25-4.375-0.125-1-0.25-2 0-3-1.25-0.625-2.5-1.125-3.75-1.5-0.5 0.875-1.25 1.5-2.125 2.125-1.375 1-3 1.5-4.625 1.5s-3.25-0.5-4.625-1.5c-0.875-0.625-1.625-1.25-2.125-2.125zM29.75 8v0c2.5 0.625 5 1.625 7.125 3-1 2.25-0.625 5 1.25 6.875 1.25 1.25 2.75 1.75 4.375 1.75 0.875 0 1.75-0.125 2.5-0.5 1.375 2.125 2.375 4.625 3 7.125-2.375 0.875-4 3.125-4 5.75s1.75 4.875 4 5.75c-0.625 2.5-1.625 5-3 7.125-0.75-0.375-1.625-0.5-2.5-0.5-1.625 0-3.125 0.5-4.375 1.75-1.875 1.875-2.25 4.625-1.25 6.875-2.125 1.375-4.625 2.375-7.125 3-0.875-2.25-3.125-4-5.75-4s-4.875 1.75-5.75 4c-2.5-0.625-5-1.625-7.125-3 1-2.25 0.625-5-1.25-6.875-1.25-1.25-2.75-1.75-4.375-1.75-0.875 0-1.75 0.125-2.5 0.5-1.375-2.125-2.375-4.625-3-7.125 2.25-0.875 4-3.125 4-5.75s-1.625-4.875-4-5.75c0.625-2.5 1.625-5 3-7.125 0.75 0.375 1.625 0.5 2.5 0.5 1.625 0 3.125-0.5 4.375-1.75 1.875-1.875 2.25-4.625 1.25-6.875 2.125-1.375 4.625-2.375 7.125-3 0.875 2.375 3.125 4 5.75 4s4.875-1.625 5.75-4z"></path>
                  </svg>
                </div>
                Development
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                href="#service-photography"
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <div class="alt-tabs-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="64"
                    viewBox="0 0 48 64"
                    aria-hidden="true"
                  >
                    <path d="M44.25 20c2.25 0 3.75 1.625 3.75 3.875v22c0 2.25-1.5 4.125-3.75 4.125h-40c-2.25 0-4.25-1.875-4.25-4.125v-22c0-2.25 2-3.875 4.25-3.875h1.625v-2h4.25v2h1.625c4-4.5 5.375-6 6.875-6h11c1.5 0 2.875 1.5 6.875 6h7.75zM46 45.875v-22c0-1.125-0.625-1.875-1.75-1.875h-8.625l-0.625-0.375c-0.375-0.5-0.875-1-1.25-1.375-1.5-1.625-2.5-3-3.25-3.75-0.625-0.625-0.875-0.5-0.875-0.5h-11s-0.25 0-0.875 0.5c-0.75 0.625-1.75 1.75-3.125 3.375-0.375 0.5-0.875 1.25-1.375 1.75l-0.625 0.375h-8.375c-1.125 0-2.25 0.875-2.25 1.875v22c0 1.125 1.125 2.125 2.25 2.125h40c1 0 1.75-1 1.75-2.125zM24 23.75c5.875 0 10.75 4.75 10.75 10.625s-4.875 10.625-10.75 10.625-10.75-4.75-10.75-10.625 4.875-10.625 10.75-10.625zM24 43c4.75 0 8.75-3.875 8.75-8.625s-4-8.625-8.75-8.625-8.75 3.875-8.75 8.625 4 8.625 8.75 8.625zM36 26.125v-2.125h2.125v2.125h-2.125zM20 34.375c0-2.625 1.375-4 4-4s4 1.375 4 4-1.375 4-4 4-4-1.375-4-4z"></path>
                  </svg>
                </div>
                Photography
              </a>
            </li>
          </ul>

          <div class="tab-content tpl-tabs-cont">
            <div
              class="tab-pane fade show active"
              id="service-branding"
              role="tabpanel"
            >
              <div class="row">
                <div
                  class="col-lg-4 mb-md-40 mb-xs-30 wow linesAnimIn"
                  data-splitting="lines"
                >
                  <blockquote class="mt-0 mb-0">
                    <p class="mb-20 mb-sm-10">
                      Branding is crafting a unique identity beyond visuals,
                      including tone and emotion. It aims to stand out, build
                      trust, and foster loyalty through consistent communication
                      of values in a competitive market.
                    </p>
                    {/* <footer>Thomas Anderson</footer> */}
                  </blockquote>
                </div>
                <div
                  class="col-md-6 col-lg-4 mb-sm-30 wow linesAnimIn"
                  data-splitting="lines"
                >
                  Differentiation is key, requiring a deep understanding of a
                  brand's values and distinctive offerings. Consistency across
                  various platforms is crucial for building a cohesive and
                  recognizable brand image. Successful branding is an ongoing,
                  dynamic process that demands adaptability to changing market
                  trends and consumer preferences, ensuring sustained relevance
                  and resonance in the competitive landscape.
                </div>
                <div
                  class="col-md-6 col-lg-4 wow linesAnimIn"
                  data-splitting="lines"
                >
                  At its core, branding is about storytelling and creating a
                  narrative that resonates with the target audience. It's the
                  art of shaping perceptions, influencing how people perceive
                  and interact with a brand. A strong brand not only attracts
                  customers but also becomes a symbol of trust and reliability.
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="service-ui-ux-design"
              role="tabpanel"
            >
              <div class="row">
                <div class="col-lg-4 mb-md-40 mb-xs-30">
                  <blockquote class="mt-0 mb-0">
                    <p>
                      UI/UX design is the strategic creation of user-friendly
                      and visually engaging digital experiences. It prioritizes
                      intuitive interactions, seamless navigation, and emotional
                      connection to stand out, build trust, and foster loyalty
                      in the competitive digital realm.
                    </p>
                    {/* <footer>Steve Krug</footer> */}
                  </blockquote>
                </div>
                <div class="col-md-6 col-lg-4 mb-sm-30">
                  UI/UX designers must prioritize simplicity and clarity in
                  their designs to enhance user comprehension and satisfaction.
                  Streamlining user journeys, minimizing cognitive load, and
                  employing intuitive navigation contribute to a positive user
                  experience. Attention to detail, such as consistent design
                  elements and responsive layouts, further ensures a cohesive
                  and accessible interface.
                </div>
                <div class="col-md-6 col-lg-4">
                  The collaborative nature of UI/UX design involves effective
                  communication with stakeholders and continuous adaptation to
                  user feedback. Maintaining a user-centric mindset throughout
                  the design process is paramount.
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="service-animation" role="tabpanel">
              <div class="row">
                <div class="col-lg-4 mb-md-40 mb-xs-30">
                  <blockquote class="mt-0 mb-0">
                    <p>
                      Animation design breathes life into visual narratives,
                      using motion to enhance engagement. It blends artistry
                      with technology, conveying stories in a visually
                      captivating manner. Tailoring animations to brand and
                      audience ensures a seamless, immersive experience, making
                      complex information digestible and memorable.
                    </p>
                    {/* <footer>Chip Kidd</footer> */}
                  </blockquote>
                </div>
                <div class="col-md-6 col-lg-4 mb-sm-30">
                  In the realm of animation design, understanding the target
                  audience and the message to be conveyed is crucial. Whether
                  it's a logo animation, explainer video, or interactive web
                  animation, tailoring the animation style to align with the
                  brand and user expectations is paramount.
                </div>
                <div class="col-md-6 col-lg-4">
                  Staying abreast of technological advancements in animation
                  tools and techniques is essential for animation designers.
                  From 2D animations to complex 3D visualizations, embracing
                  innovation ensures that animations not only meet current
                  standards but also push creative boundaries.
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="service-development" role="tabpanel">
              <div class="row">
                <div class="col-lg-4 mb-md-40 mb-xs-30">
                  <blockquote class="mt-0 mb-0">
                    <p>
                      Development is the strategic creation of functional
                      software, focusing on coding and programming. It aims for
                      efficient solutions, adapting to evolving technologies for
                      robust and scalable applications. The collaborative
                      process involves continuous communication and iterative
                      improvements.
                    </p>
                    {/* <footer>Albert Einstein</footer> */}
                  </blockquote>
                </div>
                <div class="col-md-6 col-lg-4 mb-sm-30">
                  Development requires a deep understanding of user needs and
                  efficient problem-solving. From web development to software
                  engineering, the emphasis is on creating reliable,
                  user-friendly solutions. Keeping pace with technological
                  advancements and industry best practices is integral for
                  developers, ensuring the delivery of cutting-edge and
                  sustainable applications.
                </div>
                <div class="col-md-6 col-lg-4">
                  The iterative nature of development involves constant testing,
                  debugging, and refining code. Effective collaboration within
                  development teams and clear communication with stakeholders
                  are essential. Successful development not only meets
                  functional requirements but also anticipates future
                  challenges, laying the groundwork for scalable, adaptable, and
                  high-performance digital solutions.
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="service-photography" role="tabpanel">
              <div class="row">
                <div class="col-lg-4 mb-md-40 mb-xs-30">
                  <blockquote class="mt-0 mb-0">
                    <p>
                      Photography is more than capturing images; it's a dynamic
                      form of storytelling. Each click freezes a moment, letting
                      photographers convey emotions and showcase beauty in the
                      ordinary. Through their lens, they transform the mundane
                      into extraordinary visual narratives.
                    </p>
                    {/* <footer>Martin Parr</footer> */}
                  </blockquote>
                </div>
                <div class="col-md-6 col-lg-4 mb-sm-30">
                  In the digital age, photography has become more accessible
                  than ever, with smartphones putting a camera in everyone's
                  pocket. This democratization has led to a surge in amateur
                  photographers, fostering a diverse and vibrant community.
                </div>
                <div class="col-md-6 col-lg-4">
                  Beyond personal expression, photography plays a pivotal role
                  in journalism, advertising, and communication. A single
                  photograph has the power to shape opinions, evoke empathy, and
                  spark societal change. Professional photographers navigate the
                  delicate balance between technical precision and artistic
                  intuition, capturing moments that resonate universally.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesSection;
