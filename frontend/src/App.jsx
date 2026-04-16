import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import Layout from './Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';
import Attendance from './pages/Attendance';
import './index.css';

// Protected Route Component to prevent unauthorized access
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// Main App Component
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes wrapped in Layout */}
          <Route path="/" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
             <Route index element={<Navigate to="/dashboard" replace />} />
             <Route path="dashboard" element={<Dashboard />} />
             <Route path="schedule" element={<Schedule />} />
             <Route path="attendance" element={<Attendance />} />
             
             {/* Placeholders for the remaining routes */}
             <Route path="exam-prep" element={<div style={{ padding: '40px' }}><h2>Exam Prep Module Coming Soon</h2></div>} />
             <Route path="extracurriculars" element={<div style={{ padding: '40px' }}><h2>Extracurriculars Module Coming Soon</h2></div>} />
             <Route path="connect" element={<div style={{ padding: '40px' }}><h2>Connect Module Coming Soon</h2></div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
