import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Hero = () => {
  return (
    <>
    <div className='bg-primary pt-24 pb-24 lg:pt-40 relative'>
        <section className='wrapper-header-hero flex justify-between items-center gap-x-14'>
            <div className='w-full xl:w-1/2 flex flex-col gap-8'>
                <h1 className='font-bold text-secondary' data-aos="fade-up"> Veja o guia definitivo para conquistar seus objetivos como DEV em 2022 </h1>
                <p className='leading-8' data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac. </p>
                <Link href="/AllPosts" className='hover:underline flex w-fit items-center gap-4 cursor-pointer mt-4 border-2 p-2 px-3 rounded-md font-bold hover:border-tertiary transition-all' data-aos="zoom-in"> 
                    VEJA MAIS 
                    <AiOutlineArrowRight className='text-tertiary'/>
                </Link>
            </div>

            <div className='hidden xl:flex'>
                <Image
                    src="/hero-bg.jpg"
                    width={600}
                    height={600}
                    alt="Coding image"
                    objectFit='cover'
                    className='object-cover rounded-md'
                    data-aos="zoom-out"
                />        
            </div>
        </section>
    </div>
   
    </>
  )
}

export default Hero