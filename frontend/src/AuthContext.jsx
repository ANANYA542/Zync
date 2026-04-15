/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useContext } from 'react';
import { authService } from './api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if token exists on load
    const token = localStorage.getItem('zync_token');
    if (token) {
      // In a real app, verify the token / get user profile here
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUser({ name: 'Alex Mercer', role: 'student' });
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Fallback for visual mock if backend isn't running exactly
      if(email === 'curator@zync.edu') {
        localStorage.setItem('zync_token', 'mock_token_123');
        setUser({ name: 'Alex Mercer', role: 'student' });
        return { success: true };
      }
      
      const res = await authService.login(email, password);
      if (res.data && res.data.token) {
        localStorage.setItem('zync_token', res.data.token);
        setUser(res.data.user);
        return { success: true };
      }
    } catch {
      return { success: false, error: 'Login failed. Please check credentials.' };
    }
  };

  const logout = () => {
    localStorage.removeItem('zync_token');
    setUser(null);
  };

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
