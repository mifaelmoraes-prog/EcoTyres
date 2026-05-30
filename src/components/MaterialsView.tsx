import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Zap, ArrowRight, FileSpreadsheet, Send, Sparkles } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';

interface MaterialsViewProps {
  onContactClick: () => void;
  onInfoAlert: (title: string, text: string) => void;
}

export default function MaterialsView({ onContactClick, onInfoAlert }: MaterialsViewProps) {
  const { t } = useSettings();
  const [selectedMaterial, setSelectedMaterial] = useState(t.materials.option1);
  const [responsavelName, setResponsavelName] = useState('');
  const [email, setEmail] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!responsavelName || !email || !empresa) {
      alert(t.materials.reqError);
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setResponsavelName('');
    setEmail('');
    setEmpresa('');
  };

  return (
    <div className="space-y-16 fade-in text-left text-primary dark:text-on-surface">
      {/* Intro Header */}
      <section className="max-w-4xl space-y-4 text-left">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-fixed dark:bg-primary-fixed-dim text-primary dark:text-primary-container text-xs font-mono font-bold rounded-full uppercase tracking-wider">
          <FileSpreadsheet className="h-3.5 w-3.5" /> {t.materials.catalogTag}
        </span>
        <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-primary dark:text-primary-container leading-tight text-left">
          {t.materials.headerTitle}
        </h1>
        <p className="font-sans text-base lg:text-lg text-secondary dark:text-gray-400 leading-relaxed max-w-3xl text-left">
          {t.materials.headerSub}
        </p>
      </section>

      {/* Materials Grid (Bento elements representing each style) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        
        {/* Card 1: Granulado de Borracha - 12 Col (Wide Layout) */}
        <div className="col-span-12 border border-surface-container-highest dark:border-surface-container-high rounded-2xl overflow-hidden bg-white dark:bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-2 text-left">
          
          {/* Image */}
          <div className="relative h-72 lg:h-full min-h-[300px]">
            <img 
              ref={(el) => { if (el) el.referrerPolicy = "no-referrer" }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYmOwfEiwH--H8lxfzcmHLaYT0McNBH4HqJg7Tu_gHFycP5svscKlP5YvhTOn_zCO7QaexvaM0be-arNzD7YcCeFdGHBKWXdWGhs165-tkHdqnS2c5UdqzFMEWXeFu7xc4YZqx1M5V7nizvyMbOqJQfbpxpI854vqGSQdeE3sscj_ZKCFkSaPmtwXb_3g8SOlN24fi8-X-hRUxlMJq2K8htOFg8FUKk9PqY6UIDv1brecr5p2Ov3_mopxrdGIJH93rCyWCHzfU1I5Y" 
              alt="Granulado de Borracha EcoTire" 
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 bg-primary text-primary-fixed text-xs font-mono font-bold px-3 py-1 rounded-sm shadow-md uppercase tracking-wider">
              {t.materials.bestSeller}
            </span>
          </div>

          {/* Details */}
          <div className="p-6 lg:p-10 flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-4 text-left">
              <h2 className="font-display text-2xl lg:text-3.5xl font-bold text-primary dark:text-white text-left">
                {t.materials.granuleTitle}
              </h2>
              <p className="text-secondary dark:text-gray-400 text-sm leading-relaxed text-left">
                {t.materials.granuleDesc}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="p-3 bg-surface-container dark:bg-surface-container rounded-xl text-left">
                  <span className="block font-mono text-[10px] text-secondary dark:text-gray-400 uppercase tracking-wider text-left">{t.materials.purityMin}</span>
                  <span className="block text-lg lg:text-xl font-display font-extrabold text-primary dark:text-primary-container text-left">{t.materials.purityVal}</span>
                </div>
                <div className="p-3 bg-surface-container dark:bg-surface-container rounded-xl text-left">
                  <span className="block font-mono text-[10px] text-secondary dark:text-gray-400 uppercase tracking-wider text-left">{t.materials.densityAvg}</span>
                  <span className="block text-lg lg:text-xl font-display font-extrabold text-primary dark:text-primary-container text-left">{t.materials.densityVal}</span>
                </div>
              </div>
            </div>

            {/* Comercial Insight */}
            <div className="p-4 bg-accent-mint/15 dark:bg-primary-fixed/10 border-l-4 border-primary dark:border-primary-container rounded-r-xl space-y-1 text-left">
              <h4 className="font-mono text-xs font-bold text-primary dark:text-primary-container uppercase flex items-center gap-1 text-left">
                <Zap className="h-3.5 w-3.5" /> {t.materials.insightTitle}
              </h4>
              <p className="text-xs text-on-surface-variant dark:text-gray-300 italic leading-relaxed text-left">
                {t.materials.insightText}
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Pó de Borracha - 6 Col (Half Layout) */}
        <div className="col-span-12 md:col-span-6 border border-surface-container-highest dark:border-surface-container-high rounded-2xl overflow-hidden bg-white dark:bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-left">
          <div className="text-left">
            <div className="h-56 relative">
              <img 
                ref={(el) => { if (el) el.referrerPolicy = "no-referrer" }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3vIlkJkC21v7rm9z3_eEEiO4QP0_RbPwJwsVoiMeuBM7IhX8sknLQoFa62NNpZIKUOybffg0iLTYMYLUkzuJqkAgsI4SEcBnka1nHRIvd4L1QyblHkQBKjeMb5-HlN5n5pK6baRXueCMKt75AgXkc-ksahiKreToXxST9Of7qef7h2MGoc2CyMUD9WA15KrpRhZ4asGmXvvdxHQKb_vLQudMDSalXd1-f_yr4eRIizqsXX5kUdGZbIMr4NlqSHJMELKiIrprKfwA5" 
                alt="Pó de Borracha" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 space-y-4 text-left">
              <h3 className="font-display text-xl lg:text-2xl font-bold text-primary dark:text-white text-left">{t.materials.powderTitle}</h3>
              <p className="text-secondary dark:text-gray-400 text-xs lg:text-sm leading-relaxed text-left">
                {t.materials.powderDesc}
              </p>

              <ul className="space-y-2 pt-2 text-left">
                <li className="flex items-center gap-2 text-xs text-on-surface-variant dark:text-gray-300 font-medium text-left">
                  <CheckCircle2 className="h-4 w-4 text-primary dark:text-primary-container shrink-0" />
                  <span className="text-left">{t.materials.powderPoint1}</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-on-surface-variant dark:text-gray-300 font-medium text-left">
                  <CheckCircle2 className="h-4 w-4 text-primary dark:text-primary-container shrink-0" />
                  <span className="text-left">{t.materials.powderPoint2}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 pt-0 text-left">
            <div className="p-4 bg-primary-fixed/45 dark:bg-primary-fixed/10 rounded-xl space-y-1 text-left">
              <span className="block font-mono text-[10px] font-bold text-primary dark:text-primary-container uppercase text-left">{t.materials.powderFocusTitle}</span>
              <p className="text-xs text-primary dark:text-white font-medium leading-relaxed text-left">
                {t.materials.powderFocusDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Chips (TDF) - 6 Col (Half Layout) */}
        <div className="col-span-12 md:col-span-6 border border-surface-container-highest dark:border-surface-container-high rounded-2xl overflow-hidden bg-white dark:bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-left">
          <div className="text-left">
            <div className="h-56 relative">
              <img 
                ref={(el) => { if (el) el.referrerPolicy = "no-referrer" }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGu7IghXKO7UUEHhkX-e6VJNM12aTP7E_4wQrL6B7XkPWW1rt8y7Iy8KM1fmkEnoA3W_10jpVMbcsXmS5ymi6MssCXXjMjnHUDj375MsbHMtsgYhvbOPlx7eVGZWr4TbANfzlNtv95u2rJdoEQ7Q-AjSw5s4iDSPvoYrMdZTuQzKyaRgkfXhtA-9fr_YxovgDhWnU3_MbOnvDSW427sHFNkDNUava3wk4hme5iOSNayCca39qJ6He3yJLgP-YeTazMxm2p7h83Blhi" 
                alt="Chips de Pneu TDF" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 space-y-4 text-left">
              <h3 className="font-display text-xl lg:text-2xl font-bold text-primary dark:text-white text-left">{t.materials.chipsTitle}</h3>
              <p className="text-secondary dark:text-gray-400 text-xs lg:text-sm leading-relaxed text-left">
                {t.materials.chipsDesc}
              </p>

              <div className="bg-surface-container dark:bg-surface-container p-3 rounded-lg text-center space-y-0.5 text-left">
                <span className="block font-display text-xl lg:text-2xl font-extrabold text-primary dark:text-primary-container text-center">{t.materials.chipsCalorific}</span>
                <span className="block font-mono text-[9px] text-secondary dark:text-gray-400 uppercase tracking-wider text-center">{t.materials.chipsCalorificLabel}</span>
              </div>
            </div>
          </div>

          <div className="p-6 pt-0 text-left">
            <div className="p-4 bg-tertiary-container dark:bg-primary-fixed/10 text-white rounded-xl space-y-1 text-left">
              <h4 className="font-mono text-[10px] font-bold text-accent-mint dark:text-primary-container uppercase flex items-center gap-1 text-left">
                <Zap className="h-3.5 w-3.5" /> {t.materials.chipsFocusTitle}
              </h4>
              <p className="text-xs text-white/80 dark:text-gray-300 leading-relaxed text-left">
                {t.materials.chipsFocusDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Card 4: Aço de Pneu (Scrap) - 12 Col (Wide Layout, Dark Theme style) */}
        <div className="col-span-12 bg-primary text-white rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-2 text-left">
          <div className="p-6 lg:p-10 flex flex-col justify-center space-y-6 text-left">
            <span className="bg-primary-fixed text-primary px-3 py-1 text-xs font-mono font-bold rounded-full w-fit uppercase">
              {t.materials.steelTag}
            </span>
            <div className="space-y-3 text-left">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-white text-left">
                {t.materials.steelTitle}
              </h2>
              <p className="text-white/80 text-sm leading-relaxed text-left">
                {t.materials.steelDesc}
              </p>
            </div>

            <div className="flex gap-8 text-left">
              <div className="flex items-center gap-3 text-left">
                <ShieldCheck className="h-8 w-8 text-primary-fixed" />
                <div className="text-left">
                  <span className="block text-sm font-bold text-left">{t.materials.steelHighTraction}</span>
                  <span className="block text-xs text-white/60 font-mono text-[10px] text-left">{t.materials.steelHighTractionSub}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle2 className="h-8 w-8 text-primary-fixed" />
                <div className="text-left">
                  <span className="block text-sm font-bold text-left">{t.materials.steelRecyclable}</span>
                  <span className="block text-xs text-white/60 font-mono text-[10px] text-left">{t.materials.steelRecyclableSub}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[300px]">
            <img 
              ref={(el) => { if (el) el.referrerPolicy = "no-referrer" }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLLs_9ZRRFX23m4zOH9h79vGrKy3gitSxFlCnXiU6pkhXqfWMzZj2n9kI9ywhQk6h2ITargX8srzH56Laoz9M-xqL0ZtORfbQPNhu5r9qJchbrCnG7LY1-kyHtVikA3lLuu24sBxIRtgtVvAe11qfFms_r2xbInde-34gBl6RzmDy-BmYeHXvuS3rvdwl-NKP65d7hgZxp493Kow92-dLyfHpcF-xEJKMzKBAXDR_K9z9fMMNdgx3O6exmc41cL_LrfKsmpclfMAee" 
              alt="High Tensile Steel Scrap recovered from tyres" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
          </div>
        </div>

      </section>

      {/* Lab quality certificates & CoA commitments */}
      <section className="bg-surface-container-low dark:bg-surface-container border border-outline-variant/40 rounded-2xl p-6 lg:p-10 text-left transition-colors">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="font-display text-2xl lg:text-3.5xl font-bold text-primary dark:text-primary-container text-left">
              {t.materials.precisTitle}
            </h2>
            <p className="text-secondary dark:text-gray-400 text-sm lg:text-base leading-relaxed text-left">
              {t.materials.precisDesc}
            </p>

            <div className="flex flex-wrap gap-3 text-left">
              <span className="px-4 py-2 bg-white dark:bg-surface-container-lowest border border-outline-variant dark:border-surface-container-high rounded-full text-xs font-mono font-semibold text-primary dark:text-white flex items-center gap-1.5 shadow-sm text-left">
                <CheckCircle2 className="h-4 w-4 text-primary dark:text-primary-container" /> {t.materials.precisPoint1}
              </span>
              <span className="px-4 py-2 bg-white dark:bg-surface-container-lowest border border-outline-variant dark:border-surface-container-high rounded-full text-xs font-mono font-semibold text-primary dark:text-white flex items-center gap-1.5 shadow-sm text-left">
                <CheckCircle2 className="h-4 w-4 text-primary dark:text-primary-container" /> {t.materials.precisPoint2}
              </span>
              <span className="px-4 py-2 bg-white dark:bg-surface-container-lowest border border-outline-variant dark:border-surface-container-high rounded-full text-xs font-mono font-semibold text-primary dark:text-white flex items-center gap-1.5 shadow-sm text-left">
                <CheckCircle2 className="h-4 w-4 text-primary dark:text-primary-container" /> {t.materials.precisPoint3}
              </span>
            </div>
          </div>

          {/* Form inside the sheet */}
          <div className="lg:col-span-5 bg-white dark:bg-surface-container-low p-6 lg:p-8 rounded-xl border border-surface-container-highest dark:border-surface-container-high shadow-sm text-left">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="space-y-1 text-left">
                  <span className="block font-mono text-[10px] font-bold text-primary dark:text-primary-container uppercase text-left">Amostragem</span>
                  <h4 className="font-display text-lg font-bold text-primary dark:text-white text-left">{t.materials.formTitle}</h4>
                </div>

                <div className="space-y-3 font-sans text-xs text-left">
                  <div className="text-left">
                    <label className="block text-secondary dark:text-gray-400 font-semibold mb-1 text-left">{t.materials.selectMaterial}</label>
                    <select 
                      value={selectedMaterial} 
                      onChange={(e) => setSelectedMaterial(e.target.value)}
                      className="w-full bg-white dark:bg-surface-container border border-outline-variant rounded-lg p-2.5 text-primary dark:text-white text-xs focus:ring-1 focus:ring-primary focus:border-primary font-medium cursor-pointer"
                    >
                      <option>{t.materials.option1}</option>
                      <option>{t.materials.option2}</option>
                      <option>{t.materials.option3}</option>
                      <option>{t.materials.option4}</option>
                    </select>
                  </div>

                  <div className="text-left">
                    <label className="block text-secondary dark:text-gray-400 font-semibold mb-1 text-left">{t.materials.respName}</label>
                    <input 
                      type="text" 
                      required
                      placeholder={t.materials.placeholderName}
                      value={responsavelName}
                      onChange={(e) => setResponsavelName(e.target.value)}
                      className="w-full bg-white dark:bg-surface-container border border-outline-variant rounded-lg p-2.5 text-primary dark:text-white text-xs focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                    <div className="text-left">
                      <label className="block text-secondary dark:text-gray-400 font-semibold mb-1 text-left">{t.materials.companyName}</label>
                      <input 
                        type="text" 
                        required
                        placeholder={t.materials.placeholderCompany}
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                        className="w-full bg-white dark:bg-surface-container border border-outline-variant rounded-lg p-2.5 text-primary dark:text-white text-xs focus:ring-1 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div className="text-left">
                      <label className="block text-secondary dark:text-gray-400 font-semibold mb-1 text-left">{t.materials.emailWork}</label>
                      <input 
                        type="email" 
                        required
                        placeholder={t.materials.placeholderEmail}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white dark:bg-surface-container border border-outline-variant rounded-lg p-2.5 text-primary dark:text-white text-xs focus:ring-1 focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer hover:bg-primary-container"
                >
                  <Send className="h-4 w-4" /> {t.materials.sendBtn}
                </button>
              </form>
            ) : (
              <div className="text-center p-6 space-y-4 fade-in text-left">
                <CheckCircle2 className="h-14 w-14 text-green-600 mx-auto animate-bounce" />
                <div className="space-y-1 text-center">
                  <h4 className="font-display text-lg font-bold text-primary dark:text-white">{t.materials.formSuccessTitle}</h4>
                  <p className="text-secondary dark:text-gray-400 text-xs">
                    {t.materials.formSuccessSub.replace('{responsavelName}', responsavelName).replace('{empresa}', empresa)}
                  </p>
                </div>
                <p className="text-xs text-on-surface-variant dark:text-gray-300 leading-relaxed text-center">
                  {t.materials.formSuccessText.replace('{selectedMaterial}', selectedMaterial).replace('{email}', email)}
                </p>
                <button 
                  onClick={handleReset}
                  className="w-full bg-primary text-white py-2.5 rounded-lg text-xs font-semibold cursor-pointer text-center block"
                >
                  {t.materials.newRequestBtn}
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
