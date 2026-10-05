import React from 'react';
import { useVirtue } from '../context/VirtueContext';
import { VIRTUES_DATA } from '../data/virtuesData';
import { Award, Printer, X } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  const { profile, overallVirtueIndex, completedTasksCount, totalTasksCount, t, getVirtueInfo, language } = useVirtue();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const localeMap: Record<string, string> = {
    ar: 'ar-SA',
    de: 'de-DE',
    en: 'en-US',
    fr: 'fr-FR',
    es: 'es-ES',
    tr: 'tr-TR'
  };
  const todayStr = new Date().toLocaleDateString(localeMap[language] || 'tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8 border border-slate-200">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between p-4 bg-slate-900 text-white print:hidden">
          <div className="flex items-center gap-2 text-xs font-medium">
            <Award className="w-4 h-4 text-amber-400" />
            <span>{t.certificate.title}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-semibold rounded-md transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.certificate.printBtn}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-md transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Certificate Printable Canvas */}
        <div className="p-8 sm:p-12 bg-[#fdfbf7] border-8 border-double border-amber-900/30 text-center relative select-none">
          <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-800" />
          <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-800" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-800" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-800" />

          {/* Header */}
          <div className="space-y-1 mb-6">
            <span className="text-[11px] font-mono tracking-[0.25em] text-amber-900 uppercase font-semibold">
              {t.certificate.subHeader}
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-wide">
              {t.certificate.certName}
            </h2>
            <div className="w-24 h-0.5 bg-amber-800 mx-auto mt-2" />
          </div>

          {/* Statement */}
          <p className="text-xs text-slate-600 max-w-lg mx-auto italic mb-4">
            {t.footer.tagline}
          </p>

          {/* Student Name */}
          <div className="my-6">
            <span className="text-xs text-slate-500 block uppercase tracking-wider">
              {t.certificate.presentedTo}
            </span>
            <div className="font-cinzel text-2xl sm:text-4xl font-bold text-slate-950 mt-1 tracking-tight">
              {profile.name}
            </div>
            <span className="text-xs text-slate-600 mt-1 block">
              {profile.school} — {profile.grade}
            </span>
          </div>

          {/* Achievement Summary */}
          <div className="max-w-md mx-auto my-6 p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-slate-800 space-y-2">
            <p>
              {t.certificate.summary} ({overallVirtueIndex}% — {completedTasksCount}/{totalTasksCount})
            </p>
          </div>

          {/* 10 Virtues Badges */}
          <div className="flex flex-wrap justify-center gap-1.5 max-w-xl mx-auto my-6 text-[10px] text-slate-700">
            {Object.keys(VIRTUES_DATA).map((k) => (
              <span
                key={k}
                className="px-2 py-0.5 bg-white border border-amber-300/80 rounded font-medium"
              >
                {getVirtueInfo(k as any).title}
              </span>
            ))}
          </div>

          {/* Signatures & Seal */}
          <div className="grid grid-cols-3 items-end pt-8 mt-6 border-t border-amber-900/20 text-xs text-slate-600">
            <div className="text-left rtl:text-right">
              <span className="block font-semibold text-slate-900">{t.certificate.date}</span>
              <span className="text-[11px] text-slate-500">{todayStr}</span>
            </div>

            {/* Seal Graphic */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-amber-800 bg-amber-100/60 flex items-center justify-center text-amber-900 shadow-xs">
                <div className="text-[9px] font-bold font-mono tracking-tighter text-center leading-tight whitespace-pre-line">
                  {t.certificate.seal}
                </div>
              </div>
            </div>

            <div className="text-right rtl:text-left">
              <span className="block font-semibold text-slate-900">{t.certificate.signature}</span>
              <span className="text-[11px] text-slate-500">{t.certificate.subHeader}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
