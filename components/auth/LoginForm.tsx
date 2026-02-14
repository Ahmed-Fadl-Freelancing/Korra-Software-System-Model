'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const message = searchParams.get('message');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to login');
      }

      router.push('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-center">
      <div className="form-container">
        <div className="text-center" style={{ marginBottom: '30px' }}>
          <h2>Sign in to your account</h2>
          <p>Access Korra Software System</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          {message && (
            <div className="success">{message}</div>
          )}
          {error && (
            <div className="error">{error}</div>
          )}
          
          <div>
            <label htmlFor="email-address">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <div style={{ marginTop: '20px' }}>
            <button type="submit" disabled={loading} style={{ width: '100%' }}>
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>

          <div className="text-center" style={{ marginTop: '20px' }}>
            <Link href="/signup">Don&apos;t have an account? Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
