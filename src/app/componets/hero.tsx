import React from 'react';
import Image from 'next/image';
import Perfil from '@/img/24809a31206ca1b02ad3646f1c3dbd1e.jpg';
import Next from '@/img/nextjs-icon-svgrepo-com.svg';
import Button from '@/app/componets/Subcomponets/buttons'
import Taw from '@/img/tailwind-css-svgrepo-com.svg'
import Php from '@/img/php-svgrepo-com.svg'
import Sql from '@/img/microsoft-sql-server-logo-svgrepo-com.svg'
import { HeartIcon } from '@heroicons/react/24/outline';


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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugit hic dolore! Est quo,
                ullam velit cumque, commodi dolor, eveniet pariatur explicabo a porro iusto quidem quisquam
                nostrum itaque. Minus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium similique fuga minima sit. Nulla non iste reprehenderit
                facere ullam. Officiis quisquam alias dolor rerum blanditiis, cum sint fuga id sed?
              </p>
            </div>

          </div>
          <div className='grid grid-cols-2 lg:flex flex-row gap-8 text-left   '>
            <Button  icon={<HeartIcon className='h-[2rem] text-white'/>} titulo={"git Hub"} />
            <Button  icon={<HeartIcon className='h-[2rem] text-white'/>} titulo={"Linkedin"} />
            <Button  icon={<HeartIcon className='h-[2rem] text-white'/>} titulo={"correo"} />
            <Button  icon={<HeartIcon className='h-[2rem] text-white'/>} titulo={"Archer"} />
          </div>
        </div>

        <div id='Tecnologias' className='flex flex-col justify-center items-center py-16  px-[0.5rem]  lg:px-[2.5rem]'>
          <div className='  pb-[2rem] px-[1rem] 2xl:px-[25rem] lg:pb-[4rem] '>
            <p className='text-white text-center text-2xl pt-[1rem] lg:pt-[2rem] '>
              Tecnologias
            </p>
            <p className='text-white  py-[16px] lg:text-left '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusantium corrupti
              asperiores, libero veniam ipsa laudantium,
              dolorum eum similique, unde delectus vitae. Dolor reiciendis quidem perspiciatis
              laudantium alias, autem eos?
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
                <Image src={Next} alt='nextjs' className='w-[8rem] h-[8rem] ' />
              </div>
              <div className='flex justify-center'>
                <Image src={Next} alt='nextjs' className='w-[8rem] h-[8rem] ' />
              </div>
              <div className='flex justify-center'>
                <Image src={Next} alt='nextjs' className='w-[8rem] h-[8rem] ' />
              </div>
              <div className='flex justify-center'>
                <Image src={Next} alt='nextjs' className='w-[8rem] h-[8rem] ' />
              </div>
            </div>
            <div className='  grid grid-cols-2  gap-2  px-6 py-8 border-4 border-slate-700  '>
              <div className='grid col-span-2 p-2'>
                <div className='flex justify-center'>
                  <p className='text-white'>BACKEND</p></div></div>
              <div className='flex justify-center'>
                <Image src={Next} alt='nextjs' className='w-[8rem] h-[8rem] ' />
              </div>
              <div className='flex justify-center'>
                <Image src={Next} alt='nextjs' className='w-[8rem] h-[8rem] ' />
              </div>
              <div className='flex justify-center'>
                <Image src={Next} alt='nextjs' className='w-[8rem] h-[8rem] ' />
              </div>
              <div className='flex justify-center'>
                <Image src={Next} alt='nextjs' className='w-[8rem] h-[8rem] ' />
              </div>
            </div>
            <div className='  grid grid-cols-2  gap-2  px-6 py-8 border-4 border-slate-700  '>
              <div className='grid col-span-2 p-2'>
                <div className='flex justify-center'>
                  <p className='text-white'>DATABASE</p></div></div>
              <div className='flex justify-center'>
                <Image src={Next} alt='nextjs' className='w-[8rem] h-[8rem] ' />
              </div>
              <div className='flex justify-center'>
                <Image src={Next} alt='nextjs' className='w-[8rem] h-[8rem] ' />
              </div>
              <div className='flex justify-center'>
                <Image src={Next} alt='nextjs' className='w-[8rem] h-[8rem] ' />
              </div>
              <div className='flex justify-center'>
                <Image src={Next} alt='nextjs' className='w-[8rem] h-[8rem] ' />
              </div>
            </div>
            <div className='  grid grid-cols-2  gap-2  px-6 py-8 border-4 border-slate-700  '>
              <div className='grid col-span-2 p-2'>
                <div className='flex justify-center'>
                  <p className='text-white'>APRENDIENDO</p></div></div>
              <div className='flex justify-center'>
                <Image src={Next} alt='nextjs' className='w-[8rem] h-[8rem] ' />
              </div>
              <div className='flex justify-center'>
                <Image src={Next} alt='nextjs' className='w-[8rem] h-[8rem] ' />
              </div>
              <div className='flex justify-center'>
                <Image src={Next} alt='nextjs' className='w-[8rem] h-[8rem] ' />
              </div>
              <div className='flex justify-center'>
                <Image src={Next} alt='nextjs' className='w-[8rem] h-[8rem] ' />
              </div>
            </div>




          </div>
        </div>
      </div>
    </div>

  );
}

export default Hero;