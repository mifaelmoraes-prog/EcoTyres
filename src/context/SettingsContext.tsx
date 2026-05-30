import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationDict, translations } from '../translations';

export type Theme = 'light' | 'dark';

interface SettingsContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: TranslationDict;
}

const SettingsContext = createContext<SettingsContextProps | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('ecotire_lang');
    return (saved as Language) || 'pt';
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('ecotire_theme');
    return (saved as Theme) || 'light';
  });

  const t = translations[language] || translations.pt;

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('ecotire_lang', lang);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setThemeState(nextTheme);
    localStorage.setItem('ecotire_theme', nextTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <SettingsContext.Provider value={{ language, setLanguage, theme, toggleTheme, t }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
