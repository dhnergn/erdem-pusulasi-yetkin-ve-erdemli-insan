import React from 'react';
import { VirtueKey } from '../types/virtue';
import { VIRTUES_DATA } from '../data/virtuesData';
import { useVirtue } from '../context/VirtueContext';
import { playSound } from '../utils/sound';
import {
  Scale,
  BookOpen,
  ShieldAlert,
  Sparkles,
  Compass,
  HeartHandshake,
  Activity,
  HelpCircle,
  Wrench,
  Flag
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Scale,
  BookOpen,
  ShieldAlert,
  Sparkles,
  Compass,
  HeartHandshake,
  Activity,
  HelpCircle,
  Wrench,
  Flag
};

interface VirtueStripProps {
  onSelectVirtueDetail: (key: VirtueKey) => void;
}

export const VirtueStrip: React.FC<VirtueStripProps> = ({ onSelectVirtueDetail }) => {
  const { profile, activeVirtueFilter, setActiveVirtueFilter, t, getVirtueInfo, calculateVirtueLevel, soundEnabled } = useVirtue();
  const virtueKeys = Object.keys(VIRTUES_DATA) as VirtueKey[];

  return (
    <section className="bg-slate-50/80 py-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-7 gap-3 text-left rtl:text-right">
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
              {t.strip.title}
            </span>
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              {t.strip.heading}
            </h2>
          </div>

          {/* Interactive filter toggle for tasks */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 font-medium">{t.strip.filterLabel}</span>
            <button
              onClick={() => {
                if (soundEnabled) playSound.click();
                setActiveVirtueFilter('all');
              }}
              className={`px-3.5 py-1.5 font-medium rounded-lg transition-all active:scale-95 ${
                activeVirtueFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              {t.strip.filterAll}
            </button>
          </div>
        </div>

        {/* 10-Item Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
          {virtueKeys.map((key, index) => {
            const virtue = getVirtueInfo(key);
            const Icon = ICON_MAP[virtue.iconName] || Compass;
            const score = profile.virtueScores[key] || 0;
            const isActive = activeVirtueFilter === key;
            const levelInfo = calculateVirtueLevel(key);

            return (
              <div
                key={key}
                onClick={() => {
                  if (soundEnabled) playSound.click();
                  setActiveVirtueFilter(activeVirtueFilter === key ? 'all' : key);
                }}
                className={`group relative p-4 rounded-xl transition-all duration-200 cursor-pointer border text-left rtl:text-right flex flex-col justify-between select-none active:scale-[0.98] ${
                  isActive
                    ? 'bg-white border-slate-900 ring-2 ring-slate-900/15 shadow-md -translate-y-0.5'
                    : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-2xs"
                      style={{ backgroundColor: virtue.lightBg, color: virtue.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="text-right rtl:text-left">
                      <span className="font-mono text-xs font-bold tabular-nums text-slate-800 block">
                        {score}%
                      </span>
                      <span className="text-[10px] text-slate-400 block font-medium">
                        {levelInfo.levelName}
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] text-slate-400 block font-mono">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <h3 className="font-semibold text-slate-900 text-sm tracking-tight group-hover:text-amber-800 transition-colors">
                    {virtue.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {virtue.tagline}
                  </p>
                </div>

                <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden mr-2 rtl:ml-2 rtl:mr-0">
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${score}%`,
                        backgroundColor: virtue.color
                      }}
                    />
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (soundEnabled) playSound.click();
                      onSelectVirtueDetail(key);
                    }}
                    className="text-slate-400 hover:text-slate-900 font-medium shrink-0 ml-1 rtl:mr-1 rtl:ml-0 underline underline-offset-2 transition-colors"
                  >
                    {t.strip.inspect}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
