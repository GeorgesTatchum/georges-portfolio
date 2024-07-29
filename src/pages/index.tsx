import { AboutUs } from '@/components/AboutUs'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import Loader from '@/components/Loader'
import Navbar from '@/components/NavBar'
import Project from '@/components/Project'
import Resume from '@/components/Resume'
import Skills from '@/components/Skills'
import Contact from '@/components/contact_me'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ArrowUpShort } from 'react-bootstrap-icons'


export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isScrolled, setIsScrolled] = useState(false)
  const {theme} = useTheme()
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

useEffect(() => {
        window.addEventListener("scroll", ()=> {
          if(window.scrollY < 100){
            setIsScrolled(false)
          }
          else {
            setIsScrolled(true)
          }
        })
      }, [])
    
      const scrollUp = () => {
        window.scrollTo(
          {
            top: 0,
            behavior: "smooth"
          }
        )
      }
  
  
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
          {
          <div className={`h-12 w-12 rounded-[4px] right-[5%] mddmin:right-[6%] bg-gray/10 dark:bg-white/10 backdrop-blur-xl z-50 cursor-pointer duration-500 ease-linear flex justify-center items-center ${isScrolled === true ? 'top-[95%] -translate-y-[98%] opacity-100' : 'top-0 opacity-0'} fixed`} onClick={scrollUp}>
              <Image className='hover:-translate-y-1 duration-200 ease-linear' src={theme === 'dark' ? '/floating.svg' : '/floating_d.svg'} width={24} height={24} alt='floating' />
          </div>
        }
        </>
      }

    </Layout>
  )
}
