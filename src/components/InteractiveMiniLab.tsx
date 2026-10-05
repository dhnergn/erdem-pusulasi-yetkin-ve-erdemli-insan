import React, { useState } from 'react';
import { useVirtue } from '../context/VirtueContext';
import { Sparkles, Play, Pause, RotateCcw, ShieldCheck, Copy, Check, Heart, ShieldAlert } from 'lucide-react';
import { playSound } from '../utils/sound';

export const InteractiveMiniLab: React.FC = () => {
  const { applyScenarioOutcome, t, soundEnabled } = useVirtue();
  const [activeTool, setActiveTool] = useState<'factCheck' | 'gracefulLanguage' | 'pomodoro' | 'healthWheel'>('factCheck');

  // Fact Check Detective state
  const [factCriteria, setFactCriteria] = useState({
    sourceVerified: false,
    dateCurrent: false,
    noEmotionalClickbait: false,
    primaryDataChecked: false,
    visualAuthentic: false
  });
  const [factVerdictGiven, setFactVerdictGiven] = useState(false);

  // Graceful Language state
  const [inputText, setInputText] = useState('Bunu yanlış yapmışsın, baştan yap.');
  const [gracefulOutput, setGracefulOutput] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // Pomodoro Focus Timer state
  const [focusSeconds, setFocusSeconds] = useState(25 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [temptationsResisted, setTemptationsResisted] = useState(0);

  // Health Wheel state
  const [healthValues, setHealthValues] = useState({
    sleep: 8,
    water: 2.5,
    steps: 8000,
    screenTime: 2
  });

  const factScore = Object.values(factCriteria).filter(Boolean).length * 20;

  const handleEvaluateFact = () => {
    if (soundEnabled) {
      if (factScore >= 80) playSound.chime();
      else playSound.click();
    }
    setFactVerdictGiven(true);
    if (factScore >= 80) {
      applyScenarioOutcome('sorgulayici', 15);
    }
  };

  const transformLanguage = () => {
    if (soundEnabled) playSound.chime();
    const raw = inputText.toLowerCase();
    let transformed = '';

    if (raw.includes('yanlış') || raw.includes('baştan') || raw.includes('wrong') || raw.includes('faux')) {
      transformed =
        '“Emeklerine sağlık, çok güzel bir gayret. Şu kısımdaki detayı birlikte gözden geçirsek eserin çok daha mükemmel hale gelebilir mi?”';
    } else if (raw.includes('sus') || raw.includes('kes') || raw.includes('quiet') || raw.includes('tais-toi')) {
      transformed =
        '“Fikrini dinlemeyi çok isterim; ancak birbirimizi sırayla ve incelikle dinlersek meseleyi çok daha hayırlı şekilde çözebiliriz.”';
    } else {
      transformed = `“Nezaket ve zarafet diliyle: Söz konusu durumu karşılıklı hürmet, tebessüm ve yapıcı bir üslupla değerlendirelim: ${inputText}”`;
    }

    setGracefulOutput(transformed);
    applyScenarioOutcome('estetik', 10);
  };

  const copyToClipboard = () => {
    if (!gracefulOutput) return;
    navigator.clipboard.writeText(gracefulOutput);
    setIsCopied(true);
    if (soundEnabled) playSound.click();
    setTimeout(() => setIsCopied(false), 2000);
  };

  React.useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && focusSeconds > 0) {
      interval = setInterval(() => {
        setFocusSeconds((prev) => prev - 1);
      }, 1000);
    } else if (focusSeconds === 0) {
      setIsTimerRunning(false);
      if (soundEnabled) playSound.success();
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, focusSeconds, soundEnabled]);

  const formatTimer = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const timerProgressPercent = ((25 * 60 - focusSeconds) / (25 * 60)) * 100;

  const sleepScore = Math.min(100, (healthValues.sleep / 8) * 100);
  const waterScore = Math.min(100, (healthValues.water / 2.5) * 100);
  const stepsScore = Math.min(100, (healthValues.steps / 10000) * 100);
  const screenScore = Math.max(0, 100 - (healthValues.screenTime - 2) * 25);
  const totalHealthScore = Math.round((sleepScore + waterScore + stepsScore + screenScore) / 4);

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-100 gap-4 text-left rtl:text-right">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
              <span>{t.workshop.kicker}</span>
              <span aria-hidden="true">·</span>
              <span>{t.workshop.subKicker}</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              {t.workshop.heading}
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              {t.workshop.desc}
            </p>
          </div>

          {/* Tool Selector Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100/90 border border-slate-200 rounded-xl text-xs font-medium shadow-2xs">
            <button
              onClick={() => {
                if (soundEnabled) playSound.click();
                setActiveTool('factCheck');
              }}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer active:scale-95 ${
                activeTool === 'factCheck'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.workshop.tabFact}
            </button>
            <button
              onClick={() => {
                if (soundEnabled) playSound.click();
                setActiveTool('gracefulLanguage');
              }}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer active:scale-95 ${
                activeTool === 'gracefulLanguage'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.workshop.tabGrace}
            </button>
            <button
              onClick={() => {
                if (soundEnabled) playSound.click();
                setActiveTool('pomodoro');
              }}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer active:scale-95 ${
                activeTool === 'pomodoro'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.workshop.tabFocus}
            </button>
            <button
              onClick={() => {
                if (soundEnabled) playSound.click();
                setActiveTool('healthWheel');
              }}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer active:scale-95 ${
                activeTool === 'healthWheel'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.workshop.tabHealth}
            </button>
          </div>
        </div>

        {/* TOOL 1: Fact Check Detective */}
        {activeTool === 'factCheck' && (
          <div className="bg-slate-50/80 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 text-left rtl:text-right shadow-xs">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider block">
                {t.workshop.tabFact}
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                {t.workshop.factHeading}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {t.workshop.factDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="p-4 sm:p-5 bg-white border border-slate-200/90 rounded-2xl flex items-start gap-3.5 cursor-pointer hover:border-slate-300 transition-all shadow-2xs select-none">
                <input
                  type="checkbox"
                  checked={factCriteria.sourceVerified}
                  onChange={(e) => {
                    if (soundEnabled) playSound.click();
                    setFactCriteria({ ...factCriteria, sourceVerified: e.target.checked });
                  }}
                  className="mt-1 w-4 h-4 rounded text-slate-900 focus:ring-slate-900 accent-slate-900"
                />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">
                    1. Birincil Resmi Kaynak Teyidi
                  </span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block leading-relaxed">
                    İddia eden kurumun resmi bülteninde veya sitesinde var mı?
                  </span>
                </div>
              </label>

              <label className="p-4 sm:p-5 bg-white border border-slate-200/90 rounded-2xl flex items-start gap-3.5 cursor-pointer hover:border-slate-300 transition-all shadow-2xs select-none">
                <input
                  type="checkbox"
                  checked={factCriteria.dateCurrent}
                  onChange={(e) => {
                    if (soundEnabled) playSound.click();
                    setFactCriteria({ ...factCriteria, dateCurrent: e.target.checked });
                  }}
                  className="mt-1 w-4 h-4 rounded text-slate-900 focus:ring-slate-900 accent-slate-900"
                />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">
                    2. Zaman ve Tarih Güncelliği
                  </span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block leading-relaxed">
                    Olay güncel mi, yoksa bağlamından koparılmış eski bir görüntü mü?
                  </span>
                </div>
              </label>

              <label className="p-4 sm:p-5 bg-white border border-slate-200/90 rounded-2xl flex items-start gap-3.5 cursor-pointer hover:border-slate-300 transition-all shadow-2xs select-none">
                <input
                  type="checkbox"
                  checked={factCriteria.noEmotionalClickbait}
                  onChange={(e) => {
                    if (soundEnabled) playSound.click();
                    setFactCriteria({
                      ...factCriteria,
                      noEmotionalClickbait: e.target.checked
                    });
                  }}
                  className="mt-1 w-4 h-4 rounded text-slate-900 focus:ring-slate-900 accent-slate-900"
                />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">
                    3. Duygusal Kışkırtma ve Tıklama Tuzağı
                  </span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block leading-relaxed">
                    Öfke veya panik aşılayarak sansasyon yaratmaya mı çalışıyor?
                  </span>
                </div>
              </label>

              <label className="p-4 sm:p-5 bg-white border border-slate-200/90 rounded-2xl flex items-start gap-3.5 cursor-pointer hover:border-slate-300 transition-all shadow-2xs select-none">
                <input
                  type="checkbox"
                  checked={factCriteria.visualAuthentic}
                  onChange={(e) => {
                    if (soundEnabled) playSound.click();
                    setFactCriteria({ ...factCriteria, visualAuthentic: e.target.checked });
                  }}
                  className="mt-1 w-4 h-4 rounded text-slate-900 focus:ring-slate-900 accent-slate-900"
                />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">
                    4. Görsel Manipülasyon Analizi
                  </span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block leading-relaxed">
                    Fotoğrafta montaj, yapay zeka bozulması veya çarpıtma var mı?
                  </span>
                </div>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-slate-600">{t.workshop.factScore}</span>
                <span className="font-mono text-xl font-bold text-slate-900">
                  %{factScore}
                </span>
                <div className="w-28 bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      factScore >= 80 ? 'bg-emerald-500' : 'bg-amber-500'
                    }`}
                    style={{ width: `${factScore}%` }}
                  />
                </div>
              </div>

              <button
                onClick={handleEvaluateFact}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs active:scale-95 flex items-center gap-2 cursor-pointer self-start sm:self-auto"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{t.workshop.factComplete}</span>
              </button>
            </div>

            {factVerdictGiven && (
              <div
                className={`p-5 rounded-2xl border text-xs leading-relaxed flex items-start gap-3 animate-in fade-in-50 ${
                  factScore >= 80
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                    : 'bg-amber-50/80 border-amber-200 text-amber-950'
                }`}
              >
                {factScore >= 80 ? (
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <strong className="block mb-0.5 font-bold">
                    {factScore >= 80 ? 'Güvenilir Bilgi Onayı:' : 'Şüpheli Dezenformasyon Uyarısı:'}
                  </strong>
                  <span>
                    {factScore >= 80
                      ? 'Tebrikler! Haberin tüm kritik teyit kriterlerini sağladığını doğruladın (+15 XP).'
                      : 'Dikkat! Bu haber kritik teyit testlerini geçemedi. Resmi teyit olmadan kesinlikle yaymayın.'}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TOOL 2: Graceful Language */}
        {activeTool === 'gracefulLanguage' && (
          <div className="bg-slate-50/80 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 text-left rtl:text-right shadow-xs">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                {t.workshop.tabGrace}
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                {t.workshop.graceHeading}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {t.workshop.graceDesc}
              </p>
            </div>

            <div className="space-y-3">
              {/* Presets to test */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-500 font-medium">Hızlı Örnekler:</span>
                {[
                  'Bunu yanlış yapmışsın, baştan yap.',
                  'Sus artık, konuşma.',
                  'Bana ne, senin sorunun.'
                ].map((preset, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (soundEnabled) playSound.click();
                      setInputText(preset);
                    }}
                    className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-[11px] text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors"
                  >
                    "{preset}"
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="flex-1 text-xs p-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 shadow-2xs"
                />
                <button
                  onClick={transformLanguage}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs active:scale-95 flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{t.workshop.graceTransformBtn}</span>
                </button>
              </div>
            </div>

            {gracefulOutput && (
              <div className="p-5 sm:p-6 bg-white border border-amber-200/90 rounded-2xl space-y-3 shadow-xs animate-in fade-in-50">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-amber-900 uppercase font-bold tracking-wider">
                    {t.workshop.graceOutputTitle}
                  </span>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Kopyalandı' : 'Kopyala'}</span>
                  </button>
                </div>
                <p className="text-sm sm:text-base font-medium text-slate-900 italic leading-relaxed">
                  {gracefulOutput}
                </p>
              </div>
            )}
          </div>
        )}

        {/* TOOL 3: Pomodoro Focus Timer */}
        {activeTool === 'pomodoro' && (
          <div className="bg-slate-50/80 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 text-left rtl:text-right shadow-xs">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                {t.workshop.tabFocus}
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                {t.workshop.focusHeading}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {t.workshop.focusDesc}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-8 bg-white border border-slate-200 rounded-2xl space-y-6 shadow-2xs">
              {/* Circular Gauge Presentation */}
              <div className="relative w-48 h-48 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="84"
                    stroke="#f1f5f9"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="84"
                    stroke="#059669"
                    strokeWidth="8"
                    strokeDasharray={527.7}
                    strokeDashoffset={527.7 - (527.7 * timerProgressPercent) / 100}
                    strokeLinecap="round"
                    fill="none"
                    className="transition-all duration-1000 ease-linear"
                  />
                </svg>

                <div className="absolute flex flex-col items-center">
                  <span className="font-mono text-4xl sm:text-5xl font-bold text-slate-900 tabular-nums">
                    {formatTimer(focusSeconds)}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-1 uppercase font-semibold">
                    {isTimerRunning ? 'Odaklanıyor...' : 'Beklemede'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    if (soundEnabled) playSound.click();
                    setIsTimerRunning(!isTimerRunning);
                  }}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isTimerRunning ? t.workshop.focusPause : t.workshop.focusStart}</span>
                </button>

                <button
                  onClick={() => {
                    if (soundEnabled) playSound.click();
                    setIsTimerRunning(false);
                    setFocusSeconds(25 * 60);
                  }}
                  className="p-2.5 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                  title="Sıfırla"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-4 border-t border-slate-100 w-full flex items-center justify-between text-xs">
                <span className="text-slate-500">
                  {t.workshop.temptationsResisted} <strong className="text-slate-900">{temptationsResisted}</strong>
                </span>
                <button
                  onClick={() => {
                    if (soundEnabled) playSound.chime();
                    setTemptationsResisted((p) => p + 1);
                    applyScenarioOutcome('iradeli', 5);
                  }}
                  className="px-3.5 py-1.5 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 rounded-lg transition-colors cursor-pointer active:scale-95"
                >
                  {t.workshop.resistedBtn}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TOOL 4: Health Wheel */}
        {activeTool === 'healthWheel' && (
          <div className="bg-slate-50/80 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 text-left rtl:text-right shadow-xs">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                {t.workshop.tabHealth}
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                {t.workshop.healthHeading}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {t.workshop.healthDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-2xs">
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-700">{t.workshop.healthSleep}</span>
                    <span className="font-mono text-slate-900 font-bold">{healthValues.sleep} h</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="11"
                    step="0.5"
                    value={healthValues.sleep}
                    onChange={(e) =>
                      setHealthValues({ ...healthValues, sleep: parseFloat(e.target.value) })
                    }
                    className="w-full accent-slate-900 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-700">{t.workshop.healthWater}</span>
                    <span className="font-mono text-slate-900 font-bold">{healthValues.water} L</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="4.0"
                    step="0.25"
                    value={healthValues.water}
                    onChange={(e) =>
                      setHealthValues({ ...healthValues, water: parseFloat(e.target.value) })
                    }
                    className="w-full accent-slate-900 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-700">{t.workshop.healthSteps}</span>
                    <span className="font-mono text-slate-900 font-bold">
                      {healthValues.steps.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="15000"
                    step="500"
                    value={healthValues.steps}
                    onChange={(e) =>
                      setHealthValues({ ...healthValues, steps: parseInt(e.target.value) })
                    }
                    className="w-full accent-slate-900 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-700">{t.workshop.healthScreen}</span>
                    <span className="font-mono text-slate-900 font-bold">{healthValues.screenTime} h</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="8"
                    step="0.5"
                    value={healthValues.screenTime}
                    onChange={(e) =>
                      setHealthValues({ ...healthValues, screenTime: parseFloat(e.target.value) })
                    }
                    className="w-full accent-slate-900 cursor-pointer"
                  />
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col justify-between items-center text-center">
                <div className="w-full">
                  <span className="text-xs text-slate-500 uppercase tracking-wider block">
                    {t.workshop.healthScoreLabel}
                  </span>
                  <div className="font-mono text-6xl font-bold text-emerald-700 mt-3 tabular-nums">
                    %{totalHealthScore}
                  </div>
                  <span className="text-xs font-semibold text-slate-800 block mt-2">
                    {totalHealthScore >= 80 ? 'Optimal Zindelik ve Denge' : 'Geliştirilebilir Sağlık Dengesi'}
                  </span>
                </div>

                <div className="text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 w-full mt-4">
                  {totalHealthScore >= 80
                    ? 'Beden emanetine hürmet ediyorsun. 8 saat uyku ve yeterli su zihinsel berraklığını artırır.'
                    : 'Ekran süresini kısıtlayıp suyu ve adımı artırarak beden zindeliğini yükseltebilirsin.'}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
