# Career Guidance Platform - Developer Quick Reference

## 🚀 Quick Start (30 seconds)

```bash
cd career-guidance-platform
npm install
npm start
# App opens at http://localhost:3000
```

## 🔑 Login Credentials

| Role | Email | Password |
|------|-------|----------|
| Student | `student@example.com` | `password123` |
| Admin | `admin@example.com` | `password123` |

**Pro Tip**: Click the demo buttons on login page for instant access!

## 📂 Key Files to Know

| File | Purpose | Lines |
|------|---------|-------|
| `src/App.js` | Main routing | 70 |
| `src/context/AuthContext.js` | Auth logic | 50 |
| `src/pages/StudentDashboard.js` | Student home | 85 |
| `src/pages/AdminDashboard.js` | Admin home | 150 |
| `src/styles/index.css` | Global styles | 420 |

## 🧭 Navigation Routes

### Student Routes
```
/student/dashboard           → Main student home
/student/career-exploration  → Browse careers
/student/assessment          → Career quiz
/student/counseling          → Book sessions
/student/resources           → Articles & mentors
```

### Admin Routes
```
/admin/dashboard    → Admin home
/admin/users        → Manage users
/admin/careers      → Manage careers
/admin/counselors   → Manage counselors
/admin/sessions     → View sessions
/admin/analytics    → Reports
```

## 🎨 Colors Used

```css
--primary-color: #2c5f2d;      /* Student Green */
--secondary-color: #ff9800;    /* Admin Orange */
--text-dark: #333;
--text-light: #666;
--background-light: #f9f9f9;
--border-color: #ddd;
```

## 📊 Component Hierarchy

```
App
├── Navigation
├── Routes
│   ├── LandingPage
│   ├── LoginPage
│   ├── SignupPage
│   ├── StudentDashboard
│   ├── CareerExploration
│   ├── SkillAssessment
│   ├── ScheduleCounseling
│   ├── ResourcesAndMentorship
│   ├── AdminDashboard
│   └── AdminUserManagement
```

## 🔐 Authentication Flow

```javascript
// Login
useAuth().login(userData, 'student')

// Check Auth
const { isAuthenticated, userRole, user } = useAuth()

// Logout
useAuth().logout()
```

## 💾 Data Structure Examples

### Add Career Data
```javascript
const career = {
  id: 1,
  title: 'Software Engineer',
  skills: ['Programming', 'Problem Solving'],
  salary: '$80K - $150K',
  demand: 'Very High'
}
```

### Book Counseling Session
```javascript
const session = {
  id: 1,
  counselor: 'Dr. Sarah Johnson',
  date: '2026-02-25',
  time: '10:00 AM',
  status: 'Scheduled'
}
```

## 🎯 Testing Features

### Student Features to Test
1. ✅ Signup → Dashboard
2. ✅ Search & save careers
3. ✅ Complete assessment (6Qs)
4. ✅ Book counseling session
5. ✅ Browse resources & mentors

### Admin Features to Test
1. ✅ View dashboard stats
2. ✅ Add/Edit/Delete user
3. ✅ Manage career resources
4. ✅ Search functionality
5. ✅ Form validation

## 🛠️ Common Tasks

### Add New Page
1. Create component in `src/pages/`
2. Add route in `App.js`
3. Add navigation link in `Navigation.js`
4. Create `PageName.css` for styles

### Add New Component
```javascript
// src/components/MyComponent.js
import React from 'react';
import './MyComponent.css';

const MyComponent = () => {
  return <div>Component</div>;
};

export default MyComponent;
```

### Use Authentication
```javascript
import { useAuth } from '../context/AuthContext';

function MyComponent() {
  const { user, isAuthenticated, logout } = useAuth();
  
  return <div>{user?.name}</div>;
}
```

## 📋 Form Validation Example

```javascript
const handleSubmit = () => {
  if (!email || !password) {
    setError('Please fill all fields');
    return;
  }
  // Proceed with submission
};
```

## 🎨 Styling Tips

### Grid Layout
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

### Responsive
```css
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

### Cards
```css
.card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
```

## 🔧 Debugging Tips

### Check Auth State
```javascript
const auth = useAuth();
console.log('User:', auth.user);
console.log('Role:', auth.userRole);
console.log('Authenticated:', auth.isAuthenticated);
```

### View Console Errors
Press `F12` or `Ctrl+Shift+I` to open DevTools

### Clear Cache
```bash
npm cache clean --force
```

### Reinstall Dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📝 Code Examples

### Button Click Handler
```javascript
const handleClick = () => {
  alert('Button clicked!');
};

<button onClick={handleClick} className="btn btn-primary">
  Click Me
</button>
```

### Form Input
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: ''
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

<input
  name="name"
  value={formData.name}
  onChange={handleChange}
/>
```

### Conditional Rendering
```javascript
{isAuthenticated ? (
  <div>Welcome {user.name}</div>
) : (
  <div>Please login</div>
)}
```

### List Rendering
```javascript
{users.map((user) => (
  <div key={user.id}>
    <h3>{user.name}</h3>
    <p>{user.email}</p>
  </div>
))}
```

## 🎬 NPM Commands

```bash
npm start          # Start dev server
npm build          # Build for production
npm test           # Run tests
npm eject          # Eject from CRA (irreversible!)
npm install <pkg>  # Install new package
npm uninstall <pkg> # Remove package
```

## 📦 Available Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.8.0",
  "axios": "^1.3.2",
  "lucide-react": "^0.263.1"
}
```

## 🐛 Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Say "Y" to use different port |
| Blank page | Clear cache, restart server |
| Component not showing | Check route path spelling |
| Styles not applying | Check CSS file import |
| State not updating | Ensure proper setState usage |

## 🌐 Browser DevTools

### React DevTools
- Install "React Developer Tools" extension
- Inspect components
- Check props and state

### Lighthouse
- Right-click → Inspect
- Go to Lighthouse tab
- Run audit

## 📚 Documentation Files

- `README.md` - Full documentation
- `SETUP_GUIDE.md` - Installation & setup
- `IMPLEMENTATION_SUMMARY.md` - Complete overview

## ⚡ Performance Tips

1. Use React DevTools Profiler
2. Check Network tab for large assets
3. Minimize re-renders with React.memo
4. Use lazy loading for routes
5. Optimize images and CSS

## 🚀 Deployment (Vercel)

```bash
# Push to GitHub
git add .
git commit -m "Deploy"
git push origin main

# Connect to Vercel
# Link GitHub repo
# Auto-deploy on push
```

## 💡 Next Steps

1. **Connect Backend**: Replace mock data with API calls
2. **Add Database**: Setup MongoDB or PostgreSQL
3. **Email Notifications**: Integrate SendGrid/Mailgun
4. **Authentication**: Add JWT tokens
5. **Testing**: Write unit & integration tests
6. **Deployment**: Deploy to Vercel/Netlify

---

**Remember**: This is a frontend prototype ready for backend integration! 🎉
