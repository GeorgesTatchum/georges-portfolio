import { ProjectType } from '@/models/project_type';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

const SliderCustom = (props: { items: ProjectType[], autoSlide: boolean, }) => {
    const { t } = useTranslation('common')
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
        <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out transform -translate-x-full"
            // style={{ width: `${props.items.length * 100}%`, transform: `translateX(${currentIndex * (10 / props.items.length)}%)` }}
            >
                {props.items.map((item, index) => (
                    <div key={index} className="w-full bg-lime-100 flex-shrink-0">
                        {/* Contenu de l'élément du slider */}
                        <div className='w-80 h-full bg-white/10 rounded-lg cardProject relative m-0' key={index}>
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
                                    <span className='text-base text'> {item.type}</span>
                                    <span className='text-xl text-primary'>{item.title}</span>
                                </div>
                                <div className='w-full'>
                                    <span className='font-semibold text-left text-xs text-primary'>
                                        {item.descript}
                                    </span>
                                </div>
                                <div className='dark:bg-white/10 bg-gray bg-opacity-10 hover:!bg-primary rounded-md items-center flex justify-center p-3 cursor-pointer  w-4/5 mt-8'>
                                    <Link href={item.url} className="flex items-center" target='_blank'>
                                        <span className='hover:!text-white text-base Sfera uppercase'>
                                            {t('open_project')}
                                        </span>

                                    </Link>
                                </div>
                            </div>

                        </div>
                        {/* <img src={item.image} alt={item.alt} className="w-full h-auto" /> */}
                    </div>
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
