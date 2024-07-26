import React from 'react'
import { CodeBlock } from '../CodeBlock'
import { aboutMeData, aboutMeData2, aboutMeData2_en, aboutMeData_en } from '@/models/data/about_me'
import useTranslation from 'next-translate/useTranslation'
import * as Icon from 'react-bootstrap-icons'
import Link from 'next/link'
import useMediaQueryHook from '@/hooks/useBreakpoints'
import { useTheme } from 'next-themes'
import Title from '../core/Title'
import { projects_data } from '@/models/data/projects'

export default function Resume() {
    const { t, lang } = useTranslation('common')
    const { lgd } = useMediaQueryHook()
    const skills = [
        "Rigoureux",
        "Logique",
        "Professionnel",
        "Organisé",
        "Résolution de problèmes",
        "Autonome",
        "Gestion du temps",
        "Esprit analytique",
        "Collaboratif",
        "Esprit d'équipe",
        "Leadership",
        "Curieux",
        "Proactif",
        "Réactif",
        "Attentif",
        "Adaptable",
        "Communicatif",
        "Dynamique",
        "Innovant",
        "Diplomate",
        "Patient",
        "Enthousiaste",
        "Créatif"
    ]
    const skills_en = [
        "Rigorous",
        "Logical",
        "Professional",
        "Organized",
        "Problem-solving",
        "Independent",
        "Time management",
        "Analytical mind",
        "Collaborative",
        "Team spirit",
        "Leadership",
        "Curious",
        "Proactive",
        "Reactive",
        "Attentive",
        "Adaptable",
        "Communicative",
        "Dynamic",
        "Innovative",
        "Diplomatic",
        "Patient",
        "Enthusiastic",
        "Creative"
    ]
    return (
        <section
            className='w-full flex flex-col bg-contain bg-no-repeat'
            id="my_resume"
            style={{ background: `url(/color_splash.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: '40% 20%', backgroundSize: '600px' }}>
            <div className='w-full -top-5 mdd:top-1/4 flex max-w-6xl mx-auto px-4 md:justify-around xs:justify-center'>
                <div className='flex justify-between gap-7'>
                    <div className='flex gap-7 relative xs:flex-col xs:gap-x-5'>
                        <div className='z-0 sm:w-1/2 w-full'> 
                            <div className={`borderGradient dark:borderGradientDark flex-none relative hover:-translate-y-3 ease duration-[600ms] transition-all cursor-pointer`}>
                                <CodeBlock description={lang === "fr" ?aboutMeData : aboutMeData_en} /> 
                            </div> 
                        </div>
                        <div
                            className='w-full md:h-full self-end md:self-start mdd:flex mdd:flex-col md:justify-between z-10 translate-y-4 mdd:translate-y-0 mdd:gap-2 sm:w-1/2'
                        >
                            <div className={`borderGradient dark:borderGradientDark relative hover:-translate-y-3 ease duration-[600ms] transition-all cursor-pointer`}>
                                <CodeBlock description={lang === "fr" ?aboutMeData2 : aboutMeData2_en} second={true} />
                            </div>

                            {lgd && <ResumeContent className='flex flex-col xs:mt-16 justify-between lg:hidden gap-16 w-full' />}
                        </div>
                    </div>
                    <ResumeContent className='flex flex-col justify-between mdd:hidden' />
                </div>
            </div>
            <div className='px-4 max-w-6xl mx-auto translate-y-10'>
                <div className='flex flex-col items-start'>
                    <Title title={t('my_soft_skill')} />
                    <div className='flex flex-wrap items-start mt-10 gap-4'>
                        {
                            (lang === "fr" ? skills : skills_en).map((e, index) => (
                                <>
                                    <div
                                        key={index}
                                        className="dark:bg-white/10 bg-gray bg-opacity-10 rounded-md items-center flex justify-center p-3"
                                    >
                                        <span className="uppercase text-center text-sm Sfera">{t(e)}</span>
                                    </div> </>
                            ))
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

function ResumeContent(props: { className: string }) {
    const { t } = useTranslation('common')
    return (
        <div className={props.className}>
            <div className="dark:bg-white/10 bg-gray bg-opacity-10 rounded-md items-center flex p-4 justify-between">
                <span className="uppercase text-sm Sfera">{t("meet_me_on")}</span>
                <div className='flex gap-3'>
                    <Link href='https://www.linkedin.com/in/georges-tatchum-b21158265' className="cursor-pointer" target='_blank'>
                        <Icon.Linkedin size={18} />
                    </Link>
                    <Link href='#' className="cursor-pointer" target='_blank'><Icon.Gitlab size={18} /></Link>
                    <Link href='https://github.com/GeorgesTatchum' className="cursor-pointer" target='_blank'><Icon.Github size={18} /></Link>

                </div>
            </div>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <span className='uppercase text-3xl Sfera text-primary text-start'>{new Date().getFullYear() - 2020} {t("years")}</span>
                    <div className='self-end xs:w-4/5 xs:self-auto'>
                        <span className='text-base text-end'>{t("teams_or_single")}</span>
                    </div>

                </div>
                <div className='flex flex-col items-end'>
                    <span className='uppercase text-3xl Sfera text-primary text-end'> + {projects_data.length + 5} </span>
                    <div className='p-0 m-0 text-end xs:w-4/5 xs:self-auto'>
                        <span className='text-base '>{t("project_part")}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

