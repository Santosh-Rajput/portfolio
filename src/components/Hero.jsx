import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

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
          <h1 className={`${styles.heroHeadText} text-white`}  style={{ userSelect: 'none' }}>
            Hi, I'm <span className='text-[#915EFF]'>Santosh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}  style={{ userSelect: 'none' }}>
            I develop user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
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