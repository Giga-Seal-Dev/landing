import school from "../assets/highschool.svg";
import corporate from "../assets/corporate.svg";
import courses from "../assets/courses.svg";

import { motion } from "motion/react";

export default function Solutions() {
  return (
    <section>
      <h2 className="text-4xl mb-7 font-semibold text-center">
        Ми пропонуємо рішення, для:
      </h2>
      <div className="container flex gap-5 justify-center items-center m-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Начальная позиция ниже текущего
          whileInView={{ opacity: 1, y: 0 }} // Конечная позиция
          transition={{ duration: 0.6, delay: 0 }}
          className="w-full md:w-1/3"
        >
          {/* Card 1 */}
          <div className="p-5 flex flex-col justify-center items-center border-accent border-4 rounded-xl border-solid">
            <img src={school} alt="School image" />
            <h3 className="text-2xl text-secondary font-semibold mb-3 ">
              Освітніх установ
            </h3>
            <ul
              role="list"
              className="marker:text-secondary flex flex-col space-y-5 *:text-pretty *:text-lg list-disc pl-5"
            >
              <li className="">
                Керуйте розкладом, курсами та групами учнів в одному місці
              </li>

              <li className="">
                Отримуйте корисні звіти про прогрес учнів у часі.
              </li>
              <li className="">
                Інтеграція з Zoom, Google Meet та Telegram для організації
                занять.
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }} // Начальная позиция ниже текущего
          whileInView={{ opacity: 1, y: 0 }} // Конечная позиция
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/3"
        >
          {/* Card 2 */}
          <div className="p-5 flex flex-col justify-center items-center border-accent border-4 rounded-xl border-solid">
            <img src={corporate} alt="Corporate image" />
            <h3 className="text-2xl font-semibold mb-3 text-secondary">
              Корпоративного навчання
            </h3>
            <ul className="marker:text-secondary flex flex-col space-y-5 *:text-pretty *:text-lg list-disc pl-5">
              <li className="">
                Створюйте індивідуальні навчальні плани для співробітників.
              </li>
              <li className="">
                Автоматизуйте видачу сертифікатів після завершення курсів.
              </li>
              <li className="">
                Аналітика допомагає оцінювати ефективність навчання.
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Начальная позиция ниже текущего
          whileInView={{ opacity: 1, y: 0 }} // Конечная позиция
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full md:w-1/3"
        >
          {/* Card 3 */}
          <div className="p-5 flex flex-col justify-center items-center border-accent border-4 rounded-xl border-solid">
            <img src={courses} alt="Courses image" />
            <h3 className="text-2xl font-semibold mb-3 text-secondary">
              Онлайн-курсів та шкіл
            </h3>
            <ul className="marker:text-secondary flex flex-col space-y-5 *:text-pretty *:text-lg list-disc pl-5">
              <li className="">
                Конструктор курсів із інтеграцією платіжних систем (Stripe,
                Mono).
              </li>
              <li className="">
                Можливість проводити курси у форматі гейміфікації
              </li>
              <li className="">Привабливий інтерфейс для зручного навчання.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
