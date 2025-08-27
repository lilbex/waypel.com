'use client';

import { useState } from 'react';
import Link from 'next/link';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo">
            <img src="/appicon.png" alt="Waypel" className="logo-icon" />
            <span className="logo-text">Waypel</span>
          </Link>

          <nav className="nav-desktop">
            <Link href="#features" className="nav-link">Features</Link>
            <Link href="#about" className="nav-link">About</Link>
            <Link href="#help" className="nav-link">Help</Link>
          </nav>

          <div className="header-actions">
            <button className="btn-primary">Download App</button>
          </div>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <Link href="#features" className="mobile-link">Features</Link>
            <Link href="#about" className="mobile-link">About</Link>
            <Link href="#help" className="mobile-link">Help</Link>
            <button className="btn-primary mobile-btn">Download App</button>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Play, Learn & <span className="gradient-text">Earn</span>
          </h1>
          <p className="hero-subtitle">
            Join millions in the ultimate social learning experience. Chat, compete, stream, and earn rewards.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary btn-large">📱 Download for iOS</button>
            <button className="btn-secondary btn-large">📱 Get on Android</button>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Users</div>
            </div>
            <div className="stat">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Daily Games</div>
            </div>
            <div className="stat">
              <div className="stat-number">100K+</div>
              <div className="stat-label">Coins Earned</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Live Streams</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: '💬', title: 'Chat & Connect', desc: 'Instant messaging with friends and voice notes in group chats.' },
    { icon: '👥', title: 'Join Groups', desc: 'Find communities based on your interests and hobbies.' },
    { icon: '📹', title: 'Live Streaming', desc: 'Share your knowledge and interact with viewers in real-time.' },
    { icon: '🎮', title: 'Solo Quizzes', desc: 'Test your knowledge across thousands of topics and subjects.' },
    { icon: '🏆', title: 'Quiz Battles', desc: 'Challenge friends and climb the global leaderboards.' },
    { icon: '🪙', title: 'Earn Rewards', desc: 'Win coins for achievements and redeem for real prizes.' }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Everything in One App</h2>
          <p className="section-subtitle">Social networking, gaming, learning, and earning combined seamlessly.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-subtitle">Download Waypel today and join the community of learners and creators.</p>
          <div className="cta-buttons">
            <button className="btn-white">📱 Download for iOS</button>
            <button className="btn-outline">📱 Get on Android</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <img src="/appicon.png" alt="Waypel" className="logo-icon" />
              <span className="logo-text">Waypel</span>
            </div>
            <p className="footer-desc">The ultimate mobile app for playing, learning, and earning together.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3 className="footer-heading">Company</h3>
              <Link href="/about">About</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/press">Press</Link>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Support</h3>
              <Link href="/help">Help Center</Link>
              <Link href="/privacy-policy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Waypel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}