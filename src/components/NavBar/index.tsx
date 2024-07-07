import useTranslation from "next-translate/useTranslation";
import SwitchLang from "../core/SwitchLang";
import { useEffect, useState } from "react";
import SwitchTheme from "../core/SwitchTheme";
import Link from "next/link";
import { LightningChargeFill } from "react-bootstrap-icons";
import CustomButton from "../core/CustomButton";

interface NavbarProps {
    className?: string
  }
export default function Navbar(props: NavbarProps) {
    const { t } = useTranslation('common')
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        console.log(localStorage.getItem('color-theme'));
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        console.log("on scroll : ", scrolled);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [scrolled])

    return (
        <nav className={`w-full py-4 sticky top-0 flex bg-transparent z-50 backdrop-blur-xl ${scrolled ?? 'text-white'}`} id='navbar'>
            <div className="justify-between flex w-full max-w-6xl mx-auto px-4">
                <Link href='/' className="flex items-center">
                    <LightningChargeFill size={24} color="#7B00FF" />
                    <span className={`uppercase text-lg pl-2 text-center Sfera dark:cardOutline hover:cursor-pointer xs:hidden mdd:hidden`}>georges tatchum</span>
                </Link>
                <div className="flex justify-between items-center xs:w-3/4 md:justify-around">
                    <Link href='#my_project'>
                        <span className="uppercase lg:text-sm md:text-xs p-2 Sfera hover:outline hover:outline-offset-0 dark:hover:outline-primary hover:outline-primary/60 hover:cursor-pointer">{t('t_projet')}</span>
                    </Link>
                    <div className="w-4" />
                    <Link href='#my_resume'>
                        <span className="uppercase lg:text-sm md:text-xs p-2 Sfera hover:outline hover:outline-offset-0 dark:hover:outline-primary hover:outline-primary/60 
                    // hover:cursor-pointer hover:transform transition-colors duration-75 xs:hidden sm:hidden text-center">{t('get_resume')}</span>
                    </Link>

                    <div className="w-4" />
                    <CustomButton title='send_msg' className="xs:hidden"/>
                    <div className="w-4" />
                    <SwitchLang />
                    <div className="w-4" />
                    <SwitchTheme />
                </div>
            </div>
        </nav>
    )
}