'use client'
import { cn } from "@/utils/cn";
import { GlobeDemo } from "./GridGlobe";
import Lottie from 'react-lottie';
import animationData from '@/data/confetti.json'
import { useState } from "react";
import MagickButton from "./MagickButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ", 
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id:number;
  img:string;
  imgClassName:string;
  titleClassName:string;
  spareImg:string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("aki748434@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 bg-black border-white/[0.2] border text-white justify-between flex flex-col items-center text-center min-h-[200px] min-w-[200px]", 
        className
      )}
    >
      <div className="h-full w-full text-center sm:text-left">
        {img && (
          <img src={img} alt="img" className={cn(imgClassName, 'object-cover object-center -z-10')} />
        )}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className={cn(titleClassName, "font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2")}>
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="flex items-center justify-center gap-1 lg:gap-5 w-fit">
              <div className="flex flex-col gap-3 lg:gap-8 p-4 items-center relative">
                {['React.js',"Next.js","typeScript"].map((item, i) => (
                  <span key={i} className="px-2 py-2 lg:p-3 text-xs text-center bg-[#10132E] rounded-full">{item}</span>
                ))}
              </div>
              <div className="flex flex-col gap-3 lg:gap-8 p-4 items-center relative">
                {['Node.js',"Express.js","Mongodb"].map((item, i) => (
                  <span key={i} className="px-2 py-2 lg:p-3 text-xs text-center bg-[#10132E] rounded-full">{item}</span>
                ))}
              </div>
            </div>
          )}
          {id === 5 && (
            <div className="mt-6 flex justify-center relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }}
                />
              </div>
              <MagickButton
                title={copied ? "email copied" : "copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
