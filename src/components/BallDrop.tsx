import { useState, useEffect, useRef } from 'react';
import { EnergyBar } from './UI';

export function BallDropSimulation() {
  const [height, setHeight] = useState(100);
  const [isDropping, setIsDropping] = useState(false);

  const animRef = useRef<number | null>(null);

  const totalHeight = 100;
  const mass = 2; // kg
  const g = 10;
  const maxPE = mass * g * totalHeight; // 2000

  const currentH = height;
  const pe = mass * g * currentH;
  const ke = maxPE - pe;

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const drop = () => {
    if (isDropping) return;
    setIsDropping(true);
    setHeight(100);

    const startTime = performance.now();
    const duration = 3000;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Accelerating fall (quadratic easing)
      const eased = progress * progress;
      const newH = Math.max(0, totalHeight * (1 - eased));
      setHeight(newH);

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        setIsDropping(false);
      }
    };
    animRef.current = requestAnimationFrame(animate);
  };

  const reset = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setIsDropping(false);
    setHeight(100);
  };

  // Fixed geometry so the labels ("100м".."0м") never clip at the edges.
  const GROUND = 46; // px height of the green ground strip at the bottom
  // Marker captions sweep from y=16 (100м) down to y=218 (0м) – both well inside the sky,
  // comfortably away from the rounded top corner and the ground strip.
  const y100 = 22;
  const y0 = 206;
  // Vertical center of each marker caption for a given height h (m)
  const markerY = (h: number) => y100 + ((totalHeight - h) * (y0 - y100)) / totalHeight;
  // Ball sweeps along the same vertical path the marker captions follow
  const ballFraction = (totalHeight - currentH) / totalHeight;
  const ballTop = y100 + ballFraction * (y0 - y100);

  return (
    <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-5 border-2 border-sky-200 my-6">
      <h3 className="font-bold text-lg text-sky-800 mb-4">🎮 Симуляция: Падение мяча</h3>
      <p className="text-sm text-gray-600 mb-3 whitespace-nowrap">Мяч массой {mass} кг, высота {totalHeight} м, g = {g} м/с²</p>

      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
        {/* Visual */}
        <div className="relative shrink-0 rounded-xl overflow-hidden select-none border border-sky-300"
          style={{ width: 228, height: 280 }}>
          {/* markers + ball live in an inset region; draw dashed meter line behind ball */}
          {[0, 25, 50, 75, 100].map(h => {
            const cy = markerY(h);
            return (
              <div key={h} className="absolute inset-x-3 flex items-center" style={{ top: cy - 7 }}>
                <div className="flex-1 h-px bg-[#8ca0b8] opacity-50" />
                <span
                  className="z-10 whitespace-nowrap text-[10px] font-semibold text-gray-600 bg-white/85 rounded px-1.5 py-px shadow-sm"
                  style={{ lineHeight: 'normal' }}
                >
                  {h}м
                </span>
              </div>
            );
          })}
          {/* Ball */}
          <div
            className="absolute z-[5] left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-lg border border-red-700 flex items-center justify-center text-sm"
            style={{ top: ballTop - 14 }}
          >
            ⚽
          </div>
          {/* Ground */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center bg-gradient-to-t from-green-700 to-green-400"
            style={{ height: GROUND }}>
            <span className="text-white text-[11px] font-bold">🟢 Земля</span>
          </div>
        </div>

        {/* Data */}
        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-blue-100 rounded-lg p-3 text-center">
              <p className="text-xs text-blue-600 font-semibold">Высота</p>
              <p className="text-xl font-bold text-blue-800 whitespace-nowrap">{currentH.toFixed(1)} м</p>
            </div>
            <div className="bg-blue-100 rounded-lg p-3 text-center">
              <p className="text-xs text-blue-600 font-semibold">Eп (потенц.)</p>
              <p className="text-xl font-bold text-blue-800 whitespace-nowrap">{pe.toFixed(0)} Дж</p>
            </div>
            <div className="bg-red-100 rounded-lg p-3 text-center">
              <p className="text-xs text-red-600 font-semibold">Скорость</p>
              <p className="text-xl font-bold text-red-800 whitespace-nowrap">{(Math.sqrt(2 * g * (totalHeight - currentH))).toFixed(1)} м/с</p>
            </div>
            <div className="bg-red-100 rounded-lg p-3 text-center">
              <p className="text-xs text-red-600 font-semibold">Eк (кинетич.)</p>
              <p className="text-xl font-bold text-red-800 whitespace-nowrap">{ke.toFixed(0)} Дж</p>
            </div>
          </div>
          <EnergyBar potential={Math.round(pe)} kinetic={Math.round(ke)} total={maxPE} />
          <div className="flex gap-3 mt-4">
            <button onClick={drop} disabled={isDropping} className="btn-check disabled:opacity-50">
              🔽 Бросить мяч
            </button>
            <button onClick={reset} className="btn-reveal">
              🔄 Сначала
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeightSlider() {
  const [height, setHeight] = useState(5);
  const mass = 3;
  const g = 10;
  const pe = mass * g * height;

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-5 border-2 border-indigo-200 my-6">
      <h3 className="font-bold text-lg text-indigo-800 mb-3">🎮 Исследуй: Как высота влияет на потенциальную энергию</h3>
      <p className="text-sm text-gray-600 mb-3 whitespace-nowrap">Тело массой {mass} кг, g = {g} м/с²</p>
      <div className="flex items-center gap-4 mb-3">
        <span className="text-sm font-semibold text-gray-600 w-20 whitespace-nowrap">Высота:</span>
        <input
          type="range"
          min={0}
          max={20}
          step={0.5}
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          className="flex-1 accent-indigo-500"
        />
        <span className="text-lg font-bold text-indigo-700 w-16 text-right whitespace-nowrap">{height} м</span>
      </div>
      <div className="bg-white rounded-xl p-4 text-center">
        <p className="text-sm text-gray-500">Потенциальная энергия</p>
        <p className="text-3xl font-bold text-indigo-700">{pe} Дж</p>
        <p className="text-sm text-gray-400 mt-1">Eп = {mass} × {g} × {height} = {pe} Дж</p>
      </div>
    </div>
  );
}

export function SpeedSlider() {
  const [speed, setSpeed] = useState(5);
  const mass = 2;
  const ke = (mass * speed * speed) / 2;

  return (
    <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-5 border-2 border-rose-200 my-6">
      <h3 className="font-bold text-lg text-rose-800 mb-3">🎮 Исследуй: Как скорость влияет на кинетическую энергию</h3>
      <p className="text-sm text-gray-600 mb-3 whitespace-nowrap">Тело массой {mass} кг</p>
      <div className="flex items-center gap-4 mb-3">
        <span className="text-sm font-semibold text-gray-600 w-20 whitespace-nowrap">Скорость:</span>
        <input
          type="range"
          min={0}
          max={20}
          step={1}
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="flex-1 accent-rose-500"
        />
        <span className="text-lg font-bold text-rose-700 w-20 text-right whitespace-nowrap">{speed} м/с</span>
      </div>
      <div className="bg-white rounded-xl p-4 text-center">
        <p className="text-sm text-gray-500">Кинетическая энергия</p>
        <p className="text-3xl font-bold text-rose-700">{ke} Дж</p>
        <p className="text-sm text-gray-400 mt-1">Eк = {mass} × {speed}² / 2 = {ke} Дж</p>
      </div>
      <div className="mt-3 text-sm text-gray-600 bg-yellow-50 rounded-lg p-3">
        <p>🔍 <strong>Попробуй:</strong> Установи скорость 5 м/с (Ек = {(mass * 25) / 2} Дж), потом 10 м/с (Ек = {(mass * 100) / 2} Дж). Скорость выросла в 2 раза, а энергия — в 4 раза!</p>
      </div>
    </div>
  );
}
