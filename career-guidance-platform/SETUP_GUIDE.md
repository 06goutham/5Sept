# Career Guidance Platform - Setup Guide

## Quick Start

### 1. Prerequisites
Make sure you have the following installed:
- **Node.js** (v14.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

To check if Node.js is installed:
```bash
node --version
npm --version
```

### 2. Navigate to Project Directory
```bash
cd c:\Users\dasar\Desktop\sept-5\career-guidance-platform
```

### 3. Install Dependencies
```bash
npm install
```

This will install all required packages:
- React 18
- React Router v6
- Lucide React Icons
- Axios (for API calls)

### 4. Start the Development Server
```bash
npm start
```

The application will automatically open in your default browser at `http://localhost:3000`

If it doesn't open automatically, visit: **http://localhost:3000**

## 🔐 Demo Login Credentials

Use these accounts to test the different features:

### Student Account
- **Email**: `student@example.com`
- **Password**: `password123`

**Or click "Login as Student" on the login page**

### Admin Account
- **Email**: `admin@example.com`
- **Password**: `password123`

**Or click "Login as Admin" on the login page**

### New Student Registration
- Click "Create Account" on the landing page
- Fill in your details
- You'll be logged in as a student by default

## 🗂️ Project Structure Overview

```
career-guidance-platform/
├── public/              # Static files
│   └── index.html      # Main HTML file
├── src/
│   ├── components/     # Reusable components
│   │   ├── Navigation.js
│   │   └── Navigation.css
│   ├── context/        # React Context (Authentication)
│   │   └── AuthContext.js
│   ├── pages/          # Page components
│   │   ├── LandingPage.js
│   │   ├── LoginPage.js
│   │   ├── SignupPage.js
│   │   ├── StudentDashboard.js
│   │   ├── CareerExploration.js
│   │   ├── SkillAssessment.js
│   │   ├── ScheduleCounseling.js
│   │   ├── ResourcesAndMentorship.js
│   │   ├── AdminDashboard.js
│   │   ├── AdminUserManagement.js
│   │   └── AdminCareerResources.js
│   ├── styles/         # Global styles
│   │   └── index.css
│   ├── App.js          # Main App component with routing
│   └── index.js        # Entry point
├── package.json        # Dependencies and scripts
├── .gitignore          # Git ignore file
└── README.md           # Documentation
```

## 🧭 Navigation Guide

### Student Flow
1. **Landing Page** → Overview and features
2. **Sign Up/Login** → Create account or login
3. **Student Dashboard** → Main menu for all features
4. **Career Exploration** → Search and explore careers
5. **Skill Assessment** → Take aptitude quiz
6. **Schedule Counseling** → Book sessions with counselors
7. **Resources** → Access articles, videos, and guides
8. **Mentorship** → Connect with mentors

### Admin Flow
1. **Landing Page** → Overview
2. **Admin Login** → Login as admin
3. **Admin Dashboard** → Management overview
4. **User Management** → Manage students and counselors
5. **Career Resources** → Manage career information
6. **Counselor Management** → Assign counselors
7. **Session Requests** → Track counseling sessions
8. **Analytics** → View reports and insights

## 📋 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm eject`
**Note: this is a one-way operation. Once you eject, you can't go back!**

## 🎨 Key Features to Test

### Student Side
- ✅ Create new account and login
- ✅ Browse 6+ career options
- ✅ Save favorite careers
- ✅ Take a 6-question career assessment
- ✅ View personalized recommendations
- ✅ Book counseling sessions with 4 different counselors
- ✅ Access sample resources and mentors
- ✅ View profile and progress

### Admin Side
- ✅ View dashboard statistics
- ✅ Add, edit, delete users
- ✅ Search and filter users
- ✅ Add/manage career resources
- ✅ View recent activity log
- ✅ Access all management options

## 🔧 Troubleshooting

### Port 3000 is already in use
If port 3000 is already in use, the app will prompt you to use a different port. Click "Y" in the terminal.

### Dependency issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Browser cache issues
- Clear browser cache (Ctrl+Shift+Delete)
- Or open the app in incognito/private mode

## 📱 Responsive Design

The application is responsive and works on:
- ✅ Desktop (1920px and above)
- ✅ Laptop (1024px - 1920px)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 768px)

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📚 Learning Resources

### React Documentation
- [React Docs](https://react.dev)
- [React Router Docs](https://reactrouter.com)

### Styling
- This project uses vanilla CSS for maximum control
- CSS Grid and Flexbox for layouts
- Media queries for responsive design

## 🚀 Next Steps

1. **Test the Application**: Use the demo accounts to explore all features
2. **Explore the Code**: Check out the component structure and understand the flow
3. **Customize**: Modify colors, text, and features as needed
4. **Backend Integration**: Connect to a real API for data persistence
5. **Deploy**: Deploy to Vercel, Netlify, or any hosting service

## 📦 Package Dependencies

All dependencies are listed in `package.json`:
- `react`: UI library
- `react-dom`: DOM rendering
- `react-router-dom`: Client-side routing
- `lucide-react`: Icon library
- `axios`: HTTP client (ready for API integration)

## ✨ Features Implemented

- ✅ Complete UI matching the design file
- ✅ Functional routing
- ✅ Authentication system with demo accounts
- ✅ Student features (career exploration, assessment, counseling)
- ✅ Admin features (user management, resource management)
- ✅ Responsive design
- ✅ Interactive components
- ✅ Form validation
- ✅ Search and filter functionality
- ✅ Data persistence in component state

## 🐛 Known Limitations

- Data is stored in component state (not persisted on page refresh)
- No email notifications or SMS
- No video calling for counseling sessions
- No real payment processing
- No authentication with backend

## 📞 Support

For issues or questions:
1. Check the README.md in the project root
2. Review the code comments in components
3. Check browser console for error messages (F12)

---

**Enjoy exploring the Career Guidance Platform! 🎓**
