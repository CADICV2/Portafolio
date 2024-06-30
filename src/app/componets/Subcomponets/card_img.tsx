import React from 'react'
import Image from 'next/image'

interface card_imgProps{
    img: string;
    text:string;
    model:string;
}


export default function card_img({img,text,model}:card_imgProps) {
    return (
        <>
            <div className={`flex flex-col  gap-4  items-center ${model} p-1 bg-[#11162A] rounded-2xl `}>
 
                <Image src={img} alt='proyecto' className='    w-[20.5rem]   lg:w-[25.5rem]   h-[15rem]   lg:h-[19rem] rounded-3xl transition duration-300 ease-in-out transform hover:scale-105 ' />

                <div className='  w-[20rem]   lg:w-[25rem] p-4 '>
                    <p className='text-white text-center  '>
                        {text}
                    </p>
                </div>
            </div>
        </>

    )
}
