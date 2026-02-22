import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, TrendingUp } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="container">
          <div className="header-content">
            <h1>Career Guidance & Counseling Platform</h1>
            <p>Discover your path, explore careers, and get personalized guidance from experts.</p>
            <div className="cta-buttons">
              <Link to="/auth/login" className="btn btn-primary btn-large">
                Sign In
              </Link>
              <Link to="/auth/signup" className="btn btn-secondary btn-large">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="features">
        <div className="container">
          <h2>Why Choose Our Platform?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <Briefcase className="feature-icon" />
              <h3>Career Exploration</h3>
              <p>Browse and explore various career paths with detailed information about requirements and opportunities.</p>
            </div>
            <div className="feature-card">
              <Users className="feature-icon" />
              <h3>Expert Counseling</h3>
              <p>Connect with experienced career counselors for personalized guidance and mentorship.</p>
            </div>
            <div className="feature-card">
              <TrendingUp className="feature-icon" />
              <h3>Skill Assessment</h3>
              <p>Take quizzes to assess your skills and interests, and get tailored career recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="for-students">
        <div className="container">
          <h2>For Students</h2>
          <p>Access comprehensive career resources and connect with counselors to make informed decisions.</p>
          <ul className="features-list">
            <li>✓ Browse and save career information</li>
            <li>✓ Take skill and interest assessments</li>
            <li>✓ Schedule counseling sessions</li>
            <li>✓ Access learning resources and guides</li>
            <li>✓ Connect with mentors in your field</li>
            <li>✓ Track your progress and goals</li>
          </ul>
        </div>
      </section>

      <section className="for-admins">
        <div className="container">
          <h2>For Admins</h2>
          <p>Manage platform resources and track user engagement effectively.</p>
          <ul className="features-list">
            <li>✓ Manage career resources and content</li>
            <li>✓ Manage counselors and assignments</li>
            <li>✓ Track user sessions and engagement</li>
            <li>✓ View analytics and generate reports</li>
            <li>✓ Manage user accounts</li>
            <li>✓ Send notifications and updates</li>
          </ul>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="container">
          <p>&copy; 2026 Career Guidance & Counseling Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
