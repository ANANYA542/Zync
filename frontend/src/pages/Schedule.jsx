import { AlertTriangle, Lightbulb } from 'lucide-react';

export default function Schedule() {
  return (
    <div className="animate-slide flex flex-col h-full">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#1B1B1B', marginBottom: '8px' }}>Time Orchestrator</h1>
            <p style={{ color: '#6A7177', fontSize: '15px' }}>Curating your academic flow for <span style={{ fontWeight: 800, color: '#5F8C43' }}>Week 12</span>.</p>
          </div>
          <div style={{ display: 'flex', backgroundColor: '#F0ECE4', borderRadius: '100px', padding: '4px' }}>
             <button style={{ padding: '8px 24px', borderRadius: '100px', backgroundColor: 'transparent', color: '#777', fontWeight: 700, fontSize: '14px' }}>Monthly</button>
             <button style={{ padding: '8px 24px', borderRadius: '100px', backgroundColor: 'white', color: '#333', fontWeight: 700, fontSize: '14px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>Weekly</button>
          </div>
      </div>

      <div style={{ display: 'flex', gap: '32px', flexGrow: 1 }}>
          
          {/* Main Scheduler Area */}
          <div style={{ flex: 1, backgroundColor: '#FAFBFA', borderRadius: '24px', border: '1px solid #EAE6DB', display: 'flex', flexDirection: 'column' }}>
              
              {/* Header Days */}
              <div style={{ display: 'grid', gridTemplateColumns: '50px repeat(7, 1fr)', borderBottom: '1px solid #EAE6DB', padding: '24px 0' }}>
                  <div></div> {/* Time column spacer */}
                  {['MON','TUE','WED','THU','FRI','SAT','SUN'].map((day, i) => (
                      <div key={day} style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '11px', fontWeight: 700, color: '#888', textTransform: 'uppercase', marginBottom: '8px' }}>{day}</div>
                          <div style={{ fontSize: '20px', fontWeight: 700, color: i === 1 ? 'white' : '#333', backgroundColor: i === 1 ? '#5F8C43' : 'transparent', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                             {14 + i}
                          </div>
                      </div>
                  ))}
              </div>

              {/* Timeline Grid (Mocked for strict layout mapping) */}
              <div style={{ flex: 1, position: 'relative', overflowY: 'auto', padding: '0 16px 24px 0' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '50px repeat(7, 1fr)', gridAutoRows: '60px', marginTop: '24px' }}>
                      
                      {/* Time labels */}
                      {['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'].map(time => (
                          <div key={time} style={{ gridColumn: 1, textAlign: 'right', paddingRight: '12px', fontSize: '11px', color: '#A0A0A0', alignSelf: 'start', transform: 'translateY(-6px)' }}>
                              {time}
                          </div>
                      ))}
                      
                      {/* Render Mock Blocks Absolute Positioned relative to the grid container concept, but we'll use grid placements for simplicity here to match the image  */}
                      
                      {/* Block 1 */}
                      <div style={{ gridColumn: 2, gridRow: '1 / span 3', backgroundColor: '#B8DDA6', borderRadius: '16px', margin: '0 8px', padding: '16px', display: 'flex', flexDirection: 'column', color: '#1A4D00' }}>
                          <span style={{ fontSize: '11px', fontWeight: 800 }}>09:00 - 10:30</span>
                          <span style={{ fontSize: '14px', fontWeight: 800, marginTop: '4px' }}>Advanced Thermodynamics</span>
                      </div>

                      {/* Block 2 */}
                      <div style={{ gridColumn: 3, gridRow: '1 / span 2', backgroundColor: '#B8DDA6', borderRadius: '16px', margin: '0 8px', padding: '16px', display: 'flex', flexDirection: 'column', color: '#1A4D00' }}>
                          <span style={{ fontSize: '11px', fontWeight: 800 }}>10:00 - 11:30</span>
                          <span style={{ fontSize: '14px', fontWeight: 800, marginTop: '4px' }}>Fluid Mechanics Seminar</span>
                      </div>

                      {/* Conflict Block Wrapper */}
                      <div style={{ gridColumn: '3 / span 2', gridRow: '4 / span 3', position: 'relative', margin: '0 8px', display: 'flex', gap: '8px' }}>
                           <div style={{ backgroundColor: '#FAD2DB', borderRadius: '16px', padding: '16px', flex: 1.5, borderLeft: '4px solid #D95868', color: '#9D3D52', zIndex: 10, boxShadow: '0 8px 24px rgba(217,88,104,0.15)' }}>
                                <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '8px' }}>
                                    <AlertTriangle size={14} color="#D95868" />
                                    <span style={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.5px' }}>Conflict Detected</span>
                                </div>
                                <h4 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '4px', lineHeight: '1.2' }}>Lab Session vs. Sports Trial</h4>
                                <p style={{ fontSize: '12px', color: '#BA6674' }}>15:00 - 16:30 • Overlap 45m</p>
                                <button style={{ marginTop: '16px', fontSize: '11px', fontWeight: 800, color: '#5F8C43', backgroundColor: '#DDF0D5', padding: '6px 12px', borderRadius: '100px', border: 'none' }}>
                                    RESCHEDULE RECOMMENDATION
                                </button>
                           </div>
                           <div style={{ backgroundColor: '#FCA1B2', borderRadius: '16px', padding: '16px', flex: 1, color: '#9D3D52' }}>
                                <span style={{ fontSize: '11px', fontWeight: 800 }}>14:00 - 16:00</span>
                                <span style={{ fontSize: '14px', fontWeight: 800, marginTop: '4px', display: 'block' }}>Vocal Ensemble Practice</span>
                           </div>
                      </div>

                      {/* Sync Active block  */}
                      <div style={{ gridColumn: 3, gridRow: '6 / span 2', backgroundColor: '#DDF0D5', borderRadius: '16px', margin: '0 8px', padding: '16px', display: 'flex', flexDirection: 'column', color: '#417C2F', border: '1px solid #B8DDA6', transform: 'translateY(30px)' }}>
                          <span style={{ fontSize: '11px', fontWeight: 800 }}>17:00 - 19:00</span>
                          <span style={{ fontSize: '14px', fontWeight: 800, fontStyle: 'italic', marginTop: '4px' }}>Group Study Slot</span>
                          <div style={{ marginTop: 'auto', alignSelf: 'flex-start', backgroundColor: '#B8DDA6', padding: '4px 10px', borderRadius: '100px', fontSize: '9px', fontWeight: 800, textTransform: 'uppercase' }}>
                              ● Live Sync Active
                          </div>
                      </div>

                      {/* Horizontal red band for current time visualization - mocked style */}
                      <div style={{ gridColumn: '1 / span 8', gridRow: '5', height: '40px', backgroundColor: 'rgba(250, 210, 219, 0.3)', pointerEvents: 'none', borderTop: '1px dashed #E37A8C', opacity: 0.5 }}></div>
                  </div>
              </div>

          </div>

          {/* Right Sidebar Modules */}
          <div style={{ width: '280px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Smart Analysis Component */}
              <div style={{ backgroundColor: '#EAE6DB', borderRadius: '24px', padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: '#3A6329' }}>
                      <Lightbulb size={20} />
                      <h3 style={{ fontSize: '16px', fontWeight: 800 }}>Smart Analysis</h3>
                  </div>
                  <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '16px', fontSize: '13px', color: '#555', lineHeight: '1.6' }}>
                      Based on your focus patterns, Tuesday mornings are <span style={{ color: '#5F8C43', fontWeight: 700 }}>22% more productive</span> for <strong>Deep Work</strong>.
                  </div>
                  
                  <div style={{ marginTop: '24px' }}>
                      <h4 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#888', fontWeight: 800, marginBottom: '16px' }}>Recommended Slots</h4>
                      
                      <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '16px', marginBottom: '12px', border: '1px solid #DDF0D5' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                              <span style={{ fontSize: '11px', fontWeight: 800, color: '#333' }}>TOMORROW</span>
                              <span className="pill pill-green" style={{ fontSize: '9px' }}>HIGH IMPACT</span>
                          </div>
                          <div style={{ fontSize: '16px', fontWeight: 800, color: '#333', marginBottom: '4px' }}>08:00 – 09:30</div>
                          <div style={{ fontSize: '12px', color: '#777' }}>Perfect for "Organic Chemistry" review.</div>
                      </div>

                      <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '16px', border: '1px solid #EAE6DB' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                              <span style={{ fontSize: '11px', fontWeight: 800, color: '#333' }}>FRIDAY</span>
                              <span className="pill" style={{ fontSize: '9px', backgroundColor: '#F0ECE4' }}>QUIET SLOT</span>
                          </div>
                          <div style={{ fontSize: '16px', fontWeight: 800, color: '#333', marginBottom: '4px' }}>16:30 – 18:00</div>
                          <div style={{ fontSize: '12px', color: '#777' }}>Extended gap found after Math seminar.</div>
                      </div>
                  </div>
              </div>

              {/* Productivity Score */}
              <div style={{ backgroundColor: 'white', border: '1px solid #EAE6DB', borderRadius: '24px', padding: '24px' }}>
                  <h4 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#888', fontWeight: 800, marginBottom: '16px' }}>Productivity Score</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '4px solid #F0ECE4', borderTopColor: '#5F8C43', borderRightColor: '#5F8C43', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 800 }}>75%</div>
                      <div>
                          <div style={{ fontSize: '14px', fontWeight: 800, color: '#333', marginBottom: '2px' }}>Efficiency Peak</div>
                          <div style={{ fontSize: '12px', color: '#777' }}>Trending up from last week</div>
                      </div>
                  </div>
              </div>

              {/* Weekend Focus Workshop image banner mocked */}
              <div style={{ borderRadius: '24px', padding: '24px', color: 'white', backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', minHeight: '180px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '8px', lineHeight: '1.4' }}>Weekend Focus Workshop</h3>
                  <p style={{ fontSize: '13px', color: '#E0E0E0', marginBottom: '20px' }}>Collaborate with fellow curators.</p>
                  <button style={{ marginTop: 'auto', backgroundColor: '#9D3D52', color: 'white', border: 'none', padding: '10px 16px', borderRadius: '100px', fontWeight: 800, fontSize: '12px', alignSelf: 'flex-start' }}>JOIN SESSION</button>
              </div>

          </div>
      </div>
    </div>
  );
}
