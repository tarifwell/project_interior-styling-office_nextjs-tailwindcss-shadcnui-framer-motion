'use client'

import React from 'react';
import { ArrowUpRight } from "lucide-react";
import { Button } from './ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';

// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { descriptionVariants, tagVariants, titleVariants } from '@/utils/animation';

const CatalogueSwiperSection = () => {

    const imagePaths = [
        "/images_swiper/swiper1.jpg",
        "/images_swiper/swiper2.jpg",
        "/images_swiper/swiper3.jpg",
        "/images_swiper/swiper4.jpg",
        "/images_swiper/swiper5.jpg",
        "/images_swiper/swiper6.jpg",
        "/images_swiper/swiper7.jpg",
        "/images_swiper/swiper8.jpg"
      ];
    
  return (
    <div className='p-8 lg:py-28'> {/*py-8*/}
        <div className='container grid pb-8 lg:grid-cols-1'>
            <div className='text-left'>
                <motion.h1 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='py-4 text-4xl font-medium lg:text-6xl lg:py-0 text-gray-800'
                >Modern Classic</motion.h1>
                <motion.h2
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={descriptionVariants}
                    className='pb-6 text-xl font-bold tracking-wider mt-5'
                >{"Luxury Decor to create comfort in our home".toUpperCase()}</motion.h2>
            </div>

            <motion.div 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className='grid grid-cols-2 text-gray-500 gap-x-8'
            >
                <p>
                With our passion for design and decor, we have created a collection of furniture and accessories that will help you create a comfortable and stylish home. With our passion for design and decor, we have created a collection of furniture and accessories that will help you create a comfortable and stylish home.
                </p>
                <p>
                With our passion for design and decor, we have created a collection of furniture and accessories that will help you create a comfortable and stylish home. With our passion for design and decor, we have created a collection of furniture and accessories that will help you create a comfortable and stylish home.
                </p>
            </motion.div>

            <a href='/gallery'>
                <Button className='inline-flex items-center px-8 py-3 mt-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 
                hover:ring-gray-950 hover:ring-offset-2'
                
                >View Gallery <ArrowUpRight className='w-5 h-5 ml-2'/></Button>
            </a>
        </div>

        {/* Swiper section */}
        <Swiper        
          slidesPerView={1}
        //  spaceBetween={30}  
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          autoplay={{delay: 2500, disableOnInteraction: false}}
          modules={[Autoplay]} // activate autoplay module
          loop={true}
          effect='fade'
          speed={600}
        //   navigation={true}
        //   pagination={{
        //     clickable: true,
        //   }}          
        //   modules={[Autoplay, Pagination, Navigation]}
        >
          {imagePaths.map((imagePath, index) => (
            <SwiperSlide key={`swiper-image-${index}`}>
                <Image 
                    src={imagePath} 
                    alt={`swiper rooms ${index + 1}`} 
                    width={520}
                    height={220}
                    className='w-full'
                />

            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
};

export default CatalogueSwiperSection;