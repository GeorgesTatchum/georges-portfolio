import { ProjectType } from '@/models/project_type'
import React from 'react'
import styles from '../project.module.scss'
import { useTheme } from 'next-themes'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import CustomButton from '@/components/core/CustomButton'

interface CardProps {
    e: ProjectType;
    className?: string;
    active?: boolean;
}

const ProjectCard = (props: CardProps) => {
    const { theme } = useTheme()
    const { t } = useTranslation('common')
    const router = useRouter()
    return (
        <div
            className={`${styles.card} ${props.className} ${props.active ? styles.active : ''} ${theme === 'dark' ? "cardProject" : "cardProjectLight"} border-gray/5 dark:border-white/20 `}
        >
            <div className={`${props.active ? 'w-[114px]' : 'w-20'} aspect-square rounded bg-white`}>
            </div>
            <div className={`flex flex-col mt-5 ${props.active ? 'gap-10' : 'gap-3'}`}>
                <div className={`uppercase Sfera text-left content-start flex flex-col justify-around`}>
                    <span className='text-base text'> {props.e.type}</span>
                    <span className={`${props.active ? 'text-4xl' : 'text-xl'} text-primary text-shadow`}>{props.e.title}</span>
                </div>
                <div className="overflow-hidden">
                    <span
                        className={`font-light text-left ${styles.description} select-none`}>
                        {props.e.descript}
                    </span>
                </div>
            </div>
            <CustomButton title={t('open_project')} className='mt-[6px] w-fit' onClick={()=> {if (props.active === true) {
                router.push('/projects/1')
            }}}/>
        </div >
    )
}

export default ProjectCard