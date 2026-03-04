import React from 'react';
import { motion } from 'motion/react';
import { Sun, Leaf, Brain, Users, Calendar, BookOpen, Store, Monitor, Wifi, Coffee, CheckCircle } from 'lucide-react';

export default function Home({ onNavigate }: { onNavigate: (page: any) => void }) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-24 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/10 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Leaf className="w-3 h-3" /> Eco-Friendly Hub
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
              Study. Build.<br /><span className="text-primary">Innovate.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              Where FUTA builds the future. Join a sustainable community of innovators in a space designed for extreme productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('membership')}
                className="bg-primary text-white text-lg font-bold px-8 py-4 rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20"
              >
                Become a Member
              </button>
              <button 
                onClick={() => onNavigate('booking')}
                className="bg-white border-2 border-slate-100 text-slate-900 text-lg font-bold px-8 py-4 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Book a Workspace
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-square shadow-2xl transform rotate-2">
              <img 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                alt="Modern coworking space"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100">
              <div className="size-12 rounded-full bg-accent-green/20 flex items-center justify-center text-emerald-600">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Sustainability</p>
                <p className="text-lg font-bold">100% Solar Powered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-primary/5 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nature Meets Technology</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Byte Space is FUTA's premier innovation hub. We've blended natural architecture with cutting-edge tech to provide an eco-friendly environment where students and creators thrive without limits.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Brain className="w-6 h-6" />, title: "Focus Mindset", desc: "Quiet zones designed to minimize distractions and maximize deep work output." },
              { icon: <Users className="w-6 h-6" />, title: "Collaborative Pulse", desc: "Breakout rooms and open desks where ideas are exchanged and startups are born." },
              { icon: <Leaf className="w-6 h-6" />, title: "Eco-Commitment", desc: "From recycled furniture to solar energy, every detail is engineered to reduce our carbon footprint." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Premium Amenities</h2>
            <p className="text-slate-600">Everything you need to stay productive, inspired, and connected to the FUTA tech ecosystem.</p>
          </div>
          <div className="p-4 bg-slate-100 rounded-xl flex items-center gap-3">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold">Open 7AM - 10PM</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=400", icon: <BookOpen />, title: "Curated Library", desc: "Access a vast collection of academic textbooks and research journals." },
            { img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=400", icon: <Store />, title: "Full Bookshop", desc: "Get essential tech peripherals and stationery right on site." },
            { img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=400", icon: <Monitor />, title: "Dedicated Workspace", desc: "Quiet and collaborative zones tailored for deep concentration." }
          ].map((feature, i) => (
            <div key={i} className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={feature.img} alt={feature.title} referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary">{feature.icon}</span>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-slate-500 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
          <div className="bg-primary p-8 rounded-3xl text-white flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Solar Technology</h3>
              <p className="text-white/80 text-sm leading-relaxed">Never worry about power outages. Our facility is 100% powered by a state-of-the-art solar grid.</p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-xs font-bold uppercase tracking-widest text-white/50">Sustainability Score: 100%</span>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">High-Speed Wi-Fi</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Enterprise-grade internet connectivity with seamless coverage in every corner.</p>
            </div>
            <div className="mt-8">
              <button className="text-primary font-bold text-sm flex items-center gap-2 group">
                Test connection speed <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
          <div className="bg-accent-green/10 p-8 rounded-3xl border border-accent-green/20 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-3">Eco-Café</h3>
              <p className="text-emerald-700/80 text-sm leading-relaxed">Fresh, organic coffee and healthy snacks to fuel your brain.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
