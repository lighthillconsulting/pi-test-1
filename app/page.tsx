import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white">
      <Head>
        <title>AπI Managed | The Executive Partner</title>
        <meta name="description" content="Turn Idea Debt into Assets. The private AI partner for creative entrepreneurs." />
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AπI MANAGED
          </div>
          <div className="hidden md:flex space-x-8 text-sm text-gray-400">
            <a href="#concept" className="hover:text-white transition-colors">The Concept</a>
            <a href="#marketing" className="hover:text-white transition-colors">Closed Loop Marketing</a>
            <a href="#executive" className="hover:text-white transition-colors">Executive Partner</a>
            <a href="#security" className="hover:text-white transition-colors">Security</a>
          </div>
          <button className="px-5 py-2 text-xs font-semibold uppercase tracking-widest border border-white/20 hover:bg-white hover:text-black transition-all rounded-full">
            Apply for Access
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-widest text-purple-400 border border-purple-500/30 rounded-full bg-purple-500/10">
            PRIVATE BETA // EXECUTIVE TIER
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8">
            Turn Idea Debt <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Into Assets.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            The private AI infrastructure for creative entrepreneurs. 
            We don't just "chat." We execute. 
            From <strong>Closed Loop Marketing</strong> to <strong>Royalty Audits</strong>.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
              Deploy Your Twin
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-all">
              View Architecture
            </button>
          </div>
        </div>
      </section>

      {/* The Two Pillars */}
      <section id="marketing" className="py-24 px-6 border-b border-white/5 bg-neutral-900/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pillar 1: <br/>The "Closed Loop" Marketing Engine</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Stop optimizing for clicks. Start optimizing for <strong>Profit</strong>.
              AπI connects your Ad Spend directly to your Business Outcomes.
            </p>
            <ul className="space-y-4">
              {[
                { title: "Music Growth", desc: "Ads pause automatically if Cost Per Stream > $0.20." },
                { title: "Medical Leads", desc: "Bids adjust based on patient show-up rates, not just form fills." },
                { title: "E-Commerce", desc: "Campaigns scale autonomously when ROAS > 3.0x." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start p-4 border border-white/10 rounded-lg hover:border-purple-500/50 transition-colors bg-black/40">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mt-1">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[500px] border border-white/10 rounded-xl bg-black/50 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
            
            {/* Mock UI: The Terminal Interface */}
            <div className="absolute inset-4 bg-black border border-white/10 rounded-lg p-6 font-mono text-xs md:text-sm text-gray-300 shadow-2xl overflow-hidden">
              <div className="flex gap-2 mb-4 border-b border-white/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="space-y-3 opacity-90">
                <p><span className="text-purple-400">pi@node:~ $</span> ./marketing-watchdog.sh</p>
                <p className="text-blue-400">[INFO] Scanning Meta Ads Manager...</p>
                <p className="text-gray-500">&gt;&gt;&gt; Campaign: "Spotify Growth - UK"</p>
                <p className="text-gray-500">&gt;&gt;&gt; Spend: $45.20 | Streams: 188 | CPS: $0.24</p>
                <p className="text-red-400">[ALERT] CPS exceeds threshold ($0.20).</p>
                <p className="text-yellow-300">[ACTION] Pausing Ad Set ID: 882910...</p>
                <p className="text-green-400">[SUCCESS] Ad Paused. Budget reallocated to "US - High Intent".</p>
                <p className="animate-pulse">_</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="executive" className="py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative h-[500px] border border-white/10 rounded-xl bg-black/50 overflow-hidden">
             {/* Mock UI: The Executive Brief */}
             <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full max-w-md bg-white text-black p-8 rounded-lg shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-wider border-b-2 border-black pb-2">Decision Brief</h3>
                  <div className="space-y-4 font-serif">
                    <div>
                      <h4 className="font-bold text-gray-500 text-xs uppercase">Subject</h4>
                      <p>Deal Memo: Sound Engineer Contract</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-500 text-xs uppercase">Analysis</h4>
                      <p className="text-sm">Contract includes a 5% royalty clause on master rights. Market standard is 3%. Flagged for negotiation.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-500 text-xs uppercase">Recommendation</h4>
                      <p className="text-sm font-bold">Counter at 3% or offer 5% with a $2k cap.</p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
                      <span className="text-xs font-mono">STATUS: AWAITING APPROVAL</span>
                      <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">π</div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pillar 2: <br/>The Executive Partner</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              You provide the 1% (Idea) and the 19% (Final Decision). 
              AπI handles the middle 80%—the research, the drafting, the logistics.
            </p>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                <h3 className="font-bold text-lg mb-2 text-purple-300">The Idea Engine</h3>
                <p className="text-sm text-gray-400">Drop a 1-sentence idea at 2 AM. Wake up to a full Market Scan, Competitor Analysis, and Implementation Plan.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                <h3 className="font-bold text-lg mb-2 text-blue-300">The Financial Shield</h3>
                <p className="text-sm text-gray-400">Automated Royalty Audits. Invoice Chasing. "The Chaser" never sleeps until you get paid.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                <h3 className="font-bold text-lg mb-2 text-green-300">The Network</h3>
                <p className="text-sm text-gray-400">Agent-to-Agent negotiation. Need a designer? AπI finds, vets, and negotiates with their agents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-24 px-6 bg-neutral-900/30 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Infrastructure, Not Software.</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-black p-6 border border-white/10 rounded-xl">
              <div className="text-2xl mb-4">🔒</div>
              <h3 className="font-bold mb-2">Single-Tenant Node</h3>
              <p className="text-sm text-gray-400">You don't share a database. You get your own private instance on isolated hardware.</p>
            </div>
            <div className="bg-black p-6 border border-white/10 rounded-xl">
              <div className="text-2xl mb-4">🔑</div>
              <h3 className="font-bold mb-2">Two-Key Approval</h3>
              <p className="text-sm text-gray-400">High-stakes actions (spending money, sending contracts) require your explicit <code className="bg-white/20 px-1 rounded">APPROVE</code> command.</p>
            </div>
            <div className="bg-black p-6 border border-white/10 rounded-xl">
              <div className="text-2xl mb-4">👻</div>
              <h3 className="font-bold mb-2">Signal Encrypted</h3>
              <p className="text-sm text-gray-400">State-level security. No logs. No "cloud backups" that can be subpoenaed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2026 AπI Managed / Lighthill Consulting.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Manifesto</a>
            <a href="#" className="hover:text-white">Login</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
