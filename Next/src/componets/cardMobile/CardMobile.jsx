import React from 'react'
import { BsHandIndex } from "react-icons/bs"

const CardMobile = () => {
  return (
    <div className='bg-red-500 w-[72px] h-[72px] rounded-full flex justify-center items-center text-white cursor-pointer fixed right-[10px] bottom-[5%] z-20'>
        <BsHandIndex className='text-4xl' />
    </div>
  )
}

export default CardMobile