import { AboutUs } from '@/components/AboutUs'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import Loader from '@/components/Loader'
import Navbar from '@/components/NavBar'
import Project from '@/components/Project'
import Resume from '@/components/Resume'
import Skills from '@/components/Skills'
import Contact from '@/components/contact_me'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ArrowUpShort } from 'react-bootstrap-icons'


export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { asPath } = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
        } else {
          // Utilise MutationObserver pour attendre que l'élément soit ajouté au DOM
          const observer = new MutationObserver(() => {
              const element = document.getElementById(anchor);
              if (element) {
                window.scrollTo({
                  top: element.offsetTop,
                  behavior: 'smooth',
              });
                  observer.disconnect();
              }
          });

          observer.observe(document.body, { childList: true, subtree: true });
      }
    }
}, [asPath]);

  
  
  return (
    <Layout>
      {
        isLoading ? <Loader /> : <>
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
