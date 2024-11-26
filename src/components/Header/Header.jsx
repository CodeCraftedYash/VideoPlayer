import React,{ useEffect, useState } from 'react'
import thunder from '../../assets/thunder.svg'
import {motion} from "motion/react"
function Header() {
  /*<img src={thunder} alt="thunder" 
  className=' drop-shadow-[12px_12px_4px]'
  />*/
  const [thunderColor,setThunderColor] = useState("cyan");
  const [ movement , setMovement ] = useState();

  const fText = "text-cyan-600";

  useEffect(() => {

    const interval = setInterval(() => {
      setThunderColor((prev) => (prev === "cyan" ? "blue" : "cyan"));
    }, 1500);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once
  
  return ( 
    <div className=' w-full border flex items-center justify-between p-1'>

    <div className= {"w-12 h-12 drop-shadow-[12px_12px_4px]"}
    style={{
      WebkitMaskImage: `url(${thunder})`,
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskSize: 'cover',
      maskImage: `url(${thunder})`,
      maskRepeat: 'no-repeat',
      maskSize: 'cover',
       transition: "background-color 1.5s ease-in-out",
       backgroundColor: `${thunderColor}`,

    }}
    >
    </div>
    <div className='flex flex-col justify-center items-center font-bold text-white '>
    <h1 className='text-2xl font-bold text-white my-1'>FastTube</h1>
     <div className='w-full h-1 bg-white relative overflow-hidden '>
          <motion.div
          animate = {{
            x:["0%" , "1200%"],
            backgroundColor: ["#00FFFF.", "#33292F"]
          }}
            transition={{
            x: { duration : 2 ,
            repeat:Infinity,
            ease:"linear"},
            backgroundColor:{
              duration: 1,
              repeat:Infinity,
              ease:"easeInOut"
            }
            
          }}
          className='absolute bg-black w-1/12 h-full left-[0%]'></motion.div>
     </div>
    <h2 className='text-xl'><span className={fText}>F</span>ast<span className={fText}>F</span>ree<span className={fText}>F</span>orever</h2>
    </div>
    <h1></h1>
    </div>
  )
}

export default Header