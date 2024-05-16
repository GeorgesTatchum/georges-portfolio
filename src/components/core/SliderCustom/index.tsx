import { ProjectType } from '@/models/project_type';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import styles from '@/components/Project/project.module.scss'
import { useTheme } from 'next-themes';
import ProjectCard from '@/components/Project/ProjectCard';

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
        <section className="h-[calc(100vh_-_80px)] flex justify-center">
            <div className="flex justify-center transition-transform duration-500 ease-in-out overflow-x-auto overflow-y-hidden gap-10 snap-mandatory h-[80%] mt-10"
            // style={{ transform: `translateX(${currentIndex * (10 / props.items.length)}%)` }}
            >
                {props.items.map((e, index) => (
                    <ProjectCard e={e} key={index} className={`${currentIndex === index ? 'scale-y-[90%] scale-x-[90%] rounded-2xl' : 'scale-y-[70%] scale-x-[80%]'}`} />
                ))}
            </div>
            <button className="absolute top-1/2 left-0 transform  px-4 py-2 bg-gray-800  rounded-l-md" onClick={handlePrev}>
                Précédent
            </button>
            <button className="absolute top-1/2 right-0 transform  px-4 py-2 bg-gray-800 rounded-r-md" onClick={handleNext}>
                Suivant
            </button>
        </section>
    );
};

export default SliderCustom;
