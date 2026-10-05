export type VirtueKey =
  | 'ahlakli'
  | 'bilge'
  | 'cesaretli'
  | 'estetik'
  | 'iradeli'
  | 'merhametli'
  | 'saglikli'
  | 'sorgulayici'
  | 'uretken'
  | 'vatansever';

export interface VirtueDefinition {
  id: VirtueKey;
  title: string;
  tagline: string;
  definition: string;
  quote: {
    text: string;
    author: string;
  };
  color: string;
  lightBg: string;
  borderColor: string;
  iconName: string;
  keyIndicators: string[];
  rubricLevels: {
    level: number;
    title: string;
    description: string;
  }[];
}

export type TaskDifficulty = 'Basit' | 'Orta' | 'İleri';

export interface VirtueTask {
  id: string;
  virtueId: VirtueKey;
  title: string;
  description: string;
  actionGuide: string[];
  difficulty: TaskDifficulty;
  xpReward: number;
  completed: boolean;
  completedAt?: string;
  reflectionNote?: string;
}

export interface ScenarioChoice {
  id: string;
  text: string;
  virtueOutcome: {
    virtueKey: VirtueKey;
    scoreChange: number;
    explanation: string;
  };
  secondaryVirtueOutcome?: {
    virtueKey: VirtueKey;
    scoreChange: number;
    explanation: string;
  };
  feedback: string;
  isVirtuous: boolean;
}

export interface Scenario {
  id: string;
  virtueId: VirtueKey;
  title: string;
  context: string;
  situation: string;
  question: string;
  choices: ScenarioChoice[];
}

export interface RubricEvaluation {
  virtueId: VirtueKey;
  score: number; // 1 to 4
  notes?: string;
}

export interface JournalEntry {
  id: string;
  date: string;
  virtueId: VirtueKey;
  deedTitle: string;
  reflection: string;
  impactScore: number;
}

export interface UserProfile {
  name: string;
  school: string;
  grade: string;
  avatarSeed: string;
  completedTasks: string[];
  virtueScores: Record<VirtueKey, number>; // 0 to 100
  rubricRatings: Record<VirtueKey, number>; // 1 to 4
  journalEntries: JournalEntry[];
  certificateEarned: boolean;
  certificateDate?: string;
}
