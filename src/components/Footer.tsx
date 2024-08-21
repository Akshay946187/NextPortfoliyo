import React from 'react'
import MagickButton from './ui/MagickButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer id='contact' className='w-full pt-20 pb-10 relative '>

      <div className="w-full absolute left-0 -bottom-72 max-h-96 ">
        <img src="/footer-grid.svg" alt="grid"
        className='w-full h-full opacity-50 '
        />
        </div>
        <div className="flex flex-col items-center ">
          <h1 className='heading'>
            Ready to take <span className='text-purple'>your</span> Digital Presence To The Next Level
          </h1>
          <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me and let`s discuss how i can help you achieve your goals</p>
          <a href={`mailto:"aki748434@gmail.com"`}>
  <MagickButton
    title="Let's get in touch"
    icon={<FaLocationArrow />}
    position="right"
  />
</a>

      </div>
      <div className='flex flex-col sm:flex-row justify-between mt-16 items-center bg-black/40 p-6 '>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright 2024 Akshay</p>
        <div className='flex items-center gap-6 md:gap-3'>
          {
            socialMedia.map((profile)=>(
              <div key={profile.id} className='flex items-center justify-center w-10 h-10 mt-2 cursor-pointer backdrop-filter backdrop-blur-lg saturate-150  bg-opacity-75 bg-black-200 rounded-lg border border-b-black-300 '>
               <a href={profile.link}>
               <Image src={profile.img} alt="img" width={20} height={20} />
               </a>
              </div>
            ))
          }

        </div>
      </div>
    </footer>
  )
}

export default Footer
