import React, { useEffect, useState } from "react";
import thunder from "../../assets/thunder.svg";
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
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-full flex items-center justify-between p-1 border-b-2 ${theme === 'light' ? 'border-black' : 'border-white' } `}>
      {/* Thunder Icon */}
      <div
        className={"w-12 h-12 drop-shadow-[12px_12px_4px]"}
        style={{
          WebkitMaskImage: `url(${thunder})`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskImage: `url(${thunder})`,
          maskRepeat: "no-repeat",
          maskSize: "cover",
          transition: "background-color 1.5s ease-in-out",
          backgroundColor: thunderColor,
        }}
      ></div>

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
