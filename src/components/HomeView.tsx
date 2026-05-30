import React, { useState, useEffect } from 'react';
import { Tab, ProcessStep } from '../types';
import { processSteps } from '../data';
import { ShieldCheck, Truck, Recycle, ArrowRight, ArrowLeft, Zap, Sparkles, AlertCircle, Play } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';

interface HomeViewProps {
  setActiveTab: (tab: Tab) => void;
  onContactClick: () => void;
  onInfoAlert: (title: string, text: string) => void;
}

export default function HomeView({ setActiveTab, onContactClick, onInfoAlert }: HomeViewProps) {
  const { t, language } = useSettings();
  
  // Live ticker simulation
  const [liveRecyclings, setLiveRecyclings] = useState(1240500);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveRecyclings(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Process steps carousel state
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const prevStep = () => {
    setCurrentStepIndex(prev => (prev === 0 ? processSteps.length - 1 : prev - 1));
  };

  const nextStep = () => {
    setCurrentStepIndex(prev => (prev === processSteps.length - 1 ? 0 : prev + 1));
  };

  const translatedProcessSteps = [
    { step: '01', title: t.home.step1Title, description: t.home.step1Desc, image: processSteps[0].image },
    { step: '02', title: t.home.step2Title, description: t.home.step2Desc, image: processSteps[1].image },
    { step: '03', title: t.home.step3Title, description: t.home.step3Desc, image: processSteps[2].image },
  ];

  const localeStr = language === 'en' ? 'en-US' : language === 'es' ? 'es-ES' : 'pt-BR';

  return (
    <div className="space-y-16 fade-in text-primary dark:text-on-surface">
      {/* Immersive Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center text-white rounded-3xl overflow-hidden shadow-xl">
        <div className="absolute inset-0 z-0">
          <img 
            ref={(el) => { if (el) el.referrerPolicy = "no-referrer" }}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9HvSFQipzhAea9eQuZGhRYgg4ooVmwcbnkhkZl7oSaf6xmlISzjMks-vhNlV6k7wgDz3ZmocCrFZ8aXt0Lt981J9TGoOOjUYMmYPPLf0Pe_xRFKd90OrkZvZTKlCCH-ogiWFQ91hnTKkprHhexVB1WizAawQPgbCO35r0M2Lpfa07gM1sl8Yz2eR1Wk9PjnJmbrxLgZijF4Nx3q4Htb53TZCZjl11MqAjc3rndDt120CJy0p-4bnsXf4cEkRCw-ac5blaf1Cz4tJv" 
            alt="Paraguay Industrial Recycling Plant Sunset" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/70 to-transparent" />
        </div>

        <div className="relative z-10 px-6 lg:px-16 py-16 w-full max-w-7xl mx-auto flex flex-col justify-center">
          <div className="max-w-3xl space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-primary text-primary-fixed-dim text-xs font-mono font-bold rounded-full tracking-wider uppercase">
              <Sparkles className="h-3 w-3" /> {t.home.transformingResidues}
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-extrabold leading-tight text-white tracking-tight text-left">
              {t.home.heroTitle}
            </h1>
            <p className="font-sans text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed text-left">
              {t.home.heroSub}
            </p>
            <div className="flex flex-wrap gap-4 pt-4 justify-start">
              <button
                onClick={onContactClick}
                className="bg-primary-fixed hover:bg-white text-primary px-8 py-3.5 rounded-lg text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
              >
                {t.home.budgetBtn}
              </button>
              <button
                onClick={() => setActiveTab('materials')}
                className="border border-white/35 hover:border-white text-white bg-white/5 hover:bg-white/10 px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide transition-all cursor-pointer"
              >
                {t.home.catalogBtn}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Impact Tracker Widget */}
      <section className="bg-surface-container dark:bg-surface-container border border-surface-container-highest dark:border-surface-container-high rounded-2xl p-6 lg:p-8 text-left transition-colors duration-300">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-l-4 border-primary pl-4 sm:pl-6 text-left">
          <div className="space-y-1 text-left">
            <h4 className="font-mono text-xs font-bold text-secondary dark:text-gray-400 tracking-widest uppercase text-left">{t.home.impactMetric}</h4>
            <p className="font-display text-2xl lg:text-3xl font-extrabold text-primary dark:text-primary-container transition-all duration-300 text-left">
              {liveRecyclings.toLocaleString(localeStr)}+ {t.home.recycledTires}
            </p>
          </div>
          <div className="flex gap-8 lg:gap-12 w-full lg:w-auto text-left">
            <div className="flex flex-col text-left">
              <span className="font-display text-2xl lg:text-3xl font-extrabold text-primary dark:text-primary-container text-left">85%</span>
              <span className="font-mono text-[10px] sm:text-xs text-secondary dark:text-gray-400 uppercase font-semibold text-left">{t.home.co2Reduction}</span>
            </div>
            <div className="w-[1px] h-10 bg-outline-variant/40 mt-1" />
            <div className="flex flex-col text-left">
              <span className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-primary dark:text-primary-container flex items-center gap-1 text-left">
                24/7 <Play className="h-4 w-4 fill-primary text-primary dark:fill-primary-container dark:text-primary-container animate-pulse" />
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-secondary dark:text-gray-400 uppercase font-semibold text-left">{t.home.industrialOperation}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Grid */}
      <section className="space-y-8 text-left">
        <div className="text-center md:text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-primary dark:text-primary-container">{t.home.whyChooseTitle}</h2>
          <p className="text-secondary dark:text-gray-400 text-sm">
            {t.home.whyChooseSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
          {/* Main Large overlap Image Card */}
          <div className="md:col-span-2 md:row-span-2 relative min-h-[350px] bg-primary rounded-2xl overflow-hidden group shadow-md text-white flex flex-col justify-end p-6 sm:p-8 text-left">
            <div className="absolute inset-0 z-0">
              <img 
                ref={(el) => { if (el) el.referrerPolicy = "no-referrer" }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUvLGDM_zESnsPB8DeLa08wNo1DAG2VDt6eHrJDRuDGFTunltVyYc9C6GwGfEe7ZHhcnvPBdRhFpp6mU481JL5yR0KwGUNvgUMNDh4QIr0c6B8eS4eBUQERerz_-Lq2Y8zVfaoVB1xPZ85una2ZHvZvS3vnydGWZuigfsm8rjH76YKbzAe0JkVWMt4y5oAgix6bVq1dF_NkHlkFREzDvb7cx5YxSl_A2ws3-pRsqo8FGTgP-1irEvrDwhYcXv-5a5vn0fX5AqCU2DL" 
                alt="High purity rubber granules" 
                className="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/45 to-transparent" />
            </div>
            
            <div className="relative z-10 space-y-3 text-left">
              <span className="p-3 bg-primary-fixed/20 text-primary-fixed-dim rounded-xl inline-block">
                <Recycle className="h-6 w-6" />
              </span>
              <h3 className="font-display text-2xl font-bold text-left">{t.home.superiorQuality}</h3>
              <p className="text-white/75 text-sm leading-relaxed text-left">
                {t.home.superiorQualityText}
              </p>
            </div>
          </div>

          {/* Card 2: ISO Certificate */}
          <div className="bg-white dark:bg-surface-container-lowest border border-surface-container-highest dark:border-surface-container-high rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
            <div className="space-y-4 text-left">
              <ShieldCheck className="h-8 w-8 text-primary dark:text-primary-container" />
              <h3 className="font-display text-xl font-bold text-primary dark:text-white text-left">{t.home.isoCert}</h3>
              <p className="text-secondary dark:text-gray-400 text-sm leading-relaxed text-left">
                {t.home.isoCertText}
              </p>
            </div>
            <button 
              onClick={() => onInfoAlert(t.home.isoPopTitle, t.home.isoPopText)}
              className="text-primary dark:text-primary-container text-xs font-bold flex items-center gap-1 hover:underline mt-4 text-left cursor-pointer"
            >
              {t.home.knowStandards} <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          {/* Card 3: Logistics */}
          <div className="bg-tertiary-container dark:bg-tertiary-container text-white rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
            <div className="space-y-4 text-left">
              <Truck className="h-8 w-8 text-primary-fixed" />
              <h3 className="font-display text-xl font-bold text-white text-left">{t.home.integratedLogistics}</h3>
              <p className="text-white/85 text-sm leading-relaxed text-left">
                {t.home.integratedLogisticsText}
              </p>
            </div>
            <button 
              onClick={() => setActiveTab('commercial')}
              className="text-primary-fixed hover:text-white text-xs font-bold flex items-center gap-1 hover:underline mt-4 text-left cursor-pointer"
            >
              {t.home.seeLogisticsBtn} <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          {/* Card 4: Circular Economy banner on bottom */}
          <div className="md:col-span-2 bg-surface-container-low dark:bg-surface-container-lowest border border-surface-container-high dark:border-surface-container-highest rounded-2xl p-6 flex items-center justify-between shadow-sm text-left transition-colors">
            <div className="space-y-2 max-w-md text-left">
              <h3 className="font-display text-lg font-bold text-primary dark:text-primary-container text-left">{t.home.circularEconomyPrac}</h3>
              <p className="text-secondary dark:text-gray-400 text-sm text-left">
                {t.home.circularEconomyPracText}
              </p>
            </div>
            <Recycle className="h-16 w-16 text-primary/10 dark:text-primary-fixed/5 hidden sm:block" />
          </div>
        </div>
      </section>

      {/* Industrial Process Step Sections with interactive pagination */}
      <section className="bg-white dark:bg-surface-container-lowest dark:border dark:border-surface-container-high py-6 px-4 sm:px-6 rounded-2xl space-y-8 text-left transition-all duration-300">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 text-left">
          <div className="space-y-1 text-left">
            <h2 className="font-display text-3xl font-bold text-primary dark:text-primary-container text-left">{t.home.processTitle}</h2>
            <p className="text-secondary dark:text-gray-400 text-sm text-left">{t.home.processSub}</p>
          </div>
          
          {/* Arrow controllers */}
          <div className="flex gap-2 self-end">
            <button 
              onClick={prevStep}
              className="p-3 bg-surface dark:bg-surface-container hover:bg-surface-container dark:hover:bg-surface-container-high border border-outline-variant dark:border-surface-container-high rounded-full transition-colors cursor-pointer"
              aria-label="Previous step"
            >
              <ArrowLeft className="h-4 w-4 text-primary dark:text-primary-container" />
            </button>
            <button 
              onClick={nextStep}
              className="p-3 bg-surface dark:bg-surface-container hover:bg-surface-container dark:hover:bg-surface-container-high border border-outline-variant dark:border-surface-container-high rounded-full transition-colors cursor-pointer"
              aria-label="Next step"
            >
              <ArrowRight className="h-4 w-4 text-primary dark:text-primary-container" />
            </button>
          </div>
        </div>

        {/* Process Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {translatedProcessSteps.map((item, index) => {
            const isSelected = currentStepIndex === index;
            return (
              <div 
                key={item.step} 
                className={`flex flex-col gap-4 border p-5 rounded-2xl transition-all duration-300 cursor-pointer text-left ${
                  isSelected 
                    ? 'border-primary dark:border-primary-container ring-2 ring-primary/10 shadow-md bg-primary/[0.01]' 
                    : 'border-surface-container-highest dark:border-surface-container-high hover:border-outline-variant dark:hover:border-surface-container-highest bg-transparent shadow-sm'
                }`}
                onClick={() => setCurrentStepIndex(index)}
              >
                <div className="h-56 rounded-xl overflow-hidden relative select-none">
                  <img 
                    ref={(el) => { if (el) el.referrerPolicy = "no-referrer" }}
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-white w-9 h-9 rounded-full flex items-center justify-center font-mono font-bold text-sm shadow-md">
                    {item.step}
                  </span>
                </div>
                <div className="space-y-1.5 p-1 text-left">
                  <h4 className="font-display text-lg font-bold text-primary dark:text-white flex items-center gap-2 text-left">
                    {item.title}
                    {isSelected && <span className="h-2 w-2 rounded-full bg-primary dark:bg-primary-container animate-ping" />}
                  </h4>
                  <p className="text-secondary dark:text-gray-400 text-sm leading-relaxed text-left">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Immersive CTA with Operational Stocks Widget */}
      <section className="bg-primary text-white rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden shadow-xl text-left">
        {/* Subtle background overlay pattern */}
        <div className="absolute right-[-60px] bottom-[-60px] opacity-[0.04] pointer-events-none select-none">
          <Recycle className="h-[400px] w-[400px] text-white" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 justify-between text-left">
          <div className="flex-1 space-y-6 max-w-xl text-left">
            <h2 className="font-display text-3xl lg:text-5xl font-extrabold tracking-tight col-white leading-tight text-left">
              {t.home.readySust}
            </h2>
            <p className="text-white/85 text-base leading-relaxed font-sans text-left">
              {t.home.readySustSub}
            </p>
            <div className="flex flex-wrap gap-4 pt-2 justify-start">
              <button
                onClick={onContactClick}
                className="bg-primary-fixed hover:bg-white text-primary px-7 py-3 rounded-lg text-sm font-bold tracking-wide transition-all shadow-md active:scale-95 cursor-pointer"
              >
                {t.home.requestSample}
              </button>
              <button
                onClick={() => onInfoAlert(t.home.speakConsultantTitle, t.home.speakConsultantText)}
                className="flex items-center gap-2 border border-white/30 hover:border-white px-5 py-3 rounded-lg text-sm text-white font-semibold transition-all hover:bg-white/5 cursor-pointer"
              >
                {t.home.speakConsultant} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Operational status widget */}
          <div className="bg-white/5 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-white/10 w-full lg:w-96 shadow-lg space-y-5 text-left">
            <h4 className="font-mono text-xs font-bold tracking-widest text-[#93ad98] border-b border-white/10 pb-3 text-left">
              {t.home.opStatus}
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/70 font-sans">{t.home.granulesStock}</span>
                <span className="bg-green-500/20 text-green-300 border border-green-500/30 px-3 py-1 rounded-full text-xs font-semibold">
                  {t.home.inStock}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/70 font-sans">{t.home.regionalLogistics}</span>
                <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-semibold">
                  {t.home.operational}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/70 font-sans">{t.home.scheduledCollections}</span>
                <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-semibold">
                  {t.home.scheduled}
                </span>
              </div>
            </div>
            
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50 font-mono">
              <span>{t.home.updatedToday}</span>
              <span>{t.home.circular100}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
