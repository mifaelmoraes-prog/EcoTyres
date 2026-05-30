import React, { useState, useRef } from 'react';
import { projectsData } from '../data';
import EsgEstimator from './EsgEstimator';
import { Leaf, Award, Download, ShieldCheck, Sparkles, AlertCircle, Printer, RefreshCw } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';

interface SustainabilityViewProps {
  onInfoAlert: (title: string, text: string) => void;
}

export default function SustainabilityView({ onInfoAlert }: SustainabilityViewProps) {
  const { t } = useSettings();
  
  // Certification wizard states
  const [certEmpresa, setCertEmpresa] = useState('');
  const [certTons, setCertTons] = useState(150);
  const [generating, setGenerating] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const handleGenerateCert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certEmpresa || certTons <= 0) {
      alert(t.sustainability.formError);
      return;
    }
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setShowCertificate(true);
    }, 1500);
  };

  const handlePrint = () => {
    window.print();
  };

  const codeCertificado = useRef(`ECO-${Math.floor(100000 + Math.random() * 900000)}/2026`);

  const translatedProjects = projectsData.map((project, index) => {
    let description = project.description;
    if (index === 0) description = t.sustainability.proj1Desc;
    if (index === 1) description = t.sustainability.proj2Desc;
    if (index === 2) description = t.sustainability.proj3Desc;
    return {
      ...project,
      category: project.category,
      description
    };
  });

  return (
    <div className="space-y-16 fade-in text-left text-primary dark:text-on-surface">
      
      {/* Hero Header */}
      <section className="relative min-h-[450px] flex items-center justify-center text-white rounded-3xl overflow-hidden shadow-xl text-left">
        <div className="absolute inset-0 z-0">
          <img 
            ref={(el) => { if (el) el.referrerPolicy = "no-referrer" }}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBGTDYcpU8FkROEv_cvWk4cZc9CsDGEGzulBhpxPKHzuU0AsFBPtbTs6GtZ-uMnVL9fUpWrd1tzzOP5ZTi6gi3G-rXH7NqLJYlUqYWTWWUpGcqOqU8ukw5fAEVnfG1Ldisoc8Iv4IcHp0GrvJ9B_eREz7T6bAOC0D3_Z5sxbhL-Io5M4n030C5j-J9P2ZBbKFo3TH96grydKbqiwPGiVLB_9mfb8jYOPcM9S9cB0wWNkbCdezmhDaSy1i9nheACCJt3Zvf_rJdNmwf" 
            alt="Paraguay sustainability and ecosystem raw green materials" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        </div>

        <div className="relative z-10 px-6 lg:px-16 py-12 w-full max-w-7xl mx-auto text-left">
          <div className="max-w-2xl space-y-4 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-mint text-primary text-xs font-mono font-bold rounded-full uppercase tracking-wider">
              <Leaf className="h-3.5 w-3.5" /> {t.sustainability.innovationTag}
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-white leading-tight text-left">
              {t.sustainability.heroTitle}
            </h1>
            <p className="font-sans text-base lg:text-lg text-white/85 leading-relaxed text-left font-medium">
              {t.sustainability.heroSub}
            </p>
          </div>
        </div>
      </section>

      {/* ESG Impact Estimator component */}
      <section className="space-y-4 text-left">
        <div className="max-w-2xl text-left">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary dark:text-primary-container text-left">{t.sustainability.metricsTitle}</h2>
          <p className="text-secondary dark:text-gray-400 text-sm text-left">{t.sustainability.metricsSub}</p>
        </div>
        <EsgEstimator />
      </section>

      {/* Innovation Projects Portfolio */}
      <section className="space-y-8 text-left">
        <div className="space-y-1 text-left">
          <span className="font-mono text-xs font-bold text-secondary dark:text-gray-400 uppercase tracking-widest text-left">{t.sustainability.projectTag}</span>
          <h2 className="font-display text-2xl lg:text-3.5xl font-bold text-primary dark:text-primary-container text-left">{t.sustainability.projectTitle}</h2>
          <p className="text-secondary dark:text-gray-400 text-sm max-w-2xl text-left font-medium">
            {t.sustainability.projectSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {translatedProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white dark:bg-surface-container-lowest border border-surface-container-highest dark:border-surface-container-high rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-left"
            >
              <div className="text-left">
                <div className="h-48 relative overflow-hidden select-none text-left">
                  <img 
                    ref={(el) => { if (el) el.referrerPolicy = "no-referrer" }}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-3 left-3 bg-white dark:bg-surface-container border border-outline-variant/40 text-primary dark:text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm uppercase">
                    {project.category}
                  </span>
                </div>
                
                <div className="p-5 space-y-2 text-left">
                  <h3 className="font-display text-lg font-bold text-primary dark:text-white text-left">{project.title}</h3>
                  <p className="text-secondary dark:text-gray-400 text-xs lg:text-sm leading-relaxed text-left">{project.description}</p>
                </div>
              </div>

              <div className="p-5 pt-0 text-left">
                <button 
                  onClick={() => onInfoAlert(project.title, `${project.description} ${t.sustainability.sheetPopDesc}`)}
                  className="text-primary dark:text-primary-container text-xs font-bold hover:underline py-1 text-left cursor-pointer"
                >
                  {t.sustainability.technicalSheetBtn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Certificate Generator Tool */}
      <section className="bg-surface-container-low dark:bg-surface-container border border-outline-variant/30 dark:border-surface-container-high rounded-3xl p-6 lg:p-10 space-y-8 text-left transition-colors">
        <div className="max-w-2xl space-y-2 text-left">
          <span className="inline-flex items-center gap-1 bg-primary text-primary-fixed text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider">
            {t.sustainability.stampTag}
          </span>
          <h2 className="font-display text-2.5xl lg:text-3.5xl font-bold text-primary dark:text-primary-container text-left">{t.sustainability.stampTitle}</h2>
          <p className="text-secondary dark:text-gray-400 text-xs lg:text-sm leading-relaxed text-left">
            {t.sustainability.stampSub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left panel Inputs */}
          <div className="lg:col-span-5 bg-white dark:bg-surface-container-low p-6 rounded-2xl border border-surface-container-highest dark:border-surface-container-high shadow-sm text-left">
            <form onSubmit={handleGenerateCert} className="space-y-4 text-left">
              <h3 className="font-display text-lg font-bold text-primary dark:text-white flex items-center gap-2 text-left">
                <Award className="h-5 w-5 text-primary dark:text-primary-container" /> {t.sustainability.stampTitle}
              </h3>

              <div className="space-y-3 font-sans text-xs text-left">
                <div className="text-left">
                  <label className="block text-secondary dark:text-gray-400 font-semibold mb-1 text-left">{t.sustainability.formCompLabel}</label>
                  <input 
                    type="text" 
                    required
                    placeholder={t.sustainability.formCompPlaceholder}
                    value={certEmpresa}
                    onChange={(e) => setCertEmpresa(e.target.value)}
                    className="w-full bg-white dark:bg-surface-container border border-outline-variant rounded-lg p-2.5 text-primary dark:text-white text-xs focus:ring-1 focus:ring-primary focus:border-primary font-medium"
                  />
                </div>

                <div className="text-left">
                  <label className="block text-secondary dark:text-gray-400 font-semibold mb-1 text-left">{t.sustainability.formVolumeLabel}</label>
                  <input 
                    type="number" 
                    min="5" 
                    max="10000" 
                    value={certTons}
                    onChange={(e) => setCertTons(Number(e.target.value))}
                    className="w-full bg-white dark:bg-surface-container border border-outline-variant rounded-lg p-2.5 text-primary dark:text-white text-xs focus:ring-1 focus:ring-primary focus:border-primary font-semibold"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={generating}
                className="w-full bg-primary text-white py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 hover:bg-primary-container"
              >
                {generating ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" /> {t.sustainability.btnSimulating}
                  </>
                ) : (
                  <>
                    <Award className="h-4 w-4" /> {t.sustainability.btnSimulate}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right panel interactive certificate layout */}
          <div className="lg:col-span-7 text-left">
            {showCertificate ? (
              <div className="bg-amber-50/40 dark:bg-amber-950/20 border-4 border-amber-800/20 p-6 lg:p-8 rounded-2xl relative shadow-md fade-in text-slate-800 dark:text-gray-200 text-left">
                {/* Decorative borders */}
                <div className="absolute inset-2 border border-amber-800/10 pointer-events-none rounded-lg" />
                
                {/* Certificate main header */}
                <div className="text-center font-display space-y-2 border-b border-amber-800/10 pb-6 relative z-10">
                  <span className="text-xs font-mono font-bold text-amber-800 dark:text-amber-400 uppercase tracking-widest flex items-center justify-center gap-1">
                    <Award className="h-4 w-4" /> {t.sustainability.certOfficialTag}
                  </span>
                  <h3 className="text-2xl font-extrabold text-primary dark:text-primary-container leading-tight uppercase font-display text-center">
                    {t.sustainability.certTitleMain}
                  </h3>
                  <p className="text-xs text-secondary dark:text-gray-400 font-mono text-center">{t.sustainability.certOfficialReg}: {codeCertificado.current}</p>
                </div>

                {/* Certificate Content Body */}
                <div className="py-6 space-y-4 font-serif text-sm lg:text-base text-center relative z-10 leading-relaxed text-slate-700 dark:text-gray-300 max-w-xl mx-auto">
                  <p className="italic text-center">{t.sustainability.certPara1}</p>
                  <p className="font-display font-bold text-lg lg:text-xl text-primary dark:text-primary-container uppercase underline tracking-wide not-italic font-sans text-center">
                    {certEmpresa}
                  </p>
                  <p className="text-sm text-center">
                    {t.sustainability.certPara2.replace('{tons}', String(certTons))}
                  </p>
                  <p className="text-xs text-secondary dark:text-gray-400 italic text-center">
                    {t.sustainability.certPara3
                      .replace('{co2}', (certTons * 1.35).toFixed(1))
                      .replace('{trees}', String(Math.round(certTons * 54.5)))}
                  </p>
                </div>

                {/* Sign and Seals */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-6 border-t border-amber-800/10 relative z-10 font-sans text-xs text-left">
                  <div className="text-center sm:text-left space-y-0.5">
                    <p className="font-mono font-bold text-slate-500 dark:text-gray-400">{t.sustainability.certCouncilTitle}</p>
                    <p className="font-semibold text-slate-700 dark:text-gray-300">{t.sustainability.certCouncilDept}</p>
                  </div>
                  
                  {/* Print custom buttons */}
                  <div className="flex gap-2">
                    <button 
                      onClick={handlePrint}
                      className="p-2 bg-primary text-white hover:bg-primary-container rounded-lg transition-colors flex items-center gap-1.5 font-bold font-mono text-[10px] uppercase shadow-sm cursor-pointer"
                    >
                      <Printer className="h-3.5 w-3.5" /> {t.sustainability.printBtn}
                    </button>
                    <button 
                      onClick={() => setShowCertificate(false)}
                      className="p-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 rounded-lg transition-colors flex items-center gap-1 font-semibold font-mono text-[10px] uppercase cursor-pointer"
                    >
                      {t.sustainability.newIssueBtn}
                    </button>
                  </div>
                </div>

              </div>
            ) : (
              <div className="bg-surface-container-high dark:bg-surface-container border border-dashed border-outline-variant rounded-2xl h-[360px] flex flex-col items-center justify-center p-6 text-center text-secondary gap-3">
                <Award className="h-12 w-12 text-primary/35 animate-pulse" />
                <div className="space-y-1">
                  <p className="font-display font-bold text-primary dark:text-primary-container">{t.sustainability.noStampTitle}</p>
                  <p className="text-xs text-secondary dark:text-gray-400 max-w-sm">
                    {t.sustainability.noStampSub}
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
