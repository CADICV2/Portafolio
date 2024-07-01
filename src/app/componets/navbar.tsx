"use client";

import { useState } from 'react';
import { Bars3Icon, XMarkIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { name: 'Inicio' },
  { name: 'Tecnologias' },
  { name: 'Proyectos' },
  { name: 'Experiencia' },
  { name: 'Contacto' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };


  return (
    <nav className='sticky lg:top-0 z-50 w-full h-auto px-[20px] py-[16px] bg-transparent backdrop-filter backdrop-blur-lg lg:container lg:mx-auto lg:pl-20'>
      <div className='flex items-center justify-between lg:justify-center'>
        <RocketLaunchIcon className='text-[#46BAEB] h-12 w-12 lg:h-12 lg:w-12 mr-[1rem] ' />
        <div className='lg:hidden' onClick={toggleMenu}>
          {isOpen ? (
            <XMarkIcon className='h-12 w-12 text-[#46BAEB]' />
          ) : (
            <Bars3Icon className='h-12 w-12 text-[#46BAEB]' />
          )}
        </div>
        <div className='hidden lg:flex pl-[73px] gap-x-[56px]'>
          {navLinks.map((item, index) => (
            <a href={`#${item.name}`} className='text-white hover:text-[#46BAEB] transition-colors duration-300' key={index}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
      {isOpen && (
        <div className='   lg:hidden flex flex-col items-center  mt-[8rem]   mb-[16rem] ]'>
          {navLinks.map((item, index) => (
            <a href={`#${item.name}`} className='text-white text-center p-[2rem] lg:text-base text-4xl w-full rounded-lg hover:bg-[#46BAEB]  transition-colors duration-300' key={index}
              onClick={closeMenu} >
              {item.name}

            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;