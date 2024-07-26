import { ProjectType } from '@/models/project_type'
import React from 'react'
import styles from '../project.module.scss'
import { useTheme } from 'next-themes'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import CustomButton from '@/components/core/CustomButton'

interface CardProps {
    id: number
    e: ProjectType;
    className?: string;
    active?: boolean;
    transition?: boolean
}

const ProjectCard = (props: CardProps) => {
    const { theme } = useTheme()
    const { t, lang } = useTranslation('common')
    const router = useRouter()
    
    return (
        <div
            className={`${styles.card} ${props.className} ${props.active ? styles.active : ''} ${theme === 'dark' ? "cardProject" : "cardProjectLight"} border-gray/5 dark:border-white/20 ${ props.transition === true ? 'hover:-translate-y-3 ease duration-[600ms] transition-all cursor-pointer' : '' }`}
        >
            <div className={`${props.active ? 'w-[114px]' : 'w-20'} aspect-square rounded bg-transparent block`} 
            style={{background: `url(${props.e.logo})`, backgroundPosition: 'center', backgroundSize: props.id === 0 ? "contain" : 'cover', backgroundRepeat: 'no-repeat'}}
            >
            </div>
            <div className={`flex flex-col mt-5 ${props.active ? 'gap-10' : 'gap-3'}`}>
                <div className={`uppercase Sfera text-left content-start flex flex-col justify-around`}>
                    <span className='text-base text'> {props.e.type}</span>
                    <span className={`${props.active ? 'text-4xl' : 'text-xl'} text-primary text-shadow`}>{props.e.title}</span>
                </div>
                <div className="overflow-hidden">
                    <span
                        className={`font-light text-left ${styles.description} select-none`}>
                        {lang === 'fr' ? props.e.introduction.fr : props.e.introduction.en}
                    </span>
                </div>
            </div>
            <CustomButton title={t('open_project')} className='mt-[6px] w-fit' onClick={()=> {
                router.push(`/projects/${props.id}`)
            }}/>
        </div >
    )
}

export default ProjectCard