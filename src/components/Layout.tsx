
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
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { title, children } = props

  return (
    <main className={roboto.className}>
      <Head>
        <title>{title ? title : "Georges Tatchum"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width," />
        <meta property="og:image" content="" />
        <meta property="twitter:image" content="" />
        <meta name="google" content="notranslate" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Georges Tatchum"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Georges Tatchum" />
        <meta property="og:url" content=""></meta>
        <meta property="og:site_name" content=""></meta>
        <meta property="og:description" content="Georges Tatchum presentation website and portfolio" />
        <meta property="twitter:description" content="Georges Tatchum presentation website and portfolio"></meta>
        <meta name="description" content="Georges Tatchum presentation site and portfolio" />
        <meta name="keywords" content="georges - tatchum - fotso - georges-tatchum - georges tatchum - georgestatchum - portfolio - developer - développeur - fullstack - frontend - backend - mobile - dev - skills"></meta>
      </Head>
      {children}
    </main>
  );
}

export default Layout
