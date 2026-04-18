import { AlertTriangle, TrendingUp, CalendarDays } from 'lucide-react';

export default function Attendance() {
  return (
    <div className="animate-slide">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
          <div style={{ maxWidth: '600px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#1B1B1B', marginBottom: '8px' }}>Attendance Guidance</h1>
            <p style={{ color: '#6A7177', fontSize: '15px' }}>Curated insights into your academic presence. Keep your momentum steady and your choices informed.</p>
          </div>
          <div style={{ backgroundColor: '#DDF0D5', display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 24px', borderRadius: '100px' }}>
             <div style={{ backgroundColor: '#5F8C43', padding: '10px', borderRadius: '50%' }}><TrendingUp size={20} color="white" /></div>
             <div>
                <div style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', color: '#5F8C43', letterSpacing: '0.5px' }}>Global Status</div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#333' }}>82.4% <span style={{ fontSize: '14px', fontWeight: 600, color: '#5F8C43' }}>Stable</span></div>
             </div>
          </div>
      </div>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
          
          {/* Main Academic Ledger Column */}
          <div style={{ flex: 1, backgroundColor: '#FAFBFA', borderRadius: '24px', padding: '32px', border: '1px solid #EAE6DB' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h2 style={{ fontSize: '20px', fontWeight: 800 }}>Academic Ledger</h2>
                  <div style={{ display: 'flex', gap: '8px' }}>
                      <span className="pill" style={{ backgroundColor: '#EAE6DB', color: '#555' }}>Sem 5</span>
                      <span className="pill" style={{ backgroundColor: '#EAE6DB', color: '#555' }}>Winter '24</span>
                  </div>
              </div>

              <div className="flex flex-col gap-4">
                  {/* Ledger Item 1 */}
                  <div style={{ backgroundColor: '#F0ECE4', borderRadius: '20px', padding: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                              <div style={{ width: '48px', height: '48px', backgroundColor: '#9BC780', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 800, color: '#3A6329' }}>OS</div>
                              <div>
                                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#333' }}>Operating Systems</div>
                                  <div style={{ fontSize: '13px', color: '#777', display: 'flex', alignItems: 'center', gap: '4px' }}><CalendarDays size={14} /> 24/30 Attended</div>
                              </div>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                              <div style={{ fontSize: '10px', fontWeight: 800, color: '#5F8C43', textTransform: 'uppercase' }}>Current</div>
                              <div style={{ fontSize: '24px', fontWeight: 800, color: '#333' }}>80%</div>
                          </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span className="pill pill-green">Safe Skips <span style={{ color: '#333', marginLeft: '4px' }}>2 lectures</span></span>
                      </div>
                  </div>

                  {/* Ledger Item 2: Critical */}
                  <div style={{ backgroundColor: '#F0ECE4', borderRadius: '20px', padding: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                              <div style={{ width: '48px', height: '48px', backgroundColor: '#F9D1D9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 800, color: '#9D3D52' }}>ML</div>
                              <div>
                                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#333' }}>Machine Learning</div>
                                  <div style={{ fontSize: '13px', color: '#777', display: 'flex', alignItems: 'center', gap: '4px' }}><CalendarDays size={14} /> 18/24 Attended</div>
                              </div>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                              <div style={{ fontSize: '10px', fontWeight: 800, color: '#333', textTransform: 'uppercase' }}>Current</div>
                              <div style={{ fontSize: '24px', fontWeight: 800, color: '#333' }}>75%</div>
                          </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span className="pill pill-red">Safe Skips <span style={{ color: '#9D3D52', marginLeft: '4px' }}>0 lectures</span></span>
                      </div>
                  </div>

                  {/* Ledger Item 3 */}
                  <div style={{ backgroundColor: '#F0ECE4', borderRadius: '20px', padding: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                              <div style={{ width: '48px', height: '48px', backgroundColor: '#9BC780', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 800, color: '#3A6329' }}>CN</div>
                              <div>
                                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#333' }}>Computer Networks</div>
                                  <div style={{ fontSize: '13px', color: '#777', display: 'flex', alignItems: 'center', gap: '4px' }}><CalendarDays size={14} /> 28/30 Attended</div>
                              </div>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                              <div style={{ fontSize: '10px', fontWeight: 800, color: '#5F8C43', textTransform: 'uppercase' }}>Current</div>
                              <div style={{ fontSize: '24px', fontWeight: 800, color: '#333' }}>93%</div>
                          </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span className="pill pill-green">Safe Skips <span style={{ color: '#333', marginLeft: '4px' }}>5 lectures</span></span>
                      </div>
                  </div>
              </div>
          </div>

          {/* Sidebar Modules */}
          <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Risk Warning Component */}
              <div style={{ backgroundColor: '#9D3D52', borderRadius: '24px', padding: '32px', color: 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <AlertTriangle size={24} />
                      <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Risk Warning</h3>
                  </div>
                  <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '24px', color: '#FAD2DB' }}>
                      Machine Learning attendance is exactly at the 75% threshold. Any further skips will trigger a formal warning.
                  </p>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '16px' }}>
                      <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800, marginBottom: '4px', color: '#FAD2DB' }}>Critical Status</div>
                      <div style={{ fontSize: '18px', fontWeight: 800 }}>ML (0 Skips Left)</div>
                  </div>
              </div>

              {/* Recovery Path */}
              <div style={{ backgroundColor: '#EAE6DB', borderRadius: '24px', padding: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                      <TrendingUp size={20} color="#5F8C43" />
                      <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#333' }}>Recovery Path</h3>
                  </div>
                  
                  <div style={{ borderLeft: '2px solid #5F8C43', paddingLeft: '16px', marginBottom: '24px' }}>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#333', marginBottom: '4px' }}>Target: 80% in ML</div>
                      <div style={{ fontSize: '13px', color: '#666', lineHeight: '1.4' }}>Attend the next <span style={{ color: '#5F8C43', fontWeight: 700 }}>3 labs</span> consecutively to reach your goal.</div>
                  </div>

                  <div style={{ borderLeft: '2px solid #5F8C43', paddingLeft: '16px', marginBottom: '32px' }}>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#333', marginBottom: '4px' }}>Target: 90% in OS</div>
                      <div style={{ fontSize: '13px', color: '#666', lineHeight: '1.4' }}>Attend <span style={{ color: '#5F8C43', fontWeight: 700 }}>4 more lectures</span> without interruption.</div>
                  </div>

                  <button style={{ width: '100%', padding: '14px', borderRadius: '100px', border: '1px solid #CCC7B1', backgroundColor: 'transparent', fontWeight: 700, color: '#333' }}>
                      Add to Calendar
                  </button>
              </div>

          </div>
      </div>
    </div>
  );
}
