import React, { useState } from 'react';
import { Tab } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import MaterialsView from './components/MaterialsView';
import CommercialView from './components/CommercialView';
import SustainabilityView from './components/SustainabilityView';
import { useSettings } from './context/SettingsContext';
import { Mail, Phone, Building, User, FileText, Send, X, Info, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [salesModalOpen, setSalesModalOpen] = useState(false);
  const { t } = useSettings();
  const [infoModal, setInfoModal] = useState<{ open: boolean; title: string; content: string }>({
    open: false,
    title: '',
    content: ''
  });

  // Contact form state
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert(t.modalContact.errorAlert);
      return;
    }
    setIsSuccess(true);
  };

  const handleCloseContactModal = () => {
    setSalesModalOpen(false);
    setIsSuccess(false);
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const triggerInfoAlert = (title: string, content: string) => {
    setInfoModal({
      open: true,
      title,
      content
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-surface-container-low flex flex-col font-sans select-none antialiased text-primary dark:text-on-surface transition-colors duration-300">
      {/* Sticky header bar */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onContactClick={() => setSalesModalOpen(true)} 
      />

      {/* Main content viewport with desktop fluid boundaries */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Dynamic active screen renderer */}
        {activeTab === 'home' && (
          <HomeView 
            setActiveTab={setActiveTab} 
            onContactClick={() => setSalesModalOpen(true)}
            onInfoAlert={triggerInfoAlert}
          />
        )}
        {activeTab === 'materials' && (
          <MaterialsView 
            onContactClick={() => setSalesModalOpen(true)}
            onInfoAlert={triggerInfoAlert}
          />
        )}
        {activeTab === 'commercial' && (
          <CommercialView 
            onContactClick={() => setSalesModalOpen(true)}
            onInfoAlert={triggerInfoAlert}
          />
        )}
        {activeTab === 'sustainability' && (
          <SustainabilityView 
            onInfoAlert={triggerInfoAlert}
          />
        )}

      </main>

      {/* App footer */}
      <Footer 
        setActiveTab={setActiveTab} 
        onInfoAlert={triggerInfoAlert} 
      />

      {/* MODAL 1: Contact Sales Form (General Popup) */}
      {salesModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/70 backdrop-blur-sm fade-in">
          <div className="bg-white dark:bg-surface-container-low border border-surface-container-highest dark:border-surface-container-high rounded-2.5xl w-full max-w-lg overflow-hidden shadow-2xl relative text-primary dark:text-on-surface">
            <button 
              onClick={handleCloseContactModal}
              className="absolute right-4 top-4 p-2 text-secondary hover:bg-surface-container rounded-full transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleContactSubmit} className="p-6 lg:p-8 space-y-4">
                <div className="space-y-1">
                  <span className="text-primary font-mono text-[10px] font-bold uppercase tracking-widest block">{t.modalContact.tag}</span>
                  <h3 className="font-display text-2xl font-bold text-primary">{t.modalContact.title}</h3>
                  <p className="text-secondary text-xs">
                    {t.modalContact.sub}
                  </p>
                </div>

                <div className="space-y-3 font-sans text-xs text-primary dark:text-on-surface">
                  <div>
                    <label className="block text-secondary font-semibold mb-1">{t.modalContact.nameLabel}</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-secondary/60" />
                      <input 
                        type="text" 
                        required 
                        placeholder={t.modalContact.namePlaceholder}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white dark:bg-surface-container border border-outline-variant rounded-lg p-2.5 pl-10 text-xs focus:ring-1 focus:ring-primary focus:border-primary font-medium text-primary dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-secondary font-semibold mb-1">{t.modalContact.companyLabel}</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-secondary/60" />
                      <input 
                        type="text" 
                        placeholder={t.modalContact.companyPlaceholder}
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-white dark:bg-surface-container border border-outline-variant rounded-lg p-2.5 pl-10 text-xs focus:ring-1 focus:ring-primary text-primary dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-secondary font-semibold mb-1">{t.modalContact.emailLabel}</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-secondary/60" />
                        <input 
                          type="email" 
                          required 
                          placeholder={t.modalContact.emailPlaceholder}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white dark:bg-surface-container border border-outline-variant rounded-lg p-2.5 pl-10 text-xs focus:ring-1 focus:ring-primary text-primary dark:text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-secondary font-semibold mb-1">{t.modalContact.phoneLabel}</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-secondary/60" />
                        <input 
                          type="tel" 
                          placeholder={t.modalContact.phonePlaceholder}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-white dark:bg-surface-container border border-outline-variant rounded-lg p-2.5 pl-10 text-xs focus:ring-1 focus:ring-primary text-primary dark:text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-secondary font-semibold mb-1">{t.modalContact.messageLabel}</label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 h-4 w-4 text-secondary/60" />
                      <textarea 
                        placeholder={t.modalContact.messagePlaceholder}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-white dark:bg-surface-container border border-outline-variant rounded-lg p-2.5 pl-10 h-24 text-xs focus:ring-1 focus:ring-primary focus:border-primary font-medium text-primary dark:text-white"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-container text-white py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="h-4 w-4" /> {t.modalContact.submitBtn}
                </button>
              </form>
            ) : (
              <div className="p-8 text-center space-y-4 fade-in text-primary dark:text-on-surface">
                <CheckCircle2 className="h-14 w-14 text-green-600 mx-auto animate-bounce" />
                <h3 className="font-display text-xl font-bold text-primary">{t.modalContact.successTitle}</h3>
                <p className="text-secondary text-sm">
                  {t.modalContact.successSub.replace('{name}', name)}
                </p>
                <div className="bg-surface-container p-4 rounded-xl text-left text-xs space-y-1.5 text-secondary dark:text-on-surface-variant">
                  <p>• {t.modalContact.fieldCompany}: {company || '---'}</p>
                  <p>• {t.modalContact.fieldEmail}: {email}</p>
                  <p>• {t.modalContact.fieldPhone}: {phone || '---'}</p>
                </div>
                <p className="text-xs text-on-surface-variant italic">
                  {t.modalContact.successNotice}
                </p>
                <button
                  onClick={handleCloseContactModal}
                  className="w-full bg-primary text-white py-2.5 rounded-lg text-xs font-semibold cursor-pointer"
                >
                  {t.modalContact.concludeBtn}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL 2: Dynamic Ambient Information Dialog (Avoids raw javascript alert checks) */}
      {infoModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/70 backdrop-blur-sm fade-in">
          <div className="bg-white dark:bg-surface-container-low border border-surface-container-highest dark:border-surface-container-high rounded-2xl w-full max-w-md p-6 shadow-2xl relative text-primary dark:text-on-surface">
            <button 
              onClick={() => setInfoModal({ open: false, title: '', content: '' })}
              className="absolute right-4 top-4 p-2 text-secondary hover:bg-surface-container rounded-full transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 border-b border-surface-container pb-4 mb-4">
              <Info className="h-5 w-5 text-primary" />
              <h4 className="font-display font-bold text-base lg:text-lg">{infoModal.title}</h4>
            </div>

            <p className="text-secondary text-xs lg:text-sm leading-relaxed mb-6 font-sans">
              {infoModal.content}
            </p>

            <button
              onClick={() => setInfoModal({ open: false, title: '', content: '' })}
              className="w-full bg-primary text-white py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wide cursor-pointer"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
