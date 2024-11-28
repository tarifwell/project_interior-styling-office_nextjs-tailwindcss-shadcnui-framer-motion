'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// import about_img from '../assets/images/aboutfront.png';
import { descriptionVariants, tagVariants, titleVariants } from '@/utils/animation';

const AboutComponent = () => {
  return (
    <div className='container p-12 xl:py-24 h-[auto]'>
      <div className='grid lg:grid-cols-2 place-items-center'>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
        >
          <Image 
            src="/images_home/aboutfront.png"
            width={900} 
            height={500} 
            alt="about" 
            className="max-md:hidden"
          />
        </motion.div>

        <div className='items-center'>
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className='px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl'
          >We are awards Winning Company</motion.h2>
          <motion.p 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={descriptionVariants}
            className='px-12 tracking-wider uppercase text-gray-400 mt-3'>World Award</motion.p>
          <motion.p 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className='px-12 pb-4 mt-4'
          >
            This is a company engaged in the field of interior design. We provide the best interior design for your home. We have been trusted by many peiople to design their homes. We have also received many awards from various countries for our work.
          </motion.p>
          <motion.p 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className='px-12 pb-4'
          >
            This is a company engaged in the field of interior design. We provide the best interior design for your home. We have been trusted by many peiople to design their homes. We have also received many awards from various countries for our work.
          </motion.p>
        </div>
      </div>
    </div>
  )
};

export default AboutComponent;