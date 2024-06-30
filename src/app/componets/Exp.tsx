import React from 'react'
import Button from '@/app/componets/Subcomponets/buttons'
import Ctext from '@/app/componets/Subcomponets/card_text'
import { CalendarIcon } from '@heroicons/react/24/solid'
import { ClipboardIcon,IdentificationIcon } from '@heroicons/react/16/solid'

function Exp() {
    return (
        <>
            <div id='Experiencia' className='pt-[6rem]  px-4  sm:px-6 md:px-10 lg:px-[16rem]  '>

                <div className='flex flex-col items-center gap-10 pb-[2rem] px-[1rem] 2xl:px-[20rem] lg:pb-[4rem]'>

                    <div className='flex flex-col items-center '>
                            <span className='text-white text-2xl'>experiencia</span>
                    </div>

                            <Ctext icon={<CalendarIcon className=' text-white h-[1.5rem] w-[1.5rem]'/>} 
                                   text='Tecnico Instalador UM'
                                   text2='Optical Network'
                                   text3='marzo-2023 - febrero 2024'
                                   text4='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit officia atque vel 
                                   debitis laborum commodi dolor explicabo esse nulla quisquam nesciunt temporibus nisi recusandae, expedita
                                    rerum inventore iusto necessitatibus?         
'      
                            />

                            <Ctext icon={<CalendarIcon className=' text-white h-[1.5rem] w-[1.5rem]'/>} 
                                   text='Tecnico Instalador UM'
                                   text2='Optical Network'
                                   text3='marzo-2023 - febrero 2024'
                                   text4='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit officia atque vel 
                                   debitis laborum commodi dolor explicabo esse nulla quisquam nesciunt temporibus nisi recusandae, expedita
                                    rerum inventore iusto necessitatibus?         
'      
                            />

                            <Ctext icon={<CalendarIcon className=' text-white h-[1.5rem] w-[1.5rem]'/>} 
                                   text='Tecnico Instalador UM'
                                   text2='Optical Network'
                                   text3='marzo-2023 - febrero 2024'
                                   text4='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit officia atque vel 
                                   debitis laborum commodi dolor explicabo esse nulla quisquam nesciunt temporibus nisi recusandae, expedita
                                    rerum inventore iusto necessitatibus?         
'      
                            />

                            <Ctext icon={<CalendarIcon className=' text-white h-[1.5rem] w-[1.5rem]'/>} 
                                   text='Tecnico Instalador UM'
                                   text2='Optical Network'
                                   text3='marzo-2023 - febrero 2024'
                                   text4='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit officia atque vel 
                                   debitis laborum commodi dolor explicabo esse nulla quisquam nesciunt temporibus nisi recusandae, expedita
                                    rerum inventore iusto necessitatibus?         
'      
                            />

                            <Button icon={<IdentificationIcon className=' text-white h-[1.5rem] w-[1.5rem]'  />}  titulo='Curriculum'/>
                </div>


            </div>


        </>

    )
}

<>
</>
export default Exp
