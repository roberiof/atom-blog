import React , { useState , useEffect } from 'react'
import { PostType } from '@/pages/types'
import Post from '../allPosts/Post'
import  { register } from 'swiper/element/bundle'
register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar' 
import { Swiper , SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const CarouselPosts = ({posts} : {posts: PostType[]}) => {
  const [ slidesPerView , setSlidesPerView ] = useState<number>(2)

  
  useEffect( () => {
    const handleResize = () => {
      if(window.innerWidth < 800){
        setSlidesPerView(1)
      }else if(window.innerWidth <= 1380 && window.innerWidth >= 800){
        setSlidesPerView(2)
      } else {
        setSlidesPerView(3)
      }
    }
    
    handleResize()

    window.addEventListener("resize", handleResize)
    
    return () =>{
      window.removeEventListener("resize", handleResize)
    }
  })

  return (
    <div className='pb-10 lg:pt-32'>
      <section className='wrapper-content flex justify-between items-center gap-x-28'>
  
        <Swiper                   
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={80}
          slidesPerView={slidesPerView}
          pagination={{clickable: true}}
        >
          {posts.map( (post, index) => (
            <SwiperSlide key={index}>
                <Post post={post}/>
            </SwiperSlide>
          ))}
        </Swiper>

      </section>
    </div>
  )
}

export default CarouselPosts