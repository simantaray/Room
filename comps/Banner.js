import React from 'react'
import Image from 'next/image'

export default function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[900px] m-[20px] mt-2 '>
        <Image 
        className='rounded-lg '
        alt='banner'
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        />
        <div className='absolute w-full top-1/3 text-center'>
            <p className='text-2xl font-bold mb-5 md:text-4xl'>Let your curiosity do the booking</p>
            <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold hover:shadow-xl active:scale-90 transition duration-100 cursor-pointer'> I`m Flexible</button>
        </div>
    </div>
  )
}
