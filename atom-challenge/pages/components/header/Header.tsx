'use-client';
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SearchPosts from './SearchPosts'

const Header = () => {
  const [ IsMenuOpened , setIsMenuOpened ] = useState<boolean>(false)
  const header = useRef<HTMLElement>(null)
  
  useEffect( () => {
    if(header?.current !== null){
      if (IsMenuOpened){
        header.current.style.position = 'fixed'
      } else{
        header.current.style.position = 'absolute'
      }
    } 
  }, [IsMenuOpened])

  return (
    <>
      <header className='bg-primary wrapper-header-hero grid grid-cols-2 lg:grid-cols-3 justify-items-start md:justify-items-center items-center w-full gap-' ref={header}>
          <Image
              src="/logo.png"
              width={100}
              height={100}
              alt="Logo"
          />

          <div className='hidden lg:flex gap-8 place-self-center mr-16'>
              <Link className="headerLink" href={'/'}> Home </Link>
              <Link className="headerLink" href={'/Categories'}> Categorias </Link>
              <Link className="headerLink" href={'/Contact'}> Contato </Link>
          </div>
          <SearchPosts containerStylesForm={'hidden lg:flex'}/>

        <div className='justify-self-end md:justify-self-center'>
          <button id="burguerMenu" aria-label="Menu Hambúrguer" className={IsMenuOpened ? 'hiddenIcon hiddenIcon-active flex lg:hidden' : 'hiddenIcon flex lg:hidden'} onClick={() => setIsMenuOpened(!IsMenuOpened)}>
              <div className='flex lg:hidden'></div>
              <div className='flex lg:hidden'></div>
              <div className='flex lg:hidden'></div>
          </button>
        </div>
      
      </header>
    

      <div className={IsMenuOpened ? 'hiddenMenu hiddenMenu-active' : 'hiddenMenu'}>
          <Link className="headerLink" href={'/'}> Home </Link>
          <Link className="headerLink" href={'/Categories'}> Categorias </Link>
          <Link className="headerLink" href={'/Contact'}> Contato </Link>
          <SearchPosts containerStylesForm={'flex lg:hidden mt-8'}/>
      </div>

    </>
    
  )
}

export default Header