'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

import hero_img from '../assets/images/hall.png';
import { descriptionVariants, titleVariants, tagVariants } from '@/utils/animation';

const HeroSection = () => {
  return (
    // bg-primary dark:bg-tertiary py-24 sm:py-32
    <section className='bg-gray-50 py-12'> 
    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 px-6 lg:px-12">    
    {/* 'container px-12 xl:px-24 h-[auto] text-center lg:py-0 lg:text-left lg:flex lg:justify-between' */}

        {/* Left Section */}
        <div className="flex-1 text-center lg:text-left">
        {/* 'lg:w-1/2 xl:py-14 lg:py-8' */}
            <motion.p 
                initial="offscreen"
                whileInView="onscreen"
                variants={titleVariants}
                // className='tracking-widest uppercase'
                className="text-sm uppercase tracking-widest text-gray-600 mb-4"
            >
                Offer for the best Interior
            </motion.p>

            <motion.h1 
                initial="offscreen"
                whileInView="onscreen"
                variants={descriptionVariants}
                // className='h1'
                className="text-4xl font-bold leading-snug sm:text-5xl lg:text-6xl text-gray-800"
            >
                Make your home a <br /> piece of art
            </motion.h1>
            <motion.p 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                // className='pb-6 text-muted-foreground xl:pb-10'
                className="mt-6 text-gray-600 text-base lg:text-lg"
            >
                Change your view with the best interior design. <br /> We provide the best interior design for your home. Make every moment beautiful with the best interior design. Change your view with the best interior design. We provide the best interior design for your home. Make every moment beautiful with the best interior design.
            </motion.p>

            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={tagVariants}
                className='mt-8'
            >
                <Button className="inline-flex items-center px-6 py-3 text-white bg-gray-800 rounded-full shadow-lg hover:bg-gray-700"> 
                {/* 'inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2' */} 
                    Book Now
                    <ArrowUpRight className='w-5 h-5 ml-2'/>
                </Button>
            </motion.div>
        </div>

        {/* Right Section / Image Section */}
        <div className='flex-1 flex justify-center lg:justify-end'> {/* w-1/2 */}
            <Image 
                src={hero_img}
                // width={800}
                // height={500} 
                alt="Interior Design"
                className="rounded-lg shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-xl"
                priority 
                // className='absolute right-20 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] hidden lg:block'
            />
        </div>
        
    </div>
    </section>
  )
};

export default HeroSection;