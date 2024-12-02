import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../Contexts/ThemeContext";

function Header() {
  const [thunderColor, setThunderColor] = useState("cyan");
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    console.log("function called")
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setThunderColor((prev) => (prev === "cyan" ? "blue" : "cyan"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-full flex items-center justify-between p-1 border-b-2 ${theme === 'light' ? 'border-black' : 'border-white' } `}>
      {/* Thunder Icon */}
      <div
        className={"w-10 h-10 drop-shadow-[2px_2px_2px] border-4 border-cyan-500"}
        
      >
          <div className={"w-7 h-7 drop-shadow-[-2px_-2px_-2px] border-4 border-cyan-300 mx-auto  "}>
          <div className={"w-4 h-4 drop-shadow-[-2px_-2px_-2px] border-4 border-cyan-100 mx-auto"}></div>

          </div>

      </div>

      {/* Centered Title and Animation */}
      <div className={`flex flex-col justify-center items-center font-bold ${theme==='light' ? 'text-black' : 'text-white'}`}>
        <h1 className={`text-2xl font-bold ${theme==='light' ? 'text-black' : 'text-white'} my-1`}>FastTube</h1>
        
        <div className={`w-full h-1 ${theme==='light' ? 'bg-black' : 'bg-white'} relative overflow-hidden`}>
          <motion.div
            animate={{
              x: ["0%", "1200%"],
              backgroundColor: ["#00FFFF", "#33292F"],
            }}
            transition={{
              x: { duration: 2, repeat: Infinity, ease: "linear" },
              backgroundColor: { duration: 1, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute bg-black w-1/12 h-full left-[0%]"
          ></motion.div>
        </div>
        <h2 className="text-xl">
          <span className="text-cyan-600">F</span>ast
          <span className="text-cyan-600">F</span>ree
          <span className="text-cyan-600">F</span>orever
        </h2>
      </div>

      {/* Theme Switcher */}
      <div
        className="w-14 h-7 bg-white rounded-full border shadow-md relative overflow-hidden mx-2 hover:cursor-pointer border-black"
        onClick={toggleTheme}
      >
        <motion.div
          className="w-6 h-6 bg-black absolute rounded-full border "
          animate={{
            x: theme === "dark" ? "2rem" : "0rem",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        />
      </div>
    </div>
  );
}

export default Header;
