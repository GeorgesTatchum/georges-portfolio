import useTranslation from 'next-translate/useTranslation'
import React, {useCallback, useEffect, useState} from 'react'
import Image from 'next/image'
import { projects_data } from '@/models/data/projects';
import { useTheme } from 'next-themes';
import styles from './project.module.scss'
import { ArrowLeft, ArrowRight, ArrowUpShort } from 'react-bootstrap-icons';
import ProjectCard from './ProjectCard';
import Title from '../core/Title';
import CustomButton from '../core/CustomButton';
import { useRouter } from 'next/router';
import useMediaQueryHook from '@/hooks/useBreakpoints';

const Project = () => {
    const { t } = useTranslation('common')
    const router = useRouter()
    const { theme } = useTheme()
    const { lgd} = useMediaQueryHook()
    const [ currentIndexProject, setCurrentIndexProject ] = useState<number>(0)
    const [ activePosition, setActivePosition ] = useState<number>(0)
    const handlePrev = useCallback(() => setCurrentIndexProject((prev:number) => prev > 0 ? prev - 1 : 2), [setCurrentIndexProject])
    const handleNext = useCallback(() => setCurrentIndexProject((prev:number) => prev < 2 ? prev + 1 : 0), [setCurrentIndexProject])

    useEffect(() => {
        const position = (currentIndexProject * 320) + (currentIndexProject * 24)
        setActivePosition(position)
    }, [currentIndexProject])
    return (
        <section className='w-full py-8 dark:bg-gradient-to-b from-[#030110_0%] to-[#030110_100%] border-none' id='my_project'>
            <div className='max-w-6xl mx-auto px-4 m-4'>
            <Title title={t('my_project')} />
            </div>
            {
                !lgd ? 
                <div className={styles.frame}>
                    <Image
                        className={`${styles.image} xs:hidden`}
                        src={theme === 'dark' ? "/project_card.png" : "/project_card_white.png"}
                        height={500}
                        width={500}
                        alt="cover_image" />   
                    <div className='flex flex-col overflow-hidden'>
                        <div className={styles.list} 
                        style={{'--translate-x': `-${activePosition}px`} as React.CSSProperties}
                        >
                            <div className={styles.cardWrapper}>
                                {
                                    projects_data.slice(0, 3).map((e, index) => (
                                        <ProjectCard e={e} key={index} id={index} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className='flex mt-5 pr-4 pl-10 justify-between w-full max-w-[624px]'>
                            <div className='flex gap-6 items-center'>
                                <button
                                    onClick={handlePrev} 
                                    className='p-3 bg-black rounded-md dark:bg-white hover:cursor-pointer'>
                                    <ArrowLeft color={theme != 'dark' ? '#FFFFFF' : '#000000'} size={16} />
                                </button>
                                <div className='flex Sfera text-xl w-12 justify-center'>
                                    <span className='text-primary'>
                                        {currentIndexProject + 1}
                                    </span>
                                    <span className=''>
                                        /3
                                    </span>
                                </div>
                                <button 
                                    onClick={handleNext} 
                                    className='p-3 bg-black rounded-md dark:bg-white hover:cursor-pointer'>
                                    <ArrowRight color={theme != 'dark' ? '#FFFFFF' : '#000000'} size={16} />
                                </button>

                            </div>
                            <CustomButton title={t('see_more')} className='mt-[6px] w-[171px]' onClick={()=> {router.push('/projects')}}/>
                        </div>
                    </div>
                </div> :
                <div className='flex flex-col overflow-hidden'>
                    <div className={styles.list} 
                    style={{'--translate-x': `-${activePosition}px`} as React.CSSProperties}
                    >
                        <div className={styles.cardWrapper}>
                            {
                                projects_data.slice(0, 3).map((e, index) => (
                                    <ProjectCard e={e} key={index} id={index}/>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex mt-5 px-4 justify-between w-full'>
                        <div className='flex gap-6 xs:gap-3 items-center'>
                            <button
                                id='btnLeft'
                                title='Left'
                                onClick={handlePrev} 
                                className='p-3 bg-black rounded-md dark:bg-white hover:cursor-pointer'>
                                <ArrowLeft color={theme != 'dark' ? '#FFFFFF' : '#000000'} size={16} />
                            </button>
                            <div className='flex Sfera text-xl w-12 justify-center'>
                                <span className='text-primary'>
                                    {currentIndexProject + 1}
                                </span>
                                <span className=''>
                                    /3
                                </span>
                            </div>
                            <button
                                id='btnRight'
                                title='Right' 
                                onClick={handleNext} 
                                className='p-3 bg-black rounded-md dark:bg-white hover:cursor-pointer'>
                                <ArrowRight color={theme != 'dark' ? '#FFFFFF' : '#000000'} size={16} />
                            </button>

                        </div>
                        <CustomButton title={t('see_more')} className='mt-[6px] w-[171px]' onClick={()=> {router.push('/projects')}}/>
                    </div>
                    <div className='flex justify-center'>
                        <Image
                            className={`w-[640px]`}
                            src={theme === 'dark' ? "/project_card.png" : "/project_card_white.png"}
                            height={500}
                            width={500}
                            alt="cover_image" />    
                    </div>
                </div>
            }
            

        </section >
    )
}

export default Project