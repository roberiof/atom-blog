import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchPosts = ({containerStylesForm} : {containerStylesForm: string}) => {
  return (
    <form className={`gap-1 ${containerStylesForm} max-w-full`}>
        <input type="text" placeholder='Buscar' className='bg-primaryDarker text-white py-2 px-4 rounded-md'/>
        <button type='submit' className='bg-secondary p-2 rounded-md text-3xl'> <AiOutlineSearch/> </button>
    </form>
  )
}

export default SearchPosts