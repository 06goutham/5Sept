import React, { useState } from 'react';
import { Calendar, Clock, User, MessageSquare, Star } from 'lucide-react';

const ScheduleCounseling = () => {
  const [selectedCounselor, setSelectedCounselor] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [bookedSessions, setBookedSessions] = useState([]);

  const counselors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Career Transition & Development',
      experience: '10+ years',
      rating: 4.9,
      availability: ['Mon', 'Wed', 'Fri'],
      about: 'Specializes in helping students navigate career changes.',
      image: '👩‍💼',
    },
    {
      id: 2,
      name: 'Mr. James Williams',
      specialty: 'Tech & IT Careers',
      experience: '8+ years',
      rating: 4.8,
      availability: ['Tue', 'Thu', 'Sat'],
      about: 'Expert in guiding students into technology fields.',
      image: '👨‍💼',
    },
    {
      id: 3,
      name: 'Ms. Emily Davis',
      specialty: 'Creative & Design Careers',
      experience: '7+ years',
      rating: 4.7,
      availability: ['Mon', 'Tue', 'Thu'],
      about: 'Focuses on creative industries and design careers.',
      image: '👩‍🔬',
    },
    {
      id: 4,
      name: 'Dr. Michael Brown',
      specialty: 'Business & Management',
      experience: '12+ years',
      rating: 4.9,
      availability: ['Wed', 'Thu', 'Fri'],
      about: 'Expert in business strategy and leadership roles.',
      image: '👨‍⚖️',
    },
  ];

  const availableTimes = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
  ];

  const handleBookSession = () => {
    if (selectedCounselor && selectedDate && selectedTime) {
      const newSession = {
        id: bookedSessions.length + 1,
        counselor: selectedCounselor.name,
        date: selectedDate,
        time: selectedTime,
        status: 'Scheduled',
      };
      setBookedSessions([...bookedSessions, newSession]);
      setShowForm(false);
      setSelectedCounselor(null);
      setSelectedDate('');
      setSelectedTime('');
    }
  };

  const cancelSession = (sessionId) => {
    setBookedSessions(bookedSessions.filter((session) => session.id !== sessionId));
  };

  return (
    <div className="counseling-page">
      <div className="container">
        <h1>Schedule Counseling Sessions</h1>
        <p>Connect with experienced career counselors for personalized guidance</p>

        {showForm ? (
          <div className="booking-form-container">
            <h2>Book Your Session</h2>

            <div className="counselor-selection">
              <h3>Select a Counselor</h3>
              <div className="counselors-grid">
                {counselors.map((counselor) => (
                  <div
                    key={counselor.id}
                    className={`counselor-option ${
                      selectedCounselor?.id === counselor.id ? 'selected' : ''
                    }`}
                    onClick={() => setSelectedCounselor(counselor)}
                  >
                    <div className="counselor-avatar">{counselor.image}</div>
                    <h4>{counselor.name}</h4>
                    <p className="specialty">{counselor.specialty}</p>
                    <div className="rating">
                      <Star size={16} fill="gold" color="gold" />
                      <span>{counselor.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {selectedCounselor && (
              <div className="booking-details">
                <h3>Select Date & Time</h3>

                <div className="date-time-selection">
                  <div className="form-group">
                    <label>
                      <Calendar size={18} />
                      Select Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <Clock size={18} />
                      Select Time
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                    >
                      <option value="">Choose a time slot</option>
                      {availableTimes.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="booking-summary">
                  <h3>Booking Summary</h3>
                  <div className="summary-item">
                    <span>Counselor:</span>
                    <span>{selectedCounselor.name}</span>
                  </div>
                  <div className="summary-item">
                    <span>Specialty:</span>
                    <span>{selectedCounselor.specialty}</span>
                  </div>
                  <div className="summary-item">
                    <span>Date:</span>
                    <span>{selectedDate || 'Not selected'}</span>
                  </div>
                  <div className="summary-item">
                    <span>Time:</span>
                    <span>{selectedTime || 'Not selected'}</span>
                  </div>
                  <div className="summary-item">
                    <span>Duration:</span>
                    <span>60 minutes</span>
                  </div>
                </div>

                <div className="booking-actions">
                  <button
                    className="btn btn-primary"
                    onClick={handleBookSession}
                    disabled={!selectedDate || !selectedTime}
                  >
                    Confirm Booking
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      setShowForm(false);
                      setSelectedCounselor(null);
                      setSelectedDate('');
                      setSelectedTime('');
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="counselors-section">
              <h2>Our Counselors</h2>
              <div className="counselors-grid">
                {counselors.map((counselor) => (
                  <div key={counselor.id} className="counselor-card">
                    <div className="counselor-avatar">{counselor.image}</div>
                    <h3>{counselor.name}</h3>
                    <p className="specialty">{counselor.specialty}</p>
                    <p className="experience">{counselor.experience}</p>
                    <div className="rating">
                      <Star size={16} fill="gold" color="gold" />
                      <span>{counselor.rating}</span>
                    </div>
                    <p className="about">{counselor.about}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        setSelectedCounselor(counselor);
                        setShowForm(true);
                      }}
                    >
                      Book Session
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="booked-sessions-section">
              <h2>Your Booked Sessions</h2>
              {bookedSessions.length > 0 ? (
                <div className="sessions-list">
                  {bookedSessions.map((session) => (
                    <div key={session.id} className="session-card">
                      <div className="session-info">
                        <div className="session-detail">
                          <User size={20} />
                          <div>
                            <label>Counselor</label>
                            <p>{session.counselor}</p>
                          </div>
                        </div>
                        <div className="session-detail">
                          <Calendar size={20} />
                          <div>
                            <label>Date</label>
                            <p>{session.date}</p>
                          </div>
                        </div>
                        <div className="session-detail">
                          <Clock size={20} />
                          <div>
                            <label>Time</label>
                            <p>{session.time}</p>
                          </div>
                        </div>
                      </div>
                      <div className="session-actions">
                        <span className={`status ${session.status.toLowerCase()}`}>
                          {session.status}
                        </span>
                        <button
                          className="btn btn-danger btn-small"
                          onClick={() => cancelSession(session.id)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <MessageSquare size={48} />
                  <p>No sessions booked yet. Schedule your first counseling session!</p>
                  <button className="btn btn-primary" onClick={() => setShowForm(true)}>
                    Book a Session Now
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <style>{`
        .counseling-page {
          padding: 40px 20px;
          background-color: #f5f5f5;
        }

        .counseling-page h1 {
          color: #2c5f2d;
          font-size: 28px;
          margin-bottom: 10px;
        }

        .counseling-page > .container > p {
          color: #666;
          margin-bottom: 40px;
          font-size: 15px;
        }

        .counselors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          margin: 30px 0;
        }

        .counselor-card,
        .counselor-option {
          background: white;
          padding: 25px;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .counselor-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        }

        .counselor-option {
          cursor: pointer;
          border: 3px solid transparent;
        }

        .counselor-option:hover {
          border-color: #2c5f2d;
        }

        .counselor-option.selected {
          background-color: #f0f7f0;
          border-color: #2c5f2d;
        }

        .counselor-avatar {
          font-size: 48px;
          margin-bottom: 15px;
        }

        .counselor-card h3,
        .counselor-option h4 {
          color: #333;
          margin-bottom: 8px;
          font-size: 16px;
        }

        .specialty {
          color: #2c5f2d;
          font-weight: 600;
          margin-bottom: 8px;
          font-size: 13px;
        }

        .experience {
          color: #999;
          font-size: 12px;
          margin-bottom: 10px;
        }

        .rating {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          margin-bottom: 12px;
          font-size: 14px;
          color: #333;
        }

        .about {
          color: #666;
          font-size: 13px;
          line-height: 1.5;
          margin-bottom: 15px;
          min-height: 50px;
        }

        .counselor-card .btn {
          width: 100%;
        }

        .booking-form-container {
          background: white;
          padding: 40px;
          border-radius: 8px;
          box-shadow: var(--shadow);
          max-width: 900px;
          margin: 30px auto;
        }

        .booking-form-container h2 {
          color: #2c5f2d;
          margin-bottom: 30px;
          font-size: 24px;
        }

        .booking-form-container h3 {
          color: #333;
          margin-bottom: 20px;
          font-size: 16px;
          font-weight: 600;
        }

        .date-time-selection {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
          font-weight: 600;
          color: #333;
        }

        .form-group input,
        .form-group select {
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          width: 100%;
          max-width: none;
        }

        .booking-summary {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 25px;
        }

        .booking-summary h3 {
          margin-bottom: 15px;
        }

        .summary-item {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid #eee;
          font-size: 14px;
        }

        .summary-item:last-child {
          border-bottom: none;
        }

        .summary-item span:first-child {
          color: #666;
          font-weight: 600;
        }

        .summary-item span:last-child {
          color: #333;
        }

        .booking-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .booking-actions .btn {
          flex: 1;
          max-width: 200px;
        }

        .sessions-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .session-card {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: var(--shadow);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .session-info {
          display: flex;
          gap: 40px;
          flex: 1;
        }

        .session-detail {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .session-detail svg {
          color: #2c5f2d;
          margin-top: 4px;
        }

        .session-detail label {
          color: #999;
          font-size: 12px;
          text-transform: uppercase;
          margin: 0;
        }

        .session-detail p {
          color: #333;
          font-weight: 600;
          margin: 0;
        }

        .session-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .status {
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
        }

        .status.scheduled {
          background-color: #e8f5e9;
          color: #388e3c;
        }

        .btn-danger {
          background-color: #d32f2f;
        }

        .btn-danger:hover {
          background-color: #b71c1c;
        }

        .btn-small {
          padding: 8px 16px;
          font-size: 12px;
        }

        .booked-sessions-section {
          margin-top: 50px;
        }

        .booked-sessions-section h2,
        .counselors-section h2 {
          color: #2c5f2d;
          margin-bottom: 25px;
          font-size: 22px;
        }

        .empty-state {
          text-align: center;
          padding: 50px 20px;
          background: #f9f9f9;
          border-radius: 8px;
          color: #999;
        }

        .empty-state svg {
          margin-bottom: 20px;
          opacity: 0.5;
        }

        .empty-state p {
          margin-bottom: 20px;
          font-size: 15px;
        }

        @media (max-width: 768px) {
          .date-time-selection {
            grid-template-columns: 1fr;
          }

          .session-info {
            gap: 20px;
            flex-direction: column;
          }

          .session-card {
            flex-direction: column;
            align-items: flex-start;
          }

          .session-actions {
            width: 100%;
            justify-content: space-between;
            margin-top: 15px;
          }

          .booking-actions {
            flex-direction: column;
          }

          .booking-actions .btn {
            max-width: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ScheduleCounseling;
