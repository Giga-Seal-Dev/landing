import Dropdown from "../components/Dropdown";
import faq from "../assets/faq.svg";
import Button from "../components/Button";
import { motion } from "motion/react";

const dropHeadings = [
  "Що таке LMS і як вона працює?",
  "Чи можу я використовувати платформу для дистанційного навчання?",
  "Чи можу я інтегрувати платформу з іншими сервісами?",
  "Чи підходить платформа для великих освітніх установ?",
  "Чи доступна підтримка для користувачів?",
  "Чи потрібні спеціальні навички для використання платформи?",
  "Чи можна адаптувати платформу під наші потреби?",
];

const dropTexts = [
  "LMS (Learning Management System) – це система управління навчанням, яка дозволяє організовувати навчальний процес, створювати курси, перевіряти завдання, відстежувати прогрес і забезпечувати взаємодію між студентами та викладачами.",
  "Так, наша платформа чудово підходить для дистанційного навчання. Ви можете проводити онлайн-уроки, створювати інтерактивні завдання та підтримувати зв’язок зі студентами через чати та форуми.",
  "Так, наша LMS підтримує інтеграцію з популярними сервісами, такими як Google Workspace, Zoom, Microsoft Teams та іншими, що робить навчальний процес ще зручнішим.",
  "Так, платформа розроблена для масштабованості та може ефективно працювати з великою кількістю студентів, курсів і викладачів одночасно",
  "Так, ми надаємо технічну підтримку для всіх користувачів. Ви можете звернутися до нас через чат, електронну пошту або телефон у разі виникнення питань.",
  "Ні, платформа має інтуїтивно зрозумілий інтерфейс, який підходить як для новачків, так і для досвідчених користувачів.",
  "Так, платформа гнучка та дозволяє налаштовувати функціонал, дизайн і структуру курсів відповідно до ваших потреб.",
];

export default function FaqSection() {
  return (
    <section id="faq" className="bg-primaryLight text-black py-10 relative">
      <div className="w-[400px] h-[400px] rounded-full z-10 opacity-10 bg-accent absolute -bottom-[100px]  -left-[100px]"></div>
      <div className="container mx-auto flex flex-col space-y-4">
        <h2 className="text-4xl mb-7 font-semibold text-center">
          Часті запитання про нашу платформу
        </h2>
        <div className="flex w-full lg:flex-row flex-col mx-auto justify-center gap-5">
          {/* FIRST COLUMN */}
          <div className="w-full lg:w-1/2">
            {dropHeadings.map((heading, index) => (
              <Dropdown heading={heading} text={dropTexts[index]} key={index} />
            ))}
          </div>

          {/* SECOND COLUMN */}
          <div className="w-full hidden lg:flex lg:w-1/2 items-center justify-center">
            <img src={faq} alt="faq image" className="max-w-[500px]" />
          </div>
        </div>
        {/* Help */}
        <div className="flex flex-col justify-center items-center space-y-2 ">
          <h3 className="text-3xl mb-7 font-semibold text-center relative">
            Не знайшли відповідь на своє питання?
            <div className="w-16 h-16 rounded-full z-10 opacity-45 bg-accent blur-md absolute top-0 left-0"></div>
            <div className="w-16 h-16 rounded-full z-10 opacity-45 bg-accent blur-xl absolute bottom-0 right-0"></div>
          </h3>
          <p className="text-lg text-center mb-2">
            Звертайтеся до нашої служби підтримки, і ми з радістю вам
            допоможемо!
          </p>
          <Button
            children="Написати нам"
            type="colorful"
            size="medium"
            isHeader={true}
          />
        </div>
      </div>
    </section>
  );
}
