import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { projects_data } from '@/models/data/projects';
import { useTheme } from 'next-themes';
import styles from './project.module.scss'

const Project = () => {
    const { t } = useTranslation('common')
    const { theme } = useTheme()

    return (
        <section className='w-full py-4 dark:bg-dark-purple' id='my_project'>
            <div className='max-w-6xl mx-auto px-4 m-4'>
                <span className='uppercase text-3xl Sfera'>
                    {t('my_project')}
                </span>
            </div>
            <div className=''>
                <div className='flex items-center md:flex-col xs:flex-col-reverse'>
                    <Image
                        className='h-1/2 w-auto mdd:w-full max-w-[unset] xs:self-center'
                        src={theme === 'dark' ? "/project_card.svg" : "/project_card_white.svg"}
                        height={80}
                        width={80}
                        alt="cover_image" />
                    <div className={styles.cardWrapper}>
                        <div className='flex gap-6'>
                            {
                                projects_data.slice(0, 6).map((e, index) => (
                                    <div
                                        className={`${styles.card} ${theme === 'dark' ? "border-gradient-dark" : "border-gradient"}`}
                                        key={index}>
                                        <div className={`absolute inset-0 p-8 gap-6 flex flex-col rounded-md justify-between ${theme === 'dark' ? "cardProject" : "cardProjectLight"}`}>
                                            <div className={`absolute inset-0 p-8 gap-6 flex flex-col justify-between cardProjectBg`}>
                                                <div className='w-20 h-20 rounded bg-white'>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <div className='uppercase Sfera text-left content-start flex flex-col justify-around'>
                                                        <span className='text-base text'> {e.type}</span>
                                                        <span className='text-xl text-primary text-shadow'>{e.title}</span>
                                                    </div>
                                                    <div className="overflow-hidden">
                                                        <span
                                                            className={`font-light text-left ${styles.description}`}>
                                                            {e.descript}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className='dark:bg-white/10 bg-gray bg-opacity-10 hover:!bg-primary dark:hover:!bg-primary/60 hover:!text-white rounded-md items-center flex justify-center p-3 cursor-pointer  w-4/5'>
                                                    <Link href={e.url} className="flex items-center" target='_blank'>
                                                        <span className='text-base Sfera uppercase'>
                                                            {t('open_project')}
                                                        </span>

                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div >
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>

        </section >
    )
}

export default Project