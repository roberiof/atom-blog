import React, { useContext, useEffect } from 'react'
import Post from './components/utils/Post'
import { PostsContext } from '../context/PostsContext'
import { SearchInputContext } from '../context/SearchInputContext'
import PostType from '../types'
import { getAllPostsAPI } from '../utils'

const AllPosts = () => {
  const { posts , setPosts } = useContext(PostsContext)
  const { searchInput , setSearchInput } = useContext(SearchInputContext)
  const filteredPosts = posts.filter( (post: PostType) => post.title.toLowerCase().includes(searchInput?.toLowerCase()))
  
  useEffect( () => {
    const getPosts = async() => {
      const response = await getAllPostsAPI()
      setPosts(response)
    } 
      getPosts()
  }, [setPosts])
  
  return (
    <div className='pt-24 lg:pt-40 relative'>
      <section className='wrapper-content flex flex-col transition-all'>
        {
          filteredPosts.length !== 0 ? 
            <p className={`${searchInput ? 'inline' : 'hidden'} drop-shadow-md italic text-center text-lg mb-20`}> 
              Resultados para <span className='font-bold text-primary hover:text-tertiary transition-all'> {searchInput} </span>. 
              <a href="#" aria-label="Voltar para home" className='cursor-pointer underline' onClick={() => setSearchInput(null)}>
                Ver todos os posts. 
              </a> 
            </p>
          :
              <p className={`${searchInput ? 'inline' : 'hidden'} italic text-center text-lg drop-shadow-md`}> 
                Não há posts com <span className='font-bold text-primary hover:text-tertiary transition-all'> {searchInput} </span>. 
                <a href="#" aria-label="Voltar para home" className='cursor-pointer underline' onClick={() => setSearchInput(null)}> 
                  Ver todos os posts. 
                </a>
              </p>
        }

        <div className='flex flex-wrap justify-around gap-5'>
          { posts && <span> Loading ... </span>  
            && searchInput 
            ? filteredPosts.map( (post: PostType) =>
               (<Post key={post.id} post={post} dimensionsImage={800} containerStyles={'cursor-pointer max-w-sm w-full'}/>) )   
            : posts.map((post : PostType) => (
              <Post key={post.id} post={post} dimensionsImage={800} containerStyles={'cursor-pointer max-w-sm w-full'}/>
            )) 
          }
        </div>
      </section>
    </div>
  )
}

export default AllPosts