import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import LoadingPage from '@/components/LoadingPage';
import Navbar from '@/components/NavBar';
import React, { useEffect, useState } from 'react'

export default function ProjectDetails () {
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
                    <section className="h-[calc(100dvh-5rem)] w-full max-w-6xl mx-auto max-h-[756px] flex flex-col">


                    </section>
                    <Footer />
                </>
            }

        </Layout>
    )
}
