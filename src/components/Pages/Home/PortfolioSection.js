import React from "react";

function PortfolioSection() {
  const ProjectsList = [
    {
      id: 1,
      title: "Toopgeek",
      category: "Branding, UI/UX Design",
      img: "/images/projects/topgeekai.jpg",
    },
    {
      id: 2,
      title: "Kofuku",
      category: "Branding, UI/UX Design",
      img: "/images/projects/kofuku.jpg",
    },
    {
      id: 3,
      title: "RCSPL",
      category: "Branding, UI/UX Design",
      img: "/images/projects/rcspl.png",
    },
  ];
  return (
    <>
      <section
        class="page-section bg-dark-1 light-content overflow-hidden"
        id="portfolio"
      >
        <div class="container">
          <div class="row mb-90 mb-sm-50">
            <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 class="section-caption-border">Our Portfolio</h2>
              <h3 class="section-title-strong mb-40">
                Creativity meets <span class="font-alt">technology</span> here
              </h3>
              <p class="mb-0">
                Innovate, Iterate, Integrate: Elevating Web Development into the
                Artistry of the Digital Age.
              </p>
            </div>
          </div>

          <div class="wow fadeInUp">
            <div class="portfolio-4-carousel slider-strong">
              {ProjectsList.map((data) => {
                return (
                  <div key={data.id} class="portfolio-4-item">
                    <a href="/contact-us">
                      <div class="portfolio-4-image">
                        <img src={`${data.img}`} alt="Image Description" />
                      </div>
                      <div class="portfolio-4-intro">
                        <h4 class="portfolio-4-title">{data.title}</h4>
                        <div class="portfolio-4-descr">{data.category}</div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PortfolioSection;
