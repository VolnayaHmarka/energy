import { useState, ReactNode } from 'react';

export function RevealBlock({ label, children, variant = 'answer' }: { label: string; children: ReactNode; variant?: 'answer' | 'solution' | 'hint' }) {
  const [open, setOpen] = useState(false);
  const colors = {
    answer: 'from-amber-500 to-orange-500 hover:shadow-amber-300/40',
    solution: 'from-indigo-500 to-purple-500 hover:shadow-indigo-300/40',
    hint: 'from-emerald-500 to-teal-500 hover:shadow-emerald-300/40',
  };
  return (
    <div className="my-3">
      <button
        onClick={() => setOpen(!open)}
        className={`bg-gradient-to-r ${colors[variant]} text-white px-5 py-2 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer`}
      >
        {open ? '🔽' : '▶️'} {label}
      </button>
      {open && (
        <div className="mt-3 fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

export function QuizYesNo({ question, answer, explanation, index }: { question: string; answer: boolean; explanation: string; index: number }) {
  const [selected, setSelected] = useState<boolean | null>(null);
  const isCorrect = selected === answer;

  return (
    <div className="question-box">
      <p className="font-semibold mb-3">{index}. {question}</p>
      <div className="flex gap-3 mb-2">
        <button
          onClick={() => setSelected(true)}
          className={`px-5 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
            selected === true
              ? isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
              : 'bg-white border-2 border-gray-300 hover:border-purple-400'
          }`}
        >
          ✅ Да
        </button>
        <button
          onClick={() => setSelected(false)}
          className={`px-5 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
            selected === false
              ? isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
              : 'bg-white border-2 border-gray-300 hover:border-purple-400'
          }`}
        >
          ❌ Нет
        </button>
      </div>
      {selected !== null && (
        <div className={`mt-2 p-3 rounded-lg fade-in ${isCorrect ? 'bg-green-50 border border-green-300' : 'bg-red-50 border border-red-300'}`}>
          <p className="font-semibold">{isCorrect ? '✅ Правильно!' : '❌ Неправильно!'}</p>
          <p className="text-sm mt-1 text-gray-700">Правильный ответ: <strong>{answer ? 'Да' : 'Нет'}</strong>. {explanation}</p>
        </div>
      )}
    </div>
  );
}

export function QuizMultiple({ question, options, correctIndex, explanation, index }: {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  index: number;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const labels = ['А', 'Б', 'В', 'Г'];

  return (
    <div className="question-box">
      <p className="font-semibold mb-3">{index}. {question}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`px-4 py-2 rounded-lg text-left transition-all cursor-pointer ${
              selected === i
                ? i === correctIndex
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
                : selected !== null && i === correctIndex
                  ? 'bg-green-100 border-2 border-green-500'
                  : 'bg-white border-2 border-gray-300 hover:border-purple-400'
            }`}
          >
            <span className="font-bold">{labels[i]})</span> {opt}
          </button>
        ))}
      </div>
      {selected !== null && (
        <div className={`mt-2 p-3 rounded-lg fade-in ${selected === correctIndex ? 'bg-green-50 border border-green-300' : 'bg-red-50 border border-red-300'}`}>
          <p className="font-semibold">{selected === correctIndex ? '✅ Правильно!' : '❌ Неправильно!'}</p>
          <p className="text-sm mt-1 text-gray-700">{explanation}</p>
        </div>
      )}
    </div>
  );
}

export function SectionTitle({ id, emoji, title, subtitle }: { id: string; emoji: string; title: string; subtitle?: string }) {
  return (
    <div id={id} className="pt-8 pb-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center gap-3">
        <span className="text-3xl">{emoji}</span>
        {title}
      </h2>
      {subtitle && <p className="text-gray-500 mt-1 ml-12">{subtitle}</p>}
      <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3 ml-12"></div>
    </div>
  );
}

export function FormulaCard({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="formula-box">
      {label && <p className="text-sm text-blue-600 font-semibold mb-2">{label}</p>}
      <div className="text-xl">{children}</div>
    </div>
  );
}

export function FactBox({ children }: { children: ReactNode }) {
  return (
    <div className="fact-box">
      <p className="font-semibold text-amber-800 mb-1">💡 Интересный факт</p>
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

export function ExampleBox({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="example-box">
      {title && <p className="font-semibold text-green-800 mb-2">📝 {title}</p>}
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

export function RememberBox({ children }: { children: ReactNode }) {
  return (
    <div className="remember-box">
      <p className="font-semibold text-rose-800 mb-2">🔴 Запомни!</p>
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

export function ThinkBox({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gradient-to-br from-cyan-50 to-sky-100 border-2 border-cyan-400 rounded-xl p-4 my-4">
      <p className="font-semibold text-cyan-800 mb-2">🤔 Подумай!</p>
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

export function EnergyBar({ potential, kinetic, total }: { potential: number; kinetic: number; total: number }) {
  const pPct = total > 0 ? (potential / total) * 100 : 0;
  const kPct = total > 0 ? (kinetic / total) * 100 : 0;
  return (
    <div className="my-3">
      <div className="flex justify-between text-sm mb-1 gap-2">
        <span className="text-blue-600 font-semibold whitespace-nowrap">Ep = {potential} Дж</span>
        <span className="text-red-600 font-semibold whitespace-nowrap">Ek = {kinetic} Дж</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-7 overflow-hidden flex">
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-full transition-all duration-500 flex items-center justify-center text-white text-xs font-bold" style={{ width: `${pPct}%` }}>
          {pPct > 10 && `${Math.round(pPct)}%`}
        </div>
        <div className="bg-gradient-to-r from-red-400 to-red-600 h-full transition-all duration-500 flex items-center justify-center text-white text-xs font-bold" style={{ width: `${kPct}%` }}>
          {kPct > 10 && `${Math.round(kPct)}%`}
        </div>
      </div>
      <p className="text-center text-sm mt-1 font-semibold text-gray-600">E = {total} Дж</p>
    </div>
  );
}
