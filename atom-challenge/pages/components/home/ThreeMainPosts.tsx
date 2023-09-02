import React from 'react'
import PostType from '@/types'
import Image from 'next/image'

const ThreeMainPosts = ({posts} : {posts: PostType[]}) => {
  return (
    <div className='pt-12 pb-8 lg:pt-32'>
      <section className='wrapper-content flex justify-between items-center gap-x-28'>

        <div className='w-full lg:w-1/2 flex flex-col gap-8' data-aos="zoom-out">
            <div className='w-full relative'>
              <div className='w-full h-full degradeBackground absolute z-20 opacity-40 rounded-md'></div>
              { posts &&            
                <Image
                    src={posts[0]?.image}
                    width={900}
                    height={400}
                    alt="ReactJS 2022"
                    className='object-cover rounded-md'
                  />
              }
            </div>


            <div className='flex flex-col gap-4'>
              <p className='text-sm text-gray-600'> {posts && posts[0]?.date} </p>
              <h2 className='hover:underline'> {posts && posts[0]?.title} </h2>
              <p className='text-base'> {posts && posts[0]?.description} </p>
            </div>
        </div>

        <aside className='hidden lg:flex flex-col h-full w-1/2 gap-12 xl:gap-24'>
          {posts && posts.slice(1).map( (post, index) => (
            <div key={index} className='flex flex-col gap-4' data-aos="fade-left">
              <p className='text-sm text-gray-600'> {post.date} </p>
              <h2 className='hover:underline'> {post.title} </h2>
              <p className='text-base'> {post.description} </p>
            </div>
          ))}
        </aside>

      </section>
    </div>
  )
}

export default ThreeMainPosts