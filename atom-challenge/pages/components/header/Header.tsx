import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SearchPosts from './SearchPosts'

const Header = () => {
  const [ IsMenuOpened , setIsMenuOpened ] = useState<boolean>(false)
  const header = useRef<HTMLElement>(null)

  return (
    <>
      <div className='bg-primary fixed w-full z-50 top-0'>
        <header className='wrapper-content flex justify-between items-center z-50' ref={header}>
            {/* <Link href='/' onClick={() => setIsMenuOpened(false)}>
                <Image
                    src="/logo.webp"
                    priority
                    width={100}
                    height={100}
                    alt="Logo"
                    className='z-50'
                />
            </Link> */}

            <div className='hidden lg:flex gap-8 ml-20 z-50'>
                <Link className="headerLink" href={'/'} onClick={() => setIsMenuOpened(false)}> Home </Link>
                <Link className="headerLink" href={'/AllPosts'} onClick={() => setIsMenuOpened(false)}> All Posts </Link>
                <Link className="headerLink" href={'/Contact'} onClick={() => setIsMenuOpened(false)}> Contato </Link>
            </div>

            <SearchPosts containerStylesForm={'hidden lg:flex'}/>

          <div id='wrapperHiddenIcon' className='flex lg:hidden'>
            <button id="burguerMenu" aria-label="Menu Hambúrguer" className={IsMenuOpened ? 'hiddenIcon hiddenIcon-active flex lg:hidden' : 'hiddenIcon flex lg:hidden'} onClick={() => setIsMenuOpened(!IsMenuOpened)}>
                <div className='flex lg:hidden'></div>
                <div className='flex lg:hidden'></div>
                <div className='flex lg:hidden'></div>
            </button>
          </div>
        </header>
      

        <div className={IsMenuOpened ? 'hiddenMenu hiddenMenu-active' : 'hiddenMenu'}>
            <Link className="headerLink" href={'/'} onClick={() => setIsMenuOpened(false)}> Home </Link>
            <Link className="headerLink" href={'/AllPosts'} onClick={() => setIsMenuOpened(false)}> All Posts </Link>
            <Link className="headerLink" href={'/Contact'} onClick={() => setIsMenuOpened(false)}> Contato </Link>
            <SearchPosts containerStylesForm={'flex lg:hidden mt-8'} setIsMenuOpened={setIsMenuOpened}/>
        </div>
      </div>
    </>
    
  )
}

export default Header