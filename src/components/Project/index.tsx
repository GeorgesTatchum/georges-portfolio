import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { projects_data } from '@/models/data/projects';


const Project = () => {
    const { t } = useTranslation('common')
    return (
        <section className='w-full py-4' id='my_project'>
            <div className='max-w-6xl mx-auto px-4 m-4'>
                <span className='uppercase text-3xl Sfera'>
                    {t('my_project')}
                </span>
            </div>
            <div className=''>
                <div className='flex items-center md:flex-col xs:flex-col-reverse'>
                    <Image
                        className='h-1/2 w-auto mdd:w-full max-w-[unset] xs:self-center'
                        src={"/project_card.svg"}
                        height={100}
                        width={100}
                        alt="cover_image" />
                    <div className='flex flex-col overflow-x-auto w-full'>
                        <div
                            className='flex gap-6 justify-center'
                        >
                            {
                                projects_data.slice(0, 2).map((e, index) => (<>
                                    <div
                                        className='w-80 h-full bg-white/10 rounded-lg cardProject box relative m-0'
                                        key={index}
                                    >
                                        <div className='z-0 inset-0 w-full h-full  rounded-lg m-0'>
                                            <Image
                                                className='w-full max-w-[unset] bg-cover object-cover'
                                                layout='fill'
                                                src={"/card_grid_bg.svg"}
                                                alt="card_grid" />
                                        </div>

                                        <div className='w-full z-10 flex flex-col items-start p-8'>
                                            <div className='w-20 h-20 rounded bg-white mb-8'>

                                            </div>
                                            <div className='uppercase Sfera text-left content-start flex flex-col justify-around mb-5'>
                                                <span className='text-base text'> {e.type}</span>
                                                <span className='text-xl text-primary'>{e.title}</span>
                                            </div>
                                            <div className='w-full'>
                                                <span className='font-semibold text-left text-xs'>
                                                    {e.descript}
                                                </span>
                                            </div>
                                            <div className='dark:bg-white/10 bg-gray bg-opacity-10 hover:!bg-primary rounded-md items-center flex justify-center p-3 cursor-pointer  w-4/5 mt-8'>
                                                <Link href={e.url} className="flex items-center" target='_blank'>
                                                    <span className='hover:!text-white text-base Sfera uppercase'>
                                                        {t('open_project')}
                                                    </span>

                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </>))
                            }
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Project