import { Math } from '../components/Math';
import { SectionTitle, FormulaCard, FactBox, RememberBox, ThinkBox, RevealBlock } from '../components/UI';
import { HeightSlider } from '../components/BallDrop';

export function Section2_PotentialEnergy() {
  return (
    <div>
      <SectionTitle id="potential" emoji="⬆️" title="Потенциальная энергия" subtitle="Энергия, связанная с положением тела" />

      <div className="space-y-4">
        {/* Explanation */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-blue-700 mb-3">Что это такое?</h3>
          <p className="text-gray-700 mb-3">
            Представь, что ты держишь книгу на вытянутой руке. Книга не двигается, но если ты её отпустишь — она упадёт, ударит по столу и, может быть, даже сломает карандаш. 
            Значит, <strong>даже неподвижная книга может совершить работу</strong>!
          </p>
          <p className="text-gray-700 mb-3">
            Откуда у неё эта способность? Всё дело в её <strong>положении</strong> — она поднята над землёй. 
            Именно это положение и создаёт запас энергии, который называется <strong>потенциальной энергией</strong>.
          </p>

          <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-300 my-4">
            <p className="text-lg font-semibold text-blue-800">
              📖 Потенциальная энергия — это энергия, которой обладает тело благодаря своему положению 
              (например, высоте над поверхностью Земли).
            </p>
          </div>

          <p className="text-gray-700">
            Слово «потенциальная» происходит от латинского «potentia» — <em>возможность</em>. 
            Это как бы «скрытая» энергия, которая ждёт своего момента.
          </p>
        </div>

        {/* Examples */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-blue-700 mb-3">📚 Примеры из жизни</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { emoji: '📕', title: 'Книга на полке', desc: 'Чем выше полка, тем больше энергия' },
              { emoji: '🪨', title: 'Камень на высоте', desc: 'Может упасть и совершить работу' },
              { emoji: '💧', title: 'Вода в водохранилище', desc: 'Падая, вращает турбины ГЭС' },
              { emoji: '🏗️', title: 'Поднятый груз крана', desc: 'При падении может разрушить' },
              { emoji: '⚽', title: 'Мяч над землёй', desc: 'Чем выше подняли — тем сильнее удар' },
              { emoji: '🎿', title: 'Лыжник на горе', desc: 'На вершине — запас энергии для спуска' },
            ].map((ex, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-3">
                <span className="text-2xl">{ex.emoji}</span>
                <p className="font-semibold text-blue-800 mt-1">{ex.title}</p>
                <p className="text-sm text-gray-600">{ex.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Formula */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-blue-700 mb-3">📐 Формула потенциальной энергии</h3>
          
          <FormulaCard label="Потенциальная энергия тела, поднятого над Землёй">
            <Math tex="E_p = m \cdot g \cdot h" display />
          </FormulaCard>

          <div className="mt-4 space-y-2">
            <p className="text-gray-700 font-semibold">Что означает каждая буква:</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-blue-200 p-2 text-left">Обозначение</th>
                    <th className="border border-blue-200 p-2 text-left">Что это</th>
                    <th className="border border-blue-200 p-2 text-left">Единица</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-blue-200 p-2"><Math tex="E_p" /></td>
                    <td className="border border-blue-200 p-2">Потенциальная энергия</td>
                    <td className="border border-blue-200 p-2">Дж (джоуль)</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-blue-200 p-2"><Math tex="m" /></td>
                    <td className="border border-blue-200 p-2">Масса тела</td>
                    <td className="border border-blue-200 p-2">кг (килограмм)</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-2"><Math tex="g" /></td>
                    <td className="border border-blue-200 p-2">Ускорение свободного падения</td>
                    <td className="border border-blue-200 p-2">м/с² (≈ 10 м/с²)</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-blue-200 p-2"><Math tex="h" /></td>
                    <td className="border border-blue-200 p-2">Высота над выбранным уровнем</td>
                    <td className="border border-blue-200 p-2">м (метр)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <h4 className="font-bold text-gray-800">🔍 Разберём формулу подробнее:</h4>
            <div className="bg-blue-50 rounded-lg p-4 space-y-2">
              <p className="text-gray-700">
                <strong>1. Чем больше масса (m)</strong> — тем больше потенциальная энергия. 
                Тяжёлый камень при падении с высоты нанесёт больший урон, чем лёгкий шарик.
              </p>
              <p className="text-gray-700">
                <strong>2. Чем больше высота (h)</strong> — тем больше потенциальная энергия. 
                Книга, упавшая со шкафа, ударит сильнее, чем упавшая со стула.
              </p>
              <p className="text-gray-700">
                <strong>3. При h = 0</strong> (тело на выбранном уровне отсчёта) потенциальная энергия равна нулю. Это логично — телу некуда падать!
              </p>
            </div>
          </div>

          <RememberBox>
            <p>
              Потенциальная энергия зависит от <strong>выбранного уровня отсчёта</strong>. 
              Обычно за нулевой уровень принимают поверхность Земли. Но можно выбрать любой уровень — 
              например, пол комнаты или крышку стола. Относительно разных уровней потенциальная энергия 
              одного и того же тела будет разной!
            </p>
          </RememberBox>
        </div>

        {/* Interactive */}
        <HeightSlider />

        {/* Visual scheme */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-blue-700 mb-3">📊 Схема: Как меняется потенциальная энергия при падении</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 my-4">
            <div className="bg-blue-100 rounded-xl p-4 text-center w-40">
              <div className="text-4xl mb-2">⚽</div>
              <div className="text-xs text-gray-500">▲ высоко ▲</div>
              <p className="font-bold text-blue-700">Eп — большая</p>
              <p className="text-sm text-gray-600">Мяч на высоте</p>
            </div>
            <div className="text-3xl text-gray-400">→</div>
            <div className="bg-blue-50 rounded-xl p-4 text-center w-40">
              <div className="text-4xl mb-2">⚽</div>
              <div className="text-xs text-gray-500">↕ средне ↕</div>
              <p className="font-bold text-blue-500">Eп — средняя</p>
              <p className="text-sm text-gray-600">Мяч падает</p>
            </div>
            <div className="text-3xl text-gray-400">→</div>
            <div className="bg-gray-100 rounded-xl p-4 text-center w-40">
              <div className="text-4xl mb-2">⚽</div>
              <div className="text-xs text-gray-500">▼ земля ▼</div>
              <p className="font-bold text-gray-500">Eп ≈ 0</p>
              <p className="text-sm text-gray-600">Мяч у земли</p>
            </div>
          </div>
          <p className="text-center text-gray-600 text-sm">При падении высота уменьшается → потенциальная энергия уменьшается</p>
        </div>

        {/* Facts */}
        <FactBox>
          <p>Вода в горных водохранилищах обладает огромной потенциальной энергией. Именно на этом принципе работают гидроэлектростанции (ГЭС) — вода падает с высоты и вращает турбины, превращая потенциальную энергию в электрическую!</p>
        </FactBox>
        <FactBox>
          <p>Потенциальная энергия камня массой 1 кг на высоте Эйфелевой башни (324 м) составляет примерно 3240 Дж. Этого хватит, чтобы нагреть чайную ложку воды примерно на 0,8 °C!</p>
        </FactBox>
        <FactBox>
          <p>Когда ты поднимаешься по лестнице на 5-й этаж, ты совершаешь работу против силы тяжести и увеличиваешь свою потенциальную энергию примерно на 7 000–10 000 Дж!</p>
        </FactBox>

        {/* Check question */}
        <ThinkBox>
          <p className="font-semibold">Проверь себя: Два одинаковых мяча находятся на разной высоте: один на 2 м, другой на 4 м. У какого мяча потенциальная энергия больше и во сколько раз?</p>
          <RevealBlock label="Показать ответ" variant="answer">
            <p className="bg-white rounded-lg p-3">
              У мяча на высоте 4 м потенциальная энергия <strong>больше в 2 раза</strong>, 
              потому что масса и g одинаковы, а высота в 2 раза больше. 
              Так как <Math tex="E_p = mgh" />, то при увеличении h в 2 раза, Eп тоже увеличивается в 2 раза.
            </p>
          </RevealBlock>
        </ThinkBox>
      </div>
    </div>
  );
}
