import React from 'react';
import { Tab } from '../types';
import { Recycle, Globe, ShieldCheck, HelpCircle } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';

interface FooterProps {
  setActiveTab: (tab: Tab) => void;
  onInfoAlert: (title: string, content: string) => void;
}

export default function Footer({ setActiveTab, onInfoAlert }: FooterProps) {
  const { t } = useSettings();

  const handleLegalAlert = (title: string, text: string) => {
    onInfoAlert(title, text);
  };

  return (
    <footer className="bg-primary text-white w-full border-t border-primary-container transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side Brand Info */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Recycle className="h-6 w-6 text-primary-fixed" />
            <span className="font-display text-xl font-bold text-white">EcoTire Paraguay</span>
          </div>
          <p className="font-sans text-sm opacity-70">
            {t.footer.tagline}
          </p>
        </div>

        {/* Dynamic Nav link section */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-sans">
          <button
            onClick={() => handleLegalAlert(
              t.footer.privacyTitle,
              t.footer.privacyText
            )}
            className="opacity-75 hover:opacity-100 hover:underline transition-opacity cursor-pointer text-white"
          >
            {t.footer.privacyTitle}
          </button>
          
          <button
            onClick={() => handleLegalAlert(
              t.footer.termsTitle,
              t.footer.termsText
            )}
            className="opacity-75 hover:opacity-100 hover:underline transition-opacity cursor-pointer text-white"
          >
            {t.footer.termsTitle}
          </button>

          <button
            onClick={() => setActiveTab('commercial')}
            className="opacity-75 hover:opacity-100 hover:underline transition-opacity cursor-pointer text-white"
          >
            {t.footer.bulkSales}
          </button>

          <button
            onClick={() => handleLegalAlert(
              t.footer.portalTitle,
              t.footer.portalText
            )}
            className="opacity-75 hover:opacity-100 hover:underline transition-opacity cursor-pointer text-white"
          >
            {t.footer.portalTitle}
          </button>
        </div>

        {/* Aesthetic support/region icons */}
        <div className="flex gap-4">
          <button 
            onClick={() => handleLegalAlert(t.footer.regionalTitle, t.footer.regionalText)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors group cursor-pointer"
            title={t.footer.regionalTitle}
          >
            <Globe className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button 
            onClick={() => handleLegalAlert(t.footer.esgTitle, t.footer.esgText)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors group cursor-pointer"
            title={t.footer.esgTitle}
          >
            <ShieldCheck className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button 
            onClick={() => handleLegalAlert(t.footer.supportTitle, t.footer.supportText)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors group cursor-pointer"
            title={t.footer.supportTitle}
          >
            <HelpCircle className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
