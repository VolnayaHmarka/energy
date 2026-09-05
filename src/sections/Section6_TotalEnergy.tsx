import { Math } from '../components/Math';
import { SectionTitle, FormulaCard, RememberBox, EnergyBar } from '../components/UI';

export function Section6_TotalEnergy() {
  return (
    <div>
      <SectionTitle id="total" emoji="🔋" title="Полная механическая энергия" subtitle="Сумма потенциальной и кинетической энергий" />

      <div className="space-y-4">
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-emerald-700 mb-3">Что это такое?</h3>

          <div className="bg-emerald-50 rounded-xl p-4 border-2 border-emerald-300 my-4">
            <p className="text-lg font-semibold text-emerald-800">
              📖 Полная механическая энергия — это сумма потенциальной и кинетической энергий тела.
            </p>
          </div>

          <p className="text-gray-700 mb-3">
            Проще говоря: полная энергия показывает, <strong>сколько всего энергии есть у тела</strong> — 
            и та, что связана с высотой, и та, что связана с движением.
          </p>

          <FormulaCard label="Полная механическая энергия">
            <Math tex="E = E_p + E_k" display />
          </FormulaCard>

          <div className="mt-4 space-y-2">
            <p className="text-gray-700 font-semibold">Где:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li><Math tex="E" /> — полная механическая энергия (Дж)</li>
              <li><Math tex="E_p" /> — потенциальная энергия (Дж)</li>
              <li><Math tex="E_k" /> — кинетическая энергия (Дж)</li>
            </ul>
          </div>
        </div>

        {/* Conservation law */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-emerald-700 mb-3">⚖️ Закон сохранения механической энергии</h3>
          
          <div className="bg-emerald-50 rounded-xl p-4 border-2 border-emerald-300 my-4">
            <p className="text-lg font-semibold text-emerald-800">
              Если на тело не действуют силы трения и сопротивления (или их действием можно пренебречь), 
              то полная механическая энергия остаётся постоянной.
            </p>
          </div>

          <FormulaCard>
            <Math tex="E_p + E_k = \text{const}" display />
          </FormulaCard>

          <p className="text-gray-700 mt-3 mb-4">
            Это значит: потенциальная энергия может уменьшаться, кинетическая — увеличиваться 
            (или наоборот), но их <strong>сумма не меняется</strong>!
          </p>

          {/* Visual demonstration */}
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-4">📊 Пример: Падение тела (полная энергия = 1000 Дж)</h4>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">🔝 Начало (тело высоко, не двигается)</p>
                <EnergyBar potential={1000} kinetic={0} total={1000} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">↕ Четверть пути вниз</p>
                <EnergyBar potential={750} kinetic={250} total={1000} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">↕ Половина пути вниз</p>
                <EnergyBar potential={500} kinetic={500} total={1000} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">↕ Три четверти пути вниз</p>
                <EnergyBar potential={250} kinetic={750} total={1000} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">🔽 Перед самой землёй</p>
                <EnergyBar potential={0} kinetic={1000} total={1000} />
              </div>
            </div>

            <div className="mt-4 bg-yellow-50 rounded-lg p-3 border border-yellow-200">
              <p className="text-sm text-gray-700">
                <strong>Обрати внимание:</strong> Синяя полоска (Eп) уменьшается, красная (Eк) увеличивается, 
                но <strong>общая длина полоски всегда одинакова</strong> — полная энергия E = 1000 Дж сохраняется!
              </p>
            </div>
          </div>
        </div>

        <RememberBox>
          <p className="mb-2">Закон сохранения механической энергии означает:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Энергия не исчезает и не появляется из ниоткуда</li>
            <li>Она только превращается из одного вида в другой</li>
            <li>Если Eп уменьшилась на 100 Дж, то Ek увеличилась ровно на 100 Дж</li>
            <li>Этот закон работает точно, если нет трения и сопротивления воздуха</li>
          </ul>
        </RememberBox>
      </div>
    </div>
  );
}
