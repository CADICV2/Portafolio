import React from 'react'
import Image from 'next/image'
import Proc1 from '@/img/procy1.svg'
import Proc2 from '@/img/procy2.svg'
import Proc3 from '@/img/procy3.svg'
import Card from '@/app/componets/Subcomponets/card_img'

export default function Proyectos() {
    return (
        <>
            <div id='Proyectos' className='px-4 sm:px-6 md:px-10 lg:px-20 '>
                <div className='flex flex-col justify-center gap-8 items-center '>
                    <div className='pb-[2rem] px-[1rem] 2xl:px-[20rem] lg:pb-[4rem] '>
                        <div className=''>
                            <p className='text-center text-2xl text-gray-50 pt-[5rem]  font-serif'>
                                Proyectos
                            </p>
                        </div>
                        <div className='py-8  px-[0.5rem]   lg:px-[9rem] '>
                            <p className='text-left text-gray-50 '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis incidunt in libero
                                itaque nostrum eos. Culpa ducimus recusandae
                                magnam modi pariatur unde error molestias, illum minima, nobis porrasdasdasdasdaso? Culpa, aspernaturaaaa?
                            </p>
                        </div>
                    </div>
                    <div className='  flex flex-col  lg:grid grid-cols-2 gap-6'>
                        <Card
                            img={Proc2}
                            model=''
                            Titulo='sitio web'
                            text=' Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                               Labore aspernatur unde impedit voluptate sed necessitatibus distinctio '
                            Leng1='Php'
                            Leng2='JavaScript'
                            Leng3='ReacJS'
                            Leng4='SAAS'
                        />
                        <Card
                            img={Proc2}
                            model=''
                            Titulo='sitio web'
                            text=' Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                               Labore aspernatur unde impedit voluptate sed necessitatibus distinctio '
                            Leng1='Php'
                            Leng2='JavaScript'
                            Leng3='ReacJS'
                            Leng4='SAAS'
                        />
                        
                        <Card
                            img={Proc2}
                            model='col-span-2 lg:flex-row-reverse'
                            Titulo='sitio web'
                            text=' Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                               Labore aspernatur unde impedit voluptate sed necessitatibus distinctio '
                            Leng1='Php'
                            Leng2='JavaScript'
                            Leng3='ReacJS'
                            Leng4='SAAS'
                        />

                    </div>
                </div>

            </div>




        </>

    )
}
