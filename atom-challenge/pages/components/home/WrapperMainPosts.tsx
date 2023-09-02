import React, { useContext, useEffect } from 'react'
import ThreeMainPosts from './ThreeMainPosts'
import CarouselPosts from './CarouselPosts'
import { getAllPostsAPI } from '@/pages/utils'
import { PostsContext } from '@/pages/context/PostsContext';

const WrapperMainPosts = () => {
  const { posts , setPosts } = useContext(PostsContext)

  const getPosts = async() => {
    const response = await getAllPostsAPI()
    setPosts(response)
  } 

  useEffect( () => {
    getPosts()
  }, [])

  return (
    <>
        <ThreeMainPosts posts={posts.slice(0,3)}/>
        <CarouselPosts posts={posts.slice(3)}/>
    </>
  )
}

export default WrapperMainPosts