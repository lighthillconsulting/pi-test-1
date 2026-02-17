import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 selection:bg-indigo-500/30">
      <Head>
        <title>AπI Managed | The Executive Partner</title>
      </Head>

      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px]" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white">AπI</span>
              <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">BETA</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
              <a href="#engine" className="hover:text-white transition-colors">Outcomes Engine</a>
              <a href="#partner" className="hover:text-white transition-colors">Executive Partner</a>
              <a href="#security" className="hover:text-white transition-colors">Security</a>
            </div>
            <button className="text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-lg transition-all">
              Client Login
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-40 pb-32 px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium tracking-wide animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              NOW DEPLOYING PRIVATE NODES
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Stop Managing Admin. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">Start Managing Assets.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              The private AI infrastructure for creative entrepreneurs. We don't just chat.
              We execute marketing loops, audit royalties, and negotiate deals while you sleep.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                Deploy Your Twin
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-white font-medium rounded-xl hover:bg-white/5 hover:border-white/20 transition-all">
                View Architecture
              </button>
            </div>
          </div>
        </section>

        {/* Feature Grid (Bento Style) */}
        <section id="engine" className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">The Closed Loop Engine</h2>
              <p className="text-gray-400 max-w-2xl">Most agencies optimize for clicks. We optimize for profit. Your private node connects ad spend directly to real business outcomes.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Large Card: The Monitor */}
              <div className="md:col-span-2 glass-card p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
                  <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Autonomous Arbitrage</h3>
                <p className="text-gray-400 mb-8 max-w-md">Pi monitors your Spotify streams, Shopify sales, or HubSpot deals 24/7. If ROAS drops, it kills the ad. If profit spikes, it scales the budget.</p>
                
                {/* Simulated UI */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-4 font-mono text-xs text-gray-300 shadow-xl">
                  <div className="flex justify-between items-center mb-3 border-b border-white/10 pb-2">
                    <span className="text-indigo-400">● LIVE MONITORING</span>
                    <span className="text-gray-500">11:42:05 AM</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Campaign: <span className="text-white">"Summer Merch Drop"</span></span>
                      <span className="text-green-400">ACTIVE</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 py-2">
                      <div className="bg-white/5 p-2 rounded">
                        <div className="text-[10px] text-gray-500">SPEND</div>
                        <div className="text-white">$142.50</div>
                      </div>
                      <div className="bg-white/5 p-2 rounded">
                        <div className="text-[10px] text-gray-500">PROFIT</div>
                        <div className="text-green-400">+$480.00</div>
                      </div>
                      <div className="bg-white/5 p-2 rounded">
                        <div className="text-[10px] text-gray-500">ROAS</div>
                        <div className="text-indigo-400">3.36x</div>
                      </div>
                    </div>
                    <div className="text-gray-500 pt-1">
                      &gt; Threshold met (3.0x). Scaling budget by 15%... <span className="animate-pulse">_</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Card: Security */}
              <div className="glass-card p-8 rounded-2xl flex flex-col justify-between group hover:border-indigo-500/30 transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Two-Key Approval</h3>
                  <p className="text-sm text-gray-400">
                    High-stakes actions (spending money, sending contracts) require your explicit <span className="text-white font-mono bg-white/10 px-1 py-0.5 rounded">APPROVE</span> command in Signal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Executive Partner Section */}
        <section id="partner" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Your "Chief of Staff" <br/>in the Cloud.</h2>
                <div className="space-y-6">
                  {[
                    { title: "The Idea Engine", desc: "Drop a 1-sentence idea at 2 AM. Wake up to a full Market Scan and Spec Sheet." },
                    { title: "The Financial Shield", desc: "Automated royalty auditing and invoice chasing. We find the money you forgot." },
                    { title: "The Network", desc: "Agent-to-Agent negotiation. We find the talent, vet the rates, and book the deal." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-xs mt-1">{i + 1}</div>
                      <div>
                        <h4 className="text-white font-medium">{item.title}</h4>
                        <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                {/* Abstract Visual - The "Twin" */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full" />
                <div className="relative glass-card p-1 rounded-2xl animate-float">
                  <div className="bg-black/80 rounded-xl p-6 border border-white/5">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600" />
                      <div>
                        <div className="text-sm font-medium text-white">AπI Executive</div>
                        <div className="text-xs text-green-400">Online • Signal Encrypted</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-3 text-sm text-gray-300">
                        <span className="text-indigo-300 text-xs uppercase tracking-wide block mb-1">Incoming Request</span>
                        "Find me a mix engineer for the new track. Budget $2k."
                      </div>
                      <div className="flex justify-end">
                         <div className="bg-indigo-600/20 border border-indigo-500/30 rounded-lg p-3 text-sm text-indigo-100 max-w-[90%]">
                          <span className="text-indigo-300 text-xs uppercase tracking-wide block mb-1">Decision Brief • 08:00 AM</span>
                          I've found 3 candidates available next week.
                          <ul className="mt-2 space-y-1 text-xs">
                            <li>1. <strong>Mark S.</strong> - $1.8k (Grammy nominated)</li>
                            <li>2. <strong>Sarah J.</strong> - $1.5k (Indie specialist)</li>
                          </ul>
                          <div className="mt-3 pt-2 border-t border-indigo-500/20 text-xs font-mono text-center opacity-70">
                            Reply "1" or "2" to book.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/5 bg-black">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>© 2026 Lighthill Consulting / AπI Managed.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Manifesto</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
