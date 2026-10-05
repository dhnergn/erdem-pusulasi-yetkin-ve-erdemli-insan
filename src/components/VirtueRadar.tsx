import React, { useState } from 'react';
import { useVirtue } from '../context/VirtueContext';
import { VirtueKey } from '../types/virtue';
import { Sparkles, Trophy, Target, TrendingUp } from 'lucide-react';
import { playSound } from '../utils/sound';

const ORDERED_KEYS: VirtueKey[] = [
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

export const VirtueRadar: React.FC = () => {
  const { profile, calculateVirtueLevel, overallVirtueIndex, t, getVirtueInfo, soundEnabled } = useVirtue();
  const [hoveredVirtue, setHoveredVirtue] = useState<VirtueKey | null>(null);
  const [showBenchmark, setShowBenchmark] = useState(true);

  const size = 400;
  const center = size / 2;
  const radius = size * 0.38;
  const numAxes = ORDERED_KEYS.length;
  const angleStep = (Math.PI * 2) / numAxes;

  const getCoordinates = (index: number, score: number) => {
    const angle = index * angleStep - Math.PI / 2;
    const r = (score / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  const rings = [25, 50, 75, 100];

  const ringPolygons = rings.map((ringValue) => {
    const points = ORDERED_KEYS.map((_, i) => {
      const { x, y } = getCoordinates(i, ringValue);
      return `${x},${y}`;
    }).join(' ');
    return { ringValue, points };
  });

  const studentPoints = ORDERED_KEYS.map((key, i) => {
    const score = profile.virtueScores[key] || 10;
    const { x, y } = getCoordinates(i, score);
    return `${x},${y}`;
  }).join(' ');

  const benchmarkPoints = ORDERED_KEYS.map((_, i) => {
    const { x, y } = getCoordinates(i, 80);
    return `${x},${y}`;
  }).join(' ');

  const scoresArray = ORDERED_KEYS.map((k) => ({
    key: k,
    score: profile.virtueScores[k] || 0,
    title: getVirtueInfo(k).title,
    color: getVirtueInfo(k).color
  }));
  scoresArray.sort((a, b) => b.score - a.score);
  const highestVirtue = scoresArray[0];
  const lowestVirtue = scoresArray[scoresArray.length - 1];

  const activeVirtueData = hoveredVirtue ? getVirtueInfo(hoveredVirtue) : null;
  const activeVirtueLevel = hoveredVirtue ? calculateVirtueLevel(hoveredVirtue) : null;

  return (
    <section id="radar" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-100 gap-4 text-left rtl:text-right">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
              <span>{t.radar.kicker}</span>
              <span aria-hidden="true">·</span>
              <span>{t.radar.subKicker}</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              {t.radar.heading}
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              {t.radar.desc}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={() => {
                if (soundEnabled) playSound.click();
                setShowBenchmark(!showBenchmark);
              }}
              className={`px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 ${
                showBenchmark
                  ? 'bg-amber-50 border-amber-200 text-amber-900 font-medium'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Target className="w-3.5 h-3.5 text-amber-600" />
              <span>{showBenchmark ? 'İdeal Hedef: Açık (%80)' : 'İdeal Hedef: Kapalı'}</span>
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Radar Canvas (Left 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 sm:p-8 bg-slate-50/70 rounded-3xl border border-slate-200/90 shadow-2xs">
            <div className="relative w-full max-w-[430px] aspect-square flex items-center justify-center">
              <svg
                viewBox={`0 0 ${size} ${size}`}
                className="w-full h-full overflow-visible drop-shadow-xs select-none"
              >
                {/* Concentric rings */}
                {ringPolygons.map(({ ringValue, points }) => (
                  <polygon
                    key={ringValue}
                    points={points}
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                    strokeDasharray={ringValue === 100 ? 'none' : '3 3'}
                  />
                ))}

                {/* Axes lines */}
                {ORDERED_KEYS.map((_, i) => {
                  const { x, y } = getCoordinates(i, 100);
                  return (
                    <line
                      key={i}
                      x1={center}
                      y1={center}
                      x2={x}
                      y2={y}
                      stroke="#e2e8f0"
                      strokeWidth="1.5"
                    />
                  );
                })}

                {/* Ideal benchmark polygon */}
                {showBenchmark && (
                  <polygon
                    points={benchmarkPoints}
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.6"
                  />
                )}

                {/* Student Area Polygon */}
                <polygon
                  points={studentPoints}
                  fill="rgba(2, 132, 199, 0.22)"
                  stroke="#0284c7"
                  strokeWidth="2.5"
                  className="transition-all duration-300"
                />

                {/* Vertices & Clickable dots */}
                {ORDERED_KEYS.map((key, i) => {
                  const score = profile.virtueScores[key] || 10;
                  const { x, y } = getCoordinates(i, score);
                  const isHovered = hoveredVirtue === key;
                  const labelCoord = getCoordinates(i, 118);
                  const virtue = getVirtueInfo(key);

                  return (
                    <g key={key} className="cursor-pointer">
                      <circle
                        cx={x}
                        cy={y}
                        r={isHovered ? 7 : 5}
                        fill={virtue.color}
                        stroke="#ffffff"
                        strokeWidth="2.5"
                        onMouseEnter={() => {
                          if (soundEnabled) playSound.click();
                          setHoveredVirtue(key);
                        }}
                        onMouseLeave={() => setHoveredVirtue(null)}
                        className="transition-all duration-200"
                      />

                      <text
                        x={labelCoord.x}
                        y={labelCoord.y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className={`text-[11px] font-medium tracking-tight transition-all ${
                          isHovered
                            ? 'font-bold fill-slate-950 text-xs underline'
                            : 'fill-slate-600'
                        }`}
                        onMouseEnter={() => setHoveredVirtue(key)}
                        onMouseLeave={() => setHoveredVirtue(null)}
                      >
                        {virtue.title}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="mt-4 text-[11px] text-slate-500 flex flex-wrap items-center justify-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-600 inline-block" />
                <span>{t.radar.currentScore}</span>
              </span>
              {showBenchmark && (
                <span className="flex items-center gap-1.5 text-amber-700">
                  <span className="w-3 h-0.5 border-t border-dashed border-amber-600 inline-block" />
                  <span>İdeal Erdem Dengesi (%80)</span>
                </span>
              )}
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>{t.radar.hoverHint}</span>
            </div>
          </div>

          {/* Analytical Breakdown & Ranking List (Right 5 cols) */}
          <div className="lg:col-span-5 space-y-5 text-left rtl:text-right">
            {/* Active or Overall Card */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
              {hoveredVirtue && activeVirtueData && activeVirtueLevel ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-slate-800 uppercase tracking-wider">
                      {t.radar.detailTitle}
                    </span>
                    <span className="font-mono font-bold text-slate-900 text-sm">
                      %{activeVirtueLevel.score}
                    </span>
                  </div>

                  <h3
                    className="font-cinzel text-xl font-bold"
                    style={{ color: activeVirtueData.color }}
                  >
                    {activeVirtueData.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeVirtueData.definition}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Seviye:</span>
                    <span className="font-semibold text-slate-900">
                      {activeVirtueLevel.levelName}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-slate-800 uppercase tracking-wider">
                      {t.radar.balanceTitle}
                    </span>
                    <span className="font-mono font-bold text-amber-600 text-sm">
                      %{overallVirtueIndex}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg font-bold text-slate-900">
                    {t.radar.balanceTitle}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t.radar.balanceDesc}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">{t.radar.strongest}</span>
                      <span className="font-semibold text-emerald-700">
                        {highestVirtue.title} (%{highestVirtue.score})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">{t.radar.growthArea}</span>
                      <span className="font-semibold text-amber-700">
                        {lowestVirtue.title} (%{lowestVirtue.score})
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick 10 Virtues Ranked Micro-Bars */}
            <div className="p-5 rounded-2xl border border-slate-200/90 bg-slate-50/70 space-y-3">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                Erdem Gelişim Sıralaması
              </span>
              <div className="space-y-1.5">
                {scoresArray.slice(0, 5).map((item) => (
                  <div key={item.key} className="flex items-center justify-between text-xs">
                    <span className="text-slate-700 font-medium w-28 truncate">{item.title}</span>
                    <div className="flex-1 mx-3 bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${item.score}%`, backgroundColor: item.color }}
                      />
                    </div>
                    <span className="font-mono text-slate-900 font-bold tabular-nums text-[11px] w-8 text-right">
                      %{item.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
