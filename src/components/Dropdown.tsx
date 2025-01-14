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
    <div className="w-full flex flex-col justify-between p-4 border-b border-gray-300">
      <div
        className="flex w-full justify-between items-center cursor-pointer"
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
      </div>

      <div
        className={`mt-2 transition-all duration-300 ${
          active
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
}
