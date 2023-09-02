import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/header/Header';
import { PostsProvider } from '../context/PostsContext';
import { SearchProvider } from '../context/SearchInputContext';
import Head from 'next/head';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600']})
 
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <>
      <Head>
        <title> Atom Blog </title>
        <meta name='description' content='O blog em que você fica atualizado de todas as tecnologias do mercado!' />
        <link rel="icon" href="./public/favicon.ico" sizes='any'/>
    </Head>

      <main className={`${poppins.className} w-full min-h-screen`}>
        <PostsProvider>
          <SearchProvider>
            <Header/>
            <Component {...pageProps} />
          </SearchProvider>
        </PostsProvider>
      </main>
    </>
  )
}
