import React from "react";

function PortfolioSection() {
  const ProjectsList = [
    // {
    //   id: 1,
    //   title: "Toopgeek",
    //   category: "Branding, UI/UX Design",
    //   img: "/images/projects/topgeekai.jpg",
    // },
    // {
    //   id: 2,
    //   title: "Kofuku",
    //   category: "Branding, UI/UX Design",
    //   img: "/images/projects/kofuku.jpg",
    // },
    {
      id: 2,
      title: "Tech Of India",
      category: "Web Development",
      img: "/images/projects/tech-of.png",
      link:'https://techofindia.in'
    },
    {
      id: 3,
      title: "RCSPL",
      category: "Web Development",
      img: "/images/projects/rcspl.png",
      link:'https://project1-weld-beta.vercel.app'
    },
    {
      id: 4,
      title: "YT Playlist Length Calculator",
      category: "Web App Development",
      img: "/images/projects/YT Playlist Length Calculator.png"
    },
    {
      id: 5,
      title: "Food Recipe App",
      category: "Mobile App Design & Development",
      img: "/images/projects/Food Recipe App_React Native.png"
    },
    {
      id: 5,
      title: "Links Sharing App",
      category: "Web App Design & Development",
      img: "/images/projects/links-sharing-app.png"
    }
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
                    <a href={`${data.link}`} target="_blank">
                      <div class="portfolio-4-image ">
                        <img
                          src={`${data.img}`}
                          style={{
                            width: "100%",
                            height: "400px",
                            objectFit: "cover"
                          }}
                          alt="Image Description"
                        />
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
