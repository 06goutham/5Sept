import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import './StudentPages.css';

const SkillAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState({});

  const assessment = {
    title: 'Career Aptitude Assessment',
    description: 'Answer these questions to get personalized career recommendations',
    questions: [
      {
        id: 1,
        question: 'I enjoy solving complex problems',
        options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
      },
      {
        id: 2,
        question: 'I prefer working with people over working alone',
        options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
      },
      {
        id: 3,
        question: 'I am creative and like to express my ideas',
        options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
      },
      {
        id: 4,
        question: 'I enjoy analyzing data and identifying trends',
        options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
      },
      {
        id: 5,
        question: 'I like to lead and make strategic decisions',
        options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
      },
      {
        id: 6,
        question: 'I am detail-oriented and organized',
        options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
      },
    ],
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < assessment.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === assessment.questions.length) {
      setShowResults(true);
    }
  };

  const recommendations = [
    {
      career: 'Software Engineer',
      match: '92%',
      reason: 'Your strong problem-solving skills and analytical mindset align perfectly',
    },
    {
      career: 'Data Scientist',
      match: '88%',
      reason: 'Your analytical abilities and data interpretation skills are excellent',
    },
    {
      career: 'Product Manager',
      match: '85%',
      reason: 'Your leadership qualities and strategic thinking are well-suited',
    },
    {
      career: 'UX/UI Designer',
      match: '78%',
      reason: 'Your creativity and problem-solving approach would serve you well',
    },
  ];

  if (showResults) {
    return (
      <div className="skill-assessment">
        <div className="container">
          <div className="results-container">
            <div className="results-header">
              <CheckCircle size={48} color="#4CAF50" />
              <h1>Assessment Complete!</h1>
              <p>Here are your personalized career recommendations</p>
            </div>

            <div className="recommendations">
              {recommendations.map((rec, idx) => (
                <div key={idx} className="recommendation-card">
                  <div className="rec-header">
                    <h3>{rec.career}</h3>
                    <div className="match-score">{rec.match}</div>
                  </div>
                  <p>{rec.reason}</p>
                  <button className="btn btn-primary btn-small">
                    Learn More
                  </button>
                </div>
              ))}
            </div>

            <div className="action-buttons">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setShowResults(false);
                  setCurrentQuestion(0);
                  setAnswers({});
                }}
              >
                Retake Assessment
              </button>
              <button className="btn btn-secondary">
                Schedule Counseling
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = assessment.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / assessment.questions.length) * 100;

  return (
    <div className="skill-assessment">
      <div className="container">
        <h1>{assessment.title}</h1>
        <p>{assessment.description}</p>

        <div className="assessment-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>

          <div className="question-card">
            <div className="question-header">
              <span className="question-number">
                Question {currentQuestion + 1} of {assessment.questions.length}
              </span>
            </div>

            <h2>{question.question}</h2>

            <div className="options">
              {question.options.map((option, idx) => (
                <label key={idx} className="option">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    checked={answers[question.id] === option}
                    onChange={() => handleAnswer(question.id, option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>

            <div className="button-group">
              <button
                className="btn btn-secondary"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                Previous
              </button>

              {currentQuestion === assessment.questions.length - 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={Object.keys(answers).length !== assessment.questions.length}
                >
                  Submit Assessment
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={handleNext}
                  disabled={!answers[question.id]}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillAssessment;
