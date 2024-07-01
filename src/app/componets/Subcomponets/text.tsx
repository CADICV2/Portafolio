import React from 'react'

interface TextProops{
    
        text:string;
    
}

export default function text({text}:TextProops) {
  return (
    <>
 <p className='text-white text-center px-[1rem] bg-[#18273E] rounded-lg ' >{text}</p>
    </>
  )
}
