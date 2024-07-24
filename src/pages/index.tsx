import { AboutUs } from '@/components/AboutUs'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import LoadingPage from '@/components/LoadingPage'
import Navbar from '@/components/NavBar'
import Project from '@/components/Project'
import Resume from '@/components/Resume'
import Skills from '@/components/Skills'
import Contact from '@/components/contact_me'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { asPath } = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4500);
  }, [])

  useEffect(() => {
    const anchor = asPath.split("#")[1];
    if (anchor) {
        const element = document.getElementById(anchor);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth',
            });
        }
    }
}, [asPath]);
  return (
    <Layout>
      {
        isLoading ? <LoadingPage /> : <>
          <Navbar />
          <AboutUs />
          <Resume />
          <Skills />
          <Project />
          <Contact />
          <Footer />
        </>
      }

    </Layout>
  )
}
