import React, { useState } from 'react';
import { Leaf, Zap, Droplets, Trash2, Milestone } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';

export default function EsgEstimator() {
  const { t, currentLanguage } = useSettings();
  const [tonnes, setTonnes] = useState(150);
  const [materialType, setMaterialType] = useState('granulado');

  // Multipliers based on tyre recycling formulas
  const co2Avoided = (tonnes * 1.35).toFixed(1);
  const treesSaved = Math.round(tonnes * 54.5);
  const waterPreserved = Math.round(tonnes * 7600).toLocaleString(
    currentLanguage === 'pt' ? 'pt-BR' : currentLanguage === 'es' ? 'es-PY' : 'en-US'
  );
  
  const getSubText = () => {
    switch (materialType) {
      case 'granulado':
        return t.esgCalc.subtextGranulado.replace('{tons}', (tonnes * 0.8).toFixed(1));
      case 'po':
        return t.esgCalc.subtextPo.replace('{tons}', (tonnes * 0.08).toFixed(2));
      case 'chips':
        return t.esgCalc.subtextChips.replace('{tons}', (tonnes * 0.85).toFixed(1));
      case 'aco':
        return t.esgCalc.subtextAco.replace('{tons}', (tonnes * 0.15).toFixed(1));
      default:
        return '';
    }
  };

  return (
    <div className="bg-white dark:bg-surface-container-lowest border border-surface-container-highest dark:border-surface-container-high rounded-2xl p-6 lg:p-8 shadow-sm transition-colors text-left text-primary dark:text-on-surface">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 text-left">
        <div className="text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-mint/45 text-primary text-xs font-mono font-bold rounded-full mb-2">
            <Leaf className="h-3.5 w-3.5" /> {t.esgCalc.calcTag.toUpperCase()}
          </span>
          <h3 className="font-display text-xl lg:text-2xl font-bold text-primary dark:text-primary-container text-left">
            {t.esgCalc.title}
          </h3>
          <p className="text-secondary dark:text-gray-400 text-sm text-left">
            {t.esgCalc.sub}
          </p>
        </div>

        {/* Material Selection Pills */}
        <div className="flex flex-wrap gap-2 text-left justify-start">
          {['granulado', 'po', 'chips', 'aco'].map((type) => (
            <button
              key={type}
              onClick={() => setMaterialType(type)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors uppercase cursor-pointer ${
                materialType === type
                  ? 'bg-primary text-white dark:bg-primary-container dark:text-primary'
                  : 'bg-surface-container dark:bg-surface-container-high hover:bg-surface-container-high dark:hover:bg-surface-container text-primary dark:text-gray-300'
              }`}
            >
              {type === 'aco' ? (currentLanguage === 'en' ? 'STEEL SCRAP' : currentLanguage === 'es' ? 'ACERO SCRAP' : 'AÇO SCRAP') : type}
            </button>
          ))}
        </div>
      </div>

      {/* Slider Control */}
      <div className="bg-surface-container-low dark:bg-surface-container border border-surface-container-high dark:border-surface-container-highest rounded-xl p-5 mb-6 text-left transition-colors">
        <div className="flex justify-between items-center mb-3 text-left">
          <span className="text-sm font-semibold text-primary dark:text-gray-300 uppercase font-mono text-left">{t.esgCalc.volumeLabel}</span>
          <span className="text-2xl font-display font-extrabold text-primary dark:text-primary-container">
            {tonnes} <span className="text-sm font-mono font-medium text-secondary dark:text-gray-400">{t.esgCalc.volumeUnit}</span>
          </span>
        </div>
        
        <input
          type="range"
          min="5"
          max="1000"
          value={tonnes}
          onChange={(e) => setTonnes(Number(e.target.value))}
          className="w-full accent-primary h-2 bg-surface-container rounded-lg cursor-pointer"
        />
        
        <div className="flex justify-between text-[11px] text-secondary dark:text-gray-400 font-mono mt-1">
          <span>{t.esgCalc.fiveTons}</span>
          <span>{t.esgCalc.twoFiftyTons}</span>
          <span>{t.esgCalc.fiveHundredTons}</span>
          <span>{t.esgCalc.sevenFiftyTons}</span>
          <span>{t.esgCalc.oneThousandTons}</span>
        </div>
      </div>

      {/* Results Bento Sub-grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
        {/* Metric 1 */}
        <div className="p-4 bg-primary/5 dark:bg-primary-container/10 hover:bg-primary/10 border border-primary/10 rounded-xl transition-all duration-300 text-left">
          <div className="flex items-center gap-2 text-primary dark:text-primary-container mb-2 text-left">
            <Leaf className="h-5 w-5 text-on-primary-container" />
            <span className="text-xs font-mono font-semibold uppercase text-left">{t.esgCalc.co2Title}</span>
          </div>
          <div className="text-2xl font-display font-extrabold text-primary dark:text-white text-left">
            {co2Avoided} t
          </div>
          <p className="text-xs text-secondary dark:text-gray-400 mt-1 text-left">
            {t.esgCalc.co2Desc}
          </p>
        </div>

        {/* Metric 2 */}
        <div className="p-4 bg-primary/5 dark:bg-primary-container/10 hover:bg-primary/10 border border-primary/10 rounded-xl transition-all duration-300 text-left">
          <div className="flex items-center gap-2 text-primary dark:text-primary-container mb-2 text-left">
            <Milestone className="h-5 w-5 text-on-primary-container" />
            <span className="text-xs font-mono font-semibold uppercase text-left">{t.esgCalc.treesTitle}</span>
          </div>
          <div className="text-2xl font-display font-extrabold text-primary dark:text-white text-left">
            {treesSaved}
          </div>
          <p className="text-xs text-secondary dark:text-gray-400 mt-1 text-left">
            {t.esgCalc.treesDesc}
          </p>
        </div>

        {/* Metric 3 */}
        <div className="p-4 bg-primary/5 dark:bg-primary-container/10 hover:bg-primary/10 border border-primary/10 rounded-xl transition-all duration-300 text-left">
          <div className="flex items-center gap-2 text-primary dark:text-primary-container mb-2 text-left">
            <Droplets className="h-5 w-5 text-on-primary-container" />
            <span className="text-xs font-mono font-semibold uppercase text-left">{t.esgCalc.waterTitle}</span>
          </div>
          <div className="text-2xl font-display font-extrabold text-primary dark:text-white text-left">
            {waterPreserved} L
          </div>
          <p className="text-xs text-secondary dark:text-gray-400 mt-1 text-left">
            {t.esgCalc.waterDesc}
          </p>
        </div>

        {/* Metric 4 */}
        <div className="p-4 bg-primary/5 dark:bg-primary-container/10 hover:bg-primary/10 border border-primary/10 rounded-xl transition-all duration-300 text-left">
          <div className="flex items-center gap-2 text-primary dark:text-primary-container mb-2 text-left">
            <Trash2 className="h-5 w-5 text-on-primary-container" />
            <span className="text-xs font-mono font-semibold uppercase text-left">{t.esgCalc.tiresTitle}</span>
          </div>
          <div className="text-2xl font-display font-extrabold text-primary dark:text-white text-left">
            {Math.round(tonnes * 143).toLocaleString(currentLanguage === 'pt' ? 'pt-BR' : currentLanguage === 'es' ? 'es-PY' : 'en-US')} {t.esgCalc.tiresUnit}
          </div>
          <p className="text-xs text-secondary dark:text-gray-400 mt-1 text-left">
            {t.esgCalc.tiresDesc}
          </p>
        </div>
      </div>

      {/* Dynamic Descriptive Section */}
      <div className="mt-4 p-4 bg-accent-mint/15 dark:bg-primary-fixed/10 border-l-4 border-primary dark:border-primary-container rounded-r-xl text-left">
        <p className="text-xs font-mono text-primary dark:text-primary-container font-bold uppercase tracking-wider mb-0.5 text-left">{t.esgCalc.activeCircular}</p>
        <p className="text-sm italic text-primary dark:text-gray-200 text-left">{getSubText()}</p>
      </div>
    </div>
  );
}
