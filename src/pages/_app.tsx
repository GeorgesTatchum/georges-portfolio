import '@/styles/globals.scss'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import setLanguage from 'next-translate/setLanguage'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
  useEffect(
    () => {
      const savedLang = localStorage.getItem("lang");

      if (savedLang != undefined && savedLang != router.locale) {
        setLanguage(savedLang);
      }

    }, [router.locale]
  )
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme='dark'
      enableSystem
    >
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights/>
    </ThemeProvider>
  )
}
