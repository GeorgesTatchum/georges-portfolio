import useTranslation from "next-translate/useTranslation";
import SwitchLang from "../core/SwitchLang";
import { useEffect, useState } from "react";
import SwitchTheme from "../core/SwitchTheme";
import Link from "next/link";
import { LightningChargeFill } from "react-bootstrap-icons";
import CustomButton from "../core/CustomButton";
import styles from "./navbar.module.scss"

interface NavbarProps {
    className?: string
  }
export default function Navbar(props: NavbarProps) {
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
        <header className={`w-full py-4 sticky top-0 flex bg-transparent z-50 backdrop-blur-xl ${scrolled ?? 'text-white'}`}>
            <div className="flex gap-4 w-full max-w-6xl mx-auto px-4">
                <Link href='/' className="flex items-center mr-auto">
                    <LightningChargeFill size={24} color="#7B00FF" />
                    <span className={`uppercase text-xl leading-6 pl-2 text-center Sfera dark:cardOutline hover:cursor-pointer xs:hidden mdd:hidden ${styles.fake_logo}`}>
                       {"georges tatchum"} 
                    </span>
                </Link>
                
                <nav id='navbar' className="flex justify-between items-center xs:w-3/4">
                    <LinkItem path={"/projects"} label={"t_projet"}/>
                    <LinkItem path={"#my_resume"} label={"get_resume"}/>
                    <CustomButton title='send_msg' className="xs:hidden" size="small"/>
                </nav>

                <div className="flex justify-between items-center gap-4">
                    <SwitchLang/>
                    <SwitchTheme/>
                </div>
            </div>
        </header>
    )
}

const LinkItem = ({path, label}: {path: string, label: string}) => {
    const { t } = useTranslation('common')

    return (
        <Link href={path}>
            <span className="uppercase text-xs leading-3 py-3 px-4 Sfera rounded-[4px] hover:outline hover:outline-2 dark:hover:outline-primary hover:outline-primary/60 cursor-pointer">{t(label)}</span>
        </Link>
    )
}