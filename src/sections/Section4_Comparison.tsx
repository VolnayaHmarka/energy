import { useState } from 'react';
import { Math } from '../components/Math';
import { SectionTitle } from '../components/UI';

const situations = [
  { text: 'Мяч лежит на земле.', answer: 'Ни потенциальная, ни кинетическая (h=0 и v=0)', emoji: '⚽' },
  { text: 'Мяч подняли на высоту 2 м (держат в руке).', answer: 'Потенциальная энергия (есть высота, нет скорости)', emoji: '🤲' },
  { text: 'Мяч летит после удара ногой.', answer: 'Кинетическая энергия (есть скорость). Если мяч ещё и в воздухе — есть и потенциальная.', emoji: '⚽' },
  { text: 'Автомобиль движется по ровной дороге.', answer: 'Кинетическая энергия (тело движется, h ≈ 0 относительно дороги)', emoji: '🚗' },
  { text: 'Камень находится на вершине горы, не двигается.', answer: 'Потенциальная энергия (большая высота, скорость = 0)', emoji: '⛰️' },
  { text: 'Камень падает с горы.', answer: 'И потенциальная (ещё есть высота), и кинетическая (есть скорость) — обе!', emoji: '🪨' },
];

export function Section4_Comparison() {
  const [revealed, setRevealed] = useState<boolean[]>(new Array(situations.length).fill(false));

  const toggle = (i: number) => {
    setRevealed(prev => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  return (
    <div>
      <SectionTitle id="comparison" emoji="⚖️" title="Сравнение: потенциальная и кинетическая" subtitle="Чем они похожи и чем отличаются" />

      <div className="space-y-4">
        {/* Comparison table */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm overflow-x-auto">
          <h3 className="text-xl font-bold text-purple-700 mb-4">📊 Сравнительная таблица</h3>
          <table className="w-full border-collapse min-w-[500px]">
            <thead>
              <tr>
                <th className="border-2 border-purple-200 bg-purple-100 p-3 text-left">Характеристика</th>
                <th className="border-2 border-purple-200 bg-blue-100 p-3 text-center">⬆️ Потенциальная энергия</th>
                <th className="border-2 border-purple-200 bg-red-100 p-3 text-center">💨 Кинетическая энергия</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-purple-200 p-3 font-semibold bg-gray-50">Связана с</td>
                <td className="border border-purple-200 p-3 text-center">Положением тела (высотой)</td>
                <td className="border border-purple-200 p-3 text-center">Движением тела (скоростью)</td>
              </tr>
              <tr>
                <td className="border border-purple-200 p-3 font-semibold bg-gray-50">От чего зависит</td>
                <td className="border border-purple-200 p-3 text-center">От массы и высоты</td>
                <td className="border border-purple-200 p-3 text-center">От массы и скорости</td>
              </tr>
              <tr>
                <td className="border border-purple-200 p-3 font-semibold bg-gray-50">Формула</td>
                <td className="border border-purple-200 p-3 text-center"><Math tex="E_p = mgh" /></td>
                <td className="border border-purple-200 p-3 text-center"><Math tex="E_k = \dfrac{mv^2}{2}" display /></td>
              </tr>
              <tr>
                <td className="border border-purple-200 p-3 font-semibold bg-gray-50">Обозначение</td>
                <td className="border border-purple-200 p-3 text-center"><Math tex="E_p" /></td>
                <td className="border border-purple-200 p-3 text-center"><Math tex="E_k" /></td>
              </tr>
              <tr>
                <td className="border border-purple-200 p-3 font-semibold bg-gray-50">Единица измерения</td>
                <td className="border border-purple-200 p-3 text-center">Дж (джоуль)</td>
                <td className="border border-purple-200 p-3 text-center">Дж (джоуль)</td>
              </tr>
              <tr>
                <td className="border border-purple-200 p-3 font-semibold bg-gray-50">Равна нулю, когда…</td>
                <td className="border border-purple-200 p-3 text-center">Тело на выбранном уровне (h = 0)</td>
                <td className="border border-purple-200 p-3 text-center">Тело не движется (v = 0)</td>
              </tr>
              <tr>
                <td className="border border-purple-200 p-3 font-semibold bg-gray-50">Пример</td>
                <td className="border border-purple-200 p-3 text-center">Книга на полке 📕</td>
                <td className="border border-purple-200 p-3 text-center">Летящий мяч ⚽</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Simple words */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-purple-700 mb-3">Разница простыми словами</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 bg-blue-50 rounded-xl p-4 border border-blue-200">
              <p className="text-center text-3xl mb-2">⬆️</p>
              <p className="text-center font-bold text-blue-700 mb-2">Потенциальная</p>
              <p className="text-gray-700 text-sm">
                Это энергия <strong>«ожидания»</strong>. Тело <em>может</em> начать двигаться 
                (например, упасть), и тогда оно совершит работу. Пока оно «ждёт» — 
                у него есть запас потенциальной энергии.
              </p>
            </div>
            <div className="flex-1 bg-red-50 rounded-xl p-4 border border-red-200">
              <p className="text-center text-3xl mb-2">💨</p>
              <p className="text-center font-bold text-red-700 mb-2">Кинетическая</p>
              <p className="text-gray-700 text-sm">
                Это энергия <strong>«действия»</strong>. Тело уже движется и прямо сейчас 
                может совершить работу — сбить, столкнуть, деформировать.
              </p>
            </div>
          </div>
        </div>

        {/* Situations quiz */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-purple-700 mb-3">🧩 Определи вид энергии!</h3>
          <p className="text-gray-600 mb-4">Прочитай каждую ситуацию и подумай: какой вид энергии преобладает? Нажми, чтобы проверить свой ответ.</p>

          <div className="space-y-3">
            {situations.map((s, i) => (
              <div key={i} className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-purple-300 transition-colors">
                <button
                  onClick={() => toggle(i)}
                  className="w-full p-4 text-left flex items-center gap-3 cursor-pointer"
                >
                  <span className="text-2xl">{s.emoji}</span>
                  <span className="font-semibold text-gray-800">{i + 1}. {s.text}</span>
                  <span className="ml-auto text-gray-400">{revealed[i] ? '🔽' : '▶️'}</span>
                </button>
                {revealed[i] && (
                  <div className="px-4 pb-4 fade-in">
                    <div className="bg-green-50 rounded-lg p-3 border border-green-300">
                      <p className="text-green-800 font-semibold">✅ {s.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
