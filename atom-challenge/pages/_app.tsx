import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/header/Header';
import { PostsProvider } from './context/PostsContext';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600']})

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <main className={`${poppins.className} w-full min-h-screen`}>
      <PostsProvider>
        <Header/>
        <Component {...pageProps} />
      </PostsProvider>
    </main>
  )
}
