import { motion } from "motion/react";
import learn from "../assets/Learning-cuate.svg";
import Button from "../components/Button";

export default function MainSection() {
  return (
    <section className="text-white bg-darkGreen px-12 flex justify-center h-screen md:m-0 relative">
      <div className="w-[400px] h-[400px] rounded-full z-10 opacity-10 bg-accent absolute bottom-0 -left-[200px]"></div>
      <div className="w-[200px] h-[200px] rounded-full z-10 opacity-25 bg-accent blur-md absolute top-1/3 left-1/3"></div>
      <div className="w-[200px] h-[200px] rounded-full z-10 opacity-25 bg-accent blur-md absolute bottom-1/3 right-1/3"></div>

      <div className="flex flex-col md:flex-row md:container min-mobile:px-10 items-center self-center justify-between md:h-screen min-mobile:py-32 z-20">
        <div className="flex flex-col w-full md:w-1/2 space-y-5">
          <motion.h1
            transition={{ duration: 0.6, delay: 0 }}
            className=" text-4xl md:text-5xl xl:text-7xl font-bold"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Ваш надійний партнер у світі навчання
          </motion.h1>

          <motion.p
            transition={{ duration: 0.6, delay: 0.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl md:text-2xl"
          >
            Простота, зручність і результативність – усе це в одній платформі
            для навчання. Долучайтеся до інновацій вже сьогодні.
          </motion.p>

          <div className="w-auto">
            <Button type="colorful" size={"large"}>
              Дізнатись більше
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-10 z-20 w-full justify-center items-center md:w-1/2">
          <div className="w-full">
            <img
              src={learn}
              alt="картинка"
              className="max-w-[500px] md:max-w-full z-10 relative"
            />
          </div>
        </div>
        <svg className="arrows min-mobile:hidden md:block cursor-pointer z-20">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>
    </section>
  );
}
