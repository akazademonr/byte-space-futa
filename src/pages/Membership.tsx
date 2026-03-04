import React from 'react';
import { CheckCircle, Calendar, Coffee, Headphones } from 'lucide-react';

export default function Membership() {
  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Flexible Membership Plans</h1>
        <p className="text-slate-600 text-lg">Choose the perfect space to fuel your productivity. Whether you need a daily spot or a private office, we have a plan for you.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {/* Walk-in */}
        <div className="flex flex-col gap-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Walk-in</h3>
              <span className="text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-3 py-1 rounded-full">Flexible</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black">₦500</span>
              <span className="text-slate-500 text-sm font-medium">/ day</span>
            </div>
          </div>
          <button className="w-full py-3 px-4 rounded-xl bg-slate-100 text-slate-900 font-bold hover:bg-slate-200 transition-colors">
            Get Started
          </button>
          <div className="space-y-4">
            {["High-speed WiFi (100Mbps)", "Common area access", "Cafe discount (10%)"].map((f, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Basic (Popular) */}
        <div className="relative flex flex-col gap-6 rounded-xl border-2 border-primary bg-white p-8 shadow-xl">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">Most Popular</div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Basic</h3>
              <span className="text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full">Standard</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black">₦2,000</span>
              <span className="text-slate-500 text-sm font-medium">/ month</span>
            </div>
          </div>
          <button className="w-full py-3 px-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            Choose Basic
          </button>
          <div className="space-y-4">
            {["Dedicated ergonomic desk", "100 printing credits", "Private locker access", "All Walk-in features"].map((f, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Premium */}
        <div className="flex flex-col gap-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Premium</h3>
              <span className="text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-3 py-1 rounded-full">Elite</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black">₦15,000</span>
              <span className="text-slate-500 text-sm font-medium">/ month</span>
            </div>
          </div>
          <button className="w-full py-3 px-4 rounded-xl bg-slate-100 text-slate-900 font-bold hover:bg-slate-200 transition-colors">
            Go Premium
          </button>
          <div className="space-y-4">
            {["Private soundproof office", "10 Meeting room hours/mo", "24/7 biometric access", "Dedicated priority support"].map((f, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Signup Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-black mb-6">Ready to Join the Community?</h2>
          <p className="text-slate-600 mb-8">Join over 500+ professionals who call Byte Space their home. Get instant access to all amenities, events, and networking opportunities.</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold">Weekly Networking Events</p>
                <p className="text-sm text-slate-500">Connect with local innovators and entrepreneurs.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 p-10 rounded-xl shadow-2xl">
          <h3 className="text-xl font-bold mb-6">Start Your Membership</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase text-slate-500">First Name</label>
                <input className="rounded-lg border-slate-200 bg-background-light text-sm focus:ring-primary focus:border-primary" placeholder="John" type="text" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase text-slate-500">Last Name</label>
                <input className="rounded-lg border-slate-200 bg-background-light text-sm focus:ring-primary focus:border-primary" placeholder="Doe" type="text" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase text-slate-500">Email Address</label>
              <input className="rounded-lg border-slate-200 bg-background-light text-sm focus:ring-primary focus:border-primary w-full" placeholder="john@example.com" type="email" />
            </div>
            <button className="w-full bg-primary text-white font-bold py-3 rounded-xl mt-4 hover:bg-primary/90 transition-colors">
              Create My Account
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
