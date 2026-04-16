import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, CalendarDays, UserCheck, BookOpen, Gamepad2, Users, Bell, Search, Plus } from 'lucide-react';
import { useAuth } from './AuthContext';

export default function Layout() {
  const location = useLocation();
  const { user } = useAuth();
  const currentPath = location.pathname.substring(1) || 'dashboard';

  const navItems = [
    { name: 'Dashboard', path: 'dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Schedule', path: 'schedule', icon: <CalendarDays size={20} /> },
    { name: 'Attendance', path: 'attendance', icon: <UserCheck size={20} /> },
    { name: 'Exam Prep', path: 'exam-prep', icon: <BookOpen size={20} /> },
    { name: 'Extracurriculars', path: 'extracurriculars', icon: <Gamepad2 size={20} /> },
    { name: 'Connect', path: 'connect', icon: <Users size={20} /> }
  ];

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div style={{ padding: '12px', marginBottom: '40px' }}>
             <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#3A6329' }}>Zync</h2>
             <span style={{ fontSize: '10px', letterSpacing: '1px', color: '#888', textTransform: 'uppercase' }}>The Digital Curator</span>
        </div>

        <nav className="flex flex-col gap-2 flex-grow">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link
                key={item.name}
                to={`/${item.path}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '14px 20px',
                  borderRadius: '100px',
                  backgroundColor: isActive ? '#8AB46F' : 'transparent',
                  color: isActive ? 'white' : '#5B6166',
                  fontWeight: isActive ? 700 : 600,
                  transition: 'all 0.2sease'
                }}
              >
                {item.icon}
                {item.name}
              </Link>
            )
          })}
        </nav>

        <button style={{ backgroundColor: '#9D3D52', color: 'white', padding: '16px', borderRadius: '100px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
             <Plus size={20} /> New Entry
        </button>
      </aside>

      {/* Main Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          
          {/* Topbar */}
          <header style={{ padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ position: 'relative', width: '300px' }}>
                  <Search size={18} style={{ position: 'absolute', top: '12px', left: '16px', color: '#999' }} />
                  <input type="text" placeholder="Search analytics..." style={{ width: '100%', padding: '12px 16px 12px 42px', borderRadius: '100px', backgroundColor: '#F0ECE4', fontSize: '14px' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <Bell size={22} color="#3A6329" />
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', backgroundColor: '#F0ECE4', padding: '6px 16px', borderRadius: '100px' }}>
                      <div className="flex flex-col" style={{ textAlign: 'right' }}>
                          <span style={{ fontSize: '13px', fontWeight: 700, color: '#333' }}>{user?.name || 'Alex Mercer'}</span>
                          <span style={{ fontSize: '10px', textTransform: 'uppercase', color: '#7BA863', fontWeight: 800 }}>Student</span>
                      </div>
                      <div style={{ width: '32px', height: '32px', backgroundColor: '#444', borderRadius: '50%', backgroundImage: 'url(https://i.pravatar.cc/100?img=11)', backgroundSize: 'cover' }}></div>
                  </div>
              </div>
          </header>

          {/* Content Area */}
          <main className="main-content">
             <Outlet />
          </main>
      </div>
    </div>
  );
}
