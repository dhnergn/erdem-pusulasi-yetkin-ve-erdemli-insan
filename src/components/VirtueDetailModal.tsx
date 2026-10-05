import React from 'react';
import { VirtueKey } from '../types/virtue';
import { useVirtue } from '../context/VirtueContext';
import { X, Quote, CheckCircle, ArrowRight } from 'lucide-react';

interface VirtueDetailModalProps {
  virtueKey: VirtueKey | null;
  onClose: () => void;
  onGoToTasks: (key: VirtueKey) => void;
}

export const VirtueDetailModal: React.FC<VirtueDetailModalProps> = ({
  virtueKey,
  onClose,
  onGoToTasks
}) => {
  const { profile, getVirtueInfo, t } = useVirtue();

  if (!virtueKey) return null;
  const virtue = getVirtueInfo(virtueKey);
  const score = profile.virtueScores[virtueKey] || 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto text-left rtl:text-right">
        {/* Top Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 uppercase tracking-wider mb-1">
              <span>{t.strip.inspect}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono font-semibold text-slate-800">
                %{score}
              </span>
            </div>
            <h3 className="font-cinzel text-2xl font-bold text-slate-900" style={{ color: virtue.color }}>
              {virtue.title}
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">{virtue.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Definition & Quote */}
        <div className="space-y-4">
          <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            {virtue.definition}
          </p>

          {/* Quote Card */}
          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 flex items-start gap-3">
            <Quote className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-amber-950 font-medium italic">
                "{virtue.quote.text}"
              </p>
              <span className="text-[11px] text-amber-800 font-semibold block mt-1">
                — {virtue.quote.author}
              </span>
            </div>
          </div>
        </div>

        {/* Key Indicators */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            {t.assessment.kicker}
          </h4>
          <ul className="space-y-2 text-xs text-slate-700">
            {virtue.keyIndicators.map((ind, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{ind}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 4 Rubric Levels */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            {t.assessment.tabSelf}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {virtue.rubricLevels.map((lvl) => (
              <div key={lvl.level} className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="font-bold text-slate-900 mb-1">
                  {lvl.level}: {lvl.title}
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  {lvl.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            onClick={onClose}
            className="text-xs text-slate-600 hover:text-slate-900 font-medium"
          >
            Kapat
          </button>

          <button
            onClick={() => {
              onGoToTasks(virtueKey);
              onClose();
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <span>{virtue.title}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};
