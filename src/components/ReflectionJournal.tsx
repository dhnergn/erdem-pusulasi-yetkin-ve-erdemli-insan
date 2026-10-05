import React, { useState } from 'react';
import { useVirtue } from '../context/VirtueContext';
import { VIRTUES_DATA } from '../data/virtuesData';
import { VirtueKey } from '../types/virtue';
import { BookOpen, Plus, Sparkles, Calendar, Check, Search, Filter } from 'lucide-react';
import { playSound } from '../utils/sound';

export const ReflectionJournal: React.FC = () => {
  const { profile, addJournalEntry, t, getVirtueInfo, soundEnabled } = useVirtue();
  const [selectedVirtue, setSelectedVirtue] = useState<VirtueKey>('ahlakli');
  const [deedTitle, setDeedTitle] = useState('');
  const [reflectionText, setReflectionText] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const virtueKeys = Object.keys(VIRTUES_DATA) as VirtueKey[];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!deedTitle.trim() || !reflectionText.trim()) return;

    if (soundEnabled) playSound.chime();
    addJournalEntry(selectedVirtue, deedTitle.trim(), reflectionText.trim());
    setDeedTitle('');
    setReflectionText('');
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const filteredEntries = profile.journalEntries.filter((entry) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const virtue = getVirtueInfo(entry.virtueId);
    return (
      entry.deedTitle.toLowerCase().includes(q) ||
      entry.reflection.toLowerCase().includes(q) ||
      virtue.title.toLowerCase().includes(q)
    );
  });

  return (
    <section id="gunluk" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 text-left rtl:text-right">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
            <span>{t.journal.kicker}</span>
            <span aria-hidden="true">·</span>
            <span>{t.journal.subKicker}</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            {t.journal.heading}
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            {t.journal.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* New Entry Form (Left 5 cols) */}
          <div className="lg:col-span-5 bg-slate-50/80 border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs text-left rtl:text-right">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Plus className="w-4 h-4 text-slate-600" />
              <span>{t.journal.addNew}</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {t.journal.selectVirtue}
                </label>
                <select
                  value={selectedVirtue}
                  onChange={(e) => setSelectedVirtue(e.target.value as VirtueKey)}
                  className="w-full text-xs p-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 shadow-2xs"
                >
                  {virtueKeys.map((key) => {
                    const v = getVirtueInfo(key);
                    return (
                      <option key={key} value={key}>
                        {v.title} — {v.tagline}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {t.journal.deedTitle}
                </label>
                <input
                  type="text"
                  required
                  placeholder="Örn: Sınıf arkadaşıma yardım ettim"
                  value={deedTitle}
                  onChange={(e) => setDeedTitle(e.target.value)}
                  className="w-full text-xs p-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 shadow-2xs"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5 text-xs">
                  <label className="font-semibold text-slate-700">
                    {t.journal.reflectionText}
                  </label>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {reflectionText.length} / 300
                  </span>
                </div>
                <textarea
                  rows={4}
                  required
                  maxLength={300}
                  placeholder="Bu davranışı yaparken ne hissettin? Çevrene ve kendine ne kattı?"
                  value={reflectionText}
                  onChange={(e) => setReflectionText(e.target.value)}
                  className="w-full text-xs p-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 shadow-2xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{t.journal.saveBtn}</span>
              </button>

              {isSuccess && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2 animate-in fade-in-50">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t.journal.successMsg}</span>
                </div>
              )}
            </form>
          </div>

          {/* Past Entries Log (Right 7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-left rtl:text-right">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-100 gap-3">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                {t.journal.pastEntries} ({profile.journalEntries.length})
              </span>

              {/* Search Bar for journal */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 rtl:right-2.5 rtl:left-auto top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Kayıtlarda ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="text-xs pl-8 rtl:pr-8 rtl:pl-2.5 pr-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>
            </div>

            {filteredEntries.length === 0 ? (
              <div className="text-center py-12 bg-slate-50 border border-slate-200 rounded-2xl">
                <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-xs text-slate-600">{t.journal.emptyLog}</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[520px] overflow-y-auto pr-1">
                {filteredEntries.map((entry) => {
                  const virtue = getVirtueInfo(entry.virtueId);

                  return (
                    <div
                      key={entry.id}
                      className="p-5 bg-white border border-slate-200 rounded-2xl shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all"
                    >
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold" style={{ color: virtue.color }}>
                            {virtue.title}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-slate-400" />
                            <span>{entry.date}</span>
                          </span>
                        </div>

                        <span className="font-mono text-emerald-600 font-bold text-[11px] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/80">
                          +{entry.impactScore} XP
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 mb-1">
                        {entry.deedTitle}
                      </h4>

                      <p className="text-xs text-slate-600 leading-relaxed italic">
                        "{entry.reflection}"
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
