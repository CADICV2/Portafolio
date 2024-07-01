import React from 'react'
import Button from '@/app/componets/Subcomponets/buttons'
import Ctext from '@/app/componets/Subcomponets/card_text'
import { CalendarIcon } from '@heroicons/react/24/solid'
import { ClipboardIcon, IdentificationIcon } from '@heroicons/react/16/solid'

function Exp() {
    return (
        <>
            <div id='Experiencia' className='pt-[6rem]  px-4  sm:px-6 md:px-10 lg:px-[16rem]  '>

                <div className='flex flex-col items-center gap-10 pb-[2rem] px-[1rem] 2xl:px-[20rem] lg:pb-[4rem]'>

                    <div className='flex flex-col items-center '>
                        <span className='text-white text-2xl'>Experiencia</span>
                    </div>


                    <Ctext icon={<CalendarIcon className=' text-white h-[1.5rem] w-[1.5rem]' />}
                        text='Programador Full Stack'
                        text2='JhardSystex'
                        text3='Julio-2022 - Diciembre 2022'
                        text4='Creacion de paginas web informativas,blogs administrables.
                               gestion de proyectos  ciclo completo de
                               negociones con clientes y armado de requisitos'      

                    />

                    <Ctext icon={<CalendarIcon className=' text-white h-[1.5rem] w-[1.5rem]' />}
                        text='Tecnico Networking'
                        text2='Optical Network'
                        text3='Julio-2022 - marzo 2023'
                        text4='Encargado de contactar con el cliente y entregar e instalar equipos de telecomunicaciones
                                eh implementar orden y buena infraestructura en los datacenter   ' 

                    />

                    <Ctext icon={<CalendarIcon className=' text-white h-[1.5rem] w-[1.5rem]' />}
                        text='Tecnico Instalador UM'
                        text2='Optical Network'
                        text3='Marzo-2023 - Febrero 2024'
                        text4='Partner de win encargado de contactar con los clientes y instalar en el domicilio
                         servicio de internet con fibra optica'         
              />

                    <Ctext icon={<CalendarIcon className=' text-white h-[1.5rem] w-[1.5rem]' />}
                        text='Tecnico Liniero PEXT'
                        text2='Optical Network'
                        text3='Febrero 2024 - Junio 2024'
                        text4=' Encargado tender FIbra ASS y DROP a nivel corporativo , realizar empalmes en mufas , hacer seguimiento de potencia en fribras ADSS y DROP,
                        averias,ordenamiento y normalizacion de PEXT'
                    />


                    <Button url='https://drive.google.com/file/d/16yQDpUgAGKGdSjUxnB8slhMcwkFf4Z4X/view?usp=drive_link' icon={<IdentificationIcon className=' text-white h-[1.5rem] w-[1.5rem]' />} titulo='Curriculum' />
                </div>


            </div>


        </>

    )
}

<>
</>
export default Exp
