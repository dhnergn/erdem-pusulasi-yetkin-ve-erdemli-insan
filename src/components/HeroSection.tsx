import React from 'react';
import { ArrowRight, Compass, Sparkles, BookOpen } from 'lucide-react';
import { useVirtue } from '../context/VirtueContext';
import { playSound } from '../utils/sound';

interface HeroSectionProps {
  onStartQuests: () => void;
  onOpenRubric: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartQuests, onOpenRubric }) => {
  const { overallVirtueIndex, completedTasksCount, totalTasksCount, t, getVirtueInfo, soundEnabled } = useVirtue();

  // Daily Virtue Spotlight (e.g. Bilge or Merhametli)
  const dailyVirtue = getVirtueInfo('bilge');

  const handleStart = () => {
    if (soundEnabled) playSound.click();
    onStartQuests();
  };

  const handleRubric = () => {
    if (soundEnabled) playSound.click();
    onOpenRubric();
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left rtl:text-right">
            <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>{t.hero.kicker}</span>
              <span aria-hidden="true">·</span>
              <span>{t.hero.subKicker}</span>
            </div>

            <h1
              className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.18]"
              style={{ textWrap: 'balance' }}
            >
              {t.hero.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {t.hero.desc}
            </p>

            {/* Quick Metrics */}
            <div className="pt-3 pb-3 flex flex-wrap items-center gap-6 sm:gap-8 border-y border-slate-200/80 text-slate-600">
              <div className="transition-transform hover:-translate-y-0.5">
                <span className="block text-2xl sm:text-3xl font-bold font-mono text-slate-900 tabular-nums">10</span>
                <span className="text-xs text-slate-500">{t.hero.statVirtues}</span>
              </div>
              <div className="w-px h-8 bg-slate-200" aria-hidden="true" />
              <div className="transition-transform hover:-translate-y-0.5">
                <span className="block text-2xl sm:text-3xl font-bold font-mono text-emerald-600 tabular-nums">
                  {completedTasksCount} / {totalTasksCount}
                </span>
                <span className="text-xs text-slate-500">{t.hero.statCompleted}</span>
              </div>
              <div className="w-px h-8 bg-slate-200" aria-hidden="true" />
              <div className="transition-transform hover:-translate-y-0.5">
                <span className="block text-2xl sm:text-3xl font-bold font-mono text-amber-600 tabular-nums">
                  %{overallVirtueIndex}
                </span>
                <span className="text-xs text-slate-500">{t.hero.statIndex}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleStart}
                className="px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-sm hover:shadow transition-all flex items-center gap-2 group active:scale-95 cursor-pointer"
              >
                <span>{t.hero.startQuests}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleRubric}
                className="px-6 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-all shadow-2xs hover:shadow-xs flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-slate-500" />
                <span>{t.hero.selfRubric}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Frame with Daily Spotlight */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/90 bg-slate-900 aspect-video lg:aspect-[4/3] group">
              <img
                src="/src/assets/images/hero_erdem_egitim_1791207901225.jpg"
                alt="Erdem ve Bilgelik Eğitimi"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div
                style={{ display: 'none' }}
                className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 p-8 flex-col justify-between text-white"
              >
                <div className="flex items-center justify-between">
                  <Compass className="w-8 h-8 text-amber-400" />
                  <span className="font-mono text-xs text-amber-200">{t.hero.visualBadge}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-cinzel text-xl font-bold">{t.hero.title}</h3>
                  <p className="text-xs text-slate-300">{t.hero.visualDesc}</p>
                </div>
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-6 pointer-events-none">
                <div className="text-white space-y-1">
                  <span className="text-[11px] font-mono text-amber-300 uppercase tracking-widest">
                    {t.hero.visualBadge}
                  </span>
                  <p className="text-sm font-medium text-slate-100">
                    {t.hero.visualDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Daily Wisdom Pill / Interactive Callout */}
            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs flex items-start gap-3 text-xs text-left rtl:text-right">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900">{dailyVirtue.title}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="text-slate-500 italic">"{dailyVirtue.quote.text}"</span>
                </div>
                <span className="text-[11px] text-slate-400 block">— {dailyVirtue.quote.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
