import useTranslation from 'next-translate/useTranslation'
import React, { CSSProperties, useCallback, useState } from 'react'
import styles from './skills.module.scss'
import Image from 'next/image';
import Title from '../core/Title';

export interface MyCustomCSS extends CSSProperties {
    '--count': number;
    '--i': number;
    '--w': string;
    '--h': string;
    '--idx': number
}


function Skills() {
    const { t } = useTranslation('common')
    const [onHoverIcon, setonHoverIcon] = useState<string | number>("")
    const skills = ["Fastapi", "Django", "flask", "redis", "celery", "rabbitmq", "kubernetes", "elk", "Github", "Gitlab-CI/CD", "Jenkins", "caddy",  "mongodb", "postgressql", "dbeaver", "tailwind css", "react-query", "redux", "swift storyboard"]
    const handleHover = useCallback((e:string | number) => {
            setonHoverIcon((prev: string | number) => e !== prev ? e : prev)
            console.log("the curr over : ", onHoverIcon);
            
        }, [setonHoverIcon, onHoverIcon])

    return (
        <section
            className="w-full bg-darkest dark:bg-gradient-to-b from-[#03011000_0%] to-[#030110_100%] border-none overflow-hidden"
            id="my_skills"
        >
            <div
                className='flex flex-col items-start max-w-6xl mx-auto px-4 py-14 xs:pb-0'
            >
                <Title title={t('my_hard_skill')} className='text-white' />
                <span className='mt-10 mb-10 text-md text-white'>
                    {t('favorite_tech')}
                </span>
                <div className='flex justify-around w-full items-center mdd:flex-col md:gap-16 mb-6'>
                    <div className={`${styles.bubble}`}> 
                        <div className={`${styles.cardProject}`}>
                            <div className='flex flex-col justify-start items-start gap-5'>
                            {
                                skills.map((e, index) => (
                                    <span key={index} className="uppercase text-base font-black leading-none italic text-white block">{t(e)}</span>
                                ))
                            }
                            </div>
                            
                        </div>
                    </div>

                    {/* first circle */}
                    <div
                        className={`${styles.container} after:bg-darkest after:dark:bg-gradient-to-b from-[#03011000_0%] to-[#030110_100%] w-[550px] h-[550px] relative xs:scale-[.6] sm:scale-[.7]`}
                    >
                        <div className={`${styles.icon} left-[-50%]`} style={{ '--count': 9, '--idx': 0 } as MyCustomCSS}>
                            {
                                ["python", "sass", "", "node", "html", "docker", "gitlab", "swagger", "react"].map((e, index) => <>
                                    <div className={`${styles.imgBx} ${index === 0 ? styles.active : ""} ${[0, 4, 5, 7].includes(index) ? 'w-28 h-28 origin-[330px]' : index == 2 ? "w-8 h-8 bg-white origin-[290px]" : "w-20 h-20 origin-[315px]"}`} style={{ '--i': index + 1 } as MyCustomCSS}
                                    onMouseOver={
                                        () => {
                                            handleHover(e)
                                        }
                                    }
                                    onMouseLeave={
                                        () => {
                                            handleHover('')
                                        }
                                    }
                                    >
                                        {
                                            index !== 2 && <Image
                                                className={`${styles.img}`}
                                                // src={(onHoverIcon === e ? e + '-icon' : e) + ".svg"}
                                                src={e + ".svg"}
                                                height={[0, 4, 5, 7].includes(index) ? 25 : 20}
                                                width={[0, 4, 5, 7].includes(index) ? 25 : 20}
                                                alt="python" />
                                        }

                                    </div>
                                </>)
                            }
                        </div>
                        {/* second circle */}
                        <div className={`w-[320px] h-[320px] rounded-full z-20 top-28 left-28 absolute`}>
                            <div
                                className={`${styles.container} after:bg-darkest after:dark:bg-gradient-to-b from-[#03011000_0%] to-[#030110_100%]`}
                            >
                                <div className={`${styles.icon} -left-[50%] top-40`} style={{ '--count': 6, '--idx': 0 } as MyCustomCSS}>
                                    {
                                        [1, "flutter", 'js', 3, "nextjs", "ts", 6].map((e, index) => <>
                                            {
                                                [1, 2, 4, 5].includes(index) && <div className={`${styles.imgBx} ${index === 0 ? styles.active : ""} w-20 h-20 origin-[210px] ${[1, 5].includes(index) ? "w-28 h-28 origin-[210px]" : index === 2 ? "left-[95px]" : index === 4 ? "-top-10 right-7" : "hover:animate-bounce"}`} style={{ '--i': index + 1 } as MyCustomCSS}
                                                onMouseOver={
                                                    () => {
                                                        handleHover(e)
                                                    }
                                                }
                                                onMouseLeave={
                                                    () => {
                                                        handleHover('')
                                                    }
                                                }
                                                >
                                                    {
                                                        <Image
                                                            className={`${styles.img}`}
                                                            src={e + ".svg"}
                                                            height={[1, 5].includes(index) ? 25 : 15}
                                                            width={[1, 5].includes(index) ? 25 : 15}
                                                            alt={e + index.toString()} />
                                                    }

                                                </div >
                                            }

                                        </>)
                                    }
                                </div>

                                <div className={`${styles.animatedContent} z-30`}>
                                    <span className='top-[45%] text-base text-white absolute uppercase font-black leading-none italic block'>{onHoverIcon === "ts" ? 'typescript' : onHoverIcon === "js" ? 'javascript' : onHoverIcon === "node" ? "nodejs" : onHoverIcon === "react" ? "reactjs" : onHoverIcon}</span>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default Skills