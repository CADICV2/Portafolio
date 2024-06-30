import React from 'react'

interface ButtonsProps {
  icon: React.ReactNode;
  titulo: string;
}

export default function buttons({ icon, titulo }: ButtonsProps) {
  return (
    <>

      <a className='bg-gradient-to-r from-gray-700 to-slate-900 rounded-lg gap-2 w-auto h-[3rem] p-2   flex flex-row  items-center transition duration-200 ease-in-out transform hover:scale-105'>
        {icon}
        <span className='text-white'>
          {titulo}
        </span> 
      </a>

    </>

  )
}
