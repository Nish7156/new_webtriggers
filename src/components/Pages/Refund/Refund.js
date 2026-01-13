import React from "react";
import { Helmet } from "react-helmet";

function Refund() {
  return (
    <>
      <Helmet>
        <title>Refund Policy | Webtriggers</title>
        <meta
          name="description"
          content="Refund Policy for Webtriggers - Learn about our refund terms and conditions for web development services."
        />
      </Helmet>
      <section className="page-section bg-dark-1 light-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="page-section-header text-center mb-60">
                <h2 className="page-section-title">Refund Policy</h2>
                <p className="page-section-text">Last updated: {new Date().toLocaleDateString()}</p>
              </div>

              <div className="page-section-content">
                <div className="mb-40">
                  <h3 className="h4 mb-20">1. General Policy</h3>
                  <p>
                    At Webtriggers, we strive to provide high-quality web development services. Due to the custom nature of our work, refunds are handled on a case-by-case basis. We are committed to ensuring customer satisfaction and will work with you to resolve any issues.
                  </p>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">2. Project-Based Services</h3>
                  <p>
                    For custom web development projects:
                  </p>
                  <ul className="list-unstyled ms-20">
                    <li>• Refunds may be considered if requested within 7 days of project initiation and before significant work has been completed.</li>
                    <li>• Once development work has progressed beyond 25%, refunds will be prorated based on work completed.</li>
                    <li>• No refunds will be provided after project completion and delivery.</li>
                  </ul>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">3. Subscription Services</h3>
                  <p>
                    For ongoing subscription or maintenance services:
                  </p>
                  <ul className="list-unstyled ms-20">
                    <li>• Monthly subscriptions can be cancelled at any time, with cancellation taking effect at the end of the current billing period.</li>
                    <li>• Refunds for the current billing period are not provided unless service is unavailable for more than 48 hours.</li>
                    <li>• Annual subscriptions may be eligible for prorated refunds if cancelled within the first 30 days.</li>
                  </ul>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">4. Digital Products</h3>
                  <p>
                    For downloadable digital products or templates:
                  </p>
                  <ul className="list-unstyled ms-20">
                    <li>• Refunds are available within 14 days of purchase if the product is defective or not as described.</li>
                    <li>• Once a digital product has been downloaded and used, refunds are generally not available.</li>
                  </ul>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">5. Requesting a Refund</h3>
                  <p>
                    To request a refund, please contact us through our contact form or email us directly. Include:
                  </p>
                  <ul className="list-unstyled ms-20">
                    <li>• Your order or project number</li>
                    <li>• Reason for refund request</li>
                    <li>• Any relevant documentation</li>
                  </ul>
                  <p className="mt-20">
                    We will review your request and respond within 5-7 business days.
                  </p>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">6. Processing Time</h3>
                  <p>
                    Approved refunds will be processed to your original payment method within 10-14 business days. The time it takes for the refund to appear in your account depends on your payment provider.
                  </p>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">7. Non-Refundable Items</h3>
                  <p>
                    The following are generally non-refundable:
                  </p>
                  <ul className="list-unstyled ms-20">
                    <li>• Completed and delivered projects</li>
                    <li>• Services already rendered</li>
                    <li>• Custom work that has been approved and implemented</li>
                    <li>• Third-party fees or licenses purchased on your behalf</li>
                  </ul>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">8. Disputes</h3>
                  <p>
                    If you are not satisfied with our refund decision, we encourage you to contact us to discuss your concerns. We are committed to finding a fair resolution for all parties involved.
                  </p>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">9. Contact Us</h3>
                  <p>
                    For questions about our refund policy or to request a refund, please contact us through our contact form or email us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Refund;
