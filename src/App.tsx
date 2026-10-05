import React, { useState } from 'react';
import { VirtueProvider, useVirtue } from './context/VirtueContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VirtueStrip } from './components/VirtueStrip';
import { QuestDeck } from './components/QuestDeck';
import { DilemmaSimulator } from './components/DilemmaSimulator';
import { VirtueRadar } from './components/VirtueRadar';
import { AssessmentHub } from './components/AssessmentHub';
import { InteractiveMiniLab } from './components/InteractiveMiniLab';
import { ReflectionJournal } from './components/ReflectionJournal';
import { Footer } from './components/Footer';
import { CertificateModal } from './components/CertificateModal';
import { ProfileModal } from './components/ProfileModal';
import { VirtueDetailModal } from './components/VirtueDetailModal';
import { VirtueKey } from './types/virtue';

const AppContent: React.FC = () => {
  const { setActiveVirtueFilter } = useVirtue();
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedDetailVirtue, setSelectedDetailVirtue] = useState<VirtueKey | null>(null);

  const scrollToQuests = () => {
    document.getElementById('gorevler')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRubric = () => {
    document.getElementById('degerlendirme')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGoToTasks = (key: VirtueKey) => {
    setActiveVirtueFilter(key);
    scrollToQuests();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* 3-Zone Navigation Header */}
      <Navbar
        onOpenCertificate={() => setIsCertificateOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Editorial Hero */}
        <HeroSection
          onStartQuests={scrollToQuests}
          onOpenRubric={scrollToRubric}
        />

        {/* 10 Virtues Interactive Overview & Filter Strip */}
        <VirtueStrip
          onSelectVirtueDetail={(key) => setSelectedDetailVirtue(key)}
        />

        {/* Interactive Quests for All 10 Virtues */}
        <QuestDeck />

        {/* Ethical Dilemmas & Decision Simulator */}
        <DilemmaSimulator />

        {/* 10-Dimensional Virtue Radar Chart */}
        <VirtueRadar />

        {/* Assessment Hub: Self Rubric & Peer/Teacher Observation */}
        <AssessmentHub />

        {/* Interactive Educational Mini-Labs */}
        <InteractiveMiniLab />

        {/* Reflection Journal & Daily Deed Logger */}
        <ReflectionJournal />
      </main>

      {/* Clean Footer */}
      <Footer />

      {/* Modals */}
      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      <VirtueDetailModal
        virtueKey={selectedDetailVirtue}
        onClose={() => setSelectedDetailVirtue(null)}
        onGoToTasks={handleGoToTasks}
      />
    </div>
  );
};

export default function App() {
  return (
    <VirtueProvider>
      <AppContent />
    </VirtueProvider>
  );
}
