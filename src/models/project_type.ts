interface Url{
    name: string;
    link: string;
} 
interface LangI18n {
    fr: string;
    en: string;
}

interface Images {
    cover: string;
    others: string[];
}
export interface ProjectType {
    title: string;
    type: string;
    logo: string;
    introduction: LangI18n;
    resume: LangI18n;
    url: Url[];
    images: Images;
    stack: string[][];
}