import React, { useState } from 'react';
import { useVirtue } from '../context/VirtueContext';
import { VIRTUES_DATA } from '../data/virtuesData';
import { VirtueKey } from '../types/virtue';
import { Check, ClipboardList, UserCheck, Printer, ArrowRight, Award } from 'lucide-react';
import { playSound } from '../utils/sound';

export const AssessmentHub: React.FC = () => {
  const { profile, updateRubricRating, t, getVirtueInfo, soundEnabled } = useVirtue();
  const [assessmentTab, setAssessmentTab] = useState<'self' | 'peer_teacher'>('self');

  // Peer/Teacher Evaluation State
  const [observerRole, setObserverRole] = useState<'Öğretmen' | 'Veli' | 'Akran'>('Öğretmen');
  const [observerName, setObserverName] = useState('Mehmet Hoca');
  const [observerScores, setObserverScores] = useState<{ [key in VirtueKey]?: number }>({
    ahlakli: 4,
    bilge: 3,
    cesaretli: 3,
    estetik: 4,
    iradeli: 3,
    merhametli: 4,
    saglikli: 3,
    sorgulayici: 4,
    uretken: 3,
    vatansever: 4
  });
  const [observerComment, setObserverComment] = useState(
    'Öğrencinin okul ortamında arkadaşlarına karşı dürüst, nezaketli ve araştırmacı tavırları takdire şayandır.'
  );
  const [showObserverReport, setShowObserverReport] = useState(false);

  const virtueKeys = Object.keys(VIRTUES_DATA) as VirtueKey[];

  const handleRatingClick = (key: VirtueKey, lvl: number) => {
    if (soundEnabled) playSound.click();
    updateRubricRating(key, lvl);
  };

  const handleObserverScoreChange = (key: VirtueKey, val: number) => {
    if (soundEnabled) playSound.click();
    setObserverScores((prev) => ({ ...prev, [key]: val }));
  };

  const handlePrintObserverReport = () => {
    window.print();
  };

  return (
    <section id="degerlendirme" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-200 gap-4 text-left rtl:text-right">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
              <span>{t.assessment.kicker}</span>
              <span aria-hidden="true">·</span>
              <span>{t.assessment.subKicker}</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              {t.assessment.heading}
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              {t.assessment.desc}
            </p>
          </div>

          {/* Tab selector */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-xl text-xs font-medium self-start md:self-end border border-slate-300/60 shadow-2xs">
            <button
              onClick={() => {
                if (soundEnabled) playSound.click();
                setAssessmentTab('self');
              }}
              className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 ${
                assessmentTab === 'self'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ClipboardList className="w-3.5 h-3.5" />
              <span>{t.assessment.tabSelf}</span>
            </button>
            <button
              onClick={() => {
                if (soundEnabled) playSound.click();
                setAssessmentTab('peer_teacher');
              }}
              className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 ${
                assessmentTab === 'peer_teacher'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>{t.assessment.tabObserver}</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Self Assessment Rubric Matrix */}
        {assessmentTab === 'self' && (
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between shadow-2xs">
              <div>{t.assessment.instruction}</div>
            </div>

            <div className="space-y-4">
              {virtueKeys.map((key, index) => {
                const virtue = getVirtueInfo(key);
                const currentRating = profile.rubricRatings[key] || 2;

                return (
                  <div
                    key={key}
                    className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4 transition-all hover:border-slate-300 text-left rtl:text-right"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs text-slate-400 font-bold">
                          0{index + 1}.
                        </span>
                        <h3 className="font-bold text-slate-900 text-base" style={{ color: virtue.color }}>
                          {virtue.title}
                        </h3>
                        <span className="text-xs text-slate-500 hidden sm:inline">
                          — {virtue.tagline}
                        </span>
                      </div>

                      <div className="text-xs text-slate-500 flex items-center gap-2">
                        <span>{t.assessment.selectedLevel}</span>
                        <span className="font-semibold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-md">
                          {virtue.rubricLevels.find((l) => l.level === currentRating)?.title || 'Yetkin'}
                        </span>
                      </div>
                    </div>

                    {/* 4 Rubric Columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {virtue.rubricLevels.map((lvl) => {
                        const isSelected = currentRating === lvl.level;

                        return (
                          <div
                            key={lvl.level}
                            onClick={() => handleRatingClick(key, lvl.level)}
                            className={`p-4 rounded-xl border text-left rtl:text-right cursor-pointer transition-all flex flex-col justify-between active:scale-[0.98] select-none ${
                              isSelected
                                ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-900/15'
                                : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-slate-100/70 text-slate-700'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span
                                  className={`text-xs font-bold ${
                                    isSelected ? 'text-amber-400' : 'text-slate-900'
                                  }`}
                                >
                                  {lvl.level}: {lvl.title}
                                </span>
                                {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                              </div>
                              <p
                                className={`text-xs leading-relaxed ${
                                  isSelected ? 'text-slate-200' : 'text-slate-600'
                                }`}
                              >
                                {lvl.description}
                              </p>
                            </div>
                            <span
                              className={`text-[10px] mt-3 block font-semibold uppercase tracking-wider ${
                                isSelected ? 'text-amber-300' : 'text-slate-400'
                              }`}
                            >
                              {isSelected ? t.assessment.currentStatus : t.assessment.clickToSelect}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Peer / Teacher / Parent Observation Tool */}
        {assessmentTab === 'peer_teacher' && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 text-left rtl:text-right">
            <div className="max-w-2xl">
              <h3 className="font-cinzel text-xl font-bold text-slate-900">
                {t.assessment.observerHeading}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {t.assessment.observerDesc}
              </p>
            </div>

            {/* Observer Info Form */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.assessment.observerRole}
                </label>
                <select
                  value={observerRole}
                  onChange={(e) => setObserverRole(e.target.value as any)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-xl text-slate-900"
                >
                  <option value="Öğretmen">Öğretmen / Teacher / Enseignant</option>
                  <option value="Veli">Veli / Parent / Padre-Madre</option>
                  <option value="Akran">Akran / Peer / Camarade</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.assessment.observerName}
                </label>
                <input
                  type="text"
                  value={observerName}
                  onChange={(e) => setObserverName(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-xl text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.assessment.studentName}
                </label>
                <input
                  type="text"
                  disabled
                  value={`${profile.name} (${profile.grade})`}
                  className="w-full text-xs p-2.5 bg-slate-100 border border-slate-300 rounded-xl text-slate-600"
                />
              </div>
            </div>

            {/* 10 Virtues Rating Matrix */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                {t.assessment.observerScaleTitle}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {virtueKeys.map((key) => {
                  const virtue = getVirtueInfo(key);
                  const currentScore = observerScores[key] || 3;

                  return (
                    <div
                      key={key}
                      className="p-4 bg-slate-50 border border-slate-200/90 rounded-2xl flex items-center justify-between gap-4"
                    >
                      <div>
                        <span className="font-bold text-xs text-slate-900 block" style={{ color: virtue.color }}>
                          {virtue.title}
                        </span>
                        <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {virtue.keyIndicators[0]}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {[1, 2, 3, 4].map((pt) => (
                          <button
                            key={pt}
                            onClick={() => handleObserverScoreChange(key, pt)}
                            className={`w-8 h-8 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer active:scale-95 ${
                              currentScore === pt
                                ? 'bg-slate-900 text-white shadow-xs'
                                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            {pt}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Qualitative Comment */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700">
                {t.assessment.observerCommentLabel}
              </label>
              <textarea
                rows={3}
                value={observerComment}
                onChange={(e) => setObserverComment(e.target.value)}
                className="w-full text-xs p-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <button
                onClick={() => {
                  if (soundEnabled) playSound.click();
                  setShowObserverReport(!showObserverReport);
                }}
                className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all cursor-pointer flex items-center gap-2 active:scale-95"
              >
                <span>{showObserverReport ? t.assessment.closePreview : t.assessment.createReport}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </button>

              {showObserverReport && (
                <button
                  onClick={handlePrintObserverReport}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all cursor-pointer flex items-center gap-2 active:scale-95 shadow-xs"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{t.assessment.printReport}</span>
                </button>
              )}
            </div>

            {/* Rendered Printable Report Box */}
            {showObserverReport && (
              <div className="p-8 border-2 border-slate-900 bg-white rounded-2xl space-y-5 print:p-0 print:border-none shadow-md">
                <div className="text-center border-b border-slate-200 pb-5">
                  <span className="text-[11px] font-mono tracking-widest text-slate-500 uppercase">
                    {t.hero.kicker}
                  </span>
                  <h4 className="font-cinzel text-xl font-bold text-slate-900 mt-1">
                    {t.assessment.observerHeading}
                  </h4>
                  <div className="text-xs text-slate-500 mt-1">
                    {profile.name} · {profile.school} · {profile.grade}
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-xs">
                  {virtueKeys.map((k) => (
                    <div key={k} className="p-3 border border-slate-200 rounded-xl bg-slate-50 text-center">
                      <div className="font-bold text-slate-800">{getVirtueInfo(k).title}</div>
                      <div className="font-mono text-base font-bold text-slate-900 mt-1">
                        {observerScores[k] || 3} / 4
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-xs p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="font-bold text-slate-800 block mb-1">
                    {observerRole} ({observerName}):
                  </span>
                  <p className="text-slate-700 italic">"{observerComment}"</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
