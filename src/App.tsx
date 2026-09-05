import { useState, useEffect } from 'react';
import { Section1_Intro } from './sections/Section1_Intro';
import { Section2_PotentialEnergy } from './sections/Section2_PotentialEnergy';
import { Section3_KineticEnergy } from './sections/Section3_KineticEnergy';
import { Section4_Comparison } from './sections/Section4_Comparison';
import { Section5_Transformation } from './sections/Section5_Transformation';
import { Section6_TotalEnergy } from './sections/Section6_TotalEnergy';
import { Section7_Formulas } from './sections/Section7_Formulas';
import { Section8_Examples } from './sections/Section8_Examples';
import { Section9_QuizYesNo } from './sections/Section9_QuizYesNo';
import { Section10_QuizMultiple } from './sections/Section10_QuizMultiple';
import { Section11_OpenQuestions } from './sections/Section11_OpenQuestions';
import { Section12_Problems } from './sections/Section12_Problems';
import { Section13_Logic } from './sections/Section13_Logic';
import { Section14_Summary } from './sections/Section14_Summary';
import { Section15_FinalTest } from './sections/Section15_FinalTest';

const sections = [
  { id: 'intro', label: 'Введение', emoji: '👋' },
  { id: 'potential', label: 'Потенциальная энергия', emoji: '⬆️' },
  { id: 'kinetic', label: 'Кинетическая энергия', emoji: '💨' },
  { id: 'comparison', label: 'Сравнение', emoji: '⚖️' },
  { id: 'transformation', label: 'Превращение энергии', emoji: '🔄' },
  { id: 'total', label: 'Полная мех. энергия', emoji: '🔋' },
  { id: 'formulas', label: 'Формулы', emoji: '📝' },
  { id: 'examples', label: 'Разбор примеров', emoji: '📖' },
  { id: 'quiz-yesno', label: 'Да/Нет', emoji: '✅' },
  { id: 'quiz-multiple', label: 'Тест', emoji: '🔘' },
  { id: 'quiz-open', label: 'Открытые вопросы', emoji: '✍️' },
  { id: 'problems', label: 'Задачи', emoji: '🧮' },
  { id: 'logic', label: 'Логика', emoji: '🧠' },
  { id: 'summary', label: 'Итог', emoji: '📌' },
  { id: 'final-test', label: 'Финальный тест', emoji: '🏆' },
];

export default function App() {
  const [progress, setProgress] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(scrollPercent, 100));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress bar */}
      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-3 left-3 z-50 lg:hidden bg-white rounded-xl shadow-lg p-2 border border-gray-200 cursor-pointer"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {sidebarOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar overlay (mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/30 z-30 lg:hidden" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Sidebar navigation */}
      <nav className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-40 overflow-y-auto transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-4 pt-6">
          <h2 className="text-lg font-bold text-indigo-700 mb-1">⚡ Энергия</h2>
          <p className="text-xs text-gray-500 mb-4">Урок физики · 7 класс</p>
          
          <div className="space-y-0.5">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="nav-link w-full text-left px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span className="text-base">{s.emoji}</span>
                <span>{s.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-6 p-3 bg-indigo-50 rounded-xl text-center">
            <p className="text-xs text-indigo-600 font-semibold">Прогресс чтения</p>
            <p className="text-2xl font-bold text-indigo-700">{Math.round(progress)}%</p>
            <div className="w-full bg-indigo-200 rounded-full h-2 mt-2">
              <div className="bg-indigo-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="lg:ml-64 min-h-screen">
        {/* Header */}
        <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div className="flex items-center gap-2 text-indigo-200 text-sm mb-2">
              <span>📚 Физика</span>
              <span>·</span>
              <span>7 класс</span>
              <span>·</span>
              <span>Механика</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold mb-3">
              ⚡ Потенциальная энергия. Кинетическая энергия. Полная механическая энергия.
            </h1>
            <p className="text-indigo-200 text-sm sm:text-base max-w-2xl">
              Интерактивный урок с примерами, симуляциями, задачами и тестами. 
              Узнай, что такое энергия и почему она так важна в физике!
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">🎯 Для начинающих</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">🎮 Интерактивные симуляции</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">🧮 12 задач с решениями</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">📝 30+ вопросов</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <Section1_Intro />
          <Section2_PotentialEnergy />
          <Section3_KineticEnergy />
          <Section4_Comparison />
          <Section5_Transformation />
          <Section6_TotalEnergy />
          <Section7_Formulas />
          <Section8_Examples />

          {/* Practice header */}
          <div className="pt-10 pb-4">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white text-center">
              <h2 className="text-2xl font-bold mb-2">📋 Практическая часть</h2>
              <p className="text-purple-200">Проверь свои знания с помощью вопросов и задач!</p>
            </div>
          </div>

          <Section9_QuizYesNo />
          <Section10_QuizMultiple />
          <Section11_OpenQuestions />
          <Section12_Problems />
          <Section13_Logic />
          <Section14_Summary />
          <Section15_FinalTest />
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 text-center py-6 text-sm">
          <p>⚡ Интерактивный урок физики · Потенциальная и кинетическая энергия</p>
          <p className="mt-1">Создано для учеников 7 класса</p>
        </footer>
      </main>
    </div>
  );
}
