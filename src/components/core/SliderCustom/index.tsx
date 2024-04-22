import { ProjectType } from '@/models/project_type';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import styles from '@/components/Project/project.module.scss'
import { useTheme } from 'next-themes';

const SliderCustom = (props: { items: ProjectType[], autoSlide: boolean, }) => {
    const { t } = useTranslation('common')
    const { theme } = useTheme()
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.items.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === props.items.length - 1 ? 0 : prevIndex + 1));
    };

    // Utilisation de useEffect pour gérer le défilement infini
    // useEffect(() => {
    //     if (!props.autoSlide) return
    //     const slideInterval = setInterval(handleNext, 3000)
    //     return () => clearInterval(slideInterval)
    // }, [props.items])

    return (
        <div className="relative ">
            <div className="flex transition-transform duration-500 ease-in-out overflow-x-auto overflow-y-hidden gap-10"
            // style={{ width: `${props.items.length * 100}%`, transform: `translateX(${currentIndex * (10 / props.items.length)}%)` }}
            >
                {(props.items.slice(0, 3)).map((e, index) => (
                    <div
                        className={`${styles.card} ${theme === 'dark' ? "border-gradient-dark" : "border-gradient"} ${index === currentIndex ? "scale-[100%]" : "scale-[50%]"}`}
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
                ))}
            </div>
            <button className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800  rounded-l-md" onClick={handlePrev}>
                Précédent
            </button>
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 rounded-r-md" onClick={handleNext}>
                Suivant
            </button>
        </div>
    );
};

export default SliderCustom;
