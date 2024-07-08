import { ProjectType } from '@/models/project_type';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ProjectCard from '@/components/Project/ProjectCard';
import { ArrowLeftSquareFill, ArrowRightSquareFill } from 'react-bootstrap-icons';
import styles from './slider_custom.module.scss'
import { useMediaQuery } from 'react-responsive';
import useMediaQueryHook from '@/hooks/useBreakpoints';

const SliderCustom = (props: { items: ProjectType[], autoSlide: boolean, }) => {
    const { items } = props
    const wrapperRef = useRef(null);
    const {sm, md, lg} = useMediaQueryHook()

    const [ currentIndexProject, setCurrentIndexProject ] = useState<number>((Math.round(items.length / 2) - 1))
    const [ currentItemsProject, setCurrentItemsProject ] = useState<ProjectType[]>([])
    const [ activePosition, setActivePosition ] = useState<number>(0)
    const handlePrev = useCallback(() => setCurrentIndexProject((prev:number) => prev > 0 ? prev - 1 : (items.length - 1)), [setCurrentIndexProject, items.length])
    const handleNext = useCallback(() => setCurrentIndexProject((prev:number) => prev < (items.length - 1) ? prev + 1 : 0), [setCurrentIndexProject, items.length])

    useEffect(() => {
        const position = (currentIndexProject * 320) + (currentIndexProject * 24)
        setActivePosition(position)
    }, [currentIndexProject])

    return (
        <section className="min-h-[calc(100vh-80px)] flex relative overflow-hidden w-full">
            <div className={`absolute top-1/2 flex justify-between w-full z-10 px-4`}>
                <button onClick={handlePrev} className="bg-gray-800 rounded-l-md">
                    <ArrowLeftSquareFill size={42} />
                </button>
                <button onClick={handleNext} className="bg-gray-800 rounded-r-md">
                    <ArrowRightSquareFill size={42} />
                </button>
            </div>
            <div
                ref={wrapperRef}
                id="wrapper"
                className={`${styles.cardList} flex items-center transition-transform duration-500 ease-in-out gap-16 -z-10`}
            >
                {props.items.map((e, index) => (
                <ProjectCard
                    e={e}
                    key={index}
                    active={index == currentIndexProject}
                />
                ))}
            </div>
        </section>
    );
};

export default SliderCustom;
