import React from 'react'
import Image from 'next/image'
import Proc1 from '@/img/ed3.svg'
import Proc2 from '@/img/procy2.svg'
import Proc3 from '@/img/corp.svg'
import Card from '@/app/componets/Subcomponets/card_img'
import Text from '@/app/componets/Subcomponets/text'

export default function Proyectos() {
    return (
        <>
            <div id='Proyectos' className='px-4 sm:px-6 md:px-10 lg:px-20 '>
                <div className='flex flex-col justify-center gap-8 items-center '>
                    <div className='pb-[2rem] px-[1rem] 2xl:px-[20rem] lg:pb-[4rem] '>
                        <div className=''>
                            <p className='text-center text-2xl text-gray-50 pt-[5rem] tex'>
                                Proyectos
                            </p>
                        </div>
                        <div className='py-8  px-[0.5rem]   lg:px-[9rem] '>
                            <p className='text-left text-gray-50  '>
                                Mis proyectos mas destacados y creativos.Cada proyecto impulso una mejora personal en mi habilidad 
                                de programador y con esto desmostrar mi pasion acerca de la programacion pues estoy 
                                encantado de compartirlos contigo.
                            </p>
                        </div>
                    </div>
                    <div className='  flex flex-col  lg:grid grid-cols-2 gap-6'>
                        <Card
                            img={Proc2}
                            model=''
                            Titulo='Sitio web Blog '
                            text=' La pagina esta pensada para demostrar informacion que 
                                   desee compartir el usuario atravez de este blog personal'
                           Leng={<><Text text='Php' /><Text text='JavaScript' /></>}
                           Leng2={<Text text='SQL'/>}
                           
                        />
                        <Card
                            img={Proc1}
                            model=''
                            Titulo='Sitio web Educativo '
                            text='  Pagina web orientada al sistema educativo con una
                            amplia gama de opciones estudiantiles que facilitaran el 
                            desempeño del usuario'
                           Leng={<><Text text='Python' /><Text text='JavaScript' /></>}
                           Leng2={<Text text='MongoDb'/>}
                           
                        />
                        <Card
                            img={Proc3}
                            model='col-span-2 lg:flex-row-reverse'
                            Titulo='Sitio web Corporativo '
                            text=' Proyecto web fullStack que suple la necesidad de crear un gestor
                            de contenidos autoadministrables'
                           Leng={<><Text text='C#' /><Text text='JavaScript' /></>}
                           Leng2={<Text text='NoSQL'/>}
                           
                        />
                       
                    </div>
                </div>

            </div>




        </>

    )
}
