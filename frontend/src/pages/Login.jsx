import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('curator@zync.edu');
  const [password, setPassword] = useState('password123');
  const [role, setRole] = useState('student');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) {
      navigate('/dashboard');
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', backgroundColor: '#F8F6F0' }}>
      
      {/* Left Visual Panel */}
      <div style={{ flex: 1, padding: '40px', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#3A6329' }}>Zync</h2>
        <span style={{ fontSize: '12px', letterSpacing: '1px', color: '#6A8F5B', textTransform: 'uppercase' }}>The Digital Curator</span>
        
        <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
             {/* Filled Feature Blocks */}
             <div style={{ width: '45%', height: '180px', background: 'linear-gradient(to bottom right, #f4ecd8, #e1d3b4)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                 <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
                     <span style={{ fontSize: '32px', fontWeight: 800, color: '#3A6329' }}>94%</span>
                     <span style={{ fontSize: '14px', fontWeight: 700, color: '#6A8F5B', textTransform: 'uppercase' }}>Avg</span>
                 </div>
                 <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#333' }}>Attendance Target</h3>
                 <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>You're on track for this semester.</p>
             </div>
             <div style={{ width: '35%', height: '180px', backgroundColor: '#F9D1D9', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                 <span style={{ fontSize: '40px', marginBottom: '12px' }}>📖</span>
                 <div style={{ fontSize: '14px', fontWeight: 700, color: '#9D3D52' }}>Curated Library</div>
                 <div style={{ fontSize: '11px', color: '#B56B7A', marginTop: '4px' }}>12 New Resources</div>
             </div>
             <div style={{ width: '45%', height: '220px', backgroundColor: '#8DB775', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'white' }}>
                 <h3 style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', color: '#DDF0D5' }}>Up Next</h3>
                 <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '16px', borderRadius: '12px', marginBottom: '12px' }}>
                     <div style={{ fontSize: '14px', fontWeight: 700 }}>Advanced Thermodynamics</div>
                     <div style={{ fontSize: '12px', opacity: 0.9, marginTop: '4px' }}>09:00 AM • Hall 4B</div>
                 </div>
                 <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '12px 16px', borderRadius: '12px' }}>
                     <div style={{ fontSize: '13px', fontWeight: 600 }}>Ethics in Engineering</div>
                     <div style={{ fontSize: '11px', opacity: 0.8, marginTop: '2px' }}>01:00 PM • Seminar Room</div>
                 </div>
             </div>
             <div style={{ width: '35%', height: '220px', backgroundColor: 'white', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                 <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Sync your academic life with serenity.</h3>
                 <p style={{ fontSize: '12px', color: '#777' }}>Manage schedules, attendance, and prep in one curated space.</p>
             </div>
        </div>
      </div>

      {/* Right Login Panel */}
      <div style={{ flex: 1, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '420px', padding: '40px' }}>
            <h1 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '8px' }}>Welcome back.</h1>
            <p style={{ color: '#666', marginBottom: '32px' }}>Ready to pick up where you left off?</p>
            
            <div style={{ display: 'flex', backgroundColor: '#F2F0E9', borderRadius: '100px', padding: '4px', marginBottom: '32px' }}>
                <button 
                  onClick={() => setRole('student')}
                  style={{ flex: 1, padding: '10px 0', borderRadius: '100px', backgroundColor: role === 'student' ? '#8DB775' : 'transparent', color: role === 'student' ? 'white' : '#555', fontWeight: 600 }}>
                  Student
                </button>
                <button 
                  onClick={() => setRole('teacher')}
                  style={{ flex: 1, padding: '10px 0', borderRadius: '100px', backgroundColor: role === 'teacher' ? '#8DB775' : 'transparent', color: role === 'teacher' ? 'white' : '#555', fontWeight: 600 }}>
                  Teacher
                </button>
            </div>

            <form onSubmit={handleLogin}>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', color: '#555' }}>Email Address</label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ width: '100%', padding: '16px', backgroundColor: '#F8F6F0', borderRadius: '12px', fontSize: '15px' }} />
                </div>
                
                <div style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                         <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', color: '#555' }}>Password</label>
                         <span style={{ fontSize: '11px', fontWeight: 700, color: '#D95868', textTransform: 'uppercase' }}>Forgot?</span>
                    </div>
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ width: '100%', padding: '16px', backgroundColor: '#F8F6F0', borderRadius: '12px', fontSize: '15px' }} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
                    <input type="checkbox" id="sync" style={{ width: '18px', height: '18px' }} />
                    <label htmlFor="sync" style={{ fontSize: '14px', color: '#555' }}>Keep me synced</label>
                </div>

                <button type="submit" style={{ width: '100%', padding: '18px', backgroundColor: '#6B9E5A', color: 'white', fontWeight: 700, fontSize: '16px', borderRadius: '12px' }}>
                    Sign In to Zync
                </button>
            </form>
            
            <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '14px', color: '#777' }}>
                New to the ecosystem? <span style={{ color: '#D95868', fontWeight: 700 }}>Create an account</span>
            </div>
        </div>
      </div>

    </div>
  );
}
