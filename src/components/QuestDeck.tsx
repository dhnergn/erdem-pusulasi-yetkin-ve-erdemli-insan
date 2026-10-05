import React, { useState } from 'react';
import { useVirtue } from '../context/VirtueContext';
import { VirtueTask } from '../types/virtue';
import { CheckCircle2, Circle, ChevronDown, ChevronUp, Check, Sparkles, AlertCircle } from 'lucide-react';
import { playSound } from '../utils/sound';

export const QuestDeck: React.FC = () => {
  const {
    tasks,
    activeVirtueFilter,
    setActiveVirtueFilter,
    completeTask,
    toggleTask,
    t,
    getVirtueInfo,
    soundEnabled
  } = useVirtue();

  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'completed'>('all');
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);
  const [reflectionInput, setReflectionInput] = useState<{ [id: string]: string }>({});

  const filteredTasks = tasks.filter(task => {
    if (activeVirtueFilter !== 'all' && task.virtueId !== activeVirtueFilter) {
      return false;
    }
    if (statusFilter === 'pending' && task.completed) return false;
    if (statusFilter === 'completed' && !task.completed) return false;
    return true;
  });

  const handleToggle = (task: VirtueTask) => {
    if (soundEnabled) {
      if (!task.completed) playSound.chime();
      else playSound.click();
    }
    toggleTask(task.id);
  };

  const handleCompleteWithReflection = (task: VirtueTask) => {
    const note = reflectionInput[task.id] || '';
    if (soundEnabled) playSound.chime();
    completeTask(task.id, note);
  };

  const getDifficultyDots = (diff: string) => {
    if (diff === 'Basit' || diff === 'Novice' || diff === 'Anfänger' || diff === 'Débutant' || diff === 'Principiante') {
      return (
        <span className="inline-flex items-center gap-0.5" title="Seviye: Basit">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
        </span>
      );
    }
    if (diff === 'Orta' || diff === 'Developing' || diff === 'In Entwicklung' || diff === 'En développement' || diff === 'En desarrollo') {
      return (
        <span className="inline-flex items-center gap-0.5" title="Seviye: Orta">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-0.5" title="Seviye: İleri">
        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
      </span>
    );
  };

  return (
    <section id="gorevler" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-100 gap-4 text-left rtl:text-right">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
              <span>{t.quests.kicker}</span>
              <span aria-hidden="true">·</span>
              <span>{t.quests.subKicker}</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              {t.quests.heading}
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              {t.quests.desc}
            </p>
          </div>

          {/* Segmented controls for Status */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl text-xs font-medium self-start md:self-end border border-slate-200/60 shadow-2xs">
            <button
              onClick={() => {
                if (soundEnabled) playSound.click();
                setStatusFilter('all');
              }}
              className={`px-3 py-1.5 rounded-lg transition-all active:scale-95 ${
                statusFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.quests.filterAll}
            </button>
            <button
              onClick={() => {
                if (soundEnabled) playSound.click();
                setStatusFilter('pending');
              }}
              className={`px-3 py-1.5 rounded-lg transition-all active:scale-95 ${
                statusFilter === 'pending'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.quests.filterPending}
            </button>
            <button
              onClick={() => {
                if (soundEnabled) playSound.click();
                setStatusFilter('completed');
              }}
              className={`px-3 py-1.5 rounded-lg transition-all active:scale-95 ${
                statusFilter === 'completed'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.quests.filterCompleted}
            </button>
          </div>
        </div>

        {/* Active filter notification banner */}
        {activeVirtueFilter !== 'all' && (
          <div className="mb-6 p-3 bg-amber-50/60 border border-amber-200/80 rounded-xl flex items-center justify-between text-xs text-amber-900">
            <span>
              {t.quests.activeFilterNote} <strong>{getVirtueInfo(activeVirtueFilter)?.title}</strong>
            </span>
            <button
              onClick={() => {
                if (soundEnabled) playSound.click();
                setActiveVirtueFilter('all');
              }}
              className="text-amber-950 font-bold underline hover:text-amber-800 ml-4 rtl:mr-4 rtl:ml-0 cursor-pointer"
            >
              {t.quests.clearFilter}
            </button>
          </div>
        )}

        {/* Task Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTasks.map((task) => {
            const virtue = getVirtueInfo(task.virtueId);
            const isExpanded = expandedTaskId === task.id;

            return (
              <div
                key={task.id}
                className={`rounded-2xl border transition-all text-left rtl:text-right overflow-hidden ${
                  task.completed
                    ? 'bg-slate-50/60 border-emerald-200/80'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md'
                }`}
              >
                <div className="p-5 sm:p-6">
                  {/* Metadata Row: Zero-pill discipline with visual indicator */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-800" style={{ color: virtue.color }}>
                        {virtue.title}
                      </span>
                      <span aria-hidden="true">·</span>
                      <div className="flex items-center gap-1.5">
                        {getDifficultyDots(task.difficulty)}
                        <span>{task.difficulty}</span>
                      </div>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-amber-700 font-semibold">+{task.xpReward} {t.quests.xpReward}</span>
                    </div>

                    {task.completed && (
                      <span className="text-emerald-700 font-semibold flex items-center gap-1 text-[11px] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        <Check className="w-3.5 h-3.5" /> {t.quests.completed}
                      </span>
                    )}
                  </div>

                  {/* Task Title & Action Checkbox */}
                  <div className="flex items-start gap-3.5">
                    <button
                      onClick={() => handleToggle(task)}
                      className="mt-0.5 text-slate-400 hover:text-emerald-600 transition-transform active:scale-90 shrink-0 cursor-pointer"
                      title={task.completed ? 'Geri al' : 'Tamamla'}
                    >
                      {task.completed ? (
                        <CheckCircle2 className="w-6 h-6 text-emerald-600 animate-in zoom-in-50" />
                      ) : (
                        <Circle className="w-6 h-6 text-slate-300 hover:text-slate-500" />
                      )}
                    </button>

                    <div className="flex-1">
                      <h3
                        className={`text-base font-semibold tracking-tight transition-colors ${
                          task.completed ? 'line-through text-slate-400' : 'text-slate-900'
                        }`}
                      >
                        {task.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                        {task.description}
                      </p>
                    </div>
                  </div>

                  {/* Completed reflection note if exists */}
                  {task.reflectionNote && (
                    <div className="mt-4 p-3.5 bg-emerald-50/70 border border-emerald-200/80 rounded-xl text-xs text-emerald-950 leading-relaxed shadow-2xs">
                      <span className="font-semibold block mb-0.5 text-emerald-800">{t.quests.yourReflection}</span>
                      "{task.reflectionNote}"
                    </div>
                  )}

                  {/* Expand button for action steps & reflection editor */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <button
                      onClick={() => {
                        if (soundEnabled) playSound.click();
                        setExpandedTaskId(isExpanded ? null : task.id);
                      }}
                      className="text-slate-600 hover:text-slate-900 font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? t.quests.hideSteps : t.quests.showSteps}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {!task.completed && (
                      <button
                        onClick={() => {
                          if (soundEnabled) playSound.click();
                          setExpandedTaskId(task.id);
                        }}
                        className="text-slate-900 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        <span>{t.quests.reflectAndComplete}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Expanded Action Checklist & Reflection Box */}
                {isExpanded && (
                  <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 rounded-b-2xl space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                        {t.quests.actionGuide}
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {task.actionGuide.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-md bg-white border border-slate-200 text-slate-600 font-mono text-[11px] font-bold flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <span className="pt-0.5 leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {!task.completed ? (
                      <div className="space-y-2.5 pt-3 border-t border-slate-200">
                        <div className="flex items-center justify-between text-xs">
                          <label className="font-semibold text-slate-800">
                            {t.quests.yourReflection}
                          </label>
                          <span className="text-[11px] text-slate-400 font-mono">
                            {(reflectionInput[task.id] || '').length} / 250
                          </span>
                        </div>
                        <textarea
                          rows={2}
                          maxLength={250}
                          value={reflectionInput[task.id] || ''}
                          onChange={(e) =>
                            setReflectionInput({
                              ...reflectionInput,
                              [task.id]: e.target.value
                            })
                          }
                          placeholder="Bugün bu görevi yaparken ne öğrendin, sana ve çevrene ne kattı?"
                          className="w-full text-xs p-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 text-slate-900 shadow-2xs"
                        />
                        <div className="flex justify-end gap-2 pt-1">
                          <button
                            onClick={() => handleCompleteWithReflection(task)}
                            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>{t.quests.completeButton} (+{task.xpReward} XP)</span>
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredTasks.length === 0 && (
          <div className="text-center py-12 bg-slate-50 border border-slate-200 rounded-2xl">
            <p className="text-sm text-slate-600">{t.quests.emptyNote}</p>
            <button
              onClick={() => {
                if (soundEnabled) playSound.click();
                setActiveVirtueFilter('all');
                setStatusFilter('all');
              }}
              className="mt-3 text-xs font-semibold text-slate-900 underline cursor-pointer"
            >
              {t.quests.clearFilter}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
