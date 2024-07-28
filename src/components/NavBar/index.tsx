import useTranslation from "next-translate/useTranslation";
import SwitchLang from "../core/SwitchLang";
import { useEffect, useState } from "react";
import SwitchTheme from "../core/SwitchTheme";
import Link from "next/link";
import { LightningChargeFill } from "react-bootstrap-icons";
import CustomButton from "../core/CustomButton";
import styles from "./navbar.module.scss"
import { useRouter } from "next/router";

interface NavbarProps {
    className?: string
  }
export default function Navbar(props: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter()
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToAnchor = (anchor: string) => {
        router.push('/#contact_me'); 
        setTimeout(() => {
            const element = document.getElementById(anchor);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'smooth',
                });
            }
        }, 100);
    };

    const handleButtonClick = () => {
        scrollToAnchor('contact_me'); 
    };


    return (
        <header className={`w-full py-4 sticky top-0 flex bg-transparent z-50 backdrop-blur-xl ${scrolled ?? 'text-white'}`}>
            <div className="flex gap-4 w-full max-w-6xl mx-auto px-4">
                <Link href='/'  className="flex items-center mr-auto">
                    <LightningChargeFill size={24} color="#7B00FF" />
                    <span className={`uppercase text-xl leading-6 pl-2 text-center Sfera hover:cursor-pointer xs:hidden mdd:hidden ${styles.fake_logo}`}>
                       {"georges tatchum"} 
                    </span>
                </Link>
                
                <nav id='navbar' className="flex justify-between items-center xs:w-3/4 gap-x-4 xs:justify-center">
                    <LinkItem path={"/projects"} label={"t_projet"}/>
                    <LinkItem path={"/CVS_TATCHUM.pdf"} label={"get_resume"} className="xs:hidden"/>
                    <CustomButton title='send_msg' className="xs:hidden" size="small" onClick={handleButtonClick}/>
                </nav>

                <div className="flex justify-between items-center gap-4">
                    <SwitchLang/>
                    <SwitchTheme/>
                </div>
            </div>
        </header>
    )
}

const LinkItem = ({path, label, className }: {path: string, label: string, className?: string}) => {
    const { t } = useTranslation('common')

    return (
        <Link href={path} target={ label === "get_resume" ? "_blank" : "_self"} className={`${className} hover:scale-[1.1] transform duration-200 transform-origin-center`}>
            <span className={`uppercase text-xs leading-3 py-3 px-4 Sfera rounded-[4px] dark:hover:outline-primary cursor-pointer transform duration-200 transform-origin-center hover:text-primary ${styles.linkItem}`}>{t(label)}</span>
        </Link>
    )
}