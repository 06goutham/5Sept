# Career Guidance & Counseling Platform

A comprehensive web application that offers career advice and mentorship to students. The platform provides resources on various career paths, connects students with career counselors, and helps them make informed career decisions based on their interests and skills.

## 🎯 Features

### For Students
- **Career Exploration**: Browse and explore various career paths with detailed information
- **Skill & Interest Assessment**: Take quizzes to assess skills and get personalized recommendations
- **Schedule Counseling**: Book sessions with experienced career counselors
- **Resources & Mentorship**: Access articles, videos, guides, and connect with mentors
- **Progress Tracking**: Track career goals and progress
- **Save Favorites**: Save favorite careers for later reference

### For Admins
- **User Management**: Manage student and counselor accounts
- **Career Resources**: Add, edit, or delete career information
- **Counselor Management**: Manage counselors and student assignments
- **Session Requests**: View and manage counseling sessions
- **Analytics & Reports**: View engagement and performance reports
- **Activity Tracking**: Track user engagement and platform activities

## 🏗️ Application Architecture

```
Student Flow:
Start → Landing Page → Sign Up/Login → Role Selection → Student Dashboard
         ↓
    - Career Exploration (Browse Careers → Details → Save/Compare)
    - Skill & Interest Assessment (Take Quiz → Get Recommendations)
    - Schedule Counseling (Select Counselor → Choose Date/Time → Book)
    - Resources & Mentorship (Articles, Videos, Guides → Ask Mentor)
    - Progress Dashboard (Track Goals)

Admin Flow:
Start → Landing Page → Login → Role Selection → Admin Dashboard
       ↓
  - User Management (Add/Edit/Delete Users)
  - Career Resources (Manage Careers)
  - Counselor Management (Manage Counselors)
  - Session Requests (Track Sessions)
  - Analytics & Reports (View Insights)
```

## 📋 Project Structure

```
career-guidance-platform/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   └── Navigation.css
│   ├── context/
│   │   └── AuthContext.js
│   ├── pages/
│   │   ├── LandingPage.js
│   │   ├── LandingPage.css
│   │   ├── LoginPage.js
│   │   ├── SignupPage.js
│   │   ├── AuthPages.css
│   │   ├── StudentDashboard.js
│   │   ├── CareerExploration.js
│   │   ├── SkillAssessment.js
│   │   ├── StudentPages.css
│   │   ├── ScheduleCounseling.js
│   │   ├── ResourcesAndMentorship.js
│   │   ├── AdminDashboard.js
│   │   └── AdminUserManagement.js
│   ├── styles/
│   │   └── index.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or Download the Repository**
   ```bash
   cd career-guidance-platform
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm start
   ```

4. **Open in Browser**
   The application will open automatically at `http://localhost:3000`

## 🔑 Demo Credentials

### Student Account
- **Email**: `student@example.com`
- **Password**: `password123`

### Admin Account
- **Email**: `admin@example.com`
- **Password**: `password123`

You can use these credentials to test both student and admin dashboards. The system determines role based on the email prefix.

## 📱 Key Pages

### Landing Page
- Welcome screen with platform overview
- Feature highlights
- Call-to-action buttons for Sign In and Create Account

### Authentication
- **Login Page**: Sign in to existing account
- **Signup Page**: Create new student account
- Demo account buttons for quick testing

### Student Dashboard
- Quick statistics (careers saved, assessments done, etc.)
- Menu grid with quick access to all student features
- Upcoming sessions overview

### Career Exploration
- Search and filter careers by title or keyword
- Detailed career information (salary, demand, skills, education)
- Save/favorite careers feature
- Career comparison functionality

### Skill Assessment
- Multi-question career aptitude assessment
- Progress tracking through questions
- Personalized career recommendations based on answers
- Match scores for recommended careers

### Schedule Counseling
- Browse available counselors with ratings and expertise
- Select date and time for sessions
- Booking confirmation and summary
- View and manage booked sessions

### Resources & Mentorship
- Access to articles, videos, and guides
- Filter resources by category
- Connect with mentors in various fields
- Request mentorship functionality

### Admin Dashboard
- Overview statistics and metrics
- Quick access management options
- Recent activity log

### User Management
- View all users (students, counselors, admins)
- Add new users with role assignment
- Edit user information
- Delete user accounts
- Search and filter users

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Routing**: React Router v6
- **State Management**: React Context API
- **Styling**: CSS3 (Custom styling, no external CSS libraries)
- **Icons**: Lucide React
- **HTTP Client**: Axios (ready for API integration)

## 🎨 Design Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Color Coded**: Student (Green #2c5f2d) and Admin (Orange #ff9800) themes
- **Interactive Components**: Hover effects, animations, and transitions
- **Accessibility**: Semantic HTML, proper form structure
- **User Feedback**: Error messages, success confirmations, loading states

## 🔐 Authentication System

- **Context-based Auth**: Uses React Context API for state management
- **Role-based Access**: Different dashboards for students and admins
- **Local Storage**: Persists user session (can be extended with JWT)
- **Protected Routes**: Routes restricted based on user role

## 📊 Data Models

### User
```javascript
{
  id: string,
  name: string,
  email: string,
  role: 'student' | 'counselor' | 'admin',
  joinDate: string,
  status: 'Active' | 'Inactive'
}
```

### Career
```javascript
{
  id: number,
  title: string,
  description: string,
  skills: string[],
  salary: string,
  demand: string,
  education: string
}
```

### Session
```javascript
{
  id: number,
  counselor: string,
  date: string,
  time: string,
  status: 'Scheduled' | 'Completed' | 'Cancelled'
}
```

## 🚀 Future Enhancements

1. **Backend Integration**
   - Node.js/Express backend
   - Database (MongoDB/PostgreSQL)
   - RESTful API endpoints

2. **Advanced Features**
   - Real-time notifications
   - Email/SMS notifications
   - Video consultation sessions
   - Advanced analytics
   - User profile customization
   - Career path planning tools
   - Resource recommendations engine

3. **Security**
   - JWT authentication
   - Password hashing
   - Role-based access control (RBAC)
   - Data encryption

4. **Performance**
   - Code splitting
   - Lazy loading
   - Image optimization
   - Caching strategies

## 📝 Notes

- This is a frontend prototype demonstrating the complete UI/UX
- Data is currently stored in component state (not persisted)
- Ready for backend integration
- All styling is custom CSS (no Bootstrap or Tailwind)
- Icons from Lucide React library

## 📄 License

This project is open source and available under the MIT License.

## 👥 Support

For questions or issues, please feel free to reach out.

---

**Happy Career Exploring! 🎓**
