import CustomButton from '@/components/core/CustomButton';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import Navbar from '@/components/NavBar';
import { useRouter } from 'next/router';
import styles from './projects.module.scss'
import useTranslation from 'next-translate/useTranslation'
import Title from '@/components/core/Title';
import { projects_data } from '@/models/data/projects';
import Image from "next/image";

export default function ProjectDetails () {
    const {t, lang} = useTranslation('common')
    const router = useRouter()
    
    return (
        <Layout>
            { 
                <>
                    <Navbar />
                    <section className={`h-full w-full relative`}>
                        <div className="bg-[url('/noise.svg')] inset-0 absolute -z-10 mix-blend-difference dark:mix-blend-normal">&nbsp;</div>
                        <div className={`max-w-6xl mx-auto h-full flex flex-col py-6 gap-10 px-6`}>
                            <div className='w-64'>
                                <CustomButton title='view_all_projects' onClick={()=> {router.push('/projects')}}/>
                            </div>
                            <div className='flex gap-x-9 w-1/2 smd:w-full xs:px-4 justify-center items-center'>
                                <div className={`flex flex-col relative h-24 flex-1 ${styles.border_gradient} justify-center items-center`} >
                                    <span className='Sfera text-3xl text-primary text-shadow uppercase '>{projects_data[Number(router.query.id)].title}</span>
                                </div>
                                <div className={`h-24 w-24 xs:h-[80px] xs:w-[80px] rounded-md bg-cover bg-blue-600 ${styles.project_logo}
                                `}
                                style={{background: `url(${projects_data[Number(router.query.id)].logo})`, backgroundPosition: 'center', backgroundSize: Number(router.query.id) === 0 ? 'contain' : 'cover', backgroundRepeat: 'no-repeat'}}
                                >

                                </div>
                            </div>
                            <div className='w-full flex flex-col justify-center items-center px-12 hover:scale-110 duration-500 transition-all ease-in-out smdmin:hidden'>
                                <div className='xs:w-80 w-[388px] h-[262px] bg-transparent'
                                style={{background: `url(${projects_data[Number(router.query.id)].images.cover})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}
                                >
                                </div>

                            </div>
                            <div className='flex flex-1 justify-between items-center'>
                                <div className='flex flex-col gap-y-16 items-start w-1/2 sm:w-[80%] xs:w-full'>
                                    <div className='text-left flex flex-col self-start gap-2 max-w-fit'>
                                        <Title title="Resume" />
                                        <span className='text-base whitespace-pre-line'>
                                        {lang === "fr" ? projects_data[Number(router.query.id)].resume.fr : projects_data[Number(router.query.id)].resume.en}
                                        </span>
                                    </div>
                                    <div className='flex flex-col self-start gap-y-4'>
                                        <Title title={t("project_link")} />
                                        <div className="flex justify-between gap-x-7 xs:flex-col">
                                            {
                                                projects_data[Number(router.query.id)].url.map((e, index) => (
                                                    <>
                                                        <div key={index} className="uppercase text-xs text-center Sfera flex items-center">
                                                            <div className="py-2 px-4 border-l-2 border-l-primary xs:border-b-2 xs:border-b-primary cursor-pointer hover:scale-110 transition-transform duration-300 transform-origin-center">
                                                                <a href={e.link} target={e.name === "in_process" ? "_self" : "_blank"} rel="noopener noreferrer">
                                                                    <span>
                                                                    {e.name === "in_process" ? t(e.name) : e.name}
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
                                <div className='w-1/2 flex self-center md:self-center flex-col justify-center items-center hover:cursor-pointer hover:scale-110 duration-500 transition-all ease-in-out smd:hidden'>
                                    <div className='w-[388px] h-[262px] bg-transparent'
                                    style={{background: `url(${projects_data[Number(router.query.id)].images.cover})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}
                                    >

                                    </div>

                                </div>
                            </div>
                            <div className={`mt-5 smd:gap-2 ${styles.galery_img}`}>
                                {projects_data[Number(router.query.id)].images.others.map((e, index) => (
                                    <div className='flex justify-center items-center' key={index}>
                                        <Image
                                        className='h-auto max-w-full align-middle inline-block object-cover border-[2px] border-[#C4C4C470]'
                                        src={e}
                                        height={1000}
                                        width={1000}
                                        alt="cover_image" />

                                    </div>
                                    
                                ))}
                            </div>
                            <div className={`mt-10`}>
                                <Title title="TECHNOLOGIE & INTEGRATION" />

                                <div className={`flex gap-6 md:gap-18 flex-wrap xs:flex-nowrap justify-items-center xs:flex-col mt-10`}>

                                    {projects_data[Number(router.query.id)].stack.map((e, index) => e.length > 0 ? (
                                        <div key={index} className={`sm:w-[45%] md:w-[45%] xs:max-w-xs mddmin:flex-1 p-6 bg-cover bg-darkest/10 dark:bg-white/10 rounded-[15px] flex-col border-2 border-gray/10 hover:-translate-y-3 ease duration-[600ms] transition-all cursor-pointer shadow ${index === 1 ? 'self-end' : 'self-start'} ${index === 0 ? styles.stack_bg_1 : index === 1 ? styles.stack_bg_2 : styles.stack_bg_3}`} style={{ backdropFilter: 'blur(10px)'}}>
                                            <span className={`uppercase font-black leading-none italic ${index === 0 ? 'text-[#007aff] dark:text-green' : index === 1 ? 'text-primary' : 'text-[#BE9DEA]'} text-left text-2xl`}>
                                            {index === 0 ? 'Back-end & DEVOPS STACK' : index === 1 ? 'WEB FRONTEND STACK' : 'MOBILE STACK' }
                                            </span>
                                            <div className='flex gap-3 flex-wrap text-base uppercase font-black leading-none italic mt-8'>
                                                {
                                                    (e ?? []).map(
                                                        (el, index) => (<> <span key={index}>{el}</span></>))
                                                }

                                            </div>
                                        </div>
                                ) : (<div key={index} />))}

                                </div>

                            </div>
                            <div className='mt-10 w-64 self-center mb-[52px] sm:mb-[73px] md:mb-[73px] xs:mb-[52px]'>
                                <CustomButton title='view_all_projects' onClick={()=> {router.push('/projects')}}/>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </>
            }

        </Layout>
    )
}
