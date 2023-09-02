import { PostType } from '@/pages/types'
import Image from 'next/image'
import React from 'react'

interface PostProps {
  post: PostType ,
  dimensionsImage?: number,
  containerStyles?: string
}

const Post = ({post , dimensionsImage, containerStyles} : PostProps) => {
  return (
    <div className={`flex flex-col gap-2 pb-20 ${containerStyles}`}>
        <div className='w-full relative' data-aos="zoom-out">
            <div className='w-full h-full degradeBackground absolute z-20 opacity-40 rounded-md'></div>
            <Image
                src={post?.image}
                width={dimensionsImage || 900}
                height={dimensionsImage || 900}
                alt={post?.description}
                className='object-cover rounded-md'
            />
        </div>
        <div className='flex flex-col gap-4'>
            <p className='text-sm text-gray-600'> {post?.date} </p>
            <h2 className='hover:underline cursor-pointer post-title'> {post?.title} </h2>
            <p className='text-base post-description'> {post?.description} </p>
        </div>
    </div>
  )
}

export default Post