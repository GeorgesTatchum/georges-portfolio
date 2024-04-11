import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import Image from 'next/image'

function Skills() {
    const { t } = useTranslation('common')
    const skills = ['pROFESSIONNAL', 'Regarding', 'RIGOUSOUS', 'ATTENTIVE', 'ATTENTIVE', 'logic', 'Dynamic', 'Proactif', 'Diplomate', 'Enthousiaste']
    return (
        <section
            className='h-full relative w-full bg-darkest'
            id="my_skills"


        >
            <div
                className='flex flex-col items-start mt-20 max-w-6xl mx-auto px-4'
                style={{ background: `url(/universe_bubble_bg.svg)`, backgroundRepeat: 'no-repeat', backdropFilter: 'blur(10px)', backgroundSize: 'cover', backgroundPositionX: 'left' }}
            >
                <span className='uppercase text-3xl Sfera text-white'>
                    {t('my_hard_skill')}
                </span>
                <span className='text-sm mt-10 mb-10 font-semibold text-white'>
                    {t('favorite_tech')}
                </span>
                <div className='relative w-1/2'>
                    {/* <Image
                        className='h-full w-auto mdd:max-w-[unset] smd:w-[200%] md:w-[125%] mdd:h-auto mdd:opacity-30'
                        src={"/universe_bubble_bg.svg"}
                        height={1000}
                        width={1000}
                        alt="cover_image" /> */}
                    {/* <div className='absolute z-10 w-1/4 top-0 rounded-lg bg-white/10 bg-green-100/10 flex flex-col p-10 mb-10 self-center'>
                        {
                            skills.map((e, index) => (
                                <>
                                    <div className='my-5 self-center'>
                                        <span key={index} className="uppercase text-center text-sm Sfera text-white">{t(e)}</span>
                                    </div>
                                </>

                            ))
                        }
                    </div> */}
                </div>

            </div>
        </section>
    )
}

export default Skills