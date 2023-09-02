import { SearchInputContext } from '@/pages/context/SearchInputContext'
import { useRouter } from 'next/router'
import React , { useState , useContext } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

interface SearchPostType{
  containerStylesForm: string,
  setIsMenuOpened?: (input: boolean) => void
}

const SearchPosts = ({containerStylesForm, setIsMenuOpened} : SearchPostType ) => {
  const [ inputResult , setInputResult] = useState<string>('')
  const { setSearchInput } = useContext(SearchInputContext)
  const router = useRouter()

  const SearchPost = (e:any) =>{
    e.preventDefault()
    const currentPage = router.pathname
    setSearchInput(inputResult)
    if (currentPage !== 'AllPosts'){
      router.push('/AllPosts')
    }
    setInputResult('')

    if (setIsMenuOpened){
      setIsMenuOpened(false)
    }
  }

  return (
    <form className={`gap-1 ${containerStylesForm} max-w-full`} onSubmit={(e) => SearchPost(e)}>
        <input type="text" placeholder='Buscar post' required className='bg-primaryDarker text-white py-2 px-4 rounded-md' 
        value={inputResult} onChange={ (e) => setInputResult(e.target.value) }/>
        <button type='submit' className='bg-secondary p-2 rounded-md text-3xl'> <AiOutlineSearch/> </button>
    </form>
  )
}

export default SearchPosts