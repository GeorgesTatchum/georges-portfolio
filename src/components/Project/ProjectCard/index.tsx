import { ProjectType } from '@/models/project_type'
import Link from 'next/link'
import React from 'react'
import styles from '../project.module.scss'
import { useTheme } from 'next-themes'
import useTranslation from 'next-translate/useTranslation'

interface CardProps {
    e: ProjectType;
    className?: string;
}

const ProjectCard = (props: CardProps) => {
    const { theme } = useTheme()
    const { t } = useTranslation('common')
    return (
        <div
            className={`${styles.card} ${props.className}`}
        >
            <div className={`absolute inset-0 p-8 gap-6 flex flex-col rounded-md justify-between ${theme === 'dark' ? "cardProject" : "cardProjectLight"}`}>
                <div className={`absolute inset-0 p-8 gap-6 flex flex-col justify-between cardProjectBg`}>
                    <div className='w-20 h-20 rounded bg-white'>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className='uppercase Sfera text-left content-start flex flex-col justify-around'>
                            <span className='text-base text'> {props.e.type}</span>
                            <span className='text-xl text-primary text-shadow'>{props.e.title}</span>
                        </div>
                        <div className="overflow-hidden">
                            <span
                                className={`font-light text-left ${styles.description}`}>
                                {props.e.descript}
                            </span>
                        </div>
                    </div>

                    <div className='dark:bg-white/10 bg-gray bg-opacity-10 hover:!bg-primary dark:hover:!bg-primary/60 hover:!text-white rounded-md items-center flex justify-center p-3 cursor-pointer  w-4/5'>
                        <Link href="/projects/1" className="flex items-center" target='_self'>
                            <span className='text-base Sfera uppercase'>
                                {t('open_project')}
                            </span>

                        </Link>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ProjectCard