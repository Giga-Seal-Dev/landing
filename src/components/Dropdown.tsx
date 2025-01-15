import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { motion } from "motion/react";

type dropdownProps = {
  heading: string;
  text: string;
};

export default function Dropdown({ heading, text }: dropdownProps) {
  const [active, setActive] = useState(false);

  return (
    <div className="w-full flex flex-col justify-between p-4 border-b border-gray-300 ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className={`flex w-full justify-between items-center cursor-pointer hover:text-accent ${
          active ? "text-accent" : "text-white"
        }`}
        onClick={() => setActive(!active)}
      >
        <h3 className="text-lg font-medium">{heading}</h3>
        {active ? (
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.3 }}>
            <FaMinus className="text-2xl text-accent" />
          </motion.div>
        ) : (
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.3 }}>
            <FaPlus className="text-2xl text-accent" />
          </motion.div>
        )}
      </motion.div>

      <div
        className={`mt-2 transition-all duration-300 ${
          active
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <p className="text-white">{text}</p>
      </div>
    </div>
  );
}
