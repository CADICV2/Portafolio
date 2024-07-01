import React from 'react'
import Image from 'next/image'

interface card_imgProps {
    img: string;
    text: string;
    Titulo: string
    Leng: React.ReactNode;
    Leng2: React.ReactNode;
    model: string;
}


export default function card_img({ img, text, Titulo, Leng,Leng2, model }: card_imgProps) {
    return (
        <>
            <div className={`flex flex-col  gap-4  items-center ${model} p-1 bg-[#11162A] rounded-3xl `}>

                <Image src={img} alt='proyecto' className='    w-[20.5rem]   lg:w-[25.5rem]   h-[15rem]   lg:h-[19rem] rounded-3xl transition duration-300 ease-in-out transform hover:scale-105 ' />

                <div className=' flex flex-col gap-8 w-[20rem]   lg:w-[25rem] p-4 '>

                    <div className='flex flex-col gap-8'>
                        <p className='text-2xl  text-[#46BAEB]'>{Titulo}</p>
                        <p className='text-white text-left  '>
                            {text}
                        </p>
                    </div>

                    <div className=' flex flex-col  lg:flex-row  items-center gap-2 mb-4 '>
                        <div className=' flex gap-2 '>
                        {Leng}
                        </div>
                        <div className=' flex gap-2'>
                        {Leng2}
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}
