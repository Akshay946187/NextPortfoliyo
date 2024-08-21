import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProject = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>A small Selection of {''}
        <span className='text-purple'>Recent Projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-44 gap-y-8 mt-10">
            {
                projects.map(({id,title,des,img,iconLists,link})=>(
                    <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96  w-[80vw]'>
                        <PinContainer title={link} href={link}>
                            <div className='relative flex items-center justify-center sm:w-[500px] w-[80vw] overflow-hidden h-[20vh] sm:h-[30vh] mb-10'>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    <img src="/bg.png" alt="img" />
                                </div>
                                <img src={img} alt={title} className='z-10 absolute bottom-0' />
                            </div>
                            <h1 className='text-xl font-bold text-center'>{title}</h1>
                            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{des}</p>
                            <div className='flex items-center justify-between mt-5 mb-3'>
                                <div className="flex items-center gap-1">
                                    {iconLists.map((item,i)=>(
                                        <div className='border border-white-100 rounded-full' key={i}>
                                            <img src={item} alt="" className='p-2' />
                                        </div>
                                    ))}
                                </div>
                                <div className='flex items-center justify-center '>
                               <a href={link}  target={"_blank"}> <p className='text-xs text-purple lg:text-sm'>Check Live Site</p></a>
                                <FaLocationArrow className='ms-3 ' color='#CBACF9'/> 
                            </div>

                            </div>
                           

                        </PinContainer>
                    </div>
                ))
            }

        </div>
      
    </div>
  )
}

export default RecentProject
