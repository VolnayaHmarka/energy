import { Math } from '../components/Math';
import { SectionTitle, FormulaCard } from '../components/UI';

export function Section7_Formulas() {
  return (
    <div>
      <SectionTitle id="formulas" emoji="📝" title="Запомни: все формулы" subtitle="Основные формулы урока в одном месте" />

      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <FormulaCard label="Потенциальная энергия">
            <Math tex="E_p = m \cdot g \cdot h" display />
          </FormulaCard>
          <FormulaCard label="Кинетическая энергия">
            <Math tex="E_k = \frac{m \cdot v^2}{2}" display />
          </FormulaCard>
          <FormulaCard label="Полная механическая энергия">
            <Math tex="E = E_p + E_k" display />
          </FormulaCard>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <h4 className="font-bold text-gray-800 mb-3">📏 Единица измерения энергии</h4>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-2xl font-bold text-indigo-700">1 Дж (джоуль)</p>
            <p className="text-sm text-gray-500 mt-1">Названа в честь английского физика Джеймса Джоуля</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <h4 className="font-bold text-gray-800 mb-3">📋 Таблица обозначений и единиц измерения</h4>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-indigo-100">
                <th className="border border-indigo-200 p-2 text-left">Величина</th>
                <th className="border border-indigo-200 p-2 text-center">Обозначение</th>
                <th className="border border-indigo-200 p-2 text-center">Единица</th>
                <th className="border border-indigo-200 p-2 text-left">Примечание</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-indigo-200 p-2">Потенциальная энергия</td>
                <td className="border border-indigo-200 p-2 text-center"><Math tex="E_p" /></td>
                <td className="border border-indigo-200 p-2 text-center">Дж</td>
                <td className="border border-indigo-200 p-2">Зависит от высоты и массы</td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border border-indigo-200 p-2">Кинетическая энергия</td>
                <td className="border border-indigo-200 p-2 text-center"><Math tex="E_k" /></td>
                <td className="border border-indigo-200 p-2 text-center">Дж</td>
                <td className="border border-indigo-200 p-2">Зависит от скорости и массы</td>
              </tr>
              <tr>
                <td className="border border-indigo-200 p-2">Полная мех. энергия</td>
                <td className="border border-indigo-200 p-2 text-center"><Math tex="E" /></td>
                <td className="border border-indigo-200 p-2 text-center">Дж</td>
                <td className="border border-indigo-200 p-2"><Math tex="E = E_p + E_k" /></td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border border-indigo-200 p-2">Масса</td>
                <td className="border border-indigo-200 p-2 text-center"><Math tex="m" /></td>
                <td className="border border-indigo-200 p-2 text-center">кг</td>
                <td className="border border-indigo-200 p-2">—</td>
              </tr>
              <tr>
                <td className="border border-indigo-200 p-2">Скорость</td>
                <td className="border border-indigo-200 p-2 text-center"><Math tex="v" /></td>
                <td className="border border-indigo-200 p-2 text-center">м/с</td>
                <td className="border border-indigo-200 p-2">—</td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border border-indigo-200 p-2">Высота</td>
                <td className="border border-indigo-200 p-2 text-center"><Math tex="h" /></td>
                <td className="border border-indigo-200 p-2 text-center">м</td>
                <td className="border border-indigo-200 p-2">Над выбранным уровнем</td>
              </tr>
              <tr>
                <td className="border border-indigo-200 p-2">Ускорение своб. падения</td>
                <td className="border border-indigo-200 p-2 text-center"><Math tex="g" /></td>
                <td className="border border-indigo-200 p-2 text-center">м/с²</td>
                <td className="border border-indigo-200 p-2">≈ 9,8 м/с² (в задачах часто 10 м/с²)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
