import CustomButton from '@/components/core/CustomButton';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import LoadingPage from '@/components/LoadingPage';
import Navbar from '@/components/NavBar';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import styles from './projects.module.scss'
import { contacts } from '@/models/data/contacts';
import useTranslation from 'next-translate/useTranslation';
import { useTheme } from 'next-themes';
import Title from '@/components/core/Title';

type TechStack = {
    back?: string[];
    front?: string[];
    mobile?: string[];
  };

const data = [
    [
            "python", "fastapi", "gitlab", "docker"
    ],
   [
            "react", "scss/sass", "javascript", "typecript", "html5", "nextjs",
    ],
    [
            "flutter",
    ],
    
]

export default function ProjectDetails () {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const {t} = useTranslation('common')
    const {theme} = useTheme()
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 4500);
    }, [])
    return (
        <Layout>
            {
                isLoading ? <LoadingPage /> : <>
                    <Navbar />
                    <section className={`h-full w-full relative`}>
                        <div className="-mt-10 bg-[url('/noise.svg')] inset-0 absolute -z-10 mix-blend-difference">&nbsp;</div>
                        <div className={`max-w-6xl mx-auto h-full flex flex-col py-6 gap-10 px-6`}>
                            <div className='w-64'>
                                <CustomButton title='view_all_projects' onClick={()=> {router.back()}}/>
                            </div>
                            <div className='flex gap-x-9 w-1/2 smd:w-full'>
                                <div className={`flex flex-col relative h-24 flex-1 ${styles.border_gradient} justify-center items-center`} >
                                    <span className='Sfera text-3xl text-primary text-shadow uppercase '>factauto</span>
                                </div>
                                <div className={`h-24 w-24 flex-none rounded-md bg-cover bg-blue-600`}>

                                </div>
                            </div>
                            <div className='w-full flex flex-col justify-center items-center px-12 smdmin:hidden'>
                                <div className='w-full h-64 bg-blue-200'>

                                </div>

                            </div>
                            <div className='flex flex-1 justify-between items-center'>
                                <div className='flex flex-col gap-y-16 items-start w-1/2 sm:w-[80%] xs:w-full'>
                                    <div className='text-left flex flex-col self-start gap-2'>
                                        <Title title="Resume" />
                                        <span className='text-base'>
                                        {"Ce projet vise à développer une application de facturation disponible sur plusieurs plateformes, incluant une application web ainsi qu'une application mobile hybride compatible avec Android et iOS."}
                                        </span>
                                    </div>
                                    <div className='flex flex-col self-start gap-y-4'>
                                        <Title title="PROJECT Links" />
                                        <div className="flex justify-between gap-x-7 xs:flex-col">
                                            {
                                                contacts.map((e, index) => (
                                                    <>
                                                        <div key={index} className="uppercase text-xs text-center Sfera flex items-center">
                                                            <div className="py-2 px-4 border-l-2 border-l-primary xs:border-b-2 xs:border-b-primary cursor-pointer hover:scale-110 transition-transform duration-300 transform-origin-center">
                                                                <a href={e.link} target="_blank" rel="noopener noreferrer">
                                                                    <span>
                                                                    {t(e.title)}
                                                                    </span>
                                                                    
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </>
                                                ))
                                            }

                                        </div>
                                    </div>
                                </div>
                                <div className='w-1/2 flex flex-col justify-center items-center smd:hidden'>
                                    <div className='w-80 h-52 bg-blue-200'>

                                    </div>

                                </div>
                            </div>
                            <div className='flex gap-6 mt-5 xs:flex-col'>
                                {[0,1,2].map((e, index) => (
                                    <div key={index} className={`flex-1 xs:flex-none w-full h-52 xs:h-60 bg-cover bg-blue-400`}/>
                                ))}

                            </div>
                            <div className='mt-10'>
                                <Title title="TECHNOLOGIE & INTEGRATION" />

                                <div className='flex items-start gap-6 flex-wrap mt-10'>

                                    {data.map((e, index) => (
                                        <div key={index} className={`sm:w-[40%] md:w-1/3 mddmin:flex-1 p-6 bg-cover bg-darkest/10 dark:bg-white/10 rounded-[15px] flex-col border-2 border-gray/10`} style={{ backdropFilter: 'blur(10px)'}}>
                                            <span className={`Sfera ${index === 0 ? 'text-green' : index === 1 ? 'text-primary' : 'text-[#BE9DEA]'} text-left text-2xl `}>
                                            {index === 0 ? 'Back-end & DEVOPS STACK' : index === 1 ? 'WEB FRONTEND STACK' : 'MOBILE STACK' }
                                            </span>
                                            <div className='flex gap-x-5 flex-wrap text-base Sfera mt-8'>
                                                {
                                                    (e ?? []).map(
                                                        (el, index) => (<> <span key={index}>{el}</span></>))
                                                }

                                            </div>
                                        </div>
                                ))}

                                </div>

                            </div>
                            <div className='mt-10 w-64 self-center mb-[52px] sm:mb-[73px] md:mb-[73px] xs:mb-[52px]'>
                                <CustomButton title='view_all_projects' onClick={()=> {router.back()}}/>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </>
            }

        </Layout>
    )
}
