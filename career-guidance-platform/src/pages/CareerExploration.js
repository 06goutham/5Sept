import React, { useState } from 'react';
import { Search, Heart, Info } from 'lucide-react';
import './StudentPages.css';

const CareerExploration = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [savedCareers, setSavedCareers] = useState([]);

  const careers = [
    {
      id: 1,
      title: 'Software Engineer',
      description: 'Design and develop software applications',
      skills: ['Programming', 'Problem Solving', 'Teamwork'],
      salary: '$80K - $150K',
      demand: 'Very High',
      education: "Bachelor's in Computer Science",
    },
    {
      id: 2,
      title: 'Data Scientist',
      description: 'Analyze data to drive business decisions',
      skills: ['Data Analysis', 'Python', 'Machine Learning'],
      salary: '$90K - $160K',
      demand: 'High',
      education: "Bachelor's in Statistics/CS",
    },
    {
      id: 3,
      title: 'Product Manager',
      description: 'Lead product development and strategy',
      skills: ['Leadership', 'Communication', 'Analytics'],
      salary: '$100K - $180K',
      demand: 'High',
      education: "Bachelor's in Any Field",
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      description: 'Create intuitive user experiences',
      skills: ['Design', 'User Research', 'Creativity'],
      salary: '$70K - $130K',
      demand: 'High',
      education: "Bachelor's or Bootcamp",
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      description: 'Manage and deploy applications',
      skills: ['Cloud', 'Linux', 'Scripting'],
      salary: '$85K - $155K',
      demand: 'High',
      education: "Bachelor's in CS",
    },
    {
      id: 6,
      title: 'AI/ML Engineer',
      description: 'Develop AI and machine learning solutions',
      skills: ['ML', 'Python', 'Deep Learning'],
      salary: '$110K - $200K',
      demand: 'Very High',
      education: "Master's in CS/AI",
    },
  ];

  const filteredCareers = careers.filter(
    (career) =>
      career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSave = (careerId) => {
    setSavedCareers((prev) =>
      prev.includes(careerId)
        ? prev.filter((id) => id !== careerId)
        : [...prev, careerId]
    );
  };

  return (
    <div className="career-exploration">
      <div className="container">
        <h1>Career Exploration</h1>
        <p>Browse and explore various career paths to find your perfect fit</p>

        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search careers by title or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="career-layout">
          <div className="careers-list">
            {filteredCareers.length > 0 ? (
              filteredCareers.map((career) => (
                <div
                  key={career.id}
                  className={`career-card ${selectedCareer?.id === career.id ? 'active' : ''}`}
                  onClick={() => setSelectedCareer(career)}
                >
                  <div className="career-header">
                    <h3>{career.title}</h3>
                    <button
                      className={`save-btn ${
                        savedCareers.includes(career.id) ? 'saved' : ''
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSave(career.id);
                      }}
                    >
                      <Heart
                        size={20}
                        fill={savedCareers.includes(career.id) ? 'red' : 'none'}
                        color={savedCareers.includes(career.id) ? 'red' : 'gray'}
                      />
                    </button>
                  </div>
                  <p>{career.description}</p>
                  <div className="career-meta">
                    <span className="demand">{career.demand} Demand</span>
                    <span className="salary">{career.salary}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>No careers found matching your search.</p>
              </div>
            )}
          </div>

          <div className="career-details">
            {selectedCareer ? (
              <div className="details-card">
                <h2>{selectedCareer.title}</h2>
                <p className="description">{selectedCareer.description}</p>

                <div className="details-section">
                  <h3>Required Skills</h3>
                  <div className="skills-list">
                    {selectedCareer.skills.map((skill, idx) => (
                      <span key={idx} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="details-grid">
                  <div className="detail-item">
                    <label>Salary Range</label>
                    <p>{selectedCareer.salary}</p>
                  </div>
                  <div className="detail-item">
                    <label>Market Demand</label>
                    <p>{selectedCareer.demand}</p>
                  </div>
                  <div className="detail-item">
                    <label>Education Required</label>
                    <p>{selectedCareer.education}</p>
                  </div>
                </div>

                <div className="actions">
                  <button
                    className={`btn ${
                      savedCareers.includes(selectedCareer.id)
                        ? 'btn-secondary'
                        : 'btn-primary'
                    }`}
                    onClick={() => toggleSave(selectedCareer.id)}
                  >
                    {savedCareers.includes(selectedCareer.id)
                      ? 'Remove from Saved'
                      : 'Add to Favourites'}
                  </button>
                  <button className="btn btn-compare">Compare with Others</button>
                </div>
              </div>
            ) : (
              <div className="empty-details">
                <Info size={48} />
                <p>Select a career to view detailed information</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerExploration;
