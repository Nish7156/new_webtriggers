import React from "react";
import { Helmet } from "react-helmet";

function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Webtriggers</title>
        <meta
          name="description"
          content="Terms of Service for Webtriggers - Read our terms and conditions for using our web development services."
        />
      </Helmet>
      <section className="page-section bg-dark-1 light-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="page-section-header text-center mb-60">
                <h2 className="page-section-title">Terms of Service</h2>
                <p className="page-section-text">Last updated: {new Date().toLocaleDateString()}</p>
              </div>

              <div className="page-section-content">
                <div className="mb-40">
                  <h3 className="h4 mb-20">1. Acceptance of Terms</h3>
                  <p>
                    By accessing and using Webtriggers services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">2. Services Provided</h3>
                  <p>
                    Webtriggers provides web development, design, and related technology services. We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
                  </p>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">3. User Responsibilities</h3>
                  <p>
                    You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account or password.
                  </p>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">4. Intellectual Property</h3>
                  <p>
                    All content, features, and functionality of our services are owned by Webtriggers and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without explicit written permission.
                  </p>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">5. Payment Terms</h3>
                  <p>
                    Payment terms will be specified in individual project agreements. All fees are non-refundable unless otherwise stated in writing. Late payments may result in suspension of services.
                  </p>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">6. Limitation of Liability</h3>
                  <p>
                    Webtriggers shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
                  </p>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">7. Termination</h3>
                  <p>
                    We reserve the right to terminate or suspend your account and access to our services immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
                  </p>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">8. Changes to Terms</h3>
                  <p>
                    We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">9. Contact Information</h3>
                  <p>
                    If you have any questions about these Terms of Service, please contact us through our contact form or email us directly.
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

export default Terms;
