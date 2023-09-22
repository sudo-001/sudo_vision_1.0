import { HoverContextProvider } from '@/contexts/HoverContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sudo_Vision_1.0</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
        </style>
      </Head>
      <HoverContextProvider>
        <Component {...pageProps} />
      </HoverContextProvider>
    </>
  )
}
