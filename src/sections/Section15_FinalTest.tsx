import { useState } from 'react';
import { Math } from '../components/Math';
import { SectionTitle, RevealBlock } from '../components/UI';

export function Section15_FinalTest() {
  // Yes/No questions
  const [yn1, setYn1] = useState<boolean | null>(null);
  const [yn2, setYn2] = useState<boolean | null>(null);
  const [yn3, setYn3] = useState<boolean | null>(null);

  // Multiple choice
  const [mc1, setMc1] = useState<number | null>(null);
  const [mc2, setMc2] = useState<number | null>(null);
  const [mc3, setMc3] = useState<number | null>(null);

  const ynBtn = (selected: boolean | null, value: boolean, correct: boolean, setter: (v: boolean) => void) => {
    const isSelected = selected === value;
    const isCorrect = value === correct;
    let cls = 'px-5 py-2 rounded-lg font-semibold transition-all cursor-pointer ';
    if (isSelected) {
      cls += isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
    } else {
      cls += 'bg-white border-2 border-gray-300 hover:border-purple-400';
    }
    return (
      <button onClick={() => setter(value)} className={cls}>
        {value ? '✅ Да' : '❌ Нет'}
      </button>
    );
  };

  const mcBtn = (selected: number | null, idx: number, correct: number, setter: (v: number) => void, label: string, text: string) => {
    const isSelected = selected === idx;
    let cls = 'px-4 py-2 rounded-lg text-left transition-all cursor-pointer ';
    if (isSelected) {
      cls += idx === correct ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
    } else if (selected !== null && idx === correct) {
      cls += 'bg-green-100 border-2 border-green-500';
    } else {
      cls += 'bg-white border-2 border-gray-300 hover:border-purple-400';
    }
    return (
      <button onClick={() => setter(idx)} className={cls}>
        <span className="font-bold">{label})</span> {text}
      </button>
    );
  };

  return (
    <div>
      <SectionTitle id="final-test" emoji="🏆" title="Финальная мини-проверка" subtitle="10 вопросов по всему материалу урока" />

      <p className="text-gray-600 mb-6">
        Это финальный тест! Он включает все виды вопросов: «Да/Нет», с вариантами ответов, 
        открытые вопросы и расчётные задачи. Удачи! 💪
      </p>

      <div className="space-y-4">
        {/* Q1: Yes/No */}
        <div className="question-box">
          <p className="font-semibold mb-3">1. (Да/Нет) При увеличении высоты тела над землёй его потенциальная энергия увеличивается.</p>
          <div className="flex gap-3">
            {ynBtn(yn1, true, true, setYn1)}
            {ynBtn(yn1, false, true, setYn1)}
          </div>
          {yn1 !== null && (
            <div className={`mt-2 p-3 rounded-lg fade-in ${yn1 === true ? 'bg-green-50 border border-green-300' : 'bg-red-50 border border-red-300'}`}>
              <p className="text-sm text-gray-700">
                <strong>Правильный ответ: Да.</strong> По формуле Eп = mgh: чем больше h, тем больше Eп.
              </p>
            </div>
          )}
        </div>

        {/* Q2: Yes/No */}
        <div className="question-box">
          <p className="font-semibold mb-3">2. (Да/Нет) Кинетическая энергия тела равна нулю, если тело не движется.</p>
          <div className="flex gap-3">
            {ynBtn(yn2, true, true, setYn2)}
            {ynBtn(yn2, false, true, setYn2)}
          </div>
          {yn2 !== null && (
            <div className={`mt-2 p-3 rounded-lg fade-in ${yn2 === true ? 'bg-green-50 border border-green-300' : 'bg-red-50 border border-red-300'}`}>
              <p className="text-sm text-gray-700">
                <strong>Правильный ответ: Да.</strong> Eк = mv²/2. Если v = 0, то Eк = 0.
              </p>
            </div>
          )}
        </div>

        {/* Q3: Yes/No */}
        <div className="question-box">
          <p className="font-semibold mb-3">3. (Да/Нет) Полная механическая энергия всегда равна кинетической энергии.</p>
          <div className="flex gap-3">
            {ynBtn(yn3, true, false, setYn3)}
            {ynBtn(yn3, false, false, setYn3)}
          </div>
          {yn3 !== null && (
            <div className={`mt-2 p-3 rounded-lg fade-in ${yn3 === false ? 'bg-green-50 border border-green-300' : 'bg-red-50 border border-red-300'}`}>
              <p className="text-sm text-gray-700">
                <strong>Правильный ответ: Нет.</strong> Полная механическая энергия — это СУММА потенциальной и кинетической: E = Eп + Eк.
              </p>
            </div>
          )}
        </div>

        {/* Q4: Multiple choice */}
        <div className="question-box">
          <p className="font-semibold mb-3">4. (Выбери ответ) Какая формула описывает кинетическую энергию?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {mcBtn(mc1, 0, 2, setMc1, 'А', 'Eк = mgh')}
            {mcBtn(mc1, 1, 2, setMc1, 'Б', 'Eк = mv')}
            {mcBtn(mc1, 2, 2, setMc1, 'В', 'Eк = mv²/2')}
            {mcBtn(mc1, 3, 2, setMc1, 'Г', 'Eк = mgh/2')}
          </div>
          {mc1 !== null && (
            <div className={`mt-2 p-3 rounded-lg fade-in ${mc1 === 2 ? 'bg-green-50 border border-green-300' : 'bg-red-50 border border-red-300'}`}>
              <p className="text-sm text-gray-700"><strong>Правильный ответ: В) Eк = mv²/2.</strong></p>
            </div>
          )}
        </div>

        {/* Q5: Multiple choice */}
        <div className="question-box">
          <p className="font-semibold mb-3">5. (Выбери ответ) Мяч массой 1 кг поднят на высоту 10 м (g = 10 м/с²). Какова его потенциальная энергия?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {mcBtn(mc2, 0, 1, setMc2, 'А', '10 Дж')}
            {mcBtn(mc2, 1, 1, setMc2, 'Б', '100 Дж')}
            {mcBtn(mc2, 2, 1, setMc2, 'В', '50 Дж')}
            {mcBtn(mc2, 3, 1, setMc2, 'Г', '1000 Дж')}
          </div>
          {mc2 !== null && (
            <div className={`mt-2 p-3 rounded-lg fade-in ${mc2 === 1 ? 'bg-green-50 border border-green-300' : 'bg-red-50 border border-red-300'}`}>
              <p className="text-sm text-gray-700"><strong>Правильный ответ: Б) 100 Дж.</strong> Eп = 1 × 10 × 10 = 100 Дж.</p>
            </div>
          )}
        </div>

        {/* Q6: Multiple choice */}
        <div className="question-box">
          <p className="font-semibold mb-3">6. (Выбери ответ) Что происходит с потенциальной энергией тела при падении?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {mcBtn(mc3, 0, 1, setMc3, 'А', 'Увеличивается')}
            {mcBtn(mc3, 1, 1, setMc3, 'Б', 'Уменьшается')}
            {mcBtn(mc3, 2, 1, setMc3, 'В', 'Не изменяется')}
            {mcBtn(mc3, 3, 1, setMc3, 'Г', 'Сначала растёт, потом уменьшается')}
          </div>
          {mc3 !== null && (
            <div className={`mt-2 p-3 rounded-lg fade-in ${mc3 === 1 ? 'bg-green-50 border border-green-300' : 'bg-red-50 border border-red-300'}`}>
              <p className="text-sm text-gray-700"><strong>Правильный ответ: Б) Уменьшается.</strong> При падении высота уменьшается, а значит, и Eп уменьшается.</p>
            </div>
          )}
        </div>

        {/* Q7: Open */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
          <p className="font-semibold text-gray-800 mb-3">7. (Открытый вопрос) Почему маятник, отклонённый в сторону, начинает качаться? Объясни с точки зрения превращения энергии.</p>
          <RevealBlock label="Показать примерный ответ" variant="answer">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <p className="text-gray-700">
                Когда маятник отклоняют в сторону, он поднимается — у него появляется потенциальная энергия. 
                Когда его отпускают, потенциальная энергия начинает превращаться в кинетическую — маятник 
                набирает скорость. В нижней точке вся энергия кинетическая — маятник движется быстрее всего. 
                Затем он поднимается с другой стороны — кинетическая энергия превращается обратно в 
                потенциальную. И так продолжается.
              </p>
            </div>
          </RevealBlock>
        </div>

        {/* Q8: Open */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
          <p className="font-semibold text-gray-800 mb-3">8. (Открытый вопрос) Почему при увеличении скорости в 3 раза кинетическая энергия увеличивается не в 3, а в 9 раз?</p>
          <RevealBlock label="Показать примерный ответ" variant="answer">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <p className="text-gray-700">
                Потому что в формуле кинетической энергии <Math tex="E_k = mv^2/2" /> скорость стоит в квадрате. 
                Если скорость увеличить в 3 раза, то в формуле мы получим (3v)² = 9v². 
                Поэтому энергия увеличивается в 3² = 9 раз. Квадрат скорости делает зависимость 
                нелинейной — маленькое увеличение скорости приводит к большому росту энергии.
              </p>
            </div>
          </RevealBlock>
        </div>

        {/* Q9: Calculation */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
          <p className="font-semibold text-gray-800 mb-3">9. (Задача) Тело массой 3 кг находится на высоте 4 м. Найди его потенциальную энергию. g = 10 м/с².</p>
          <RevealBlock label="Показать решение" variant="solution">
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 space-y-2">
              <div className="solution-step">
                <p><strong>Дано:</strong> m = 3 кг, h = 4 м, g = 10 м/с²</p>
              </div>
              <div className="solution-step">
                <p><strong>Формула:</strong> <Math tex="E_p = mgh" /></p>
              </div>
              <div className="solution-step">
                <p><strong>Подстановка:</strong> <Math tex="E_p = 3 \cdot 10 \cdot 4 = 120" /> Дж</p>
              </div>
              <div className="bg-green-50 rounded-lg p-2 border border-green-300">
                <p className="font-bold text-green-800">✅ Ответ: Eп = 120 Дж</p>
              </div>
            </div>
          </RevealBlock>
        </div>

        {/* Q10: Calculation */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
          <p className="font-semibold text-gray-800 mb-3">10. (Задача) Автомобиль массой 800 кг движется со скоростью 10 м/с. Найди его кинетическую энергию.</p>
          <RevealBlock label="Показать решение" variant="solution">
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 space-y-2">
              <div className="solution-step">
                <p><strong>Дано:</strong> m = 800 кг, v = 10 м/с</p>
              </div>
              <div className="solution-step">
                <p><strong>Формула:</strong> <Math tex="E_k = \dfrac{mv^2}{2}" display /></p>
              </div>
              <div className="solution-step">
                <p><strong>Подстановка:</strong> <Math tex="E_k = \dfrac{800 \cdot 10^2}{2} = \dfrac{800 \cdot 100}{2} = \dfrac{80000}{2} = 40000 \text{ Дж}" display /></p>
              </div>
              <div className="bg-green-50 rounded-lg p-2 border border-green-300">
                <p className="font-bold text-green-800">✅ Ответ: Eк = 40 000 Дж = 40 кДж</p>
              </div>
            </div>
          </RevealBlock>
        </div>
      </div>

      {/* Completion message */}
      <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white text-center">
        <p className="text-4xl mb-3">🎉</p>
        <h3 className="text-2xl font-bold mb-2">Поздравляем!</h3>
        <p className="text-lg mb-3">
          Ты прошёл(-а) весь урок «Потенциальная, кинетическая и полная механическая энергия»!
        </p>
        <p className="text-indigo-200">
          Теперь ты знаешь, что такое энергия, умеешь различать потенциальную и кинетическую энергии, 
          понимаешь, как они превращаются друг в друга, и можешь решать задачи. Отличная работа! 💪
        </p>
      </div>
    </div>
  );
}
