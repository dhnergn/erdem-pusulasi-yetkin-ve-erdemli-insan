import React from 'react';
import { useVirtue } from '../context/VirtueContext';

export const Footer: React.FC = () => {
  const { t } = useVirtue();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-left rtl:text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <span className="font-cinzel text-lg font-bold text-white block">
              {t.brand}
            </span>
            <p className="text-xs text-slate-400 mt-1 max-w-md">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a href="#gorevler" className="hover:text-white transition-colors">
              {t.nav.quests}
            </a>
            <a href="#ikilemler" className="hover:text-white transition-colors">
              {t.nav.dilemmas}
            </a>
            <a href="#degerlendirme" className="hover:text-white transition-colors">
              {t.nav.assessment}
            </a>
            <a href="#radar" className="hover:text-white transition-colors">
              {t.nav.radar}
            </a>
            <a href="#gunluk" className="hover:text-white transition-colors">
              {t.nav.journal}
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            {t.footer.copyright}
          </div>
          <div>
            © {new Date().getFullYear()} {t.brand}
          </div>
        </div>
      </div>
    </footer>
  );
};
