import logo from "../assets/logo.svg";
import { motion } from "motion/react";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import { IoSend } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="w-full bg-darkGreen py-8 text-gray-300 text-sm">
      <div className="container mx-auto flex justify-between">
        <div className="flex justify-center items-center flex-col space-y-4">
          <motion.img
            src={logo}
            alt="logo"
            className="w-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
          />
          <h3 className="italic">Простота, зручність і результативність</h3>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold">Підписка на розсилку:</h3>
          <p className="text-center">
            Отримуйте останні новини нашої платформи.
          </p>
          <div className="relative w-fit">
            <input
              type="email"
              className="rounded-full border-2 text-black px-4 py-2 pr-12 placeholder:text-sm focus:bord"
              placeholder="example@gmail.com"
            />
            <motion.div
              className="text-xl absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer hover:text-accent flex items-center justify-center"
              whileTap={{ scale: 1.2, translateY: "-50%", x: 10 }}
              initial={{ translateY: "-50%" }}
            >
              <IoSend />
            </motion.div>
          </div>
        </div>

        <div className="flex justify-start space-y-2 flex-col">
          <h3 className="font-semibold">Контакти:</h3>
          <a
            href="mailto:support@example.com"
            className="flex items-center hover:underline hover:text-white"
          >
            <FiMail className="text-xl mr-2" />
            support@example.com
          </a>
          <a
            href="tel:+123 456 7890"
            className="flex items-center hover:underline hover:text-white"
          >
            <FiPhone className="text-xl mr-2" />
            +123 456 7890
          </a>

          <div className="flex space-x-2 items-center">
            <p>Соціальні мережі:</p>

            <FaLinkedin className="hover:text-white transition cursor-pointer active:text-accent text-3xl" />
            <FaSquareInstagram className="hover:text-white transition cursor-pointer active:text-accent text-3xl" />
            <FaFacebookSquare className="hover:text-white transition cursor-pointer active:text-accent text-3xl" />
          </div>
        </div>
        <div className="flex justify-between flex-col space-y-2">
          <div className="flex space-y-2 flex-col">
            <h3 className="font-semibold">Юридична інформація:</h3>
            <a
              href="#"
              className="flex items-center hover:underline hover:text-white"
            >
              Політика конфіденційності
            </a>
            <a
              href="#"
              className="flex items-center hover:underline hover:text-white"
            >
              Умови використання
            </a>
            <a
              href="#"
              className="flex items-center hover:underline hover:text-white"
            >
              Правила платформи
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <p className="text-sm">
              © 2024 Repetilum LMS Platform. Усі права захищено.
            </p>
            <a href="https://storyset.com/people" className="text-xs">
              People illustrations by Storyset
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
