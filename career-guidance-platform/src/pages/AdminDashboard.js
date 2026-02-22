import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, MessageSquare, BarChart2, TrendingUp, Activity } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    {
      label: 'Total Users',
      value: '1,234',
      change: '+12.5%',
      icon: Users,
      color: '#2196F3',
    },
    {
      label: 'Active Sessions',
      value: '456',
      change: '+8.2%',
      icon: MessageSquare,
      color: '#4CAF50',
    },
    {
      label: 'Careers Listed',
      value: '89',
      change: '+3 new',
      icon: BookOpen,
      color: '#FF9800',
    },
    {
      label: 'Avg. Satisfaction',
      value: '4.8/5.0',
      change: '+0.2%',
      icon: TrendingUp,
      color: '#F44336',
    },
  ];

  const managementOptions = [
    {
      title: 'User Management',
      description: 'Manage student and counselor accounts',
      link: '/admin/users',
      icon: Users,
    },
    {
      title: 'Career Resources',
      description: 'Add, edit, or delete career information',
      link: '/admin/careers',
      icon: BookOpen,
    },
    {
      title: 'Counselor Management',
      description: 'Manage counselors and assignments',
      link: '/admin/counselors',
      icon: Users,
    },
    {
      title: 'Session Requests',
      description: 'View and manage counseling sessions',
      link: '/admin/sessions',
      icon: MessageSquare,
    },
    {
      title: 'Analytics & Reports',
      description: 'View engagement and performance reports',
      link: '/admin/analytics',
      icon: BarChart2,
    },
    {
      title: 'Activity Tracking',
      description: 'Track user engagement and activities',
      link: '/admin/tracking',
      icon: Activity,
    },
  ];

  return (
    <div className="admin-dashboard">
      <div className="container">
        <div className="welcome-section">
          <h1>Admin Dashboard</h1>
          <p>Manage platform resources, users, and track engagement</p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stat-card">
                <div className="stat-icon" style={{ backgroundColor: stat.color }}>
                  <Icon size={32} color="white" />
                </div>
                <div className="stat-content">
                  <p className="stat-label">{stat.label}</p>
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-change">{stat.change}</p>
                </div>
              </div>
            );
          })}
        </div>

        <h2>Management Options</h2>
        <div className="management-grid">
          {managementOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <Link
                key={index}
                to={option.link}
                className="management-card"
              >
                <div className="card-icon">
                  <Icon size={40} color="#2c5f2d" />
                </div>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <span className="arrow">→</span>
              </Link>
            );
          })}
        </div>

        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-type">New Session</span>
              <p>Student John Doe booked a session with Dr. Sarah Johnson</p>
              <span className="activity-time">2 hours ago</span>
            </div>
            <div className="activity-item">
              <span className="activity-type">New User</span>
              <p>Emma Wilson created a new student account</p>
              <span className="activity-time">4 hours ago</span>
            </div>
            <div className="activity-item">
              <span className="activity-type">Resource Added</span>
              <p>New career guide added: "Future of AI in Business"</p>
              <span className="activity-time">1 day ago</span>
            </div>
            <div className="activity-item">
              <span className="activity-type">Assessment</span>
              <p>45 students completed their career assessment</p>
              <span className="activity-time">2 days ago</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .admin-dashboard {
          padding: 40px 20px;
          background-color: #f5f5f5;
          min-height: 100vh;
        }

        .welcome-section {
          margin-bottom: 40px;
        }

        .welcome-section h1 {
          color: #ff9800;
          font-size: 32px;
          margin-bottom: 10px;
        }

        .welcome-section p {
          color: #666;
          font-size: 15px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          margin-bottom: 50px;
        }

        .stat-card {
          background: white;
          padding: 25px;
          border-radius: 8px;
          display: flex;
          gap: 20px;
          box-shadow: var(--shadow);
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-icon {
          width: 70px;
          height: 70px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-content {
          flex: 1;
        }

        .stat-label {
          color: #999;
          font-size: 12px;
          text-transform: uppercase;
          margin-bottom: 5px;
          font-weight: 600;
        }

        .stat-value {
          color: #333;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .stat-change {
          color: #4CAF50;
          font-size: 13px;
          font-weight: 600;
        }

        .admin-dashboard h2 {
          color: #ff9800;
          margin-bottom: 30px;
          font-size: 22px;
        }

        .management-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          margin-bottom: 50px;
        }

        .management-card {
          background: white;
          padding: 30px;
          border-radius: 8px;
          text-decoration: none;
          color: inherit;
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
          border-left: 4px solid transparent;
          position: relative;
        }

        .management-card:hover {
          border-left-color: #ff9800;
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .card-icon {
          margin-bottom: 20px;
        }

        .management-card h3 {
          color: #333;
          font-size: 18px;
          margin-bottom: 10px;
        }

        .management-card p {
          color: #666;
          font-size: 13px;
          line-height: 1.5;
        }

        .arrow {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: #ff9800;
          font-size: 24px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .management-card:hover .arrow {
          opacity: 1;
        }

        .recent-activity {
          background: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: var(--shadow);
        }

        .recent-activity h2 {
          margin-top: 0;
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .activity-item {
          padding: 15px;
          background-color: #f9f9f9;
          border-radius: 4px;
          border-left: 4px solid #ff9800;
          position: relative;
        }

        .activity-type {
          display: inline-block;
          background-color: #fff3e0;
          color: #ff9800;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .activity-item p {
          color: #333;
          margin: 8px 0;
          font-size: 14px;
        }

        .activity-time {
          color: #999;
          font-size: 12px;
        }

        @media (max-width: 768px) {
          .stats-grid,
          .management-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            flex-direction: column;
            text-align: center;
          }

          .stat-icon {
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
