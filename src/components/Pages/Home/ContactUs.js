import React from "react";

function ContactUs() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
  //     .then(
  //       (result) => {
  //         alert("Message sent successfully");
  //       },
  //       (error) => {
  //         console.error("Error sending message:", error);
  //         alert("Failed to send message");
  //       }
  //     );
  // };
  return (
    <>
      <section class="page-section bg-dark-1 light-content" id="contact-us">
        <div class="container">
          <div class="row mb-90 mb-sm-50">
            <div class="col-lg-5 col-xl-4 mb-md-90 mb-sm-50 wow fadeInUp">
              <h2 class="section-title-strong mb-40">
                Let’s work <span class="font-alt">together</span>
              </h2>
              <p class="mb-0">
                Code Collaboration: Join forces with us for seamless web
                development, where expertise meets innovation to build
                exceptional online experiences.
              </p>
            </div>

            <div class="col-lg-7 offset-xl-1">
              <div class="round overflow-hidden">
                <img
                  src="images/demo-strong/section-image-5.jpg"
                  alt="Image Description"
                  class="wow scaleOutIn"
                  data-wow-offset="110"
                />
              </div>
            </div>
          </div>

          <div class="row wow fadeInUp" data-wow-delay="0.27s">
            <div class="col-lg-5 col-xl-4 mb-md-90 mb-sm-50">
              <div class="contact-2">
                <div class="contact-2-item">
                  <div class="contact-2-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="64"
                      viewBox="0 0 44 64"
                      aria-hidden="true"
                    >
                      <path d="M42 42c2 2 3.25 4.375 0 8.25-3.125 3.75-5.25 3.75-8 3.75-3 0-7.25-1.75-11.625-5-4-2.875-5.75-4.25-9.75-8.375-4.25-4.375-6.875-8-9.875-13.375-3.375-6.25-3-9.25-2.25-11.5 0.5-1.5 1.75-3 3.5-4.125l0.125-0.125c0.75-0.5 2.25-1.5 4-1.5 1.625 0 3 0.75 4.25 2.25l0.125 0.125c1.375 1.75 3 3.875 4 5.875 1.25 2.625 1.25 4.75-0.125 6.625-1.125 1.5-1.5 2.375-1.5 2.875s0.625 1.125 1.625 2.25l0.125 0.125c2 2.25 2.5 2.875 3.25 3.625 0.125 0.125 0.375 0.25 0.5 0.375l0.25 0.25c0.875 0.875 1.375 1.5 3.625 3.5l0.125 0.125c0.875 0.75 1.125 1 1.5 1 0.625 0 2-0.875 3.625-1.875 0.5-0.375 1.375-0.625 2.125-0.625 3.375 0 8.5 3.625 10.375 5.5z"></path>
                    </svg>
                  </div>
                  <div class="contat-2-intro">
                    <h4 class="contact-2-title">
                      Call <span class="font-alt">us</span>
                    </h4>
                    <div class="contact-2-text">
                      <a href="tel:+18376528800">+1 (837) 652 8800</a>
                    </div>
                  </div>
                </div>

                <div class="contact-2-item">
                  <div class="contact-2-icon">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="64"
                      viewBox="0 0 48 64"
                      aria-hidden="true"
                    >
                      <path d="M48 48h-48v-30.25l16.375 12.5-8.5 9.625 0.25 0.25 9.875-8.75 6 4.625 6-4.625 9.875 8.75 0.25-0.25-8.5-9.625 16.375-12.5v30.25zM47 16l-23 17.5-23-17.5h46z"></path>
                    </svg>
                  </div>
                  <div class="contat-2-intro">
                    <h4 class="contact-2-title">
                      Say <span class="font-alt">hello</span>
                    </h4>
                    <div class="contact-2-text">
                      <a href="mailto:webtriggers11@gmail.com">
                        webtriggers11@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-7 offset-xl-1">
              <form class="form contact-form" id="contact_form">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="input-lg round form-control"
                        placeholder="Enter your name"
                        pattern=".{3,100}"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="input-lg round form-control"
                        placeholder="Enter your email"
                        pattern=".{5,100}"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    class="input-lg round form-control"
                    style={{ height: "130px", color: "white" }}
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-tip pt-20 pt-sm-0"></div>
                  </div>
                  <div class="col-sm-6">
                    <div class="text-end pt-20">
                      <button
                        type="submit"
                        id="submit_btn"
                        aria-controls="result"
                        class="submit_btn btn btn-mod btn-w btn-large btn-round btn-hover-anim align-middle"
                      >
                        <span> Send Message </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  id="result"
                  role="region"
                  aria-live="polite"
                  aria-atomic="true"
                ></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
