import { Math } from '../components/Math';
import { SectionTitle, RevealBlock } from '../components/UI';

const level1 = [
  {
    num: 1,
    text: 'Книга массой 0,5 кг лежит на полке на высоте 2 м от пола. Определи потенциальную энергию книги относительно пола. g = 10 м/с².',
    answer: '10 Дж',
    solution: {
      given: 'm = 0,5 кг\nh = 2 м\ng = 10 м/с²',
      find: 'Eп — ?',
      formula: 'E_p = m \\cdot g \\cdot h',
      calc: 'E_p = 0{,}5 \\cdot 10 \\cdot 2 = 10 \\text{ Дж}',
      result: 'Eп = 10 Дж',
    },
  },
  {
    num: 2,
    text: 'Камень массой 3 кг лежит на краю обрыва высотой 15 м. Какова его потенциальная энергия? g = 10 м/с².',
    answer: '450 Дж',
    solution: {
      given: 'm = 3 кг\nh = 15 м\ng = 10 м/с²',
      find: 'Eп — ?',
      formula: 'E_p = m \\cdot g \\cdot h',
      calc: 'E_p = 3 \\cdot 10 \\cdot 15 = 450 \\text{ Дж}',
      result: 'Eп = 450 Дж',
    },
  },
  {
    num: 3,
    text: 'Велосипедист массой 60 кг (вместе с велосипедом) движется со скоростью 4 м/с. Определи его кинетическую энергию.',
    answer: '480 Дж',
    solution: {
      given: 'm = 60 кг\nv = 4 м/с',
      find: 'Eк — ?',
      formula: 'E_k = \\frac{m \\cdot v^2}{2}',
      calc: 'E_k = \\frac{60 \\cdot 4^2}{2} = \\frac{60 \\cdot 16}{2} = \\frac{960}{2} = 480 \\text{ Дж}',
      result: 'Eк = 480 Дж',
    },
  },
  {
    num: 4,
    text: 'Хоккейная шайба массой 160 г летит со скоростью 10 м/с. Найди кинетическую энергию шайбы.',
    answer: '8 Дж',
    solution: {
      given: 'm = 160 г = 0,16 кг\nv = 10 м/с',
      find: 'Eк — ?',
      formula: 'E_k = \\frac{m \\cdot v^2}{2}',
      calc: 'E_k = \\frac{0{,}16 \\cdot 10^2}{2} = \\frac{0{,}16 \\cdot 100}{2} = \\frac{16}{2} = 8 \\text{ Дж}',
      result: 'Eк = 8 Дж',
    },
  },
];

const level2 = [
  {
    num: 5,
    text: 'Потенциальная энергия мяча, поднятого на высоту 5 м, равна 20 Дж. Определи массу мяча. g = 10 м/с².',
    answer: '0,4 кг',
    solution: {
      given: 'h = 5 м\nEп = 20 Дж\ng = 10 м/с²',
      find: 'm — ?',
      formula: 'E_p = m \\cdot g \\cdot h \\Rightarrow m = \\frac{E_p}{g \\cdot h}',
      calc: 'm = \\frac{20}{10 \\cdot 5} = \\frac{20}{50} = 0{,}4 \\text{ кг}',
      result: 'm = 0,4 кг',
    },
  },
  {
    num: 6,
    text: 'Тело массой 4 кг обладает потенциальной энергией 200 Дж. На какой высоте находится тело? g = 10 м/с².',
    answer: '5 м',
    solution: {
      given: 'm = 4 кг\nEп = 200 Дж\ng = 10 м/с²',
      find: 'h — ?',
      formula: 'E_p = m \\cdot g \\cdot h \\Rightarrow h = \\frac{E_p}{m \\cdot g}',
      calc: 'h = \\frac{200}{4 \\cdot 10} = \\frac{200}{40} = 5 \\text{ м}',
      result: 'h = 5 м',
    },
  },
  {
    num: 7,
    text: 'Кинетическая энергия автомобиля массой 1000 кг равна 50 000 Дж. С какой скоростью движется автомобиль?',
    answer: '10 м/с',
    solution: {
      given: 'm = 1000 кг\nEк = 50 000 Дж',
      find: 'v — ?',
      formula: 'E_k = \\frac{m \\cdot v^2}{2} \\Rightarrow v^2 = \\frac{2 \\cdot E_k}{m} \\Rightarrow v = \\sqrt{\\frac{2 \\cdot E_k}{m}}',
      calc: 'v = \\sqrt{\\frac{2 \\cdot 50000}{1000}} = \\sqrt{\\frac{100000}{1000}} = \\sqrt{100} = 10 \\text{ м/с}',
      result: 'v = 10 м/с',
    },
  },
  {
    num: 8,
    text: 'Два мяча одинаковой массы 0,5 кг движутся: первый — со скоростью 2 м/с, второй — со скоростью 6 м/с. Во сколько раз кинетическая энергия второго мяча больше кинетической энергии первого?',
    answer: 'В 9 раз',
    solution: {
      given: 'm₁ = m₂ = 0,5 кг\nv₁ = 2 м/с\nv₂ = 6 м/с',
      find: 'Eк₂ / Eк₁ — ?',
      formula: '\\frac{E_{k2}}{E_{k1}} = \\frac{\\frac{m \\cdot v_2^2}{2}}{\\frac{m \\cdot v_1^2}{2}} = \\frac{v_2^2}{v_1^2}',
      calc: '\\frac{E_{k2}}{E_{k1}} = \\frac{6^2}{2^2} = \\frac{36}{4} = 9',
      result: 'Кинетическая энергия второго мяча больше в 9 раз',
    },
  },
];

const level3 = [
  {
    num: 9,
    text: 'Мяч массой 0,5 кг находится на высоте 8 м и движется со скоростью 6 м/с. Определи его полную механическую энергию. g = 10 м/с².',
    answer: '49 Дж',
    solution: {
      given: 'm = 0,5 кг\nh = 8 м\nv = 6 м/с\ng = 10 м/с²',
      find: 'E — ?',
      formula: 'E = E_p + E_k = m \\cdot g \\cdot h + \\frac{m \\cdot v^2}{2}',
      calc: 'E_p = 0{,}5 \\cdot 10 \\cdot 8 = 40 \\text{ Дж}\\\\ E_k = \\frac{0{,}5 \\cdot 6^2}{2} = \\frac{0{,}5 \\cdot 36}{2} = \\frac{18}{2} = 9 \\text{ Дж}\\\\ E = 40 + 9 = 49 \\text{ Дж}',
      result: 'E = 49 Дж',
    },
  },
  {
    num: 10,
    text: 'Камень массой 2 кг бросили вертикально вниз с высоты 20 м с начальной скоростью 5 м/с. Найди его потенциальную, кинетическую и полную механическую энергию в начальный момент. g = 10 м/с².',
    answer: 'Eп = 400 Дж, Eк = 25 Дж, E = 425 Дж',
    solution: {
      given: 'm = 2 кг\nh = 20 м\nv = 5 м/с\ng = 10 м/с²',
      find: 'Eп, Eк, E — ?',
      formula: 'E_p = mgh,\\quad E_k = \\frac{mv^2}{2},\\quad E = E_p + E_k',
      calc: 'E_p = 2 \\cdot 10 \\cdot 20 = 400 \\text{ Дж}\\\\ E_k = \\frac{2 \\cdot 5^2}{2} = \\frac{2 \\cdot 25}{2} = 25 \\text{ Дж}\\\\ E = 400 + 25 = 425 \\text{ Дж}',
      result: 'Eп = 400 Дж, Eк = 25 Дж, E = 425 Дж',
    },
  },
  {
    num: 11,
    text: 'Санки массой 10 кг скатываются с горки высотой 3 м. Какую скорость приобретут санки у подножия горки, если пренебречь трением? g = 10 м/с². (Подсказка: используй закон сохранения энергии.)',
    answer: 'v ≈ 7,7 м/с',
    solution: {
      given: 'm = 10 кг\nh = 3 м\ng = 10 м/с²\nv₀ = 0 (начальная скорость = 0)',
      find: 'v — ?',
      formula: 'По закону сохранения энергии:\\\\ E_{п_{начало}} + E_{к_{начало}} = E_{п_{конец}} + E_{к_{конец}}\\\\ mgh + 0 = 0 + \\frac{mv^2}{2}\\\\ mgh = \\frac{mv^2}{2}',
      calc: 'Сокращаем массу m:\\\\ gh = \\frac{v^2}{2}\\\\ v^2 = 2gh = 2 \\cdot 10 \\cdot 3 = 60\\\\ v = \\sqrt{60} \\approx 7{,}7 \\text{ м/с}',
      result: 'v ≈ 7,7 м/с',
    },
  },
  {
    num: 12,
    text: 'Вагончик американских горок массой 200 кг находится на вершине первой горки высотой 25 м. Какой будет его скорость на вершине второй горки высотой 10 м, если пренебречь трением? g = 10 м/с². Начальная скорость равна нулю.',
    answer: 'v ≈ 17,3 м/с',
    solution: {
      given: 'm = 200 кг\nh₁ = 25 м\nh₂ = 10 м\nv₁ = 0\ng = 10 м/с²',
      find: 'v₂ — ?',
      formula: 'По закону сохранения энергии:\\\\ mgh_1 + 0 = mgh_2 + \\frac{mv_2^2}{2}',
      calc: 'Сокращаем массу m:\\\\ gh_1 = gh_2 + \\frac{v_2^2}{2}\\\\ \\frac{v_2^2}{2} = g(h_1 - h_2)\\\\ v_2^2 = 2g(h_1 - h_2) = 2 \\cdot 10 \\cdot (25 - 10) = 2 \\cdot 10 \\cdot 15 = 300\\\\ v_2 = \\sqrt{300} \\approx 17{,}3 \\text{ м/с}',
      result: 'v₂ ≈ 17,3 м/с',
    },
  },
];

function ProblemCard({ problem, showLevel }: { problem: typeof level1[0]; showLevel?: string }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="bg-indigo-100 text-indigo-700 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">
          {problem.num}
        </span>
        <div className="flex-1">
          {showLevel && <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{showLevel}</span>}
          <p className="text-gray-800 mt-1">{problem.text}</p>
        </div>
      </div>
    </div>
  );
}

function SolutionCard({ problem }: { problem: typeof level1[0] }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
      <p className="font-bold text-indigo-700 mb-2">Задача {problem.num}</p>
      <div className="space-y-2">
        <div className="solution-step">
          <p className="font-semibold text-gray-700">Дано:</p>
          {problem.solution.given.split('\n').map((line, i) => <p key={i} className="text-gray-600 text-sm">{line}</p>)}
        </div>
        <div className="solution-step">
          <p className="font-semibold text-gray-700">Найти: {problem.solution.find}</p>
        </div>
        <div className="solution-step">
          <p className="font-semibold text-gray-700">Формула:</p>
          <Math tex={problem.solution.formula} display />
        </div>
        <div className="solution-step">
          <p className="font-semibold text-gray-700">Вычисления:</p>
          <Math tex={problem.solution.calc} display />
        </div>
        <div className="bg-green-50 rounded-lg p-3 border border-green-300">
          <p className="font-bold text-green-800">✅ Ответ: {problem.solution.result}</p>
        </div>
      </div>
    </div>
  );
}

export function Section12_Problems() {
  const all = [...level1, ...level2, ...level3];

  return (
    <div>
      <SectionTitle id="problems" emoji="🧮" title="Задачи для самостоятельного решения" subtitle="12 задач трёх уровней сложности" />

      <p className="text-gray-600 mb-6">
        Сначала попробуй решить задачу самостоятельно. Потом можешь проверить ответ и 
        посмотреть подробное решение.
      </p>

      {/* Level 1 */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-green-700 mb-3 flex items-center gap-2">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Уровень 1</span>
          Базовый
        </h3>
        <div className="space-y-3">
          {level1.map(p => <ProblemCard key={p.num} problem={p} />)}
        </div>
      </div>

      {/* Level 2 */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-amber-700 mb-3 flex items-center gap-2">
          <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">Уровень 2</span>
          Средний
        </h3>
        <div className="space-y-3">
          {level2.map(p => <ProblemCard key={p.num} problem={p} />)}
        </div>
      </div>

      {/* Level 3 */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-red-700 mb-3 flex items-center gap-2">
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Уровень 3</span>
          Повышенный
        </h3>
        <div className="space-y-3">
          {level3.map(p => <ProblemCard key={p.num} problem={p} />)}
        </div>
      </div>

      {/* Answers */}
      <RevealBlock label="Показать ответы ко всем задачам" variant="answer">
        <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
          <h4 className="font-bold text-amber-800 mb-3">📋 Ответы</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {all.map(p => (
              <div key={p.num} className="bg-white rounded-lg p-2 border border-amber-200 flex gap-2">
                <span className="font-bold text-amber-700">#{p.num}:</span>
                <span className="text-gray-700">{p.answer}</span>
              </div>
            ))}
          </div>
        </div>
      </RevealBlock>

      {/* Detailed solutions */}
      <RevealBlock label="Показать подробные решения всех задач" variant="solution">
        <div className="space-y-4">
          <h4 className="font-bold text-indigo-800 text-lg">📝 Подробные решения</h4>
          {all.map(p => <SolutionCard key={p.num} problem={p} />)}
        </div>
      </RevealBlock>
    </div>
  );
}
