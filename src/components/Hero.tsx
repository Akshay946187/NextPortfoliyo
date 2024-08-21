import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenereteEffect'
import MagickButton from './ui/MagickButton'
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className='top-40 left-10 md:left-32 md:top-20 h-screen ' fill='white'/>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen ' fill='white'/>
        <Spotlight className='top-20 left-10 md:left-12 md:top-10 h-screen ' fill='white'/>
      </div>
      <div className="h-[70vh] w-full bg-black-100   bg-grid-black/[0.3] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>

      <div className='flex justify-center absolute z-10 top-0 '>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center space-y-3 '>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Dynamick web magick with Next.js</h2>
            <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-6xl '
            words="Transforming Concepts into Seamless User Experiences"
            />
            <p>I&apos;am Akshay Choudhary A MERN Stack Devloper</p>
           <a href="#projects"> <MagickButton
            title="show my work"
            icon = {<FaLocationArrow />}
            position='right'
            /></a>
        </div>

      </div>
    
    </div>
    </div>
  )
}

export default Hero
