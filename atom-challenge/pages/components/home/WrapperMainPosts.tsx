import React, { useContext, useEffect } from 'react'
import ThreeMainPosts from './ThreeMainPosts'
import CarouselPosts from './CarouselPosts'
import { getAllPostsAPI } from '@/utils'
import { PostsContext } from '@/context/PostsContext';

const WrapperMainPosts = () => {
  const { posts , setPosts } = useContext(PostsContext)

  useEffect( () => {
    const getPosts = async() => {
      const response = await getAllPostsAPI()
      setPosts(response)
    } 
    getPosts()
  } , [setPosts])

  return (
    <>
        <ThreeMainPosts posts={posts.slice(0,3)}/>
        <CarouselPosts posts={posts.slice(3)}/>
    </>
  )
}

export default WrapperMainPosts