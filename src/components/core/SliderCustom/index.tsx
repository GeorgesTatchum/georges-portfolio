import { ProjectType } from '@/models/project_type';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ProjectCard from '@/components/Project/ProjectCard';
import { ArrowLeftSquareFill, ArrowRightSquareFill } from 'react-bootstrap-icons';
import styles from './slider_custom.module.scss';

const SliderCustom = (props: { items: ProjectType[], autoSlide: boolean, }) => {
    const { items } = props;
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const [currentIndexProject, setCurrentIndexProject] = useState<number>((Math.round(items.length / 2) - 1));
    const [activePosition, setActivePosition] = useState<number>(0);

    const handlePrev = useCallback(() => {
        setCurrentIndexProject((prev: number) => prev > 0 ? prev - 1 : props.items.length - 1);
    }, [setCurrentIndexProject, props.items]);

    const handleNext = useCallback(() => {
        setCurrentIndexProject((prev: number) => prev < props.items.length -1 ? prev + 1 : 0);
    }, [setCurrentIndexProject, props.items]);

    useEffect(() => {
        if (wrapperRef.current) {
            const elementWidth = 320 + 64;
            const visibleWidth = wrapperRef.current.clientWidth;
            const centerPosition = (visibleWidth / 2) - (elementWidth / 2);
            const newPosition = -(currentIndexProject * elementWidth - centerPosition);
            setActivePosition(newPosition);
        }
    }, [currentIndexProject]);
    

    return (
        <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center relative overflow-hidden w-full ">
            <div className="absolute top-1/2 flex justify-between w-full z-10 px-4 xs:hidden">
                <button onClick={handlePrev} className="bg-gray-800 rounded-l-md">
                    <ArrowLeftSquareFill size={42} />
                </button>
                <button onClick={handleNext} className="bg-gray-800 rounded-r-md">
                    <ArrowRightSquareFill size={42} />
                </button>
            </div>
            <div
                className={`${styles.cardList} flex items-center justify-center z-0 xs:hidden`}
            >
                <div
                    className={`${styles.cardListWrapper} flex xs:flex-col items-center transition-transform duration-500 ease-in-out gap-16 w-fit`}
                    style={{ 'transform': `translateX(${activePosition}px)` } as React.CSSProperties}
                    ref={wrapperRef}
                >
                    {props.items.map((e, index) => (
                        <ProjectCard
                            e={e}
                            id={index}
                            key={index}
                            active={index === currentIndexProject}
                        />
                    ))}
                </div>
            </div>
            <div
                    className={`flex flex-col items-center transition-transform duration-500 ease-in-out gap-16 py-16 smin:hidden`}
                >
                    {props.items.map((e, index) => (
                        <ProjectCard
                            e={e}
                            id={index}
                            key={index}
                            transition={true}
                        />
                    ))}
                </div>
        </section>
    );
};

export default SliderCustom;