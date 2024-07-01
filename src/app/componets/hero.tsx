import React from 'react';
import Image from 'next/image';
import Perfil from '@/img/24809a31206ca1b02ad3646f1c3dbd1e.jpg';
import Next from '@/img/nextjs-fill-svgrepo-com.svg';
import Cshard from '@/img/csharp2-svgrepo-com.svg';
import python from '@/img/python-svgrepo-com.svg';
import html from '@/img/html-5-svgrepo-com.svg';
import javaS from '@/img/javascript-svgrepo-com.svg';
import CSS from '@/img/css-3-svgrepo-com.svg';
import Tailwind from '@/img/tailwind-svgrepo-com.svg';
import sql from '@/img/sql-svgrepo-com.svg';
import MySQL from '@/img/mysql-svgrepo-com.svg';
import PostgreSQL from '@/img/postgresql-svgrepo-com.svg';
import MongoDB from '@/img/mongodb-svgrepo-com.svg';
import Button from '@/app/componets/Subcomponets/buttons'
import Php from '@/img/php-svgrepo-com.svg'
import github from '@/img/github-svgrepo-com.svg'
import Linkedin from '@/img/linkedin-svgrepo-com.svg'
import git from '@/img/git-icon-logo-svgrepo-com.svg'
import vscode from '@/img/vscode3-svgrepo-com.svg'
import terminal from '@/img/terminal-access-pc-computer-screen-svgrepo-com.svg'
import discord from '@/img/discord-svgrepo-com.svg'
import { HeartIcon,EnvelopeIcon } from '@heroicons/react/24/outline';
import css from 'styled-jsx/css';


function Hero() {
  return (
    <div id='Inicio' className='pt-4'>
      <div  className=' px-4 sm:px-6 md:px-10 lg:px-20'>
        <div className='flex flex-col items-center   lg:my-[10rem] gap-[5rem] '>
          <div>
          <h1 className='text-center font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-8 sm:leading-10'>
           Hola, <span className=' text-[#46BAEB] font-bold'>soy Bruno</span>
          </h1>
          <span className='animate-color-change'>Desarrollador Fullstack</span>
          </div>
        
         
          <div className='w-auto flex flex-col items-center gap-6 lg:flex-row lg:justify-center'>
            <div className='w-[10rem] sm:w-[15rem] md:w-[20rem] h-[10rem] sm:h-[15rem] md:h-[20rem] rounded-full overflow-hidden'>
              <Image src={Perfil} alt='perfil' layout='responsive' objectFit='cover' />
            </div>
            <div className='flex w-auto lg:w-[30rem] h-auto lg:h-[20rem] lg:items-center'>
              <p className='text-white text-sm sm:text-base md:text-lg lg:text-xl'>
                <span className='text-[#e17e41]'>Tecnico en Desarrollo software</span> apasionado por la
                 tecnologia y aprendizaje continuo con experiencia en distintos rubros <span className='text-[#a6e6f0]'>con una  gran 
                 obsesion a los nuevos desafios</span> cuales debo enfrentar en este mundo del software.
              </p>
            </div>

          </div>
          <div className='grid grid-cols-2 lg:flex flex-row gap-8 text-left   '>
            <Button url='https://github.com/CADICV2' icon={<Image src={github} alt='github' className='h-[2rem] w-[2rem] '/>} titulo={"git Hub"} />
            <Button url='https://pe.linkedin.com/' icon={<Image src={Linkedin} alt='github' className='h-[2rem] w-[2rem] '/>} titulo={"Linkedin"} />
            <Button url='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRvwTkzWDggffZFMnVdxBvrhdwWVmhZkDCzRBcsbgZzzPBtkkXdtPhsTDgvMrjXmTKZHNkq' icon={<EnvelopeIcon className='h-[2rem] text-white'/>} titulo={"Correo"} />
            <Button url='https://discord.gg/8mFagSte' icon={<Image src={discord} alt='github' className='h-[2rem] w-[2rem] '/>} titulo={"Discord"} />
          </div>
        </div>

        <div id='Tecnologias' className='flex flex-col justify-center items-center py-16  px-[0.5rem]  lg:px-[2.5rem]'>
          <div className='  pb-[2rem] px-[1rem] 2xl:px-[25rem] lg:pb-[4rem] '>
            <p className='text-white text-center text-2xl pt-[1rem] lg:pt-[2rem] '>
              Tecnologias
            </p>
            <p className='text-white  py-[16px] lg:text-left '>
              En el <span className='text-[#46BAEB]'>trancurso de mi vida como programador </span> he cultivado <span className='text-[#e17e41]'>experiencia y habilidades</span> en una 
              de variedad de tecnologias. <span className='text-[#46BAEB]'>Mi Stack tecnologico Incluye:</span>
            </p>
          </div>
          <div className='flex flex-col   gap-6  lg:grid grid-cols-2'>

            <div className='  grid grid-cols-2  gap-2  px-6 py-8 border-4 border-slate-700 '>
              <div className='grid col-span-2 p-2'>
                <div className='flex justify-center'>
                  <p className='text-white'>FRONTED</p>
                </div>
              </div>
              <div className='flex justify-center'>
                <Image src={html} alt='nextjs' className='w-[8rem] h-[8rem]  transition duration-300 ease-in-out transform hover:scale-105' />
              </div>
              <div className='flex justify-center'>
                <Image src={CSS} alt='nextjs' className='w-[8rem] h-[8rem] transition duration-300 ease-in-out transform hover:scale-105' />
              </div>
              <div className='flex justify-center'>
                <Image src={javaS} alt='nextjs' className='w-[7.5rem] h-[7.5rem]  transition duration-300 ease-in-out transform hover:scale-105' />
              </div>
              <div className='flex justify-center'>
                <Image src={Tailwind} alt='nextjs' className='w-[8rem] h-[8rem]  transition duration-300 ease-in-out transform hover:scale-105' />
              </div>
            </div>
            <div className='  grid grid-cols-2  gap-2  px-6 py-8 border-4 border-slate-700  '>
              <div className='grid col-span-2 p-2'>
                <div className='flex justify-center'>
                  <p className='text-white'>BACKEND</p></div></div>
              <div className='flex justify-center'>
                <Image src={Php} alt='nextjs' className='w-[8rem] h-[8rem] transition duration-300 ease-in-out transform hover:scale-105 ' />
              </div>
              <div className='flex justify-center'>
                <Image src={Next} alt='nextjs' className='w-[7.5rem] h-[7.5rem] transition duration-300 ease-in-out transform hover:scale-105' />
              </div>
              <div className='flex justify-center'>
                <Image src={python} alt='nextjs' className='w-[8rem] h-[8rem]  transition duration-300 ease-in-out transform hover:scale-105' />
              </div>
              <div className='flex justify-center'>
                <Image src={Cshard} alt='nextjs' className='w-[8rem] h-[8rem] transition duration-300 ease-in-out transform hover:scale-105 ' />
              </div>
            </div>
            <div className='  grid grid-cols-2  gap-2  px-6 py-8 border-4 border-slate-700  '>
              <div className='grid col-span-2 p-2'>
                <div className='flex justify-center'>
                  <p className='text-white'>DATABASE</p></div></div>
              <div className='flex justify-center'>
                <Image src={sql} alt='nextjs' className='w-[8rem] h-[8rem] transition duration-300 ease-in-out transform hover:scale-105 ' />
              </div>
              <div className='flex justify-center'>
                <Image src={MongoDB} alt='nextjs' className='w-[7.5rem] h-[7.5rem]  transition duration-300 ease-in-out transform hover:scale-105' />
              </div>
              <div className='flex justify-center'>
                <Image src={MySQL} alt='nextjs' className='w-[7.5rem] h-[7.5rem] transition duration-300 ease-in-out transform hover:scale-105 ' />
              </div>
              <div className='flex justify-center'>
                <Image src={PostgreSQL} alt='nextjs' className='w-[8rem] h-[8rem] transition duration-300 ease-in-out transform hover:scale-105 ' />
              </div>
            </div>
            <div className='  grid grid-cols-2  gap-2  px-6 py-8 border-4 border-slate-700  '>
              <div className='grid col-span-2 p-2'>
                <div className='flex justify-center'>
                  <p className='text-white'>HERRAMIENTAS</p></div></div>
              <div className='flex justify-center'>
                <Image src={github} alt='nextjs' className='w-[7.5rem] h-[7.5rem] transition duration-300 ease-in-out transform hover:scale-105 ' />
              </div>
              <div className='flex justify-center'>
                <Image src={git} alt='nextjs' className='w-[7.5rem] h-[7.5rem] transition duration-300 ease-in-out transform hover:scale-105 ' />
              </div>
              <div className='flex justify-center'>
                <Image src={vscode} alt='nextjs' className='w-[8rem] h-[8rem]  transition duration-300 ease-in-out transform hover:scale-105' />
              </div>
              <div className='flex justify-center'>
                <Image src={terminal} alt='nextjs' className='w-[7.5rem] h-[7.5rem] transition duration-300 ease-in-out transform hover:scale-105' />
              </div>
            </div>




          </div>
        </div>
      </div>
    </div>

  );
}

export default Hero;