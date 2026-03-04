import React from 'react';
import { LayoutDashboard, Users, Calendar, Package, Share2, Search, Bell, Settings, TrendingUp, CreditCard, CalendarCheck, Wifi, Shield, Terminal } from 'lucide-react';

export default function Admin() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light">
      {/* Sidebar Navigation */}
      <aside className="w-64 flex-shrink-0 border-r border-primary/10 bg-white overflow-y-auto">
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-10">
            <div className="size-10 rounded-lg bg-primary flex items-center justify-center text-white">
              <Terminal className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-900 text-lg font-bold leading-none">Byte Space</h1>
              <p className="text-slate-500 text-xs font-medium">Admin Console</p>
            </div>
          </div>
          <nav className="flex-1 space-y-2">
            {[
              { icon: <LayoutDashboard />, label: "Dashboard", active: true },
              { icon: <Users />, label: "Members" },
              { icon: <Calendar />, label: "Bookings" },
              { icon: <Package />, label: "Inventory" },
              { icon: <Share2 />, label: "Network" }
            ].map((item, i) => (
              <a 
                key={i}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                  item.active ? 'bg-primary text-white' : 'text-slate-600 hover:bg-primary/10'
                }`} 
                href="#"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-6 border-t border-primary/10">
            <div className="flex items-center gap-3 px-2">
              <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" alt="Admin" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Alex Rivera</span>
                <span className="text-xs text-slate-500">System Admin</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md border-b border-primary/10">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input className="w-full bg-slate-100 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50" placeholder="Search data, members, or tasks..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-primary/10 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-primary/10 transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </header>

        <div className="p-8 space-y-8">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Overview Dashboard</h2>
            <p className="text-slate-500">Performance metrics for Byte Space operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users className="text-blue-600" />, label: "Total Members", val: "1,284", change: "+12%", bg: "bg-blue-100" },
              { icon: <CreditCard className="text-emerald-600" />, label: "Monthly Revenue", val: "$42,500", change: "+8.4%", bg: "bg-emerald-100" },
              { icon: <CalendarCheck className="text-amber-600" />, label: "Active Bookings", val: "482", change: "Busy", bg: "bg-amber-100" },
              { icon: <Wifi className="text-primary" />, label: "Network Uptime", val: "99.9%", change: "Online", bg: "bg-primary/10" }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-primary/10 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className={`p-2 ${stat.bg} rounded-lg`}>{stat.icon}</span>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.includes('+') ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-slate-900">{stat.val}</h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-primary/10 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className="text-lg font-bold">Revenue Trends</h4>
                  <p className="text-sm text-slate-500">Earnings comparison for the current month</p>
                </div>
              </div>
              <div className="h-64 w-full bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">
                [ Chart Visualization ]
              </div>
            </div>
            <div className="bg-primary p-6 rounded-xl shadow-lg text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6" />
                  <h4 className="text-base font-bold">Network Ops</h4>
                </div>
                <p className="text-xs text-blue-100/70 mb-4">All systems performing optimally.</p>
              </div>
              <button className="w-full py-3 bg-white/20 rounded-lg font-bold hover:bg-white/30 transition-colors">
                View Security Logs
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
