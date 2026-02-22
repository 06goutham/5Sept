import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, Home } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  const { isAuthenticated, userRole, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!isAuthenticated) {
    return null;
  }

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className={`navbar navbar-${userRole}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <Home size={24} />
            Career Platform
          </Link>

          <div className="navbar-links">
            {userRole === 'student' && (
              <>
                <Link to="/student/dashboard" className={`nav-link ${isActive('/student/dashboard')}`}>
                  Dashboard
                </Link>
                <Link to="/student/career-exploration" className={`nav-link ${isActive('/student/career-exploration')}`}>
                  Career Exploration
                </Link>
                <Link to="/student/assessment" className={`nav-link ${isActive('/student/assessment')}`}>
                  Skill Assessment
                </Link>
                <Link to="/student/counseling" className={`nav-link ${isActive('/student/counseling')}`}>
                  Counseling
                </Link>
                <Link to="/student/resources" className={`nav-link ${isActive('/student/resources')}`}>
                  Resources
                </Link>
                <Link to="/student/mentorship" className={`nav-link ${isActive('/student/mentorship')}`}>
                  Mentorship
                </Link>
              </>
            )}

            {userRole === 'admin' && (
              <>
                <Link to="/admin/dashboard" className={`nav-link ${isActive('/admin/dashboard')}`}>
                  Dashboard
                </Link>
                <Link to="/admin/users" className={`nav-link ${isActive('/admin/users')}`}>
                  User Management
                </Link>
                <Link to="/admin/careers" className={`nav-link ${isActive('/admin/careers')}`}>
                  Career Resources
                </Link>
                <Link to="/admin/counselors" className={`nav-link ${isActive('/admin/counselors')}`}>
                  Counselor Management
                </Link>
                <Link to="/admin/sessions" className={`nav-link ${isActive('/admin/sessions')}`}>
                  Session Requests
                </Link>
                <Link to="/admin/analytics" className={`nav-link ${isActive('/admin/analytics')}`}>
                  Analytics
                </Link>
              </>
            )}
          </div>

          <button className="btn-logout" onClick={handleLogout}>
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
