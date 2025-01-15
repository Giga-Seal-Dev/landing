import { motion } from "motion/react";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import corporate from "../assets/corporate.svg";
import school from "../assets/Learning-amico.svg";
import courses from "../assets/Studying-cuate.svg";
import { HeaderTextColorContext } from "../components/Header/HeaderContext";

export default function Solutions() {
  const { updateHeaderTextColor } = useContext(HeaderTextColorContext);
  const { ref, inView } = useInView({ threshold: 0.7 });

  useEffect(() => {
    if (inView) updateHeaderTextColor("light");
  }, [inView, updateHeaderTextColor]);

  return (
    <section
      ref={ref}
      id="solutions"
      className="py-10 bg-primaryLight bg-[url(./assets/wavy-steps.svg)] bg-cover bg-center bg-no-repeat text-white"
    >
      <h2 className="text-4xl mb-7 font-semibold text-center text-black">
        Ми пропонуємо рішення, для:
      </h2>
      <div className="container flex gap-5 justify-center items-stretch m-auto">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="w-full md:w-1/3 flex"
        >
          <div className="p-6 bg-white flex flex-col justify-start items-start border border-gray-200 shadow-lg rounded-lg w-full">
            <div className="w-full flex justify-center mb-4">
              <img
                src={school}
                alt="School image"
                className="rounded-md shadow-md object-cover"
              />
            </div>
            <h3 className="text-xl text-gray-800 font-bold mb-4 text-center w-full">
              Освітніх установ
            </h3>
            <ul
              role="list"
              className="text-gray-600 text-base list-disc space-y-3 pl-5 leading-6"
            >
              <li>
                Доступ до курсів і матеріалів з будь-якого місця, підтримка
                відеоуроків і інтерактивних завдань.
              </li>
              <li>
                Вся навчальна інформація в одному місці – лекції, завдання,
                записи занять, презентації.
              </li>
              <li>
                Детальна статистика про успішність студентів для викладачів та
                адміністрації.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Starting position below the current one
          whileInView={{ opacity: 1, y: 0 }} // Final position
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/3 flex"
        >
          <div className="p-6 bg-white flex flex-col justify-start items-start border border-gray-200 shadow-lg rounded-lg w-full">
            <div className="w-full flex justify-center mb-4">
              <img
                src={corporate}
                alt="Corporate image"
                className="rounded-md shadow-md object-cover"
              />
            </div>
            <h3 className="text-xl text-gray-800 font-bold mb-4 text-center w-full">
              Корпоративного навчання
            </h3>
            <ul
              role="list"
              className="text-gray-600 text-base list-disc space-y-3 pl-5 leading-6"
            >
              <li>
                Можливість створення індивідуальних навчальних програм для
                працівників.
              </li>
              <li>
                Автоматичне відстеження прогресу співробітників і оцінка їх
                результатів у режимі реального часу.
              </li>
              <li>Зниження витрат на друковані матеріали та офлайн-навчання</li>
            </ul>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Starting position below the current one
          whileInView={{ opacity: 1, y: 0 }} // Final position
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full md:w-1/3 flex"
        >
          <div className="p-6 bg-white flex flex-col justify-start items-start border border-gray-200 shadow-lg rounded-lg w-full">
            <div className="w-full flex justify-center mb-4">
              <img
                src={courses}
                alt="Courses image"
                className="rounded-md shadow-md object-cover"
              />
            </div>
            <h3 className="text-xl text-gray-800 font-bold mb-4 text-center w-full">
              Онлайн-курсів та шкіл
            </h3>
            <ul
              role="list"
              className="text-gray-600 text-base list-disc space-y-3 pl-5 leading-6"
            >
              <li>
                Можливість створити професійний вигляд курсу з вбудованими
                інструментами для аналітики та зворотного зв’язку.
              </li>
              <li>
                Швидке створення курсів, завантаження матеріалів і налаштування
                завдань.
              </li>
              <li>
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
