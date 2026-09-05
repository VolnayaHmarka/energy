import { SectionTitle, FactBox } from '../components/UI';
import { BallDropSimulation } from '../components/BallDrop';

export function Section5_Transformation() {
  return (
    <div>
      <SectionTitle id="transformation" emoji="🔄" title="Превращение энергии" subtitle="Как потенциальная энергия превращается в кинетическую и наоборот" />

      <div className="space-y-4">
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-teal-700 mb-3">Как это работает?</h3>
          <p className="text-gray-700 mb-3">
            Потенциальная и кинетическая энергии могут <strong>превращаться друг в друга</strong>. 
            Это одно из самых интересных свойств энергии!
          </p>

          <div className="bg-teal-50 rounded-xl p-5 border-2 border-teal-200">
            <h4 className="font-bold text-teal-800 mb-3">🎾 Пример: Падающий мяч</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white rounded-lg p-3">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl shrink-0">1</div>
                <div>
                  <p className="font-bold text-gray-800">Мяч высоко, не двигается</p>
                  <p className="text-gray-600">Eп — максимальная, Ek = 0</p>
                  <p className="text-sm text-gray-500">Вся энергия — потенциальная. Мяч «готов» к падению.</p>
                </div>
              </div>
              <div className="flex justify-center text-2xl text-teal-400">⬇️</div>
              <div className="flex items-start gap-3 bg-white rounded-lg p-3">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white text-xl shrink-0">2</div>
                <div>
                  <p className="font-bold text-gray-800">Мяч падает (на полпути)</p>
                  <p className="text-gray-600">Eп уменьшается, Ek увеличивается</p>
                  <p className="text-sm text-gray-500">Часть потенциальной энергии превратилась в кинетическую. Мяч набирает скорость!</p>
                </div>
              </div>
              <div className="flex justify-center text-2xl text-teal-400">⬇️</div>
              <div className="flex items-start gap-3 bg-white rounded-lg p-3">
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white text-xl shrink-0">3</div>
                <div>
                  <p className="font-bold text-gray-800">Мяч у самой земли</p>
                  <p className="text-gray-600">Eп ≈ 0, Ek — максимальная</p>
                  <p className="text-sm text-gray-500">Почти вся потенциальная энергия превратилась в кинетическую. Мяч движется очень быстро!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simulation */}
        <BallDropSimulation />

        {/* Reverse */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-teal-700 mb-3">🔄 А бывает наоборот?</h3>
          <p className="text-gray-700 mb-3">
            Да! Кинетическая энергия тоже может превращаться в потенциальную.
          </p>
          <p className="text-gray-700 mb-3">
            Представь, что ты подбрасываешь мяч вверх:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center my-4">
            <div className="bg-red-100 rounded-lg p-3 text-center w-40">
              <p className="text-2xl">🤾</p>
              <p className="text-sm font-bold text-red-700">Бросок</p>
              <p className="text-xs text-gray-600">Ek — большая</p>
              <p className="text-xs text-gray-600">Ep — маленькая</p>
            </div>
            <div className="text-2xl">→</div>
            <div className="bg-purple-100 rounded-lg p-3 text-center w-40">
              <p className="text-2xl">⬆️</p>
              <p className="text-sm font-bold text-purple-700">Полёт вверх</p>
              <p className="text-xs text-gray-600">Ek уменьшается</p>
              <p className="text-xs text-gray-600">Ep увеличивается</p>
            </div>
            <div className="text-2xl">→</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center w-40">
              <p className="text-2xl">🔝</p>
              <p className="text-sm font-bold text-blue-700">Вершина</p>
              <p className="text-xs text-gray-600">Ek = 0</p>
              <p className="text-xs text-gray-600">Ep — максимальная</p>
            </div>
          </div>
          <p className="text-gray-700 text-center text-sm">
            Кинетическая энергия полностью превратилась в потенциальную!
          </p>
        </div>

        {/* Real life examples */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-teal-700 mb-3">🌍 Примеры превращения энергии в жизни</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-200">
              <p className="text-2xl mb-1">🎢</p>
              <p className="font-bold text-teal-800">Американские горки</p>
              <p className="text-sm text-gray-700 mt-1">
                На вершине — максимум потенциальной энергии. При спуске она превращается 
                в кинетическую. На следующем подъёме — обратно. И так много раз!
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-200">
              <p className="text-2xl mb-1">⏰</p>
              <p className="font-bold text-teal-800">Маятник часов</p>
              <p className="text-sm text-gray-700 mt-1">
                В крайних точках маятник останавливается (Ek = 0, Ep максимальна). 
                В нижней точке скорость максимальна (Ek максимальна, Ep = 0).
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-200">
              <p className="text-2xl mb-1">🤸</p>
              <p className="font-bold text-teal-800">Прыжок с трамплина</p>
              <p className="text-sm text-gray-700 mt-1">
                На трамплине — запас потенциальной энергии. При прыжке и полёте вниз — 
                она переходит в кинетическую энергию.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-200">
              <p className="text-2xl mb-1">🛷</p>
              <p className="font-bold text-teal-800">Горка для санок</p>
              <p className="text-sm text-gray-700 mt-1">
                Забрался наверх — есть потенциальная энергия. Поехал вниз — она превращается 
                в кинетическую. Чем выше горка, тем быстрее спуск!
              </p>
            </div>
          </div>
        </div>

        {/* Friction note */}
        <div className="bg-orange-50 rounded-2xl p-6 border-2 border-orange-200">
          <h3 className="text-lg font-bold text-orange-800 mb-3">⚠️ А в реальной жизни?</h3>
          <p className="text-gray-700 mb-2">
            В реальных условиях часть механической энергии теряется — она превращается 
            во <strong>внутреннюю энергию</strong> (тепло) из-за:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li><strong>Сопротивления воздуха</strong> — воздух «тормозит» движущееся тело</li>
            <li><strong>Трения</strong> — при скольжении санок по снегу часть энергии уходит в нагрев</li>
          </ul>
          <p className="text-gray-700 mt-2">
            Именно поэтому маятник со временем останавливается, а мяч после каждого отскока 
            поднимается всё ниже и ниже.
          </p>
        </div>

        <FactBox>
          <p>На американских горках вагончик поднимают на первую (самую высокую) горку с помощью мотора. После этого мотор больше не нужен — вагончик движется за счёт превращения потенциальной энергии в кинетическую и обратно! Каждая следующая горка немного ниже предыдущей, потому что часть энергии теряется на трение.</p>
        </FactBox>
      </div>
    </div>
  );
}
