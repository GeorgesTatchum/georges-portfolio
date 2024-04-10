import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import Navbar from '@/components/NavBar'
import SliderCustom from '@/components/core/SliderCustom'
import { projects_data } from '@/models/data/projects'
import React from 'react'

const project = () => {
    return (
        <Layout>
            <Navbar />
            <SliderCustom items={projects_data} autoSlide={true} />

            <Footer />
        </Layout>
    )
}

export default project
