import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Poppins } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600']})

import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
}
