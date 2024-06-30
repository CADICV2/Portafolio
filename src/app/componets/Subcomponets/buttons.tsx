import React from 'react';

interface ButtonsProps {
  icon: React.ReactNode;
  titulo: string;
  url: string; // Nueva propiedad para la URL
}

export default function Buttons({ icon, titulo, url }: ButtonsProps) {
  return (
    <button>

      <a
        href={url} // Agrega el atributo href con la URL
        className='bg-gradient-to-r from-gray-700 to-slate-900 rounded-lg gap-2 w-auto h-[3rem] p-2 flex flex-row items-center transition duration-200 ease-in-out transform hover:scale-105'
        target="_blank" // Abre el enlace en una nueva pestaña
        rel="noopener noreferrer" // Seguridad adicional
      >
        {icon}
        <span className='text-white'>
          {titulo}
        </span>
      </a>
    </button>
  );
}