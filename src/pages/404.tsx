import Layout from "@/components/Layout";
import Navbar from "@/components/NavBar";
import useTranslation from "next-translate/useTranslation";
import { DM_Sans } from 'next/font/google'
import Image from 'next/image';

const dm_sans = DM_Sans(
    {
        subsets: ['latin'],
        weight: ['400', '500', '600', '700'],
        display: 'swap',
    }
)
const Content404 = () => {
    const { t } = useTranslation('common')
    return (
        <div className="flex justify-center items-center h-[calc(100vh-80px)]">
            <div className="">
                <div className="flex sm:flex-col sm:items-center">
                    <div className="flex items-center">
                        <div className="">
                            <Image src="charge_icon.svg" alt="logo" width={50} height={50} />
                        </div>
                        <div className="flex px-6 border-r-2 sm:border-r-0 border-darkest dark:border-white">
                            <span className="text-6xl">
                                404
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="px-6 sm:px-0 sm:py-5">
                            <span className={`${dm_sans.className} font-semibold`}>
                                {t('page_not_found')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Custom_404(props: any) {
    return (
        <Layout title="404 - Georges Tatchum">
            <Navbar />
            <Content404 />
        </Layout>
    )
}