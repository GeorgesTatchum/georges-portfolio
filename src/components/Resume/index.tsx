import React from 'react'
import { CodeBlock } from '../CodeBlock'
import { aboutMeData, aboutMeData2 } from '@/models/data/about_me'
import useTranslation from 'next-translate/useTranslation'
import * as Icon from 'react-bootstrap-icons'
import Link from 'next/link'
import useMediaQueryHook from '@/hooks/useBreakpoints'
import { useTheme } from 'next-themes'

export default function Resume() {
    const { t } = useTranslation('common')
    const { theme } = useTheme()
    const { lgd } = useMediaQueryHook()
    const skills = ['pROFESSIONNAL', 'Regarding', 'RIGOUSOUS', 'ATTENTIVE', 'ATTENTIVE', 'logic', 'Dynamic', 'Proactif', 'Diplomate', 'Enthousiaste']
    return (
        <section
            className='relative w-full flex flex-col bg-contain bg-no-repeat'
            id="my_resume"
            style={{ background: `url(/color_splash.png)`, backgroundRepeat: 'no-repeat' }}>
            <div className='w-full -top-5 mdd:top-1/4 flex max-w-6xl mx-auto px-4'>
                <div className='flex justify-between gap-7'>
                    <div className='flex gap-7 relative xs:flex-col xs:gap-x-5'>
                        <div className='w-full z-0'> <CodeBlock description={aboutMeData} className={`${theme === 'dark' ? 'border-gradient-dark' : 'border-gradient'}`} /> </div>

                        <div
                            className='w-full md:h-full self-end md:self-start mdd:flex mdd:flex-col md:justify-between z-10 translate-y-4 mdd:translate-y-0 mdd:gap-2'
                        >
                            <CodeBlock description={aboutMeData2} className={`${theme === 'dark' ? 'border-gradient-dark' : 'border-gradient'}`} />
                            {lgd && <ResumeContent className='flex flex-col justify-between lg:hidden mt-4 gap-4' />}
                        </div>
                    </div>
                    <ResumeContent className='flex flex-col justify-between mdd:hidden' />
                </div>
            </div><div className='px-4 max-w-6xl mx-auto translate-y-10'>
                <div className='flex flex-col items-start'>
                    <span className='uppercase text-3xl Sfera'>
                        {t('my_soft_skill')}
                    </span>
                    <div className='flex flex-wrap items-start mt-10'>
                        {
                            skills.map((e, index) => (
                                <>
                                    <div
                                        key={index}
                                        className="dark:bg-white/10 bg-gray bg-opacity-10 rounded-md items-center flex justify-center p-3 mr-10 mb-5"
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
                <span className="uppercase text-sm Sfera">{t("MeeT Me On Social")}</span>
                <div className='flex gap-2'>
                    <Link href='https://www.linkedin.com/in/georges-tatchum-b21158265' className="cursor-pointer" target='_blank'>
                        <Icon.Linkedin size={18} />
                    </Link>
                    <Link href='#' className="cursor-pointer" target='_blank'><Icon.Gitlab size={18} /></Link>
                    <Link href='https://github.com/GeorgesTatchum' className="cursor-pointer" target='_blank'><Icon.Github size={18} /></Link>

                </div>
            </div>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <span className='uppercase text-3xl Sfera text-primary text-start'>4 years</span>
                    <div className='self-end xs:w-4/5 xs:self-auto'>
                        <span className='text-base text-end'>Experience, working with
                            teams or single</span>
                    </div>

                </div>
                <div className='flex flex-col items-end'>
                    <span className='uppercase text-3xl Sfera text-primary text-end'>+ 20 </span>
                    <div className='p-0 m-0 text-end xs:w-4/5 xs:self-auto'>
                        <span className='text-base '>Experience, working with teams or single</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

