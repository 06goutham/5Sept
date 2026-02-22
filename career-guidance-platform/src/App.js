import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navigation from './components/Navigation';

// Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

// Student Pages
import StudentDashboard from './pages/StudentDashboard';
import CareerExploration from './pages/CareerExploration';
import SkillAssessment from './pages/SkillAssessment';
import ScheduleCounseling from './pages/ScheduleCounseling';
import ResourcesAndMentorship from './pages/ResourcesAndMentorship';

// Admin Pages
import AdminDashboard from './pages/AdminDashboard';
import AdminUserManagement from './pages/AdminUserManagement';

// Styles
import './styles/index.css';

function AppContent() {
  return (
    <>
      <Navigation />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />

        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/career-exploration" element={<CareerExploration />} />
        <Route path="/student/assessment" element={<SkillAssessment />} />
        <Route path="/student/counseling" element={<ScheduleCounseling />} />
        <Route path="/student/resources" element={<ResourcesAndMentorship />} />
        <Route path="/student/mentorship" element={<ResourcesAndMentorship />} />
        <Route path="/student/progress" element={<StudentDashboard />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUserManagement />} />
        <Route path="/admin/careers" element={<AdminUserManagement />} />
        <Route path="/admin/counselors" element={<AdminUserManagement />} />
        <Route path="/admin/sessions" element={<AdminUserManagement />} />
        <Route path="/admin/analytics" element={<AdminDashboard />} />
        <Route path="/admin/tracking" element={<AdminDashboard />} />

        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
