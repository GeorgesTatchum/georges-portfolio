import useMediaQueryHook from '@/hooks/useBreakpoints'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import Image from "next/image";

export const AboutUs = () => {
  const { t } = useTranslation('common')
  const { sm, md } = useMediaQueryHook()
  return (
    <section className='h-[calc(100dvh-5rem)] max-h-[756px] mdd:h-auto w-full' id="about_us">
      <div className='relative flex h-full w-full'>
        <div className='h-full mdd:overflow-x-hidden w-full flex mdd:justify-center 2xl:justify-center' id='cover_image'>
          <Image
            className='h-full  w-auto mdd:max-w-[unset] smd:w-[200%] md:w-[125%] 2xl:-translate-x-52 mdd:h-auto mdd:opacity-30'
            src={"/cover_image.svg"}
            height={1000}
            width={1000}
            alt="cover_image" />
        </div>
        <div className='w-full absolute top-28 md:top-1/4 lg:top-1/4 xs:left-0 right-0 z-1 px-4' id='about_us_content'>
          <div className='max-w-6xl mx-auto flex flex-col smd:items-start items-end'>
            <div className='flex flex-row justify-end items-center mb-5'>
              <span className='uppercase text-base Sfera mr-2'>{t('my_name_is')}</span>
              <div className="bg-primary rounded-md items-center flex justify-center p-3">
                <span className="uppercase lg:text-sm md:text-xs Sfera hover:cursor-pointer text-white"> Georges.T</span>
              </div>
            </div>
            <span className="uppercase xs:text-5xl text-8xl text-right Sfera dark:cardOutline">web &</span>
            <span className="uppercase xs:text-5xl text-8xl text-right Sfera dark:cardOutline">mobile</span>
            <span className="uppercase xs:text-md text-lg pl-2 xs:text-left md:text-center Sfera text-primary">developer</span>
            {
              (sm || md) && <div className="dark:bg-white/10 bg-gray bg-opacity-10 hover:!bg-primary rounded-md items-center flex justify-center p-3 hover:cursor-pointer mt-10 text-primary hover:text-white w-3/5">
                <span className="uppercase text-center text-sm Sfera hover:cursor-pointer">{t('get_resume')}</span>
              </div>
            }
            <div className='w-full contents'>
              <div className='w-3/5 xs:w-full xs:text-start text-end mt-10'>
                <span className=' font-normal'>
                  Intro Text if you have anything to put as introduction so put a Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, et quae! Aperiam hic ut !
                </span>
              </div>
            </div>

            {
              sm && <div className="dark:bg-white/10 bg-gray bg-opacity-10 hover:!bg-primary hover:!text-white rounded-md items-center flex justify-center p-3 hover:cursor-pointer mt-10 w-3/5">
                <span className="uppercase text-center text-sm Sfera hover:cursor-pointer dark:text-white hover:!text-white">{t('send_msg')}</span>
              </div>
            }
          </div>

        </div>
      </div>
      {/* <div className='absolute bottom-0 left-1/2'>
        <img className='' src="/mouse.svg" alt="mouse_image" />
      </div> */}
    </section>
  )
}
