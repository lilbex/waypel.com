import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <div className="container">
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>

        <div className="privacy-content">
          <div className="page-header">
            <h1 className="page-title">Privacy Policy</h1>
            <p className="page-date">Last updated: December 2024</p>
          </div>

          <section className="policy-section">
            <h2 className="section-heading">1. Information We Collect</h2>
            <p className="section-text">
              We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
            </p>
            <h3 className="subsection-heading">Personal Information:</h3>
            <ul className="policy-list">
              <li>Email address and username</li>
              <li>Profile information (avatar, bio, preferences)</li>
              <li>Chat messages and content you create</li>
              <li>Quiz responses and game data</li>
            </ul>
            <h3 className="subsection-heading">Automatically Collected Information:</h3>
            <ul className="policy-list">
              <li>Device information and identifiers</li>
              <li>Usage data and app interactions</li>
              <li>Location data (if permitted)</li>
              <li>Performance and crash data</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="section-heading">2. How We Use Your Information</h2>
            <p className="section-text">We use the information we collect to:</p>
            <ul className="policy-list">
              <li>Provide and improve our services</li>
              <li>Enable communication between users</li>
              <li>Personalize your experience</li>
              <li>Process transactions and rewards</li>
              <li>Send notifications and updates</li>
              <li>Ensure safety and prevent abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="section-heading">3. Information Sharing</h2>
            <p className="section-text">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="policy-list">
              <li>With other users as part of the social features</li>
              <li>With service providers who help us operate the app</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or merger</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="section-heading">4. Data Security</h2>
            <p className="section-text">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="section-text">
              However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="section-heading">5. Your Rights and Choices</h2>
            <p className="section-text">You have the right to:</p>
            <ul className="policy-list">
              <li>Access and update your personal information</li>
              <li>Delete your account and associated data</li>
              <li>Control privacy settings and notifications</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data</li>
              <li>Report privacy concerns to us</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="section-heading">6. Contact Us</h2>
            <p className="section-text">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="contact-info">
              <p>Email: privacy@waypel.com</p>
              <p>Address: Waypel Privacy Team</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}