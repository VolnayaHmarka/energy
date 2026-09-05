import { Math } from '../components/Math';
import { SectionTitle, ExampleBox, RevealBlock } from '../components/UI';

export function Section8_Examples() {
  return (
    <div>
      <SectionTitle id="examples" emoji="📖" title="Разбор типовых примеров" subtitle="Подробное решение задач перед самостоятельной работой" />

      <div className="space-y-4">
        {/* Example 1 */}
        <ExampleBox title="Пример 1 — Потенциальная энергия">
          <p className="font-semibold text-gray-800 mb-3">
            Тело массой 2 кг находится на высоте 5 м. Найди его потенциальную энергию. 
            Используй g = 10 м/с².
          </p>
          <RevealBlock label="Показать решение" variant="solution">
            <div className="bg-white rounded-lg p-4 space-y-3">
              <div className="solution-step">
                <p className="font-bold text-indigo-700">1. Дано:</p>
                <p>m = 2 кг</p>
                <p>h = 5 м</p>
                <p>g = 10 м/с²</p>
              </div>
              <div className="solution-step">
                <p className="font-bold text-indigo-700">2. Найти:</p>
                <p><Math tex="E_p" /> — ?</p>
              </div>
              <div className="solution-step">
                <p className="font-bold text-indigo-700">3. Формула:</p>
                <p><Math tex="E_p = m \cdot g \cdot h" /></p>
              </div>
              <div className="solution-step">
                <p className="font-bold text-indigo-700">4. Подставляем числа:</p>
                <p><Math tex="E_p = 2 \cdot 10 \cdot 5" /></p>
              </div>
              <div className="solution-step">
                <p className="font-bold text-indigo-700">5. Вычисляем:</p>
                <p><Math tex="E_p = 100" /> Дж</p>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-300">
                <p className="font-bold text-green-800">✅ Ответ: Eп = 100 Дж</p>
                <p className="text-sm text-gray-600 mt-1">Тело массой 2 кг на высоте 5 м обладает потенциальной энергией 100 джоулей.</p>
              </div>
            </div>
          </RevealBlock>
        </ExampleBox>

        {/* Example 2 */}
        <ExampleBox title="Пример 2 — Кинетическая энергия">
          <p className="font-semibold text-gray-800 mb-3">
            Мяч массой 2 кг движется со скоростью 3 м/с. Найди его кинетическую энергию.
          </p>
          <RevealBlock label="Показать решение" variant="solution">
            <div className="bg-white rounded-lg p-4 space-y-3">
              <div className="solution-step">
                <p className="font-bold text-indigo-700">1. Дано:</p>
                <p>m = 2 кг</p>
                <p>v = 3 м/с</p>
              </div>
              <div className="solution-step">
                <p className="font-bold text-indigo-700">2. Найти:</p>
                <p><Math tex="E_k" /> — ?</p>
              </div>
              <div className="solution-step">
                <p className="font-bold text-indigo-700">3. Формула:</p>
                <p><Math tex="E_k = \dfrac{m \cdot v^2}{2}" display /></p>
              </div>
              <div className="solution-step">
                <p className="font-bold text-indigo-700">4. Подставляем числа:</p>
                <p><Math tex="E_k = \dfrac{2 \cdot 3^2}{2} = \dfrac{2 \cdot 9}{2}" display /></p>
              </div>
              <div className="solution-step">
                <p className="font-bold text-indigo-700">5. Вычисляем:</p>
                <p><Math tex="E_k = \dfrac{18}{2} = 9 \text{ Дж}" display /></p>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-300">
                <p className="font-bold text-green-800">✅ Ответ: Eк = 9 Дж</p>
                <p className="text-sm text-gray-600 mt-1">Мяч массой 2 кг, движущийся со скоростью 3 м/с, обладает кинетической энергией 9 джоулей.</p>
              </div>
            </div>
          </RevealBlock>
        </ExampleBox>

        {/* Example 3 */}
        <ExampleBox title="Пример 3 — Полная механическая энергия">
          <p className="font-semibold text-gray-800 mb-3">
            Тело имеет потенциальную энергию 300 Дж и кинетическую энергию 200 Дж. 
            Найди полную механическую энергию.
          </p>
          <RevealBlock label="Показать решение" variant="solution">
            <div className="bg-white rounded-lg p-4 space-y-3">
              <div className="solution-step">
                <p className="font-bold text-indigo-700">1. Дано:</p>
                <p>Eп = 300 Дж</p>
                <p>Eк = 200 Дж</p>
              </div>
              <div className="solution-step">
                <p className="font-bold text-indigo-700">2. Найти:</p>
                <p>E — ?</p>
              </div>
              <div className="solution-step">
                <p className="font-bold text-indigo-700">3. Формула:</p>
                <p><Math tex="E = E_p + E_k" /></p>
              </div>
              <div className="solution-step">
                <p className="font-bold text-indigo-700">4. Подставляем числа:</p>
                <p><Math tex="E = 300 + 200" /></p>
              </div>
              <div className="solution-step">
                <p className="font-bold text-indigo-700">5. Вычисляем:</p>
                <p><Math tex="E = 500" /> Дж</p>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-300">
                <p className="font-bold text-green-800">✅ Ответ: E = 500 Дж</p>
              </div>
            </div>
          </RevealBlock>
        </ExampleBox>

        {/* Example 4 */}
        <ExampleBox title="Пример 4 — Смешанная задача">
          <p className="font-semibold text-gray-800 mb-3">
            Тело массой 2 кг находится на высоте 10 м и движется со скоростью 5 м/с. 
            Используй g = 10 м/с². Найди: 1) потенциальную энергию; 2) кинетическую энергию; 
            3) полную механическую энергию.
          </p>
          <RevealBlock label="Показать решение" variant="solution">
            <div className="bg-white rounded-lg p-4 space-y-4">
              <div className="solution-step">
                <p className="font-bold text-indigo-700">Дано:</p>
                <p>m = 2 кг, h = 10 м, v = 5 м/с, g = 10 м/с²</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="font-bold text-blue-700 mb-2">Часть 1: Потенциальная энергия</p>
                <div className="solution-step">
                  <p><Math tex="E_p = m \cdot g \cdot h = 2 \cdot 10 \cdot 10 = 200" /> Дж</p>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-3">
                <p className="font-bold text-red-700 mb-2">Часть 2: Кинетическая энергия</p>
                <div className="solution-step">
                  <p><Math tex="E_k = \dfrac{m \cdot v^2}{2} = \dfrac{2 \cdot 5^2}{2} = \dfrac{2 \cdot 25}{2} = \dfrac{50}{2} = 25 \text{ Дж}" display /></p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-3">
                <p className="font-bold text-green-700 mb-2">Часть 3: Полная механическая энергия</p>
                <div className="solution-step">
                  <p><Math tex="E = E_p + E_k = 200 + 25 = 225" /> Дж</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-3 border border-green-300">
                <p className="font-bold text-green-800">✅ Ответ:</p>
                <p>1) Eп = 200 Дж</p>
                <p>2) Eк = 25 Дж</p>
                <p>3) E = 225 Дж</p>
              </div>
            </div>
          </RevealBlock>
        </ExampleBox>
      </div>
    </div>
  );
}
