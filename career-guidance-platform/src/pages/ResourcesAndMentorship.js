import React, { useState } from 'react';
import { FileText, Video, BookOpen, Search, Eye } from 'lucide-react';

const ResourcesAndMentorship = () => {
  const [activeTab, setActiveTab] = useState('resources');
  const [searchTerm, setSearchTerm] = useState('');

  const resources = [
    {
      id: 1,
      title: 'Getting Started in Tech',
      type: 'Article',
      icon: FileText,
      category: 'Technology',
      readTime: '8 min read',
      date: '2026-02-15',
    },
    {
      id: 2,
      title: 'Interview Preparation Guide',
      type: 'Guide',
      icon: BookOpen,
      category: 'Career Tips',
      readTime: '15 min read',
      date: '2026-02-10',
    },
    {
      id: 3,
      title: 'How to Ace Your First Day',
      type: 'Video',
      icon: Video,
      category: 'Career Tips',
      readTime: '12 min',
      date: '2026-02-08',
    },
    {
      id: 4,
      title: 'Building a Winning Resume',
      type: 'Article',
      icon: FileText,
      category: 'Career Tips',
      readTime: '10 min read',
      date: '2026-02-05',
    },
    {
      id: 5,
      title: 'Networking Strategies for Students',
      type: 'Guide',
      icon: BookOpen,
      category: 'Networking',
      readTime: '20 min read',
      date: '2026-02-01',
    },
    {
      id: 6,
      title: 'Future of AI & Machine Learning',
      type: 'Video',
      icon: Video,
      category: 'Technology',
      readTime: '18 min',
      date: '2026-01-28',
    },
  ];

  const mentors = [
    {
      id: 1,
      name: 'Alex Chen',
      field: 'Software Engineering',
      company: 'Tech Corp',
      expertise: 'Full Stack Development',
      bio: 'Passionate about helping junior developers grow',
      image: '👨‍💻',
    },
    {
      id: 2,
      name: 'Lisa Johnson',
      field: 'Data Science',
      company: 'Data Analytics Inc',
      expertise: 'Machine Learning & Analytics',
      bio: 'Expert in ML applications and data strategy',
      image: '👩‍💼',
    },
    {
      id: 3,
      name: 'David Martinez',
      field: 'Product Management',
      company: 'Innovation Labs',
      expertise: 'Product Strategy',
      bio: 'Focused on helping students break into PM',
      image: '👨‍🔬',
    },
    {
      id: 4,
      name: 'Emma White',
      field: 'UX/UI Design',
      company: 'Design Studio',
      expertise: 'User Experience Design',
      bio: 'Mentor for aspiring designers',
      image: '👩‍🎨',
    },
  ];

  const filteredResources = resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="resources-mentorship">
      <div className="container">
        <h1>Resources & Mentorship</h1>
        <p>Access learning materials and connect with experienced mentors</p>

        <div className="tabs">
          <button
            className={`tab ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            Resources
          </button>
          <button
            className={`tab ${activeTab === 'mentorship' ? 'active' : ''}`}
            onClick={() => setActiveTab('mentorship')}
          >
            Mentorship
          </button>
        </div>

        {activeTab === 'resources' && (
          <div className="resources-section">
            <div className="search-bar">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="resources-grid">
              {filteredResources.length > 0 ? (
                filteredResources.map((resource) => {
                  const Icon = resource.icon;
                  return (
                    <div key={resource.id} className="resource-card">
                      <div className="resource-header">
                        <Icon size={32} color="#2c5f2d" />
                        <span className="resource-type">{resource.type}</span>
                      </div>
                      <h3>{resource.title}</h3>
                      <p className="category">{resource.category}</p>
                      <p className="read-time">{resource.readTime}</p>
                      <div className="resource-footer">
                        <span className="date">{resource.date}</span>
                        <button className="btn-view">
                          <Eye size={16} />
                          View
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="no-results">
                  <p>No resources found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'mentorship' && (
          <div className="mentorship-section">
            <p className="mentor-intro">
              Connect with experienced professionals in your field of interest
            </p>
            <div className="mentors-grid">
              {mentors.map((mentor) => (
                <div key={mentor.id} className="mentor-card">
                  <div className="mentor-avatar">{mentor.image}</div>
                  <h3>{mentor.name}</h3>
                  <p className="field">{mentor.field}</p>
                  <p className="company">{mentor.company}</p>
                  <div className="expertise">
                    <span className="expertise-label">Expertise:</span>
                    <p>{mentor.expertise}</p>
                  </div>
                  <p className="bio">{mentor.bio}</p>
                  <button className="btn btn-primary btn-connect">
                    Request Mentorship
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .resources-mentorship {
          padding: 40px 20px;
          background-color: #f5f5f5;
        }

        .resources-mentorship h1 {
          color: #2c5f2d;
          font-size: 28px;
          margin-bottom: 10px;
        }

        .resources-mentorship > .container > p {
          color: #666;
          margin-bottom: 40px;
          font-size: 15px;
        }

        .tabs {
          display: flex;
          gap: 20px;
          margin-bottom: 40px;
          border-bottom: 2px solid #eee;
        }

        .tab {
          background: none;
          border: none;
          padding: 12px 0;
          font-size: 16px;
          font-weight: 600;
          color: #666;
          cursor: pointer;
          border-bottom: 3px solid transparent;
          transition: all 0.3s ease;
        }

        .tab:hover {
          color: #2c5f2d;
        }

        .tab.active {
          color: #2c5f2d;
          border-bottom-color: #2c5f2d;
        }

        .search-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          background: white;
          padding: 12px 20px;
          border-radius: 8px;
          margin-bottom: 30px;
          box-shadow: var(--shadow);
        }

        .search-bar input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 15px;
          max-width: none;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 25px;
        }

        .resource-card {
          background: white;
          padding: 25px;
          border-radius: 8px;
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .resource-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .resource-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .resource-type {
          background-color: #e8f5e9;
          color: #2c5f2d;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .resource-card h3 {
          color: #333;
          font-size: 16px;
          margin-bottom: 10px;
          line-height: 1.4;
        }

        .category {
          color: #ff9800;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .read-time {
          color: #999;
          font-size: 12px;
          margin-bottom: 15px;
        }

        .resource-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 15px;
          border-top: 1px solid #eee;
        }

        .date {
          color: #999;
          font-size: 12px;
        }

        .btn-view {
          background: white;
          color: #2c5f2d;
          border: 1px solid #2c5f2d;
          padding: 6px 12px;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
          font-size: 12px;
          display: flex;
          gap: 5px;
          align-items: center;
          transition: all 0.2s ease;
        }

        .btn-view:hover {
          background-color: #2c5f2d;
          color: white;
        }

        .no-results {
          text-align: center;
          padding: 50px 20px;
          color: #999;
          grid-column: 1 / -1;
        }

        .mentor-intro {
          color: #666;
          margin-bottom: 30px;
          text-align: center;
          font-size: 15px;
        }

        .mentors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .mentor-card {
          background: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: var(--shadow);
          text-align: center;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .mentor-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .mentor-avatar {
          font-size: 60px;
          margin-bottom: 15px;
        }

        .mentor-card h3 {
          color: #333;
          font-size: 18px;
          margin-bottom: 8px;
        }

        .field {
          color: #2c5f2d;
          font-weight: 600;
          margin-bottom: 5px;
          font-size: 14px;
        }

        .company {
          color: #ff9800;
          font-size: 13px;
          margin-bottom: 15px;
        }

        .expertise {
          background-color: #f0f7f0;
          padding: 12px;
          border-radius: 4px;
          margin-bottom: 15px;
        }

        .expertise-label {
          color: #666;
          font-size: 11px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 5px;
          font-weight: 600;
        }

        .expertise p {
          color: #333;
          font-size: 13px;
          margin: 0;
        }

        .bio {
          color: #666;
          font-size: 13px;
          line-height: 1.5;
          margin-bottom: 20px;
          flex: 1;
        }

        .btn-connect {
          width: 100%;
          margin: 0;
        }

        @media (max-width: 768px) {
          .resources-grid,
          .mentors-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ResourcesAndMentorship;
