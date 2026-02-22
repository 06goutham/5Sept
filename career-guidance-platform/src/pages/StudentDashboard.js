import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen, Users, Target, FileText, TrendingUp } from 'lucide-react';
import './StudentPages.css';

const StudentDashboard = () => {
  const { user } = useAuth();

  const menuItems = [
    {
      icon: BookOpen,
      title: 'Career Exploration',
      description: 'Browse and explore various career paths',
      link: '/student/career-exploration',
      color: '#2196F3',
    },
    {
      icon: Target,
      title: 'Skill Assessment',
      description: 'Take quizzes and get recommendations',
      link: '/student/assessment',
      color: '#4CAF50',
    },
    {
      icon: Users,
      title: 'Schedule Counseling',
      description: 'Book sessions with career counselors',
      link: '/student/counseling',
      color: '#FF9800',
    },
    {
      icon: FileText,
      title: 'Resources & Guides',
      description: 'Access articles, videos, and guides',
      link: '/student/resources',
      color: '#9C27B0',
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Connect with mentors in your field',
      link: '/student/mentorship',
      color: '#F44336',
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracker',
      description: 'Track your career goals and progress',
      link: '/student/progress',
      color: '#00BCD4',
    },
  ];

  return (
    <div className="student-dashboard">
      <div className="container">
        <div className="welcome-section">
          <h1>Welcome back, {user?.name}! 👋</h1>
          <p>Continue your career exploration journey</p>
        </div>

        <div className="quick-stats">
          <div className="stat-card">
            <div className="stat-value">3</div>
            <div className="stat-label">Careers Saved</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">2</div>
            <div className="stat-label">Assessments Done</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">1</div>
            <div className="stat-label">Counseling Sessions</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">5</div>
            <div className="stat-label">Resources Read</div>
          </div>
        </div>

        <h2>What would you like to do?</h2>
        <div className="menu-grid">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link key={index} to={item.link} className="menu-card">
                <div className="icon-circle" style={{ backgroundColor: item.color }}>
                  <Icon size={32} color="white" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            );
          })}
        </div>

        <div className="upcoming-section">
          <h2>Upcoming Sessions</h2>
          <div className="empty-state">
            <p>No upcoming counseling sessions scheduled.</p>
            <Link to="/student/counseling" className="btn btn-primary">
              Schedule a Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
