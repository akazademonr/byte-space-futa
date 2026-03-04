/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, ShoppingCart, User, Menu, X, Heart, Share2, Rocket, Settings } from 'lucide-react';
import { Page } from './types';
import { NAV_ITEMS } from './constants';

// Pages
import Home from './pages/Home';
import Library from './pages/Library';
import Booking from './pages/Booking';
import Membership from './pages/Membership';
import Admin from './pages/Admin';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'library': return <Library />;
      case 'booking': return <Booking />;
      case 'membership': return <Membership />;
      case 'admin': return <Admin />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  if (currentPage === 'admin') {
    return (
      <div className="min-h-screen">
        <button 
          onClick={() => setCurrentPage('home')}
          className="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
        >
          <Rocket className="w-6 h-6" />
        </button>
        {renderPage()}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-nav border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <div className="bg-primary p-2 rounded-lg text-white">
              <Terminal className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-primary">Byte Space</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.filter(item => item.id !== 'admin').map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id as Page)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  currentPage === item.id ? 'text-primary font-bold' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-semibold text-primary px-4 py-2 hover:bg-primary/5 rounded-lg transition-all">
              Log In
            </button>
            <button 
              onClick={() => setCurrentPage('membership')}
              className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              Join Now
            </button>
            <button 
              className="md:hidden text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-primary/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id as Page);
                      setIsMenuOpen(false);
                    }}
                    className="text-left text-lg font-medium text-slate-600"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="pt-20 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary p-2 rounded-lg text-white">
                  <Terminal className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold tracking-tight text-primary">Byte Space</h2>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Providing the infrastructure for FUTA's next generation of builders and thinkers.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setCurrentPage('admin')}
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all"
                >
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">Quick Links</h3>
              <ul className="space-y-4">
                <li><button onClick={() => setCurrentPage('booking')} className="text-sm text-slate-600 hover:text-primary transition-colors">Workspace Booking</button></li>
                <li><button onClick={() => setCurrentPage('membership')} className="text-sm text-slate-600 hover:text-primary transition-colors">Membership Perks</button></li>
                <li><button onClick={() => setCurrentPage('library')} className="text-sm text-slate-600 hover:text-primary transition-colors">Library Catalog</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">Contact Us</h3>
              <ul className="space-y-4">
                <li className="text-sm text-slate-600">hello@bytespace.futa</li>
                <li className="text-sm text-slate-600">+234 800 BYTE HUB</li>
                <li className="text-sm text-slate-600">FUTA South Gate, Akure</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">Operating Hours</h3>
              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-slate-500">Mon - Sat</span>
                  <span className="text-sm font-bold">7AM - 10PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Sunday</span>
                  <span className="text-sm font-bold">Closed</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-slate-500">© 2024 Byte Space FUTA. Built for the future.</p>
            <div className="flex gap-8">
              <span className="text-xs text-slate-400 hover:text-slate-600 cursor-pointer">Privacy Policy</span>
              <span className="text-xs text-slate-400 hover:text-slate-600 cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
