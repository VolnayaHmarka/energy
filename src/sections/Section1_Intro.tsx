import { SectionTitle, ThinkBox } from '../components/UI';

export function Section1_Intro() {
  return (
    <div>
      <SectionTitle id="intro" emoji="👋" title="Добро пожаловать на урок!" subtitle="Начнём с нескольких интересных вопросов" />
      
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border-2 border-amber-200">
        <p className="text-lg text-gray-700 mb-4">
          Привет! Сегодня мы изучим одну из самых важных тем в физике — <strong>энергию</strong>. 
          Но прежде чем мы начнём, давай подумаем вместе над несколькими вопросами 👇
        </p>

        <ThinkBox>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-xl">🪨</span>
              <span>Почему камень, поднятый над землёй, может совершить работу, если его отпустить? Ведь он просто висит в воздухе!</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">🚗</span>
              <span>Почему движущийся автомобиль может сбить препятствие? Что за «сила» толкает его вперёд?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">🤔</span>
              <span>Что общего между натянутой резинкой, поднятой книгой и движущимся велосипедом?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">💭</span>
              <span>Может ли неподвижное тело обладать энергией? Или энергия есть только у того, что движется?</span>
            </li>
          </ul>
        </ThinkBox>

        <p className="text-gray-700 mt-4 mb-3">
          Ответы на все эти вопросы связаны с понятием <strong>энергии</strong>. Давай разберёмся!
        </p>

        <div className="bg-white rounded-xl p-5 border-2 border-indigo-200 mt-4">
          <h3 className="text-xl font-bold text-indigo-700 mb-3">⚡ Что такое энергия?</h3>
          <div className="bg-indigo-50 rounded-lg p-4 mb-4">
            <p className="text-lg font-semibold text-indigo-800">
              Энергия — это физическая величина, которая характеризует способность тела совершать работу.
            </p>
          </div>
          <p className="text-gray-700 mb-3">
            Проще говоря: <strong>энергия — это запас «возможностей» тела что-то сделать</strong>.
          </p>
          <p className="text-gray-700 mb-3">
            Вот несколько простых примеров из жизни:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-orange-50 rounded-lg p-3 flex items-start gap-2">
              <span className="text-2xl">🔋</span>
              <div>
                <p className="font-semibold text-orange-800">Заряженный телефон</p>
                <p className="text-sm text-gray-600">Батарея хранит энергию, которая позволяет телефону работать.</p>
              </div>
            </div>
            <div className="bg-orange-50 rounded-lg p-3 flex items-start gap-2">
              <span className="text-2xl">🍎</span>
              <div>
                <p className="font-semibold text-orange-800">Яблоко на дереве</p>
                <p className="text-sm text-gray-600">Поднято высоко — если упадёт, удар может оставить вмятину.</p>
              </div>
            </div>
            <div className="bg-orange-50 rounded-lg p-3 flex items-start gap-2">
              <span className="text-2xl">⚽</span>
              <div>
                <p className="font-semibold text-orange-800">Летящий мяч</p>
                <p className="text-sm text-gray-600">Движущийся мяч может сбить кегли или разбить стекло.</p>
              </div>
            </div>
            <div className="bg-orange-50 rounded-lg p-3 flex items-start gap-2">
              <span className="text-2xl">💧</span>
              <div>
                <p className="font-semibold text-orange-800">Вода в горном озере</p>
                <p className="text-sm text-gray-600">Падая вниз, вода вращает турбины и вырабатывает электричество.</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mt-4">
            В механике (раздел физики, который мы изучаем) существуют <strong>два основных вида энергии</strong>:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-3">
            <div className="flex-1 bg-blue-50 rounded-xl p-4 border-2 border-blue-300 text-center">
              <span className="text-3xl">⬆️</span>
              <p className="font-bold text-blue-700 text-lg mt-1">Потенциальная</p>
              <p className="text-sm text-gray-600">энергия положения</p>
            </div>
            <div className="flex items-center justify-center text-2xl text-gray-400">+</div>
            <div className="flex-1 bg-red-50 rounded-xl p-4 border-2 border-red-300 text-center">
              <span className="text-3xl">💨</span>
              <p className="font-bold text-red-700 text-lg mt-1">Кинетическая</p>
              <p className="text-sm text-gray-600">энергия движения</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-3 text-center">
            Давай подробно разберём каждый вид! 👇
          </p>
        </div>
      </div>
    </div>
  );
}
