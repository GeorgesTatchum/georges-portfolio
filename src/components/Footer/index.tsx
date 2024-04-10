import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

export interface Contact {
    title: string;
    link: string;
}

export default function Footer(props: any) {
    const { t } = useTranslation('common')
    const contacts: Contact[] = [
        {
            'title': 'email',
            'link': 'mailto:georgestatchum363@gmail.com'
        },
        {
            'title': 'call_me',
            'link': 'tel:+33753951657'
        },
        {
            'title': 'linkedin',
            'link': 'https://www.linkedin.com/in/georges-tatchum-b21158265/'
        },
        {
            'title': 'github',
            'link': 'https://github.com/GeorgesTatchum'
        },
    ]
    return (
        <footer className="w-full bg-darkest/5 dark:bg-black h-full py-5">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center">
                    <Image src="/charge_icon.svg" alt="charge_icon" height={24} width={17} />
                    <span className={`uppercase text-lg pl-2 text-center Sfera dark:cardOutline hover:cursor-pointer`}>georges tatchum</span>
                </div>
                <div className="h-10" />
                <div className="w-3/5 xs:w-full text-start">
                    <span className="font-semibold">
                        End Text if you have anything to put as conclusion so put a
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, et quae! Aperiam hic ut placeat, inventore expedita aut perferendis necessitatibus sit facere eum vel animi similique accusamus, maiores eius labore!
                    </span>
                </div>
                <div className="flex justify-between items-center mt-[8%] mdd:flex-col-reverse mdd:items-start">
                    <span className="font-semibold">
                        © 2024  Georges Tatchum  all right reserved
                    </span>
                    <div className="flex justify-between mdd:mb-4 xs:flex-col">
                        {
                            contacts.map((e, index) => (
                                <>
                                    <div key={index} className="uppercase text-sm text-center Sfera flex items-center">
                                        <div className="py-2 px-4 border-l-2 border-l-primary xs:border-b-2 xs:border-b-primary cursor-pointer hover:scale-110 transition-transform duration-300 transform-origin-center">
                                            <a href={e.link} target="_blank" rel="noopener noreferrer">
                                                <span>

                                                </span>
                                                {t(e.title)}
                                            </a>
                                        </div>
                                    </div>
                                </>
                            ))
                        }

                    </div>
                </div>
            </div>
        </footer>
    )
}