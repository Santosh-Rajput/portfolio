import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, Profile,Resume } from "../assets";


// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";

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

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(!open);

  const [open, setOpen] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);

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
               
                    <div class="flex items-center space-x-4">
                      <img src={Profile} className='w-10 h-10 rounded-full object-contain shadow-lg cursor-pointer'onClick={handleOpen} alt="Rounded avatar" />    
                    </div>       
                {/* <Dialog 
                  open={open}
                  handler={handleOpen}
                  animate={{
                    mount: { scale: 1, y: 40,x:500 },
                    unmount: { scale: 0.9, y: -100 },
                  }}
                >
                  <DialogBody className="mt-20" >
                  <img src={Profile} className='w-auto h-[500px]   ' /> 
                  </DialogBody>
                </Dialog> */}



      <Dialog className ="mt-10 z-0 w-auto " size="xl" open={open} handler={handleOpen}
       animate={{
        mount: { scale: 0.6, y:-100,x:500 },
        unmount: { scale: 0.9, y: -100 },
      }}
      >
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
            <div className="-mt-px flex flex-col">
              <Typography
                variant="small"
                className="font-medium"
              >
                <p className="text-primary text-2xl">
                  Santosh Rajput 
                  </p>
              </Typography>
              <Typography
                variant="small"
                color="black  "
                className="text-xl font-normal"
              >
                <p className="text-primary">
                @santosh_rajput_0108
                  </p>
              
              </Typography>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button className="hover:bg-rose-600 bg-blue-700 text-white font-bold py-2 px-4 rounded-full" size="sm">
            <a href={Resume} download={Resume} className= "px-1 py-1   text-white/80 rounded-lg hover:text-[#ffc800] duration-300  text-xl " ><i class="fa-solid  fa-circle-down mr-2"></i>Resume</a>

    
             
            </Button>
          </div>
        </DialogHeader>
        <DialogBody divider={true} className="p-0">
          <img
            alt="nature"
            className="h-[48rem] w-full object-cover object-center"
            src={Profile}
            />
        </DialogBody>
        <DialogFooter className="justify-between">
          <div className="flex items-center gap-16">
            <div>
            <Typography
                variant="small"
                color="black  "
                className="text-[45px]  "
              >
                <a href="https://github.com/Santosh-Rajput" className="text-primary"><i class="fa-brands fa-github"></i> </a>
                <a href="https://instagram.com/santosh___rajput__?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" className="text-rose-600"><i class="fa-brands fa-instagram"></i> </a>
                <a href="https://www.linkedin.com/in/santosh-rajput-052a58182/" className="text-[#055dd0]"><i class="fa-brands fa-linkedin"></i></a>
              
              </Typography>
            </div>
            <div>
            
            </div>
          </div>
          <a onClick={handleOpen} 
          className=" flex items-center rounded-full absolute left-[410px] top-[890px] px-5 py-1 border-2 cursor-pointer  text-primary text-3xl gap-3">  
          Back 
          <i class="fa-solid fa-right-from-bracket"></i>
          </a>
         

          
        
        </DialogFooter>
      </Dialog>

                

        </ul>
          
        


        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[25px]  h-[20px]  object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-8 bg-black  absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
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
