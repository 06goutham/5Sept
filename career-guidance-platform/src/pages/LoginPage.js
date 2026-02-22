import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './AuthPages.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Simulate API call
      if (!email || !password) {
        setError('Please fill in all fields');
        return;
      }

      // Mock user data based on email
      const userData = {
        id: '123',
        name: email.split('@')[0],
        email: email,
      };

      // Determine role based on email domain
      const role = email.includes('admin') ? 'admin' : 'student';

      login(userData, role);
      navigate(role === 'admin' ? '/admin/dashboard' : '/student/dashboard');
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Login</h1>
        <p>Sign in to your account to continue</p>

        <form onSubmit={handleSubmit} className="auth-form">
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn-primary btn-block" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="demo-users">
          <p>Demo Accounts:</p>
          <button
            type="button"
            className="demo-btn"
            onClick={() => {
              setEmail('student@example.com');
              setPassword('password123');
            }}
          >
            Login as Student
          </button>
          <button
            type="button"
            className="demo-btn"
            onClick={() => {
              setEmail('admin@example.com');
              setPassword('password123');
            }}
          >
            Login as Admin
          </button>
        </div>

        <p className="auth-footer">
          Don't have an account? <Link to="/auth/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
