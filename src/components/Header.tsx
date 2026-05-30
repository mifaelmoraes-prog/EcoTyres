import React, { useState } from 'react';
import { Tab } from '../types';
import { Recycle, Menu, X, Landmark, GraduationCap, Sun, Moon, Globe } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  onContactClick: () => void;
}

export default function Header({ activeTab, setActiveTab, onContactClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage, theme, toggleTheme } = useSettings();

  const navItems: { label: string; id: Tab }[] = [
    { label: t.header.home, id: 'home' },
    { label: t.header.materials, id: 'materials' },
    { label: t.header.commercial, id: 'commercial' },
    { label: t.header.sustainability, id: 'sustainability' },
  ];

  return (
    <header className="bg-white dark:bg-surface-container-lowest border-b border-surface-container-high dark:border-surface-container-highest w-full sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-16 py-4 max-w-7xl mx-auto gap-4">
        {/* Logo and Brand */}
        <div 
          className="flex items-center gap-2 cursor-pointer select-none group shrink-0"
          onClick={() => setActiveTab('home')}
        >
          <Recycle className="h-8 w-8 text-primary transition-transform duration-500 group-hover:rotate-180" />
          <span className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-primary">
            EcoTire Paraguay
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`font-mono text-xs lg:text-sm uppercase tracking-wider py-1 relative transition-colors duration-300 cursor-pointer ${
                activeTab === item.id
                  ? 'text-primary font-semibold'
                  : 'text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-primary-container'
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-[-11px] left-0 right-0 h-[2px] bg-primary rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </nav>

        {/* Language selector, Theme Toggle, Action Button & Mobile Hamburguer */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          
          {/* Theme Selector */}
          <button
            onClick={toggleTheme}
            id="theme-toggle"
            className="p-2 border border-surface-container-high dark:border-surface-container-highest rounded-lg hover:bg-surface-container dark:hover:bg-surface-container-high text-primary bg-surface-container-lowest dark:bg-surface-container-low transition-colors cursor-pointer"
            title="Toggle theme (Light/Dark)"
          >
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>

          {/* Language Selector Selector Button Group */}
          <div className="flex items-center border border-surface-container-high dark:border-surface-container-highest rounded-lg overflow-hidden bg-surface-container-low dark:bg-surface-container-high select-none">
            {(['pt', 'en', 'es'] as const).map((lang) => (
              <button
                key={lang}
                id={`lang-select-${lang}`}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-1.5 text-[9px] sm:text-[10px] font-mono font-bold uppercase transition-colors cursor-pointer ${
                  language === lang
                    ? 'bg-primary text-white dark:bg-primary-container'
                    : 'text-secondary hover:text-primary dark:text-gray-400 dark:hover:text-primary'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <button
            onClick={onContactClick}
            id="contact-sales-header-btn"
            className="hidden sm:inline-flex items-center justify-center bg-primary dark:bg-primary-fixed text-white dark:text-white dark:hover:bg-primary hover:bg-primary-container px-4 py-2 rounded-lg text-xs lg:text-sm font-semibold tracking-wide shadow-sm hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
          >
            {t.header.contactSales}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-drawer-toggle"
            className="p-2 text-primary hover:bg-surface-container-low dark:hover:bg-surface-container-high rounded-lg md:hidden transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-surface-container-high dark:border-surface-container-highest bg-white dark:bg-surface-container-lowest fade-in px-4 py-4 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-left text-sm font-mono tracking-wide cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-primary/5 text-primary font-bold'
                    : 'text-secondary dark:text-gray-400 hover:bg-surface-container-low dark:hover:bg-surface-container-high'
                }`}
              >
                <span>{item.label}</span>
                {activeTab === item.id && <span className="h-2 w-2 rounded-full bg-primary" />}
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onContactClick();
            }}
            id="mobile-drawer-contact-btn"
            className="w-full bg-primary text-white hover:bg-primary-container py-3 rounded-lg text-sm font-semibold tracking-wide shadow-sm text-center cursor-pointer block"
          >
            {t.header.contactSales}
          </button>
        </div>
      )}
    </header>
  );
}
