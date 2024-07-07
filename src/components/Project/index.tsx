import useTranslation from 'next-translate/useTranslation'
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { projects_data } from '@/models/data/projects';
import { useTheme } from 'next-themes';
import styles from './project.module.scss'
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';
import ProjectCard from './ProjectCard';
import Title from '../core/Title';

const Project = () => {
    const { t } = useTranslation('common')
    const [currentIndexProject, setCurrentIndexProject] = useState<number>(0)
    const { theme } = useTheme()
    const handlePrev = () => setCurrentIndexProject((prev:number) => prev > 0 ? prev - 1 : 0)
    const handleNext = () => setCurrentIndexProject((prev:number) => prev > 0 ? prev - 1 : 0)

    return (
        <section className='w-full py-4 dark:bg-gradient-to-b from-[#030110_0%] to-[#030110_100%] border-none' id='my_project'>
            <div className='max-w-6xl mx-auto px-4 m-4'>
            <Title title={t('my_project')} />
            </div>
            <div className='flex items-center md:flex-col xs:flex-col-reverse w-full overflow-hidden 2xl:justify-center'>
                <Image
                    className='h-1/2 w-auto md:w-full sm:w-full xs:w-[160%]  max-w-[unset] xs:self-center'
                    src={theme === 'dark' ? "/project_card.svg" : "/project_card_white.svg"}
                    height={80}
                    width={80}
                    alt="cover_image" />
                <div className='flex flex-col h-full overflow-hidden translate-y-14 mdd:translate-y-0'>
                    <div className={`${styles.cardWrapper} translate-x-15`}>
                        {
                            projects_data.slice(0, 3).map((e, index) => (
                                <ProjectCard e={e} key={index} />
                            ))
                        }
                    </div>
                    <div className='flex max-w-6xl mx-auto mdd:justify-around mt-5 w-[80%] md:w-full sm:w-full justify-between'>
                        <div className='flex gap-6 items-center'>
                            <div className='p-3 bg-black rounded-md dark:bg-white hover:cursor-pointer'>
                                <ArrowLeft color={theme != 'dark' ? '#FFFFFF' : '#000000'} size={16} />
                            </div>
                            <div className='flex Sfera text-xl'>
                                <span className='text-primary'>
                                    1
                                </span>
                                <span className=''>
                                    /3
                                </span>
                            </div>
                            <div className='p-3 bg-black rounded-md dark:bg-white hover:cursor-pointer'>
                                <ArrowRight color={theme != 'dark' ? '#FFFFFF' : '#000000'} size={16} />
                            </div>

                        </div>
                        <div className='dark:bg-white/10 bg-gray bg-opacity-10 hover:!bg-primary dark:hover:!bg-primary/60 hover:!text-white rounded-md items-center flex justify-center p-3 cursor-pointer'>
                            <Link href='/projects' className="flex items-center" target='_self'>
                                <span className='text-base Sfera uppercase'>
                                    {t('see_more')}
                                </span>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Project