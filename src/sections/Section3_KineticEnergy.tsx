import { Math } from '../components/Math';
import { SectionTitle, FormulaCard, FactBox, ThinkBox, RevealBlock } from '../components/UI';
import { SpeedSlider } from '../components/BallDrop';

export function Section3_KineticEnergy() {
  return (
    <div>
      <SectionTitle id="kinetic" emoji="💨" title="Кинетическая энергия" subtitle="Энергия движущегося тела" />

      <div className="space-y-4">
        {/* Explanation */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-red-700 mb-3">Что это такое?</h3>
          <p className="text-gray-700 mb-3">
            Ты когда-нибудь играл в боулинг или видел, как катящийся шар сбивает кегли? 
            Шар не был высоко — он катился по полу. Но он <strong>двигался</strong>, и именно движение 
            дало ему возможность совершить работу — сбить кегли.
          </p>
          <p className="text-gray-700 mb-3">
            Энергия, которой обладает тело <strong>благодаря своему движению</strong>, называется 
            <strong> кинетической энергией</strong>.
          </p>

          <div className="bg-red-50 rounded-xl p-4 border-2 border-red-300 my-4">
            <p className="text-lg font-semibold text-red-800">
              📖 Кинетическая энергия — это энергия, которой обладает тело вследствие своего движения.
            </p>
          </div>

          <p className="text-gray-700">
            Слово «кинетическая» происходит от греческого «kinesis» — <em>движение</em>. 
            Если тело стоит неподвижно, его кинетическая энергия равна нулю.
          </p>
        </div>

        {/* Examples */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-red-700 mb-3">📚 Примеры из жизни</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { emoji: '🚗', title: 'Движущийся автомобиль', desc: 'Чем быстрее едет, тем опаснее столкновение' },
              { emoji: '🚴', title: 'Велосипедист', desc: 'Разогнался — может проехать далеко по инерции' },
              { emoji: '⚽', title: 'Летящий мяч', desc: 'Может разбить окно или сбить кегли' },
              { emoji: '🚂', title: 'Поезд', desc: 'Очень большая масса = огромная кинетическая энергия' },
              { emoji: '🪨', title: 'Падающий камень', desc: 'Набирает скорость при падении' },
              { emoji: '🏒', title: 'Движущаяся шайба', desc: 'Маленькая, но быстрая — несёт энергию' },
            ].map((ex, i) => (
              <div key={i} className="bg-red-50 rounded-lg p-3">
                <span className="text-2xl">{ex.emoji}</span>
                <p className="font-semibold text-red-800 mt-1">{ex.title}</p>
                <p className="text-sm text-gray-600">{ex.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Formula */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-red-700 mb-3">📐 Формула кинетической энергии</h3>
          
          <FormulaCard label="Кинетическая энергия">
            <Math tex="E_k = \frac{m \cdot v^2}{2}" display />
          </FormulaCard>

          <div className="mt-4 space-y-2">
            <p className="text-gray-700 font-semibold">Что означает каждая буква:</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-red-100">
                    <th className="border border-red-200 p-2 text-left">Обозначение</th>
                    <th className="border border-red-200 p-2 text-left">Что это</th>
                    <th className="border border-red-200 p-2 text-left">Единица</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-red-200 p-2"><Math tex="E_k" /></td>
                    <td className="border border-red-200 p-2">Кинетическая энергия</td>
                    <td className="border border-red-200 p-2">Дж (джоуль)</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-red-200 p-2"><Math tex="m" /></td>
                    <td className="border border-red-200 p-2">Масса тела</td>
                    <td className="border border-red-200 p-2">кг (килограмм)</td>
                  </tr>
                  <tr>
                    <td className="border border-red-200 p-2"><Math tex="v" /></td>
                    <td className="border border-red-200 p-2">Скорость тела</td>
                    <td className="border border-red-200 p-2">м/с (метр в секунду)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <h4 className="font-bold text-gray-800">🔍 Разберём формулу подробнее:</h4>
            <div className="bg-red-50 rounded-lg p-4 space-y-3">
              <p className="text-gray-700">
                <strong>1. Чем больше масса (m)</strong> — тем больше кинетическая энергия. 
                Грузовик на скорости 60 км/ч гораздо опаснее велосипеда на той же скорости.
              </p>
              <p className="text-gray-700">
                <strong>2. Чем больше скорость (v)</strong> — тем больше кинетическая энергия. 
                Быстрый мяч сбивает кегли, а медленный — нет.
              </p>
              <p className="text-gray-700">
                <strong>3. Скорость входит в формулу в квадрате (v²)</strong> — это очень важно! 
                Это значит, что скорость влияет на энергию гораздо сильнее, чем масса.
              </p>
            </div>
          </div>

          {/* Speed squared explanation */}
          <div className="bg-amber-50 rounded-xl p-5 border-2 border-amber-300 mt-4">
            <h4 className="font-bold text-amber-800 mb-3">⚠️ Почему квадрат скорости так важен?</h4>
            <p className="text-gray-700 mb-3">Давай разберём на примере:</p>
            <div className="space-y-2 text-gray-700">
              <p>Пусть масса тела = 2 кг</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <div className="bg-white rounded-lg p-3 border border-amber-200">
                  <p className="font-semibold">Скорость v = 5 м/с</p>
                  <p className="text-sm">
                    <Math tex="E_k = \dfrac{2 \cdot 5^2}{2} = \dfrac{2 \cdot 25}{2} = 25 \text{ Дж}" display />
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-amber-200">
                  <p className="font-semibold">Скорость v = 10 м/с (в 2 раза больше)</p>
                  <p className="text-sm">
                    <Math tex="E_k = \dfrac{2 \cdot 10^2}{2} = \dfrac{2 \cdot 100}{2} = 100 \text{ Дж}" display />
                  </p>
                </div>
              </div>
              <div className="bg-yellow-100 rounded-lg p-3 mt-2 text-center">
                <p className="font-bold text-amber-800 text-lg">
                  Скорость увеличилась в 2 раза → энергия увеличилась в 4 раза!
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  (25 Дж → 100 Дж, то есть в 4 раза, потому что 2² = 4)
                </p>
              </div>
              <p className="mt-2">
                А если скорость увеличить в 3 раза? Энергия увеличится в <strong>9 раз</strong> (3² = 9)!
                Именно поэтому на дорогах так опасно превышать скорость.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive */}
        <SpeedSlider />

        {/* Facts */}
        <FactBox>
          <p>Кинетическая энергия автомобиля массой 1000 кг, едущего со скоростью 72 км/ч (20 м/с), составляет 200 {'&nbsp;'} 000 Дж = 200 кДж. Этого достаточно, чтобы поднять этот же автомобиль на высоту 20 метров!</p>
        </FactBox>
        <FactBox>
          <p>Пуля, вылетающая из ружья, имеет маленькую массу (около 10 г), но огромную скорость (около 700 м/с). Её кинетическая энергия — около 2 450 Дж! Скорость в квадрате делает своё дело.</p>
        </FactBox>
        <FactBox>
          <p>Когда метеорит входит в атмосферу Земли, его скорость может достигать 20 км/с. Даже маленький метеорит массой 1 кг имеет кинетическую энергию 200 000 000 Дж — как 50 кг динамита!</p>
        </FactBox>

        {/* Check question */}
        <ThinkBox>
          <p className="font-semibold">Проверь себя: Автомобиль увеличил скорость с 30 км/ч до 90 км/ч (в 3 раза). Во сколько раз увеличилась его кинетическая энергия?</p>
          <RevealBlock label="Показать ответ" variant="answer">
            <p className="bg-white rounded-lg p-3">
              Кинетическая энергия увеличилась в <strong>9 раз</strong>, потому что скорость входит в формулу 
              в квадрате: 3² = 9. Если скорость выросла в 3 раза, то энергия выросла в 3² = 9 раз.
            </p>
          </RevealBlock>
        </ThinkBox>
      </div>
    </div>
  );
}
