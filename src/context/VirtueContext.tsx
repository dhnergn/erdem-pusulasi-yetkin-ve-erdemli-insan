import React, { createContext, useContext, useState, useEffect } from 'react';
import { VirtueKey, VirtueTask, UserProfile, JournalEntry, VirtueDefinition } from '../types/virtue';
import { Language, SUPPORTED_LANGUAGES } from '../types/i18n';
import { INITIAL_TASKS, VIRTUES_DATA } from '../data/virtuesData';
import { UI_TRANSLATIONS, VIRTUE_TRANSLATIONS, UiTranslations, LocalizedVirtueInfo } from '../data/translations';
import { playSound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface VirtueContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  t: UiTranslations;
  getVirtueInfo: (key: VirtueKey) => VirtueDefinition & LocalizedVirtueInfo;
  profile: UserProfile;
  tasks: VirtueTask[];
  activeVirtueFilter: VirtueKey | 'all';
  setActiveVirtueFilter: (filter: VirtueKey | 'all') => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  completeTask: (taskId: string, reflectionNote?: string) => void;
  toggleTask: (taskId: string, reflectionNote?: string) => void;
  updateRubricRating: (virtueId: VirtueKey, rating: number) => void;
  addJournalEntry: (virtueId: VirtueKey, deedTitle: string, reflection: string) => void;
  applyScenarioOutcome: (virtueKey: VirtueKey, delta: number, secondary?: { virtueKey: VirtueKey; delta: number }) => void;
  overallVirtueIndex: number;
  completedTasksCount: number;
  totalTasksCount: number;
  calculateVirtueLevel: (virtueKey: VirtueKey) => { levelName: string; progress: number; score: number };
  resetAllData: () => void;
}

const DEFAULT_PROFILE: UserProfile = {
  name: 'Ahmet Eren',
  school: 'Cumhuriyet Anadolu Lisesi',
  grade: '10-A',
  avatarSeed: 'erdem-ogrenci',
  completedTasks: [
    'task-ahlakli-1',
    'task-bilge-1',
    'task-estetik-1',
    'task-iradeli-1',
    'task-merhametli-1',
    'task-saglikli-1',
    'task-sorgulayici-1',
    'task-uretken-1',
    'task-vatansever-1'
  ],
  virtueScores: {
    ahlakli: 75,
    bilge: 68,
    cesaretli: 55,
    estetik: 62,
    iradeli: 70,
    merhametli: 82,
    saglikli: 78,
    sorgulayici: 64,
    uretken: 58,
    vatansever: 80
  },
  rubricRatings: {
    ahlakli: 3,
    bilge: 3,
    cesaretli: 2,
    estetik: 3,
    iradeli: 3,
    merhametli: 4,
    saglikli: 3,
    sorgulayici: 3,
    uretken: 2,
    vatansever: 4
  },
  journalEntries: [
    {
      id: 'entry-1',
      date: '2026-10-04',
      virtueId: 'merhametli',
      deedTitle: 'Sokak kedilerine su ve mama ulaştırma',
      reflection: 'Havanın soğumasıyla titreyen minik canlar için kapımızın önüne korunaklı bir yuva yaptık. Onların minik lokmaları yerkenki huzuru içimi ısıttı.',
      impactScore: 15
    },
    {
      id: 'entry-2',
      date: '2026-10-03',
      virtueId: 'iradeli',
      deedTitle: 'Sınav öncesi bildirimleri sessize alma',
      reflection: 'Oyun turnuvasına katılma isteğime rağmen hedefime sadık kaldım ve 2 saat kesintisiz geometri çalıştım.',
      impactScore: 12
    },
    {
      id: 'entry-3',
      date: '2026-10-02',
      virtueId: 'sorgulayici',
      deedTitle: 'Grupta paylaşılan yanıltıcı görseli teyit ettim',
      reflection: 'Görselin 4 yıl öncesine ait montaj olduğunu tespit edip arkadaşlarıma doğru kaynağı paylaştım.',
      impactScore: 14
    }
  ],
  certificateEarned: false
};

const VirtueContext = createContext<VirtueContextType | undefined>(undefined);

export const VirtueProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem('erdem_lang_v1') as Language;
      if (savedLang && ['tr', 'en', 'de', 'ar', 'fr', 'es'].includes(savedLang)) return savedLang;
    } catch {
      // ignore
    }
    return 'tr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('erdem_lang_v1', lang);
    } catch {
      // ignore
    }
    // Update HTML dir and lang
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('erdem_profile_v1');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return DEFAULT_PROFILE;
  });

  const [tasks, setTasks] = useState<VirtueTask[]>(() => {
    try {
      const saved = localStorage.getItem('erdem_tasks_v1');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_TASKS;
  });

  const [activeVirtueFilter, setActiveVirtueFilter] = useState<VirtueKey | 'all'>('all');

  useEffect(() => {
    try {
      localStorage.setItem('erdem_profile_v1', JSON.stringify(profile));
    } catch {
      // ignore
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem('erdem_tasks_v1', JSON.stringify(tasks));
    } catch {
      // ignore
    }
  }, [tasks]);

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('erdem_sound_v1');
      return saved !== 'false';
    } catch {
      return true;
    }
  });

  const toggleSound = () => {
    setSoundEnabled(prev => {
      const next = !prev;
      try {
        localStorage.setItem('erdem_sound_v1', String(next));
      } catch {
        // ignore
      }
      if (next) playSound.click();
      return next;
    });
  };

  const triggerCelebration = () => {
    if (soundEnabled) {
      playSound.chime();
    }
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#0284c7', '#059669', '#d97706', '#dc2626', '#7c3aed']
      });
    } catch {
      // ignore if unavailable
    }
  };

  const completeTask = (taskId: string, reflectionNote?: string) => {
    const targetTask = tasks.find(t => t.id === taskId);
    if (!targetTask) return;

    setTasks(prev =>
      prev.map(t =>
        t.id === taskId
          ? {
              ...t,
              completed: true,
              completedAt: new Date().toISOString(),
              reflectionNote: reflectionNote || t.reflectionNote
            }
          : t
      )
    );

    setProfile(prev => {
      const currentScore = prev.virtueScores[targetTask.virtueId] || 50;
      const newScore = Math.min(100, currentScore + Math.round(targetTask.xpReward / 3));
      const updatedCompleted = prev.completedTasks.includes(taskId)
        ? prev.completedTasks
        : [...prev.completedTasks, taskId];

      return {
        ...prev,
        completedTasks: updatedCompleted,
        virtueScores: {
          ...prev.virtueScores,
          [targetTask.virtueId]: newScore
        }
      };
    });

    triggerCelebration();
  };

  const toggleTask = (taskId: string, reflectionNote?: string) => {
    const targetTask = tasks.find(t => t.id === taskId);
    if (!targetTask) return;

    if (targetTask.completed) {
      setTasks(prev =>
        prev.map(t =>
          t.id === taskId
            ? { ...t, completed: false, completedAt: undefined }
            : t
        )
      );
      setProfile(prev => ({
        ...prev,
        completedTasks: prev.completedTasks.filter(id => id !== taskId)
      }));
    } else {
      completeTask(taskId, reflectionNote);
    }
  };

  const updateRubricRating = (virtueId: VirtueKey, rating: number) => {
    setProfile(prev => {
      const newRatings = { ...prev.rubricRatings, [virtueId]: rating };
      const currentScore = prev.virtueScores[virtueId] || 50;
      const targetScore = rating * 24 + 4; // 1->28, 2->52, 3->76, 4->100
      const smoothedScore = Math.round((currentScore + targetScore) / 2);

      return {
        ...prev,
        rubricRatings: newRatings,
        virtueScores: {
          ...prev.virtueScores,
          [virtueId]: Math.min(100, Math.max(10, smoothedScore))
        }
      };
    });
  };

  const addJournalEntry = (virtueId: VirtueKey, deedTitle: string, reflection: string) => {
    const newEntry: JournalEntry = {
      id: 'entry-' + Date.now(),
      date: new Date().toISOString().split('T')[0],
      virtueId,
      deedTitle,
      reflection,
      impactScore: 10
    };

    setProfile(prev => {
      const current = prev.virtueScores[virtueId] || 50;
      return {
        ...prev,
        journalEntries: [newEntry, ...prev.journalEntries],
        virtueScores: {
          ...prev.virtueScores,
          [virtueId]: Math.min(100, current + 6)
        }
      };
    });

    triggerCelebration();
  };

  const applyScenarioOutcome = (
    virtueKey: VirtueKey,
    delta: number,
    secondary?: { virtueKey: VirtueKey; delta: number }
  ) => {
    setProfile(prev => {
      const currentPrimary = prev.virtueScores[virtueKey] || 50;
      const updatedPrimary = Math.min(100, Math.max(10, currentPrimary + delta));
      const updatedScores = { ...prev.virtueScores, [virtueKey]: updatedPrimary };

      if (secondary) {
        const currentSec = prev.virtueScores[secondary.virtueKey] || 50;
        updatedScores[secondary.virtueKey] = Math.min(100, Math.max(10, currentSec + secondary.delta));
      }

      return {
        ...prev,
        virtueScores: updatedScores
      };
    });
  };

  const resetAllData = () => {
    setProfile(DEFAULT_PROFILE);
    setTasks(INITIAL_TASKS);
    localStorage.removeItem('erdem_profile_v1');
    localStorage.removeItem('erdem_tasks_v1');
  };

  const virtueKeys: VirtueKey[] = [
    'ahlakli',
    'bilge',
    'cesaretli',
    'estetik',
    'iradeli',
    'merhametli',
    'saglikli',
    'sorgulayici',
    'uretken',
    'vatansever'
  ];

  const overallVirtueIndex = Math.round(
    virtueKeys.reduce((acc, k) => acc + (profile.virtueScores[k] || 0), 0) / virtueKeys.length
  );

  const completedTasksCount = tasks.filter(t => t.completed).length;
  const totalTasksCount = tasks.length;

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.tr;

  const getVirtueInfo = (key: VirtueKey): VirtueDefinition & LocalizedVirtueInfo => {
    const base = VIRTUES_DATA[key];
    const loc = VIRTUE_TRANSLATIONS[language]?.[key] || VIRTUE_TRANSLATIONS.tr[key];
    return {
      ...base,
      ...loc
    };
  };

  const calculateVirtueLevel = (virtueKey: VirtueKey) => {
    const score = profile.virtueScores[virtueKey] || 0;
    const loc = VIRTUE_TRANSLATIONS[language]?.[virtueKey]?.levels || VIRTUE_TRANSLATIONS.tr[virtueKey].levels;

    if (score >= 85) return { levelName: loc.l4, progress: score, score };
    if (score >= 65) return { levelName: loc.l3, progress: score, score };
    if (score >= 40) return { levelName: loc.l2, progress: score, score };
    return { levelName: loc.l1, progress: score, score };
  };

  return (
    <VirtueContext.Provider
      value={{
        language,
        setLanguage,
        soundEnabled,
        toggleSound,
        t,
        getVirtueInfo,
        profile,
        tasks,
        activeVirtueFilter,
        setActiveVirtueFilter,
        updateProfile,
        completeTask,
        toggleTask,
        updateRubricRating,
        addJournalEntry,
        applyScenarioOutcome,
        overallVirtueIndex,
        completedTasksCount,
        totalTasksCount,
        calculateVirtueLevel,
        resetAllData
      }}
    >
      {children}
    </VirtueContext.Provider>
  );
};

export const useVirtue = () => {
  const context = useContext(VirtueContext);
  if (!context) throw new Error('useVirtue must be used within a VirtueProvider');
  return context;
};
