import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import Image from "next/image";

export default function Resume() {
    const { t } = useTranslation('common')
    const skills = ['skill_one', 'skill_two', 'skill_tree', 'skill_one', 'skill_two', 'skill_tree', 'skill_one', 'skill_two', 'skill_tree']
    return (
        <section className='h-full relative w-full' id="my_resume">
            <div className='w-full max-w-6xl mx-auto px-4'>
                <div className='flex flex-col items-start'>
                    <span className='uppercase text-3xl Sfera'>
                        {t('my_soft_skill')}
                    </span>
                    <div className='flex flex-wrap items-start mt-10'>
                        {
                            skills.map((e, index) => (
                                <>
                                    <div key={index} className="dark:bg-white/10 bg-gray bg-opacity-10 rounded-md items-center flex justify-center p-3 mr-10 mb-5">
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
