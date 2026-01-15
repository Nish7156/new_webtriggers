import React from "react";
import { Helmet } from "react-helmet";

function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Webtriggers</title>
        <meta
          name="description"
          content="Privacy Policy for Webtriggers - Learn how we collect, use, and protect your personal information."
        />
      </Helmet>
      <section className="page-section bg-dark-1 light-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="page-section-header text-center mb-60">
                <h2 className="page-section-title">Privacy Policy</h2>
                <p className="page-section-text">Last updated: {new Date().toLocaleDateString()}</p>
              </div>

              <div className="page-section-content">
                <div className="mb-40">
                  <h3 className="h4 mb-20">1. Introduction</h3>
                  <p>
                    At Webtriggers, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                  </p>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">2. Information We Collect</h3>
                  <p>We may collect the following types of information:</p>
                  <ul className="list-unstyled ms-20">
                    <li>• <strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when contacting us or using our services.</li>
                    <li>• <strong>Technical Information:</strong> IP address, browser type, device information, and usage data collected automatically when you visit our website.</li>
                    <li>• <strong>Project Information:</strong> Details about your project requirements, communications, and files shared during the development process.</li>
                  </ul>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">3. How We Use Your Information</h3>
                  <p>We use the collected information for the following purposes:</p>
                  <ul className="list-unstyled ms-20">
                    <li>• To provide, maintain, and improve our web development services</li>
                    <li>• To communicate with you about your projects and respond to inquiries</li>
                    <li>• To process payments and manage your account</li>
                    <li>• To send you updates, newsletters, and marketing communications (with your consent)</li>
                    <li>• To analyze website usage and improve user experience</li>
                    <li>• To comply with legal obligations and protect our rights</li>
                  </ul>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">4. Data Storage and Security</h3>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">5. Data Sharing and Disclosure</h3>
                  <p>We do not sell your personal information. We may share your data only in the following circumstances:</p>
                  <ul className="list-unstyled ms-20">
                    <li>• With service providers who assist us in operating our business (e.g., hosting, payment processing)</li>
                    <li>• When required by law or to protect our legal rights</li>
                    <li>• With your explicit consent</li>
                    <li>• In connection with a business transfer or merger</li>
                  </ul>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">6. Cookies and Tracking Technologies</h3>
                  <p>
                    Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings, though this may affect website functionality.
                  </p>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">7. Your Rights</h3>
                  <p>You have the right to:</p>
                  <ul className="list-unstyled ms-20">
                    <li>• Access and receive a copy of your personal data</li>
                    <li>• Request correction of inaccurate or incomplete data</li>
                    <li>• Request deletion of your personal data</li>
                    <li>• Object to or restrict processing of your data</li>
                    <li>• Withdraw consent at any time where processing is based on consent</li>
                    <li>• Data portability (receive your data in a structured format)</li>
                  </ul>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">8. Third-Party Links</h3>
                  <p>
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">9. Children's Privacy</h3>
                  <p>
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">10. International Data Transfers</h3>
                  <p>
                    Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy.
                  </p>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">11. Changes to This Privacy Policy</h3>
                  <p>
                    We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                  </p>
                </div>

                <div className="mb-40">
                  <h3 className="h4 mb-20">12. Contact Us</h3>
                  <p>
                    If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact us through our contact form or email us directly. We will respond to your inquiry as soon as possible.
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

export default Privacy;
