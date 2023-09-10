import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, Profile,Resume } from "../assets";



import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [popup,setPop]=useState(false)
  const handleClickOpen=()=>{
      setPop(!popup)
  }
  const closePopup=()=>{
      setPop(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-70 h-11 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
             &nbsp;
            <span className='sm:block hidden'> | Portfolio</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}      

          {/* Pop-up*/}

               <div class="flex items-center space-x-4">
                      <img src={Profile} className='w-10 h-10 rounded-full object-contain shadow-lg cursor-pointer'onClick={handleClickOpen} alt="Rounded avatar" />    
                    </div> 
            <div>
                {
                    popup?
                    <div className="main">
                        <div className=" mt-2 rounded-2xl  sm:absolute relative top-[25%] md:right-[33%] right-[15%] ">
                       
           <div>
                   
              <div className='bg-hero-pattern shadow-card   blue-text-gradien overflow-hidden mt-1 py-10 p-5 rounded-2xl sm:w-[460px] w-[1000px]'>
         
              <a href={Resume} download={Resume} className= "absolute left-[305px]  top-5 px-auto py-1 sm:text-[14px] text-[8px] tracking-wider  text-white/80 rounded-lg hover:text-[#ffc800] duration-300" > <i class="fa-solid fa-circle-down mr-2"></i>Download CV</a>
            
     
                     <p className="text-white mt-[-30px] ">
                  Santosh Rajput
                  </p>
                  <p className="sm:text-[12px] text-[8px] text-secondary  tracking-wider">
                    @santosh_rajput_0108
                  </p>
          <div className='relative overflow-hidden '>
           
            <img
              src={Profile}
              alt='project_image'
              className='h-[550px] w-[500px] mt-2 object-cover rounded-xl '
              />
              
          </div>
          <div className="text-[30px] absolute left-[20px] top-[620px] ">
         
                <a href="https://github.com/Santosh-Rajput" className="text-[#646464] hover:text-white"><i class="fa-brands fa-github"></i> </a>
                <a href="https://instagram.com/santosh___rajput__?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" className="hover:text-rose-600 text-rose-400"><i class="fa-brands fa-instagram"></i> </a>
                <a href="https://www.linkedin.com/in/santosh-rajput-052a58182/" className="text-[#055dd0] hover:text-[#013a85]"><i class="fa-brands fa-linkedin"></i></a>
                <a onClick={handleClickOpen} 
          className=" flex items-center rounded-full absolute left-[310px]  top-1 px-5 py-1 outline-[#055dd0] border-2 cursor-pointer  text-secondary hover:text-white  text-[15px]  gap-3">  
          Back 
          <i class="fa-solid fa-right-from-bracket"></i>
          </a>
            </div>
          <div className='mt-5'>
          </div>
        </div>
     </div>
                        </div>
                    </div>:""
                }
            </div>

        

        </ul>
          
        


        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[25px]  h-[20px]  object-contain'
            onClick={() => setToggle(!toggle||closePopup )}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-8 bg-black  absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`} onClick={handleClickOpen}
          >
            {/* Pop-up*/}

           
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
            <div class="flex items-center space-x-4">
                      <img src={Profile} className='w-10 h-10 rounded-full object-contain shadow-lg cursor-pointer'onClick={handleClickOpen} alt="Rounded avatar" />    
                    </div> 
            <div>
                {
                    popup?
                    <div className="main">
                        <div className=" mt-2  rounded-2xl  sm:absolute absolute sm:top-[25%] top-[-20%] sm:right-[33%] right-[20%] ">
                       
           <div>
                   
              <div className='bg-hero-pattern shadow-card   blue-text-gradien overflow-hidden mt-1 py-10 p-5 rounded-2xl sm:w-[460px] w-[350px]'>
         
              <a href={Resume} download={Resume} className= "sm:absolute  absolute sm:left-[305px]  top-5 left-[230px]  top-5 px-auto py-1 sm:text-[14px] text-[10px] tracking-wider  text-white/80 rounded-lg hover:text-[#ffc800] duration-300" > <i class="fa-solid fa-circle-down mr-2"></i>Download CV</a>
            
     
                     <p className="text-white sm:absolute sm:text-[14px] text-[12px] sm:left-[40px] left-[30px]  absolute sm:mt-[-30px] mt-[-30px] ">
                  Santosh Rajput
                  </p>
                  <p className="sm:text-[12px] text-[10px] text-secondary sm:absolute  absolute sm:left-[40px]  left-[30px]  sm:mt-[-30px] mt-[-12px] tracking-wider">
                    @santosh_rajput_0108
                  </p>
          <div className='relative overflow-hidden '>
           
            <img
              src={Profile}
              alt='project_image'
              className='sm:h-[550px] h-[450px] w-[500px] mt-2 object-cover rounded-xl '
              />
              
          </div>
          <div className="sm:text-[30px] text-[25px] sm:absolute absolute sm:left-[20px] left-[30px] sm:top-[620px] top-[520px] ">
         
                <a href="https://github.com/Santosh-Rajput" className="text-[#646464] hover:text-white "><i class="fa-brands fa-github"></i> </a>
                <a href="https://instagram.com/santosh___rajput__?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" className="hover:text-rose-600 text-rose-400"><i class="fa-brands fa-instagram"></i> </a>
                <a href="https://www.linkedin.com/in/santosh-rajput-052a58182/" className="text-[#055dd0] hover:text-[#013a85]"><i class="fa-brands fa-linkedin"></i></a>
                <a onClick={handleClickOpen} 
          className=" flex items-center rounded-full absolute sm:left-[310px] left-[210px]  sm:top-1 top-1 px-5 py-1  outline-[#055dd0] sm:border-2 cursor-pointer  text-secondary hover:text-white  text-[15px]  gap-3">  
          Back 
          <i class="fa-solid fa-right-from-bracket"></i>
          </a>
            </div>
          <div className='mt-5'>
          </div>
        </div>
     </div>
                        </div>
                    </div>:""
                }
            </div>

              {navLinks.map((nav) => (
                
                
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
