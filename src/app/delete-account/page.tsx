'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DeleteAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmText, setConfirmText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert('Please enter your email and password');
      return;
    }
    
    if (confirmText !== 'DELETE') {
      alert('Please type "DELETE" to confirm account deletion');
      return;
    }

    if (!confirm('Are you absolutely sure you want to delete your account? This action cannot be undone.')) {
      return;
    }

    setIsDeleting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Your account has been permanently deleted.');
      window.location.href = '/';
    } catch {
      alert('Failed to delete account. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="delete-page">
      <div className="container">
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>

        <div className="delete-content">
          <div className="warning-header">
            <div className="warning-icon">⚠️</div>
            <h1 className="warning-title">Delete Account</h1>
            <p className="warning-text">
              This action is permanent and cannot be undone. All your data will be permanently deleted.
            </p>
          </div>

          <div className="deletion-info">
            <h2 className="info-title">What will be deleted:</h2>
            <ul className="deletion-list">
              <li><span className="icon">👤</span> Your profile and personal information</li>
              <li><span className="icon">💬</span> All your messages and chat history</li>
              <li><span className="icon">👥</span> Group memberships and created groups</li>
              <li><span className="icon">🎮</span> Game progress and achievements</li>
              <li><span className="icon">💰</span> Wallet and transaction history</li>
            </ul>
          </div>

          <form onSubmit={handleDeleteAccount} className="delete-form">
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Type &quot;DELETE&quot; to confirm:</label>
              <input
                type="text"
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value.toUpperCase())}
                className="form-input confirm-input"
                placeholder="Type DELETE here"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isDeleting || confirmText !== 'DELETE'}
              className="delete-button"
            >
              {isDeleting ? 'Deleting Account...' : 'Delete My Account Forever'}
            </button>
          </form>

          <div className="cancel-link">
            <Link href="/">Cancel and go back to homepage</Link>
          </div>
        </div>
      </div>
    </div>
  );
}