import React from "react";
import { motion } from "motion/react";
import { IoBook } from "react-icons/io5";
import { TbFlame } from "react-icons/tb";
import { FaGears } from "react-icons/fa6";
import { BiConversation } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import aboutUs from "../assets/aboutUs.svg";

const listHeading = [
  "Мотивуйте студентів",
  "Автоматизуйте нудні рутинні задачі",
  "Уся комунікація в одному місці",
  "Ефективне нагадування",
];
const listText = [
  "Висока залученість та легкість  утримання уваги студентів за рахунок гейміфікації",
  "Зекономте час на таких задачах як облік та розрахунок",
  "Не потрібно використовувати купу різних месенджерів для спілкування, тримайте все під рукою",
  "Студенти автоматично отримують нагадування якщо раптом забули про урок",
];
const listIcon = [TbFlame, FaGears, BiConversation, IoIosNotifications];
export default function AboutUs() {
  return (
    <section className="py-10 relative bg-primaryLight text-white scroll-my-20">
      <div className="container mx-auto flex flex-col space-y-4 text-black">
        <motion.h2 className="text-4xl font-semibold text-center">
          Що таке{" "}
          <span className="bg-gradient-to-r from-accent to-green bg-clip-text text-transparent">
            Repetilum?
          </span>
        </motion.h2>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-1 my-4 bg-black border-0 rounded" />
          <div className="absolute px-4 -translate-x-1/2 bg-primaryLight left-1/2 ">
            <IoBook className="text-2xl" />
          </div>
        </div>

        <p className="text-xl text-balance md:text-center px-4 md:p-0">
          Сучасна платформа, яка поєднує найкращі технології для ефективного
          навчання. Підходить для викладачів, студентів та організацій. Ви
          отримуєте можливість створювати інтерактивні курси, відстежувати
          результати та забезпечувати якісну комунікацію між усіма учасниками.
        </p>
        <div className="flex justify-around w-full gap-2">
          {/* FIRST COLUMN */}
          <div className="hidden md:flex w-1/2">
            <img src={aboutUs} alt="about us image" className="w-full" />
          </div>
          {/* SECOND COLUMN */}
          <div className="flex w-full md:w-1/2 flex-col space-y-2 justify-around px-4 md:p-0">
            {listHeading.map((heading, index) => {
              return (
                <motion.div className="flex flex-row items-start gap-5">
                  <div className="text-3xl text-accent">
                    {React.createElement(listIcon[index])}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold">{heading}</h3>
                    <p className="text-lg">{listText[index]}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
