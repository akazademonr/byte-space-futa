import React, { useState } from 'react';
import { Star, MapPin, Wifi, Coffee, Printer, Zap, ChevronLeft, ChevronRight, Bolt, Laptop, BookOpen, Monitor, Users } from 'lucide-react';
import { WORKSPACE_TYPES } from '../constants';
import { motion } from 'motion/react';

export default function Booking() {
  const [selectedType, setSelectedType] = useState('open');

  return (
    <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Image Gallery */}
          <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[400px]">
            <div className="col-span-3 row-span-2 rounded-xl overflow-hidden bg-slate-200">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800" alt="Main office" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-xl overflow-hidden bg-slate-200">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=400" alt="Workstation" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-xl overflow-hidden bg-slate-200">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=400" alt="Quiet room" referrerPolicy="no-referrer" />
            </div>
          </div>

          {/* Info Header */}
          <div className="border-b border-primary/10 pb-6">
            <h1 className="text-3xl font-bold mb-2">Workspace in FUTA South Gate, Akure</h1>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /> 4.9 · 128 reviews</span>
              <span>·</span>
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> South Gate</span>
            </div>
          </div>

          {/* Workspace Types */}
          <section>
            <h3 className="text-lg font-bold mb-4">Choose your workspace type</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {WORKSPACE_TYPES.map((type) => (
                <button 
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex flex-col items-start p-4 rounded-xl border-2 transition-all ${
                    selectedType === type.id 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-transparent bg-white hover:border-primary/50'
                  }`}
                >
                  <span className="mb-2">
                    {type.id === 'open' && <Laptop />}
                    {type.id === 'quiet' && <BookOpen />}
                    {type.id === 'station' && <Monitor />}
                    {type.id === 'meeting' && <Users />}
                  </span>
                  <span className="text-sm font-semibold">{type.name}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Amenities */}
          <section className="border-t border-primary/10 pt-8">
            <h3 className="text-lg font-bold mb-4">What this space offers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: <Wifi className="w-5 h-5" />, label: "High-speed Fiber Internet" },
                { icon: <Coffee className="w-5 h-5" />, label: "Unlimited Coffee & Tea" },
                { icon: <Printer className="w-5 h-5" />, label: "Printing & Scanning" },
                { icon: <Zap className="w-5 h-5" />, label: "24/7 Power Backup" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-slate-500">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Booking Widget */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-xl border border-primary/10 bg-white p-6 shadow-xl shadow-primary/5">
            <div className="flex justify-between items-end mb-6">
              <div>
                <span className="text-2xl font-bold">₦4,500</span>
                <span className="text-slate-500">/ day</span>
              </div>
              <div className="text-xs font-semibold text-primary underline cursor-pointer">Pricing details</div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg border border-primary/20 overflow-hidden">
                <div className="grid grid-cols-2 divide-x divide-primary/20 border-b border-primary/20">
                  <div className="p-3">
                    <label className="block text-[10px] font-bold uppercase text-slate-500">CHECK-IN</label>
                    <input className="w-full bg-transparent border-none p-0 text-sm focus:ring-0" type="text" defaultValue="Oct 24, 2023" />
                  </div>
                  <div className="p-3">
                    <label className="block text-[10px] font-bold uppercase text-slate-500">CHECK-OUT</label>
                    <input className="w-full bg-transparent border-none p-0 text-sm focus:ring-0" type="text" defaultValue="Oct 24, 2023" />
                  </div>
                </div>
                <div className="p-3">
                  <label className="block text-[10px] font-bold uppercase text-slate-500">TIME SLOT</label>
                  <select className="w-full bg-transparent border-none p-0 text-sm focus:ring-0">
                    <option>09:00 AM - 05:00 PM</option>
                    <option>08:00 AM - 12:00 PM</option>
                    <option>01:00 PM - 05:00 PM</option>
                    <option>Full Day Pass</option>
                  </select>
                </div>
              </div>
              
              <div className="bg-background-light p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold">October 2023</span>
                  <div className="flex gap-2">
                    <ChevronLeft className="w-4 h-4 cursor-pointer" />
                    <ChevronRight className="w-4 h-4 cursor-pointer" />
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-medium text-slate-400 mb-2">
                  {['S','M','T','W','T','F','S'].map(d => <div key={d}>{d}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {[21, 22].map(d => <div key={d} className="p-1 text-xs text-slate-300">{d}</div>)}
                  <div className="p-1 text-xs font-bold bg-primary text-white rounded-full">23</div>
                  {[24, 25, 26, 27].map(d => <div key={d} className="p-1 text-xs hover:bg-primary/20 rounded-full cursor-pointer">{d}</div>)}
                </div>
              </div>

              <div className="pt-4 space-y-2 border-t border-primary/10">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 underline">₦4,500 x 1 day</span>
                  <span>₦4,500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 underline">Service fee</span>
                  <span>₦500</span>
                </div>
                <div className="flex justify-between font-bold pt-4 text-lg">
                  <span>Total</span>
                  <span>₦5,000</span>
                </div>
              </div>
              <button className="w-full bg-primary text-white font-bold py-3 rounded-lg shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                <span>Book Now</span>
                <Bolt className="w-4 h-4" />
              </button>
              <p className="text-center text-xs text-slate-400">You won't be charged yet</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
