'use client';

import { useState } from 'react';

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
      // TODO: Implement API call to delete account
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Your account has been permanently deleted.');
      window.location.href = '/';
    } catch (error) {
      alert('Failed to delete account. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold text-red-500 mb-4">Delete Account</h1>
          <p className="text-gray-300">
            This action is permanent and cannot be undone. All your data will be permanently deleted.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">What will be deleted:</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="text-red-500">👤</span>
              Your profile and personal information
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-500">💬</span>
              All your messages and chat history
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-500">👥</span>
              Group memberships and created groups
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-500">🎮</span>
              Game progress and achievements
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-500">💰</span>
              Wallet and transaction history
            </li>
          </ul>
        </div>

        <form onSubmit={handleDeleteAccount} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Type "DELETE" to confirm:
            </label>
            <input
              type="text"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value.toUpperCase())}
              className="w-full px-4 py-3 bg-gray-700 border-2 border-red-500 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-400"
              placeholder="Type DELETE here"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isDeleting || confirmText !== 'DELETE'}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            {isDeleting ? 'Deleting Account...' : 'Delete My Account Forever'}
          </button>
        </form>

        <div className="text-center mt-8">
          <a
            href="/"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Cancel and go back to homepage
          </a>
        </div>
      </div>
    </div>
  );
}