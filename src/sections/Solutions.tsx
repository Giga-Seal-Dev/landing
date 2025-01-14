import corporate from "../assets/corporate.svg";
import courses from "../assets/Studying-cuate.svg";
import school from "../assets/Learning-amico.svg";

import { motion } from "motion/react";

export default function Solutions() {
  return (
    <section id="solutions" className=" py-10 bg-darkGreen text-white ">
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
          <div className="p-5 flex flex-col justify-center items-center border-accent border-2 rounded-xl border-solid">
            <img src={school} alt="School image" />
            <h3 className="text-2xl text-secondary font-semibold mb-3 ">
              Освітніх установ
            </h3>
            <ul
              role="list"
              className="marker:text-secondary flex flex-col space-y-5 *:text-pretty *:text-lg list-disc pl-5"
            >
              <li className="">
                Доступ до курсів і матеріалів з будь-якого місця, підтримка
                відеоуроків і інтерактивних завдань.
              </li>

              <li className="">
                Вся навчальна інформація в одному місці – лекції, завдання,
                записи занять, презентації.
              </li>
              <li className="">
                Детальна статистика про успішність студентів для викладачів та
                адміністрації
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
          <div className="p-5 flex flex-col justify-center items-center border-accent border-2 rounded-xl border-solid">
            <img src={corporate} alt="Corporate image" />
            <h3 className="text-2xl font-semibold mb-3 text-secondary">
              Корпоративного навчання
            </h3>
            <ul className="marker:text-secondary flex flex-col space-y-5 *:text-pretty *:text-lg list-disc pl-5">
              <li className="">
                Можливість створення індивідуальних навчальних програм для
                працівників.
              </li>
              <li className="">
                Автоматичне відстеження прогресу співробітників і оцінка їх
                результатів у режимі реального часу.
              </li>
              <li className="">
                Зниження витрат на друковані матеріали та офлайн-навчання
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
          <div className="p-5 flex flex-col justify-center items-center border-accent border-2 rounded-xl border-solid">
            <img src={courses} alt="Courses image" />
            <h3 className="text-2xl font-semibold mb-3 text-secondary">
              Онлайн-курсів та шкіл
            </h3>
            <ul className="marker:text-secondary flex flex-col space-y-5 *:text-pretty *:text-lg list-disc pl-5 ">
              <li className="">
                Можливість створити професійний вигляд курсу з вбудованими
                інструментами для аналітики та зворотного зв’язку.
              </li>
              <li className="">
                Швидке створення курсів, завантаження матеріалів і налаштування
                завдань.
              </li>
              <li className="">
                Підтримка відео, тестів, форумів і гейміфікації для залучення
                студентів.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
