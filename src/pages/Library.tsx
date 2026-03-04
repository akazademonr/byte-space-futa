import React, { useState } from 'react';
import { Search, ShoppingCart, Grid, Code, Database, Cloud, Shield, Smartphone, Variable, BookOpen, ChevronDown } from 'lucide-react';
import { BOOKS } from '../constants';
import { motion } from 'motion/react';

export default function Library() {
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col lg:flex-row px-4 md:px-10 lg:px-40 py-8 gap-8">
      {/* Left Sidebar Categories */}
      <aside className="w-full lg:w-64 shrink-0">
        <div className="flex flex-col gap-6 sticky top-24">
          <div className="flex gap-3 items-center px-2">
            <div className="bg-primary/10 text-primary p-2 rounded-lg">
              <Grid className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-slate-900 text-base font-bold">Categories</h3>
              <p className="text-slate-500 text-xs font-normal">Browse by domain</p>
            </div>
          </div>
          <nav className="flex flex-col gap-1">
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-primary text-white font-medium" href="#">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm">All Collections</span>
            </a>
            {[
              { icon: <Code />, label: "Software Engineering" },
              { icon: <Database />, label: "Data Science & AI" },
              { icon: <Cloud />, label: "Cloud & DevOps" },
              { icon: <Shield />, label: "Cybersecurity" },
              { icon: <Smartphone />, label: "Mobile Development" },
              { icon: <Variable />, label: "Discrete Math" }
            ].map((cat, i) => (
              <a key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors" href="#">
                <span className="text-slate-400">{cat.icon}</span>
                <span className="text-sm font-medium">{cat.label}</span>
              </a>
            ))}
          </nav>
          <div className="mt-4 p-4 rounded-2xl bg-primary/5 border border-primary/10">
            <h4 className="text-primary text-sm font-bold mb-2">Student Discount</h4>
            <p className="text-slate-600 text-xs leading-relaxed mb-3">Get 25% off all textbooks with a valid .edu email address.</p>
            <button className="w-full py-2 bg-primary text-white text-xs font-bold rounded-lg">Verify Status</button>
          </div>
        </div>
      </aside>

      {/* Content Area */}
      <div className="flex-1 flex flex-col gap-8">
        {/* Featured Section */}
        <section className="relative overflow-hidden rounded-2xl bg-slate-900 min-h-[320px] flex items-center p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
          <div 
            className="absolute right-0 top-0 h-full w-2/3 bg-cover bg-center" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800")' }}
          ></div>
          <div className="relative z-20 max-w-lg flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-primary font-bold text-sm tracking-widest uppercase">Special Offer</span>
              <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
                Master the Future of Tech
              </h1>
              <p className="text-slate-300 text-base md:text-lg">
                Up to 40% off on the latest AI, LLM, and Cloud Computing textbooks. Level up your stack today.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold transition-transform active:scale-95">
                Shop Collection
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-bold transition-colors">
                View Deals
              </button>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900">Featured Releases</h2>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-slate-100 px-4 text-slate-900 text-sm font-medium border border-transparent hover:border-primary/30">
              <span>All Formats</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {['Hardcover', 'E-Book', 'Bundle'].map(format => (
              <button key={format} className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-slate-100 px-4 text-slate-900 text-sm font-medium border border-transparent hover:border-primary/30">
                <span>{format}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {BOOKS.map((book) => (
            <motion.div 
              key={book.id}
              whileHover={{ y: -5 }}
              className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {book.tag && (
                  <div className="absolute top-3 right-3">
                    <span className={`text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${book.tag === 'New' ? 'bg-primary' : 'bg-green-600'}`}>
                      {book.tag}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4 flex flex-col flex-1 gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider">{book.category}</p>
                  <h3 className="text-base font-bold text-slate-900 leading-tight">{book.title}</h3>
                  <p className="text-sm text-slate-500">By {book.author}</p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-black text-slate-900">${book.price}</span>
                    {book.oldPrice && <span className="text-xs text-slate-400 line-through">${book.oldPrice}</span>}
                  </div>
                  <button className="bg-primary text-white p-2 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
}
