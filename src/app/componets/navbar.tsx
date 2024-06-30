"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, HomeIcon, UserCircleIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { name: 'Inicio' },
  { name: 'Tecnologias' },
  { name: 'Proyectos' },
  { name: 'Experiencia' },
  { name: 'Contacto' },


];

const Navbar = () => {


  return (
    <nav className=' sticky top-0 z-50 w-full px-[20px] py-[16px] bg-transparent backdrop-filter backdrop-blur-lg lg:container lg:mx-auto lg:pl-20'>
      
      <div className='flex items-center justify-between lg:justify-center '>
        <RocketLaunchIcon className='text-[#46BAEB]  h-12 w-12  lg:h-12 lg:w-12 mr-16' />
        <Bars3Icon className='blockh-12 w-12  text-[#46BAEB] lg:hidden' />
        <div className='hidden lg:flex pl-[73px] gap-x-[56px]'>
          {navLinks.map((item, index) => (
            <a href={`#${item.name}`} className='text-white hover:text-[#46BAEB] transition-colors duration-300' key={index}>{item.name}</a>
          ))}
        </div>
      </div>
      


    </nav>
  );
};

export default Navbar;