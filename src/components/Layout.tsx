
import { Roboto } from 'next/font/google'
import Head from 'next/head'

const roboto = Roboto(
  {
    subsets: ['latin'],
    weight: ['400', '500', '700', '900'],
    display: 'swap',
  }
)

interface LayoutProps {
  title?: string,
  className?: string,
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { title, children, className } = props

  return (
    <main className={roboto.className + ' ' + className}>
      <Head>
        <title>{title ? title : "Georges Tatchum"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width," />
        <meta property="og:image" content="https://www.georgestatchum.com/project_card.png" />
        <meta property="twitter:image" content="https://www.georgestatchum.com/project_card.png" />
        <meta name="google" content="notranslate" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Georges Tatchum's Portfolio"></meta>
        <meta property="twitter:description" content="Georges Tatchum's presentation website and portfolio"></meta>
        {/* Open Graph meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Georges Tatchum's Portfolio" />
        <meta property="og:url" content="https://www.georgestatchum.com/"></meta>
        <meta property="og:site_name" content="www.georgestatchum.com"></meta>
        <meta property="og:description" content="Georges Tatchum's presentation website and portfolio" />
        <meta name="description" content="Georges Tatchum's presentation site and portfolio" />
        <meta name="keywords" content="georges - tatchum - fotso - georges-tatchum - georges tatchum - georgestatchum - portfolio - developer - développeur - fullstack - frontend - backend - mobile - devops - skills"></meta>
      </Head>
      {children}
    </main>
  );
}

export default Layout
