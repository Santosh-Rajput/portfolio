import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Resume } from "../assets";
import React from "react";



const Hero = () => {
  return (
    <section >
      <div className=' custom-touch-cursor w-full h-screen mx-auto' style={{
          touchAction: 'manipulation'}}><ComputersCanvas /></div>
      <span
        className={`absolute top-[120px]  max-w-6xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <span className='flex flex-col justify-center items-center mt-5'>
          <span className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <span className='w-1 sm:h-80 h-40 violet-gradient' />
        </span>

        <span>
          <h1 className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-center text-[39px] lg:leading-[98px] mt-2`}  style={{ userSelect: 'none' }}>
            Hi, I'm <span className='text-[#915EFF]'>Santosh</span>
          </h1>
          <p className={` font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]  sm:mt-2 text-white-100`}  style={{ userSelect: 'none' }}>
            I develop user <br className='sm:block hidden' />
            interfaces and web applications.
           

          </p>
          <a  href={Resume} download={Resume} class="sm:absolute absolute sm:left-[105px] left-[64px]  sm:top-[210px] lg:top-[210px] top-[175px] sm:hover:scale-[1.09] hover:scale-[1.02] text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg sm:text-sm text-[10px] sm:px-1 px-[-35px] sm:py-2.5 py-2 text-center mr-2 mb-2">
                <span class="relative sm:px-5 px-2 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <i class="fa-solid fa-circle-down mr-2"></i>Resume
                </span>
              </a>
        </span>
      </span> 
      <span className='absolute xs:bottom-2 bottom-2 w-full flex justify-center items-center'>
        <a href='#about'>
          <span className='w-[30px] h-[40px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 1.9,
                repeat: Infinity,
                repeatType: "loop",
              }}
             
              className='w-2 h-2 rounded-full bg-white mb-1'
            />
          </span>
        </a>
      </span>
    </section>
  );
};

export default Hero;