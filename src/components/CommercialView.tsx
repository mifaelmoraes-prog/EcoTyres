import React, { useState } from 'react';
import { Phone, Mail, CheckCircle2, Truck, Landmark, ShieldAlert, FileText, Sparkles, Building2, User2, MessageSquare, MapPin, ArrowRight, Recycle } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';

interface CommercialViewProps {
  onContactClick: () => void;
  onInfoAlert: (title: string, text: string) => void;
}

export default function CommercialView({ onContactClick, onInfoAlert }: CommercialViewProps) {
  const { t } = useSettings();

  // Map highlights hover state
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  // Form states
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [volume, setVolume] = useState('');
  const [interesse, setInteresse] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Initialize values when empty
  const activeVolume = volume || t.commercial.volumeOption1;
  const activeInteresse = interesse || t.commercial.interestOption1;

  const locations = [
    { id: 'asu', name: 'Asunción', desc: t.commercial.asuDesc, coords: 'left-[22%] top-[56%]', details: t.commercial.asuDetails },
    { id: 'cde', name: 'Ciudad del Este', desc: t.commercial.cdeDesc, coords: 'left-[78%] top-[45%]', details: t.commercial.cdeDetails },
    { id: 'enc', name: 'Encarnación', desc: t.commercial.encDesc, coords: 'left-[55%] top-[86%]', details: t.commercial.encDetails }
  ];

  const handleB2BSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !empresa || !email) {
      alert(t.commercial.formFieldError);
      return;
    }
    setFormSubmitted(true);
  };

  const handleFormReset = () => {
    setFormSubmitted(false);
    setNome('');
    setEmpresa('');
    setEmail('');
    setVolume('');
    setInteresse('');
    setMensagem('');
  };

  const handleBenefitAction = (benefitId: string) => {
    if (benefitId === 'get-price' || benefitId === 'competitivo') {
      onInfoAlert(t.commercial.popPriceTitle, t.commercial.popPriceText);
    } else {
      onContactClick();
    }
  };

  return (
    <div className="space-y-16 fade-in text-left text-primary dark:text-on-surface">
      
      {/* Hero Header */}
      <section className="relative rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 bg-primary text-white min-h-[500px] text-left">
        {/* Detail */}
        <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center space-y-6 text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-fixed text-primary text-xs font-mono font-bold rounded-full w-fit uppercase tracking-wider">
            <Landmark className="h-3.5 w-3.5" /> {t.commercial.solutionsTag}
          </span>
          <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-on-primary leading-tight text-left">
            {t.commercial.heroTitle}
          </h1>
          <p className="font-sans text-base lg:text-lg text-on-primary-container leading-relaxed text-left">
            {t.commercial.heroSub}
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-left justify-start">
            <a 
              href="#order-b2b"
              className="bg-primary-fixed hover:bg-white text-primary px-8 py-3.5 rounded-lg text-sm font-bold tracking-wide transition-colors text-center inline-block shadow-md cursor-pointer"
            >
              {t.commercial.orderBtn}
            </a>
            <a 
              href="#benefits-grid"
              className="border border-white/45 bg-white/5 hover:bg-white/10 px-8 py-3.5 rounded-lg text-sm text-white font-semibold transition-all text-center inline-block cursor-pointer"
            >
              {t.commercial.benefitsBtn}
            </a>
          </div>
        </div>

        {/* Large roll photo right side */}
        <div className="hidden lg:block lg:col-span-5 relative">
          <img 
            ref={(el) => { if (el) el.referrerPolicy = "no-referrer" }}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA66N7zfSK4J1pvOKE5SqrlMs0oe1pZ1uNiKj8SZ-uMU1tweUtreMz1QoEem_9j2R6daqJQF8Y97-nmEVlZ99CMXyjO_a4X1uSdWN5K95pAeKrgmofKJ00ABG2hqNJV0DuIUTVk831wEsSFzayZeJgS_nf65P9b0waqmVmglfsOELPGiAO2DOP-lyR5enerJYj32KE8bqb3RiBBuzs86zoBus5hzgWgHe8jVWZeCBW7QlwsBn3c8CJgGbQHoXEDMj6tg8sjkHjqwaa2" 
            alt="Processed Rubber industrial rolls stored in Paraguay warehouse" 
            className="w-full h-full object-cover min-h-[500px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Corporate Statistics Row */}
      <section className="bg-surface-container-low dark:bg-surface-container border border-outline-variant/40 rounded-2xl p-6 lg:p-8 text-left transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-between items-start md:items-center gap-6 text-left">
          <div className="flex flex-col text-left">
            <span className="font-display text-2xl lg:text-3xl font-extrabold text-primary dark:text-primary-container text-left">{t.commercial.statTons}</span>
            <span className="text-secondary dark:text-gray-400 text-xs uppercase font-semibold font-mono tracking-wider text-left">{t.commercial.statTonsSub}</span>
          </div>
          <div className="w-[1px] h-10 bg-outline-variant/45 hidden md:block" />
          <div className="flex flex-col text-left">
            <span className="font-display text-2xl lg:text-3xl font-extrabold text-primary dark:text-primary-container text-left">{t.commercial.statPartners}</span>
            <span className="text-secondary dark:text-gray-400 text-xs uppercase font-semibold font-mono tracking-wider text-left">{t.commercial.statPartnersSub}</span>
          </div>
          <div className="w-[1px] h-10 bg-outline-variant/45 hidden md:block" />
          <div className="flex flex-col text-left">
            <span className="font-display text-2xl lg:text-3xl font-extrabold text-primary dark:text-primary-container text-left">{t.commercial.statHours}</span>
            <span className="text-secondary dark:text-gray-400 text-xs uppercase font-semibold font-mono tracking-wider text-left">{t.commercial.statHoursSub}</span>
          </div>
          <div className="w-[1px] h-10 bg-outline-variant/45 hidden md:block" />
          <div className="bg-primary-container text-[#a5d0b9] px-4 py-2.5 rounded-xl flex items-center gap-2 text-xs font-mono font-medium text-left">
            <Truck className="h-4 w-4" />
            <span className="text-left">{t.commercial.statCo2}</span>
          </div>
        </div>
      </section>

      {/* Benefits grid details */}
      <section className="space-y-8 text-left" id="benefits-grid">
        <div className="space-y-2 text-left">
          <h2 className="font-display text-2xl lg:text-3.5xl font-bold text-primary dark:text-primary-container text-left">
            {t.commercial.whyPartnerTitle}
          </h2>
          <p className="text-secondary dark:text-gray-400 text-sm max-w-2xl leading-relaxed text-left">
            {t.commercial.whyPartnerSub}
          </p>
        </div>

        {/* Bento Subgrid representing benefit styles */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-left">
          
          {/* Item 1: Wide Layout for Logistics (Col-8) */}
          <div className="col-span-12 md:col-span-8 bg-white dark:bg-surface-container-lowest border border-surface-container-highest dark:border-surface-container-high rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row gap-6 justify-between shadow-sm hover:shadow-md transition-shadow text-left">
            <div className="flex-1 space-y-4 text-left">
              <Truck className="h-8 w-8 text-primary dark:text-primary-container" />
              <h3 className="font-display text-xl lg:text-2xl font-bold text-primary dark:text-white text-left">{t.commercial.logisticsTitle}</h3>
              <p className="text-secondary dark:text-gray-400 text-xs lg:text-sm leading-relaxed text-left">
                {t.commercial.logisticsDesc}
              </p>
              <ul className="space-y-2 text-xs text-on-surface-variant dark:text-gray-300 font-semibold text-left">
                <li className="flex items-center gap-2 text-left">
                  <CheckCircle2 className="h-4 w-4 text-primary dark:text-primary-container shrink-0" />
                  <span className="text-left">{t.commercial.logisticsPoint1}</span>
                </li>
                <li className="flex items-center gap-2 text-left">
                  <CheckCircle2 className="h-4 w-4 text-primary dark:text-primary-container shrink-0" />
                  <span className="text-left">{t.commercial.logisticsPoint2}</span>
                </li>
              </ul>
            </div>
            
            <div className="h-48 md:h-full md:w-56 rounded-xl overflow-hidden shadow-sm shrink-0">
              <img 
                ref={(el) => { if (el) el.referrerPolicy = "no-referrer" }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB01VOESVWWt7UozSmLDITVcKcJw2IyS6QPlmDCzLXXysSYrksI96qKNqBNVY5485GEiTIKnaD3GWLCs5NLKsGwT_HdWEZgjz5GDAaBHdgFa_VSa9iNSB89YwQXcImiQsLCi6cP-vUSFHWcGMfrocYzcBCIgG5kGF4HcQLzdQZnk28NbHMI9F6lzOwfITQPHe5hVceckTAmmT9bHF9zRA7t7tquJppKSSBGZ4-h2fiIVo4vJroRxXWj9sIUuiV3W2O5_fJ-ZH21u9OP" 
                alt="Trucks loaded in Ciudad de Este, Paraguay loading docks" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Item 2: Competitive pricing block (Col-4) */}
          <div className="col-span-12 md:col-span-4 bg-tertiary-container text-white rounded-2xl p-6 lg:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow text-left">
            <div className="space-y-4 text-left">
              <Building2 className="h-8 w-8 text-primary-fixed" />
              <h3 className="font-display text-xl font-bold text-white text-left">{t.commercial.pricesTitle}</h3>
              <p className="text-white/80 text-xs lg:text-sm leading-relaxed text-left">
                {t.commercial.pricesDesc}
              </p>
            </div>
            <button
              onClick={() => handleBenefitAction('competitivo')}
              className="text-primary-fixed hover:text-white text-xs font-bold font-mono tracking-wider uppercase flex items-center gap-1 hover:underline mt-6 text-left cursor-pointer"
            >
              {t.commercial.consultTerms} <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Item 3: Environmental Certificate (Col-4) */}
          <div className="col-span-12 md:col-span-4 bg-white dark:bg-surface-container-lowest border border-surface-container-highest dark:border-surface-container-high rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-left">
            <div className="space-y-4 text-left">
              <CheckCircle2 className="h-8 w-8 text-primary dark:text-primary-container" />
              <h3 className="font-display text-lg lg:text-xl font-bold text-primary dark:text-white text-left">{t.commercial.certTitle}</h3>
              <p className="text-secondary dark:text-gray-400 text-xs lg:text-sm leading-relaxed text-left">
                {t.commercial.certDesc}
              </p>
            </div>
          </div>

          {/* Item 4: Technical support block (Col-8) */}
          <div className="col-span-12 md:col-span-8 bg-primary-fixed text-primary rounded-2xl p-6 lg:p-8 flex items-center justify-between shadow-sm text-left">
            <div className="space-y-4 max-w-lg text-left">
              <h3 className="font-display text-xl lg:text-2xl font-bold text-primary text-left">{t.commercial.supportTitle}</h3>
              <p className="text-primary/80 text-xs lg:text-sm leading-relaxed text-left">
                {t.commercial.supportDesc}
              </p>
              <button 
                onClick={onContactClick}
                className="bg-primary hover:bg-primary-container text-white px-5 py-2.5 rounded-lg text-xs font-bold tracking-wide transition-colors cursor-pointer"
              >
                {t.commercial.talkEngineer}
              </button>
            </div>
            <Recycle className="h-24 w-24 text-primary/10 hidden lg:block" />
          </div>

        </div>
      </section>

      {/* Form section */}
      <section className="bg-white dark:bg-surface-container-lowest border border-surface-container-high dark:border-surface-container-highest rounded-3xl p-6 lg:p-12 shadow-sm text-left transition-colors" id="order-b2b">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <h2 className="font-display text-3xl font-bold text-primary dark:text-primary-container leading-tight text-left">
              {t.commercial.formTitle}
            </h2>
            <p className="text-secondary dark:text-gray-400 text-sm lg:text-base leading-relaxed font-sans text-left">
              {t.commercial.formSub}
            </p>

            {/* Contacts details list */}
            <div className="space-y-4 pt-2 font-mono text-xs text-left">
              <div className="flex items-center gap-3 text-left">
                <span className="p-3 bg-surface-container dark:bg-surface-container rounded-full text-primary dark:text-primary-container">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="text-left">
                  <span className="block text-secondary dark:text-gray-400 text-[10px] uppercase font-bold text-left">{t.commercial.salesPhone}</span>
                  <span className="block text-base font-bold text-primary dark:text-white text-left">+595 21 000-0000</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-left">
                <span className="p-3 bg-surface-container dark:bg-surface-container rounded-full text-primary dark:text-primary-container">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="text-left">
                  <span className="block text-secondary dark:text-gray-400 text-[10px] uppercase font-bold text-left">{t.commercial.corporateEmail}</span>
                  <span className="block text-base font-bold text-primary dark:text-white text-left">vendas@ecotire.com.py</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form container */}
          <div className="lg:col-span-7 bg-surface-container-low dark:bg-surface-container-low border border-surface-container-high dark:border-surface-container-high rounded-2xl p-6 lg:p-8 text-left">
            {!formSubmitted ? (
              <form onSubmit={handleB2BSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <div className="space-y-1 text-left">
                    <label className="block text-xs font-semibold text-primary dark:text-white text-left">{t.commercial.colRespName}</label>
                    <div className="relative text-left">
                      <User2 className="absolute left-3 top-3 h-4 w-4 text-secondary/60" />
                      <input 
                        type="text" 
                        required
                        placeholder="Ex: Juan Carlos Ramirez"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full bg-white dark:bg-surface-container border border-outline-variant rounded-lg p-2.5 pl-10 text-primary dark:text-white text-xs focus:ring-1 focus:ring-primary focus:border-primary font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-1 text-left">
                    <label className="block text-xs font-semibold text-primary dark:text-white text-left">{t.commercial.colCompany}</label>
                    <div className="relative text-left">
                      <Building2 className="absolute left-3 top-3 h-4 w-4 text-secondary/60" />
                      <input 
                        type="text" 
                        required
                        placeholder="Ex: EcoIndustria S.A."
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                        className="w-full bg-white dark:bg-surface-container border border-outline-variant rounded-lg p-2.5 pl-10 text-primary dark:text-white text-xs focus:ring-1 focus:ring-primary focus:border-primary font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1 text-left">
                  <label className="block text-xs font-semibold text-primary dark:text-white text-left">{t.commercial.colEmail}</label>
                  <div className="relative text-left">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-secondary/60" />
                    <input 
                      type="email" 
                      required
                      placeholder="Ex: compras_b2b@empresa.com.py"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white dark:bg-surface-container border border-outline-variant rounded-lg p-2.5 pl-10 text-primary dark:text-white text-xs focus:ring-1 focus:ring-primary focus:border-primary font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <div className="space-y-1 text-left">
                    <label className="block text-xs font-semibold text-primary dark:text-white text-left">{t.commercial.colVolume}</label>
                    <select 
                      value={activeVolume} 
                      onChange={(e) => setVolume(e.target.value)}
                      className="w-full bg-white dark:bg-surface-container border border-outline-variant rounded-lg p-2.5 text-primary dark:text-white text-xs focus:ring-1 focus:ring-primary focus:border-primary font-semibold cursor-pointer"
                    >
                      <option>{t.commercial.volumeOption1}</option>
                      <option>{t.commercial.volumeOption2}</option>
                      <option>{t.commercial.volumeOption3}</option>
                      <option>{t.commercial.volumeOption4}</option>
                    </select>
                  </div>
                  <div className="space-y-1 text-left">
                    <label className="block text-xs font-semibold text-primary dark:text-white text-left">{t.commercial.colInterest}</label>
                    <select 
                      value={activeInteresse} 
                      onChange={(e) => setInteresse(e.target.value)}
                      className="w-full bg-white dark:bg-surface-container border border-outline-variant rounded-lg p-2.5 text-primary dark:text-white text-xs focus:ring-1 focus:ring-primary focus:border-primary font-semibold cursor-pointer"
                    >
                      <option>{t.commercial.interestOption1}</option>
                      <option>{t.commercial.interestOption2}</option>
                      <option>{t.commercial.interestOption3}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1 text-left">
                  <label className="block text-xs font-semibold text-primary dark:text-white text-left">{t.commercial.colMessage}</label>
                  <div className="relative text-left">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-secondary/60" />
                    <textarea 
                      placeholder={t.commercial.colMessagePlaceholder}
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      className="w-full bg-white dark:bg-surface-container border border-outline-variant rounded-lg p-2.5 pl-10 h-28 text-primary dark:text-white text-xs focus:ring-1 focus:ring-primary focus:border-primary font-medium"
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-3.5 rounded-lg text-sm font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-primary-container"
                >
                  <FileText className="h-4.5 w-4.5" /> {t.commercial.colSendBtn}
                </button>
                <p className="text-[10px] text-center text-secondary dark:text-gray-400">
                  {t.commercial.colTermsAgree}
                </p>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4 fade-in text-primary dark:text-white text-left">
                <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto animate-bounce" />
                <h4 className="font-display text-xl font-bold text-center">{t.commercial.colSuccessTitle}</h4>
                <p className="text-secondary dark:text-gray-300 text-sm max-w-sm mx-auto text-center">
                  {t.commercial.colSuccessSub.replace('{nome}', nome).replace('{interesse}', activeInteresse).replace('{empresa}', empresa)}
                </p>
                <div className="p-4 bg-accent-mint/15 dark:bg-primary-fixed/10 border border-primary/10 rounded-xl text-xs max-w-sm mx-auto text-left space-y-2">
                  <p><strong>{t.commercial.colDetailsHeader}</strong></p>
                  <p>• {t.commercial.colDetailsEmail}: {email}</p>
                  <p>• {t.commercial.colDetailsVolume}: {activeVolume}</p>
                  <p>• {t.commercial.colDetailsResponse}: Em até 24 horas úteis</p>
                </div>
                <button 
                  onClick={handleFormReset}
                  className="bg-primary/5 hover:bg-primary/10 border border-primary/20 text-primary dark:text-primary-container px-6 py-2 rounded-lg text-xs font-bold transition-all mx-auto block cursor-pointer"
                >
                  {t.commercial.colNewRequestBtn}
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* National presence layout with interactive region pointers */}
      <section className="bg-surface-container dark:bg-surface-container border border-surface-container-highest dark:border-surface-container-high rounded-2xl p-6 lg:p-10 space-y-6 text-left transition-colors">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary dark:text-primary-container">{t.commercial.colNationalPresence}</h2>
          <p className="text-secondary dark:text-gray-400 text-xs lg:text-sm">
            {t.commercial.colNationalPresenceSub}
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-surface-container-lowest border border-outline-variant/30 dark:border-surface-container-high rounded-2xl p-6 shadow-sm overflow-hidden text-left">
          
          {/* Map Graphic representing Paraguay */}
          <div className="lg:col-span-7 relative h-[380px] bg-primary/5 border border-primary/10 rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
            
            {/* Real SVG or detailed map graphic overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                ref={(el) => { if (el) el.referrerPolicy = "no-referrer" }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSBBYblNecBq9Aewr6rbbLCD4k28L7R8ofuC_OVN4qkcaJ2UGR8bEalx9il-hwziYEe3txoYzT_JGG9x6iObUvom3l6kGfPpZQRLSTsk--whJt6OWPgbqgG-mjB81nmcz21Agx5HwKqxCqMju2XEBEFky67E6MgtdA_CP3HnRQ7kIlkNysGDxFpTuEAz3egEZJszp3Lm4fPzmUbEEbEwaONRvmxZ4hAKUBgY4Uijrlacpn_sT-M3ldy0UoeWh7TQcqrs0-opXv6yHr" 
                alt="Stylized Map of Paraguay strategic B2B distribution depots" 
                className="w-full h-full object-cover opacity-75"
              />
            </div>

            {/* Interactive Pin Overlays */}
            {locations.map((loc) => {
              const isActive = hoveredLocation === loc.id;
              return (
                <div 
                  key={loc.id} 
                  className={`absolute ${loc.coords} z-10`}
                  onMouseEnter={() => setHoveredLocation(loc.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                >
                  <button 
                    className={`p-2 rounded-full cursor-pointer transition-all duration-300 relative group flex items-center justify-center ${
                      isActive ? 'bg-primary text-white scale-110 shadow-lg' : 'bg-white text-primary border border-primary/20 shadow-sm'
                    }`}
                    onClick={() => setHoveredLocation(loc.id)}
                  >
                    <MapPin className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Map description panel */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <span className="font-mono text-[9px] font-bold text-primary dark:text-primary-container uppercase tracking-widest block text-left">{t.commercial.colCoverFromEndToEnd}</span>
            <div className="space-y-3 text-left">
              {locations.map((loc) => {
                const isSelected = hoveredLocation === loc.id;
                return (
                  <div 
                    key={loc.id}
                    onMouseEnter={() => setHoveredLocation(loc.id)}
                    onMouseLeave={() => setHoveredLocation(null)}
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer text-left ${
                      isSelected 
                        ? 'bg-primary text-white border-primary shadow-md translate-x-1' 
                        : 'bg-surface-container-low dark:bg-surface-container border-surface-container-high dark:border-surface-container-highest hover:border-outline-variant text-primary dark:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1 text-left">
                      <MapPin className={`h-4.5 w-4.5 ${isSelected ? 'text-primary-fixed' : 'text-primary'}`} />
                      <h4 className="font-display font-bold text-sm lg:text-base text-left">{loc.name}</h4>
                    </div>
                    <p className={`text-xs ${isSelected ? 'text-white/80' : 'text-secondary dark:text-gray-400'} mb-1.5 text-left`}>
                      {loc.desc}
                    </p>
                    <p className={`text-xs font-mono font-bold leading-relaxed text-left ${isSelected ? 'text-primary-fixed-dim' : 'text-primary dark:text-primary-container'}`}>
                      {loc.details}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
