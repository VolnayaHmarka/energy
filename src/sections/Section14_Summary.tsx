import { Math } from '../components/Math';
import { SectionTitle, FormulaCard } from '../components/UI';

export function Section14_Summary() {
  return (
    <div>
      <SectionTitle id="summary" emoji="📌" title="Итог урока: что нужно запомнить" subtitle="Краткое повторение всего, что мы изучили" />

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-indigo-200">
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 border border-indigo-200">
            <p className="font-bold text-indigo-700 mb-2">1. Что такое энергия</p>
            <p className="text-gray-700">Энергия — физическая величина, характеризующая способность тела совершать работу. Измеряется в джоулях (Дж).</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-blue-200">
            <p className="font-bold text-blue-700 mb-2">2. Потенциальная энергия</p>
            <p className="text-gray-700 mb-2">Энергия тела, связанная с его положением (высотой над уровнем отсчёта).</p>
            <FormulaCard>
              <Math tex="E_p = m \cdot g \cdot h" display />
            </FormulaCard>
            <p className="text-sm text-gray-600 mt-2">Зависит от массы тела и высоты. Чем больше m или h, тем больше Eп.</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-red-200">
            <p className="font-bold text-red-700 mb-2">3. Кинетическая энергия</p>
            <p className="text-gray-700 mb-2">Энергия тела, связанная с его движением.</p>
            <FormulaCard>
              <Math tex="E_k = \frac{m \cdot v^2}{2}" display />
            </FormulaCard>
            <p className="text-sm text-gray-600 mt-2">Зависит от массы тела и скорости. Скорость входит в квадрате — это важно!</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-emerald-200">
            <p className="font-bold text-emerald-700 mb-2">4. Полная механическая энергия</p>
            <p className="text-gray-700 mb-2">Сумма потенциальной и кинетической энергий.</p>
            <FormulaCard>
              <Math tex="E = E_p + E_k" display />
            </FormulaCard>
          </div>

          <div className="bg-white rounded-xl p-4 border border-teal-200">
            <p className="font-bold text-teal-700 mb-2">5. Превращение энергии</p>
            <p className="text-gray-700">Потенциальная энергия может превращаться в кинетическую (при падении) и наоборот (при подъёме). В идеальных условиях их сумма не меняется.</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-purple-200">
            <p className="font-bold text-purple-700 mb-2">6. Закон сохранения механической энергии</p>
            <p className="text-gray-700 mb-2">Без трения и сопротивления воздуха полная механическая энергия тела остаётся постоянной:</p>
            <div className="text-center">
              <Math tex="E_p + E_k = \text{const}" display />
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <p className="font-bold text-gray-700 mb-2">7. Важные значения</p>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• Единица энергии: <strong>1 Дж (джоуль)</strong></li>
              <li>• Ускорение свободного падения: <strong>g ≈ 9,8 м/с²</strong> (в задачах часто g = 10 м/с²)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
