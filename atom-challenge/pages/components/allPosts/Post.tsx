import { PostType } from '@/pages/types'
import Image from 'next/image'
import React from 'react'

const Post = ({post} : {post: PostType}) => {
  return (
    <div className='flex flex-col gap-2 max-w-screen-sm select-none	pb-20 overflow-hidden cursor-grab'>
        <div className='w-full relative' data-aos="zoom-out">
            <div className='w-full h-full degradeBackground absolute z-20 opacity-40 rounded-md'></div>
            <Image
                src={post?.image}
                width={900}
                height={400}
                alt={post?.description}
                className='object-cover rounded-md'
            />
        </div>
        <div className='flex flex-col gap-4'>
            <p className='text-sm text-gray-600'> {post?.date} </p>
            <h2 className='hover:underline cursor-pointer'> {post?.title} </h2>
            <p className='text-base'> {post?.description} </p>
        </div>
    </div>
  )
}

export default Post