import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import LoadingPage from '@/components/LoadingPage'
import Navbar from '@/components/NavBar'
import SliderCustom from '@/components/core/SliderCustom'
import { projects_data } from '@/models/data/projects'
import { useEffect, useState } from 'react'

export default function ProjectPage() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
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
                    <SliderCustom items={projects_data} autoSlide={true} />
                    <Footer />
                </>
            }

        </Layout>
    )
}
