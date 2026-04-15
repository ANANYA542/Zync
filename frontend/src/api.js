import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor to attach the JWT token to every request automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('zync_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Basic handlers for the different backend services
export const authService = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  register: (data) => api.post('/auth/register', data)
};

export const dashboardService = {
  getPersonalizedDashboard: () => api.get('/dashboard')
};

export const attendanceService = {
  getAttendance: () => api.get('/attendance') 
};

export const scheduleService = {
  getEvents: () => api.get('/schedule')
};

export default api;
