import React, { useState, useRef, useEffect } from 'react';
import { Award, User, Globe, ChevronDown, Check, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { useVirtue } from '../context/VirtueContext';
import { SUPPORTED_LANGUAGES } from '../types/i18n';
import { playSound } from '../utils/sound';

interface NavbarProps {
  onOpenCertificate: () => void;
  onOpenProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCertificate, onOpenProfile }) => {
  const { profile, overallVirtueIndex, language, setLanguage, soundEnabled, toggleSound, t } = useVirtue();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const currentLangObj = SUPPORTED_LANGUAGES.find(l => l.code === language) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = () => {
    if (soundEnabled) playSound.click();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element Brand Zone */}
        <a
          href="#"
          onClick={handleNavClick}
          className="font-cinzel text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2 group transition-transform active:scale-95"
        >
          <span className="group-hover:text-amber-700 transition-colors">{t.brand}</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a
            href="#gorevler"
            onClick={handleNavClick}
            className="hover:text-slate-950 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-slate-900 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            {t.nav.quests}
          </a>
          <a
            href="#ikilemler"
            onClick={handleNavClick}
            className="hover:text-slate-950 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-slate-900 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            {t.nav.dilemmas}
          </a>
          <a
            href="#degerlendirme"
            onClick={handleNavClick}
            className="hover:text-slate-950 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-slate-900 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            {t.nav.assessment}
          </a>
          <a
            href="#radar"
            onClick={handleNavClick}
            className="hover:text-slate-950 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-slate-900 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            {t.nav.radar}
          </a>
          <a
            href="#gunluk"
            onClick={handleNavClick}
            className="hover:text-slate-950 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-slate-900 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            {t.nav.journal}
          </a>
        </nav>

        {/* Zone 3: Actions + Sound + Language Selector */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Sound Mute/Unmute Toggle */}
          <button
            onClick={toggleSound}
            className="p-2 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors"
            title={soundEnabled ? 'Sesi Kapat / Mute Sounds' : 'Sesi Aç / Enable Sounds'}
            aria-label="Sound Toggle"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-emerald-600" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {/* Language Selector Dropdown */}
          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => {
                if (soundEnabled) playSound.click();
                setIsLangMenuOpen(!isLangMenuOpen);
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors"
              title="Dil Seçimi / Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>{currentLangObj.flag}</span>
              <span className="font-mono uppercase font-semibold text-[11px]">
                {currentLangObj.code}
              </span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {isLangMenuOpen && (
              <div className="absolute right-0 rtl:left-0 rtl:right-auto mt-2 w-36 bg-white border border-slate-200 rounded-xl shadow-lg p-1.5 z-50 text-xs space-y-0.5">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      if (soundEnabled) playSound.click();
                      setLanguage(lang.code);
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left rtl:text-right transition-colors ${
                      language === lang.code
                        ? 'bg-slate-900 text-white font-medium'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.nativeName}</span>
                    </span>
                    {language === lang.code && <Check className="w-3.5 h-3.5 text-amber-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => {
              if (soundEnabled) playSound.click();
              onOpenCertificate();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 rounded-lg transition-colors whitespace-nowrap active:scale-95"
          >
            <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="hidden sm:inline">{t.nav.certificate}</span>
          </button>

          <button
            onClick={() => {
              if (soundEnabled) playSound.click();
              onOpenProfile();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap active:scale-95 shadow-xs"
          >
            <User className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">{profile.name}</span>
            <span className="font-mono text-amber-400 font-semibold tabular-nums ml-0.5">
              %{overallVirtueIndex}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
