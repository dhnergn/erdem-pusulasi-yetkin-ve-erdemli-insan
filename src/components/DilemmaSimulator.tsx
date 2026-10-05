import React, { useState } from 'react';
import { SCENARIOS_DATA } from '../data/scenariosData';
import { useVirtue } from '../context/VirtueContext';
import { ScenarioChoice } from '../types/virtue';
import { HelpCircle, CheckCircle, AlertCircle, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { playSound } from '../utils/sound';

export const DilemmaSimulator: React.FC = () => {
  const { applyScenarioOutcome, t, getVirtueInfo, soundEnabled } = useVirtue();
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [submittedFeedback, setSubmittedFeedback] = useState<ScenarioChoice | null>(null);

  const currentScenario = SCENARIOS_DATA[selectedScenarioIndex];
  const virtueInfo = getVirtueInfo(currentScenario.virtueId);

  const handleSelectChoice = (choice: ScenarioChoice) => {
    if (submittedFeedback) return;
    if (soundEnabled) playSound.click();
    setSelectedChoiceId(choice.id);
  };

  const handleSubmitDecision = () => {
    if (!selectedChoiceId) return;
    const choice = currentScenario.choices.find(c => c.id === selectedChoiceId);
    if (!choice) return;

    if (soundEnabled) {
      if (choice.isVirtuous) playSound.chime();
      else playSound.click();
    }

    setSubmittedFeedback(choice);
    applyScenarioOutcome(
      choice.virtueOutcome.virtueKey,
      choice.virtueOutcome.scoreChange,
      choice.secondaryVirtueOutcome
        ? {
            virtueKey: choice.secondaryVirtueOutcome.virtueKey,
            delta: choice.secondaryVirtueOutcome.scoreChange
          }
        : undefined
    );
  };

  const handleNextScenario = () => {
    if (soundEnabled) playSound.click();
    setSelectedChoiceId(null);
    setSubmittedFeedback(null);
    setSelectedScenarioIndex((prev) => (prev + 1) % SCENARIOS_DATA.length);
  };

  const handleResetCurrent = () => {
    if (soundEnabled) playSound.click();
    setSelectedChoiceId(null);
    setSubmittedFeedback(null);
  };

  return (
    <section id="ikilemler" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 text-left rtl:text-right">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
            <span>{t.dilemmas.kicker}</span>
            <span aria-hidden="true">·</span>
            <span>{t.dilemmas.subKicker}</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            {t.dilemmas.heading}
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            {t.dilemmas.desc}
          </p>
        </div>

        {/* Two-Zone Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Scenario Directory (Left 4 cols) */}
          <div className="lg:col-span-4 space-y-2.5 text-left rtl:text-right">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                {t.dilemmas.sampleList}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {selectedScenarioIndex + 1}/{SCENARIOS_DATA.length}
              </span>
            </div>

            {SCENARIOS_DATA.map((scen, idx) => {
              const isCurrent = idx === selectedScenarioIndex;
              const v = getVirtueInfo(scen.virtueId);

              return (
                <button
                  key={scen.id}
                  onClick={() => {
                    if (soundEnabled) playSound.click();
                    setSelectedScenarioIndex(idx);
                    setSelectedChoiceId(null);
                    setSubmittedFeedback(null);
                  }}
                  className={`w-full text-left rtl:text-right p-4 rounded-xl border transition-all flex items-start justify-between cursor-pointer active:scale-[0.98] ${
                    isCurrent
                      ? 'bg-white border-slate-900 shadow-md ring-2 ring-slate-900/10 -translate-y-0.5'
                      : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div>
                    <span className="text-[11px] font-semibold block" style={{ color: v.color }}>
                      {v.title}
                    </span>
                    <h3 className="text-xs font-bold text-slate-900 mt-0.5 line-clamp-1">
                      {scen.title}
                    </h3>
                    <span className="text-[11px] text-slate-500 block mt-0.5">{scen.context}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-bold shrink-0 ml-2 rtl:mr-2 rtl:ml-0">
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Dilemma Card (Right 8 cols) */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm text-left rtl:text-right">
            {/* Metadata Bar */}
            <div className="flex items-center justify-between text-xs text-slate-500 pb-4 mb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: virtueInfo.color }} />
                <span className="font-semibold text-slate-900" style={{ color: virtueInfo.color }}>
                  {virtueInfo.title}
                </span>
                <span aria-hidden="true">·</span>
                <span>{currentScenario.context}</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-xs">
                {SCENARIOS_DATA.map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === selectedScenarioIndex ? 'bg-slate-900 w-4' : 'bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Scenario Title & Story */}
            <div className="space-y-3 mb-6">
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-900">
                {currentScenario.title}
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-2xs">
                {currentScenario.situation}
              </p>
            </div>

            {/* Question prompt */}
            <div className="mb-4">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{currentScenario.question}</span>
              </h4>
            </div>

            {/* Choices List */}
            <div className="space-y-3 mb-6">
              {currentScenario.choices.map((choice) => {
                const isSelected = selectedChoiceId === choice.id;
                const isSubmitted = !!submittedFeedback;

                return (
                  <div
                    key={choice.id}
                    onClick={() => handleSelectChoice(choice)}
                    className={`p-4 rounded-xl border text-sm transition-all cursor-pointer select-none active:scale-[0.99] ${
                      isSelected
                        ? 'border-slate-900 bg-slate-50/90 ring-2 ring-slate-900/10 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                    } ${isSubmitted ? 'cursor-default pointer-events-none' : ''}`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? 'border-slate-900 bg-slate-900 text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <span className="text-slate-800 leading-relaxed font-normal">{choice.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Submit / Reset Actions */}
            {!submittedFeedback ? (
              <div className="flex justify-end">
                <button
                  disabled={!selectedChoiceId}
                  onClick={handleSubmitDecision}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition-all shadow-xs active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>{t.dilemmas.evaluateDecision}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            ) : (
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-4 animate-in fade-in-50">
                <div className="flex items-start gap-3.5">
                  {submittedFeedback.isVirtuous ? (
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                  )}
                  <div>
                    <h5 className="font-bold text-sm text-slate-900">
                      {submittedFeedback.isVirtuous
                        ? t.dilemmas.virtuousTitle
                        : t.dilemmas.growthTitle}
                    </h5>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {submittedFeedback.feedback}
                    </p>
                  </div>
                </div>

                {/* Score Impacts */}
                <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-500">{t.dilemmas.affectedVirtue}</span>
                    <span className="font-semibold text-slate-900">
                      {getVirtueInfo(submittedFeedback.virtueOutcome.virtueKey)?.title}
                    </span>
                    <span
                      className={`font-mono font-bold ${
                        submittedFeedback.virtueOutcome.scoreChange >= 0
                          ? 'text-emerald-600'
                          : 'text-rose-600'
                      }`}
                    >
                      {submittedFeedback.virtueOutcome.scoreChange >= 0 ? '+' : ''}
                      {submittedFeedback.virtueOutcome.scoreChange} XP
                    </span>
                  </div>

                  {submittedFeedback.secondaryVirtueOutcome && (
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500">{t.dilemmas.secondaryImpact}</span>
                      <span className="font-semibold text-slate-900">
                        {getVirtueInfo(submittedFeedback.secondaryVirtueOutcome.virtueKey)?.title}
                      </span>
                      <span className="font-mono font-bold text-emerald-600">
                        +{submittedFeedback.secondaryVirtueOutcome.scoreChange} XP
                      </span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={handleResetCurrent}
                    className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1 font-medium cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{t.dilemmas.tryDifferent}</span>
                  </button>

                  <button
                    onClick={handleNextScenario}
                    className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs active:scale-95 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{t.dilemmas.nextScenario}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
