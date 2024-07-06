import { ProjectType } from '@/models/project_type';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import styles from '@/components/Project/project.module.scss'
import { useTheme } from 'next-themes';
import ProjectCard from '@/components/Project/ProjectCard';
import { ArrowLeftSquareFill, ArrowRightSquareFill } from 'react-bootstrap-icons';

const SliderCustom = (props: { items: ProjectType[], autoSlide: boolean, }) => {

    const wrapperRef = useRef(null);
    const itemWidth = 200; // Adjust the size as needed
    const [currentIndex, setCurrentIndex] = useState(2);

    const scroll = (direction: string) => {
        const wrapper = wrapperRef.current;
        if (wrapper && wrapper instanceof HTMLElement){
            const currentTranslateX = getTranslateX(wrapper);
        const newTranslateX = direction === 'left' 
        ? currentTranslateX + itemWidth 
        : currentTranslateX - itemWidth;
        wrapper.style.transform = `translateX(${newTranslateX}px)`;
        if(direction === "left"){
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.items.length - 1 : prevIndex - 1));
        } else {
            setCurrentIndex((prevIndex) => (prevIndex === props.items.length - 1 ? 0 : prevIndex + 1));
        }
        
        }
        else {
            console.error("Wrapper is null or not an instance of HTMLElement");
        }
    };

    const getTranslateX = (element: HTMLElement) => {
        const style = window.getComputedStyle(element);
        const matrix = new WebKitCSSMatrix(style.webkitTransform || style.transform);
        return matrix.m41;
    };

    return (
        <section className="h-[calc(100vh_-_80px)] flex justify-center relative overflow-hidden w-full max-w-6xl mx-auto">
            <div className="flex justify-center  overflow-hidden  snap-mandatory h-[70%] mt-10"
            >
                <div ref={wrapperRef} id="wrapper" className='flex transition-transform duration-500 ease-in-out gap-10'>
                {props.items.map((e, index) => (
                    <ProjectCard e={e} key={index} className={`${currentIndex === index ? 'scale-y-[90%] scale-x-[110%]' : 'scale-y-[80%] rounded-2xl'}`} />
                ))}
                </div>
                
            </div>
           
            <button className="absolute top-1/3 left-0 transform  px-4 py-2 bg-gray-800  rounded-l-md" onClick={() => scroll('left')}>
            <ArrowLeftSquareFill size={42} />
            </button>
            <button className="absolute top-1/3 right-0 transform  px-4 py-2 bg-gray-800 rounded-r-md" onClick={() => scroll('right')}>
            <ArrowRightSquareFill size={42} />
            </button>
        </section>
    );
};

export default SliderCustom;
