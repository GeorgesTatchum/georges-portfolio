import useMediaQueryHook from '@/hooks/useBreakpoints'
import useTranslation from 'next-translate/useTranslation'
import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import styles from './about_us.module.scss'
import Link from 'next/link';

export const AboutUs = () => {
  const { t } = useTranslation('common')
  const { sm, md } = useMediaQueryHook()
  const textRef = useRef<HTMLElement>(null);

  // const textTypingEffect = (element: HTMLElement, text: string, i: number = 0) => {
  //   if (i < text.length) {
  //     console.log("the curr item : ", element.textContent);
      
  //     element.textContent += text[i];
  //     setTimeout(() => {
  //       textTypingEffect(element, text, i + 1);
  //     }, 50);
  //   }
  // }

  // useEffect(() => {
  //   const element = textRef.current;
  //   if (element) {
  //     element.textContent = ''; // Clear the content before starting the typing effect
  //     textTypingEffect(element, t('presentation', 0));
  //   }
  // }, [element, t]);

  return (
    <section className='max-h-[756px] mdd:h-auto w-full mb-3' id="about_us">
      <div className='relative flex h-full w-full'>
        <div className='h-full mdd:overflow-x-hidden w-full flex mdd:justify-center 2xl:justify-center' id='cover_image'>
          <Image
            className='h-full w-auto mdd:max-w-[unset] smd:w-[200%] md:w-[125%] 2xl:-translate-x-52 mdd:h-auto mdd:opacity-30'
            src={"/cover_image.svg"}
            height={1000}
            width={1000}
            alt="cover_image" />
        </div>
        <div className='w-full absolute top-28 md:top-1/4 lg:top-1/4 xs:left-0 right-0 z-1 px-4' id='about_us_content'>
          <div className='max-w-6xl mx-auto flex flex-col smd:items-start items-end'>
            <div className='flex flex-row justify-end items-center mb-5 overflow-hidden'>
              <span className='uppercase text-base Sfera mr-2'>{t('my_name_is')}</span>
              <div className={`bg-primary rounded-md items-center flex justify-center p-2`}>
                <span className="uppercase lg:text-sm md:text-xs Sfera hover:cursor-pointer text-white"> Georges</span>
              </div>
            </div>
            <span className={`uppercase xs:text-6xl text-8xl text-right xs:text-left Sfera whitespace-pre-line ${styles.fake_logo}`}>{"web &\nmobile"}</span>
            <span className={`uppercase xs:text-2xl text-lg pl-2 xs:text-left md:text-center Sfera text-primary`}>{t("developer")}</span>
            {
              (sm || md) && <div className="dark:bg-white/10 bg-gray bg-opacity-10 hover:!bg-primary rounded-[4px] items-center flex justify-center h-10 hover:cursor-pointer mt-10 text-primary hover:text-white w-3/5 hover:scale-[1.02] transition-transform duration-300 transform-origin-center ease-in-out">
                <Link href='/CVS_TATCHUM.pdf' target='_blank' className="uppercase text-center text-xs Sfera hover:cursor-pointer">{t('get_resume')}</Link>
              </div>
            }
            <div className='w-full contents'>
              <div className='w-3/5 xs:w-full xs:text-start text-end mt-10'>
                <span className={`font-normal`} id="writer" ref={textRef}>
                {t("presentation")}
                </span>
              </div>
            </div>

            {
              (sm || md) && <div className="dark:bg-white/10 bg-gray bg-opacity-10 hover:!bg-primary hover:!text-white rounded-[4px] items-center flex justify-center h-10 hover:cursor-pointer mt-10 w-3/5 hover:scale-[1.02] transition-transform duration-300 transform-origin-center ease-in-out">
                <Link href={'/#contact_me'} className="uppercase text-center text-xs Sfera hover:cursor-pointer dark:text-white hover:!text-white">{t('send_msg')}</Link>
              </div>
            }
          </div>

        </div>
      </div>
      {/* <div className={`absolute sm:-bottom-[2%] md:-bottom-[2%] lg:bottom-0 xl:bottom-0 2xl:bottom-0 xs:bottom-[6%] left-1/2 md:left-[45%] sm:left-[45%] xs:left-[40%] ${styles.mouse_move}`}>
        <Link href={'#my_resume'}>
          <Image className='' src="/mouse.svg" alt="mouse_image" width={100} height={100} />
        </Link>
      </div> */}
    </section>
  )
}
