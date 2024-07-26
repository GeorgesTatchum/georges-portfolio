import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import Navbar from '@/components/NavBar'
import SliderCustom from '@/components/core/SliderCustom'
import { projects_data } from '@/models/data/projects'
import useTranslation from 'next-translate/useTranslation'
import { ExclamationTriangle } from 'react-bootstrap-icons'

export default function ProjectPage() {
    const {t} = useTranslation('common')
    return (
        <Layout>
            {
                <>
                    <Navbar />
                    <div className='max-w-6xl mx-auto px-4 flex justify-start items-end gap-3 mt-4 xs:flex-col xs:justify-center xs:items-center'>
                        
                        <div className='flex justify-center text-start gap-3'>
                            <ExclamationTriangle size={24} color='#FFBD2E' />
                            <span className='text-base text-[#FFBD2E]'>
                                {t('warning')}
                            </span>
                            
                        </div>
                        <span className='text-base text-center'>
                                {t('disclaimer')}
                            </span>
                        
                    </div>
                    <SliderCustom items={projects_data} autoSlide={true} />
                    <Footer />
                </>
            }

        </Layout>
    )
}
