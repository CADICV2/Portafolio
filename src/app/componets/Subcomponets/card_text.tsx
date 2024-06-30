import React from 'react'

interface card_textProps{
    icon:React.ReactNode;
    text:string
    text2:string
    text3:string
    text4:string

}

export default function card_text({icon,text,text2,text3,text4}:card_textProps) {
  return (
   <>
         <div className='flex flex-col justify-center gap-2'>
                        <div className=' flex flex-col items-center lg:flex-row  gap-0  lg:gap-2'>
                           <div className='flex flex-row  gap-2'>
                            {icon}
                            <span className='text-[#46BAEB] text-[1.1rem]'> {text} </span>
                            </div> 
                            <span className='text-[#BFA195] lg:inline-block hidden '>-</span>
                            <span className='text-[#BFA195]'> {text2}</span>
                        </div>
                        <span className='text-[#8B94A7] '> {text3}</span>
                        <span className='text-white'> {text4}
                        </span>
                    </div>
                    
   
   </>  )
}
