import Link from 'next/link';

export default function SafetyStandards() {
  return (
    <div className="safety-page">
      <div className="container">
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>

        <div className="safety-content">
          <div className="page-header">
            <div className="safety-icon">🛡️</div>
            <h1 className="page-title">Safety Standards</h1>
            <p className="page-subtitle">
              WayPel prioritizes user safety and maintains strict community standards to ensure a positive experience for all users.
            </p>
          </div>
          
          <section className="safety-section">
            <h2 className="section-heading">🤝 Community Guidelines</h2>
            <ul className="safety-list">
              <li>No harassment, bullying, or threatening behavior</li>
              <li>No sharing of inappropriate or explicit content</li>
              <li>No spam or misleading information</li>
              <li>Respect other users' privacy and boundaries</li>
              <li>No impersonation or fake profiles</li>
            </ul>
          </section>
          
          <section className="safety-section">
            <h2 className="section-heading">🔒 Safety Features</h2>
            <ul className="safety-list">
              <li>Block and report functionality</li>
              <li>Content moderation and review</li>
              <li>Account verification system</li>
              <li>Privacy controls for personal information</li>
              <li>24/7 safety monitoring</li>
            </ul>
          </section>
          
          <section className="safety-section">
            <h2 className="section-heading">📢 Reporting Violations</h2>
            <p className="section-text">If you encounter any safety concerns or policy violations:</p>
            <ul className="safety-list">
              <li>Use the in-app report feature</li>
              <li>Email us at: <strong>safety@waypel.com</strong></li>
              <li>Include screenshots or evidence when possible</li>
            </ul>
          </section>
          
          <section className="safety-section">
            <h2 className="section-heading">📞 Contact Information</h2>
            <div className="contact-grid">
              <div className="contact-item">
                <strong>Safety Team:</strong> safety@waypel.com
              </div>
              <div className="contact-item">
                <strong>General Support:</strong> support@waypel.com
              </div>
              <div className="contact-item">
                <strong>Business:</strong> business@waypel.com
              </div>
              <div className="contact-item">
                <strong>Response Time:</strong> We respond to safety reports within 24 hours
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}