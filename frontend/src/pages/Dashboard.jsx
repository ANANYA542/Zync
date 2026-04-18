import { PlusCircle, CheckCircle2, MessageSquare, Rocket, Clock, MoreHorizontal } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="animate-slide">
      {/* Header section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#1B1B1B', marginBottom: '4px' }}>Welcome back, Alex.</h1>
            <p style={{ color: '#6A7177', fontSize: '15px' }}>Your academic ecosystem is synchronized and ready.</p>
          </div>
          <div style={{ backgroundColor: '#DDF0D5', color: '#417C2F', padding: '6px 16px', borderRadius: '100px', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
             ● Sync-Pill: Real-Time Active
          </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 1fr) 2fr 300px', gap: '24px', marginBottom: '24px' }}>
         
         {/* Workload Score Widget */}
         <div style={{ backgroundColor: '#F8F6F0', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #EAE6DB' }}>
            <h3 style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#666', marginBottom: '24px', alignSelf: 'flex-start' }}>Workload Score</h3>
            
            <div style={{ position: 'relative', width: '160px', height: '160px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px' }}>
               <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%' }}>
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#EAE6DB" strokeWidth="3.5" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#5F8C43" strokeWidth="3.5" strokeDasharray="72, 100" />
               </svg>
               <div style={{ position: 'absolute', textAlign: 'center' }}>
                  <div style={{ fontSize: '36px', fontWeight: 800, color: '#1B1B1B' }}>72%</div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#5F8C43', textTransform: 'uppercase' }}>Focused</div>
               </div>
            </div>
            
            <p style={{ fontSize: '13px', color: '#777', textAlign: 'center', lineHeight: '1.5' }}>
               Optimal intensity reached. 3 focused hours remain for today.
            </p>
         </div>

         {/* Daily Schedule Widget */}
         <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '32px', border: '1px solid #EAE6DB' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1B1B1B' }}>Daily Schedule</h3>
                <span className="pill" style={{ backgroundColor: '#F0ECE4', color: '#555' }}>Oct 24, Tue</span>
            </div>

            <div className="flex flex-col gap-6">
                <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ width: '2px', backgroundColor: '#5F8C43', position: 'relative' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#5F8C43', position: 'absolute', top: 0, left: '-5px' }}></div>
                    </div>
                    <div>
                        <div style={{ fontSize: '12px', color: '#5F8C43', fontWeight: 700, marginBottom: '2px' }}>09:00 - 10:30 AM</div>
                        <div style={{ fontSize: '16px', fontWeight: 800, color: '#333' }}>Advanced Thermodynamics</div>
                        <div style={{ fontSize: '13px', color: '#888' }}>Hall 4B • Prof. Sterling</div>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ width: '2px', backgroundColor: '#D9D9D9', position: 'relative' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#D9D9D9', position: 'absolute', top: 0, left: '-5px' }}></div>
                    </div>
                    <div>
                        <div style={{ fontSize: '12px', color: '#888', fontWeight: 700, marginBottom: '2px' }}>01:00 - 02:00 PM</div>
                        <div style={{ fontSize: '16px', fontWeight: 800, color: '#333' }}>Ethics in Engineering</div>
                        <div style={{ fontSize: '13px', color: '#888' }}>Seminar Room • Hybrid</div>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ width: '2px', backgroundColor: '#D9D9D9', position: 'relative' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#D9D9D9', position: 'absolute', top: 0, left: '-5px' }}></div>
                    </div>
                    <div>
                        <div style={{ fontSize: '12px', color: '#888', fontWeight: 700, marginBottom: '2px' }}>03:30 - 05:00 PM</div>
                        <div style={{ fontSize: '16px', fontWeight: 800, color: '#333' }}>Capstone Project Lab</div>
                        <div style={{ fontSize: '13px', color: '#888' }}>Innovation Wing</div>
                    </div>
                </div>
            </div>
         </div>

         {/* Quick Commands & mini-attendance */}
         <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
             <div style={{ backgroundColor: '#F8F6F0', borderRadius: '24px', padding: '24px', border: '1px solid #EAE6DB' }}>
                  <h3 style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#666', marginBottom: '16px' }}>Quick Command</h3>
                  <button style={{ width: '100%', padding: '12px', backgroundColor: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', color: '#333', fontWeight: 600, border: '1px solid #EAE6DB' }}><PlusCircle size={18} color="#5F8C43" /> Add Event</button>
                  <button style={{ width: '100%', padding: '12px', backgroundColor: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', color: '#333', fontWeight: 600, border: '1px solid #EAE6DB' }}><CheckCircle2 size={18} color="#5F8C43" /> Mark Attendance</button>
                  <button style={{ width: '100%', padding: '12px', backgroundColor: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px', color: '#333', fontWeight: 600, border: '1px solid #EAE6DB' }}><MessageSquare size={18} color="#5F8C43" /> Anonymous Note</button>
             </div>
             
             <div style={{ backgroundColor: '#FAFBFA', borderRadius: '24px', padding: '24px', border: '1px solid #E1ECE0' }}>
                  <h3 style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#417C2F', marginBottom: '16px' }}>Attendance</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div style={{ textAlign: 'center' }}><div style={{ fontSize: '20px', fontWeight: 800, color: '#3A6329' }}>94%</div><div style={{ fontSize: '10px', color: '#666', fontWeight: 700 }}>MATH</div></div>
                      <div style={{ textAlign: 'center' }}><div style={{ fontSize: '20px', fontWeight: 800, color: '#3A6329' }}>88%</div><div style={{ fontSize: '10px', color: '#666', fontWeight: 700 }}>PHYS</div></div>
                      <div style={{ textAlign: 'center' }}><div style={{ fontSize: '20px', fontWeight: 800, color: '#9D3D52' }}>76%</div><div style={{ fontSize: '10px', color: '#666', fontWeight: 700 }}>CS</div></div>
                  </div>
             </div>
         </div>
      </div>

      {/* Deadlines Section */}
      <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '4px' }}>Upcoming Deadlines</h3>
      <p style={{ color: '#777', fontSize: '14px', marginBottom: '20px' }}>Don't let the editorial calendar slip.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '32px' }}>
          
          <div style={{ backgroundColor: '#9D3D52', borderRadius: '20px', padding: '24px', color: 'white', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px' }}><Clock size={14} /> Critical • {'<'} 24H</div>
              <h4 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '32px', lineHeight: '1.3' }}>Macro-Economics Problem Set #4</h4>
              <div style={{ fontSize: '13px', color: '#FFD1D9', fontWeight: 600 }}>Due Today, 11:59 PM</div>
              <div style={{ position: 'absolute', bottom: '20px', right: '20px', backgroundColor: 'rgba(255,255,255,0.2)', padding: '10px', borderRadius: '12px' }}><Rocket size={20} /></div>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '24px', border: '1px solid #EAE6DB' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#5F8C43', marginBottom: '16px' }}><Clock size={14} /> Active • 4 Days Left</div>
              <h4 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '32px', color: '#333', lineHeight: '1.3' }}>Lab Report: Thermal Expansion Analysis</h4>
              <div style={{ fontSize: '13px', color: '#888', fontWeight: 600 }}>Due Oct 28, 5:00 PM</div>
          </div>

          <div style={{ backgroundColor: '#F0ECE4', borderRadius: '20px', padding: '24px', border: '1px solid #EAE6DB' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#777', marginBottom: '16px' }}><Clock size={14} /> Queued • 9 Days Left</div>
              <h4 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '32px', color: '#444', lineHeight: '1.3' }}>Modern History Research Draft</h4>
              <div style={{ fontSize: '13px', color: '#888', fontWeight: 600 }}>Due Nov 2, 9:00 AM</div>
              <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}><MoreHorizontal size={24} color="#999" /></div>
          </div>

      </div>

      {/* Footer Banner */}
      <div style={{ backgroundColor: '#476f33', borderRadius: '24px', padding: '32px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <div style={{ width: '80px', height: '80px', backgroundColor: '#E1DEC6', borderRadius: '16px', backgroundImage: 'url(https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&q=80)', backgroundSize: 'cover' }}></div>
              <div style={{ maxWidth: '600px' }}>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, fontStyle: 'italic', marginBottom: '8px' }}>"Deep work is the superpower of the 21st century."</h3>
                  <p style={{ color: '#D5DFCF', fontSize: '14px', lineHeight: '1.6' }}>Zync suggests scheduling your Philosophy essay for tomorrow 8am-10am. Your focus score is historically 22% higher during those hours.</p>
              </div>
          </div>
          <button style={{ backgroundColor: '#B8D5A3', color: '#2C491D', padding: '14px 24px', borderRadius: '100px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '12px' }}>Schedule Block</button>
      </div>

    </div>
  );
}
