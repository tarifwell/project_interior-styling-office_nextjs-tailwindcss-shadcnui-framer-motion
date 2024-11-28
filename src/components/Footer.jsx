'use client';

import React from 'react';
import Link from 'next/link';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { descriptionVariants, tagVariants, titleVariants } from '@/utils/animation';

const Footer = () => {
  return (
    <div className="bg-tertiary">
      <div className="container lg:grid lg:grid-cols-2 p-14"> {/** py-14 */}
        <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
          >
            <h2 className='pb-4 text-xl font-semibold uppercase'>Development</h2>
            <div className='flex flex-col'>
              <Link href="/" className="py-1 hover:underline">Documentation</Link>
              <Link href="/" className="py-1 hover:underline">Reference</Link>
              <Link href="/" className="py-1 hover:underline">Changelog</Link>
              <Link href="/" className="py-1 hover:underline">Status</Link>
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={descriptionVariants}
          >
            <h2 className='pb-4 text-xl font-semibold uppercase'>Company</h2>
            <div className='flex flex-col'>
              <Link href="/" className="py-1 hover:underline">About Us</Link>
              <Link href="/" className="py-1 hover:underline">Press</Link>
              <Link href="/" className="py-1 hover:underline">Careers</Link>
              <Link href="/" className="py-1 hover:underline">Contact</Link>
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
          >
            <h2 className='pb-4 text-xl font-semibold uppercase'>Connect</h2>
            <div className='flex flex-col'>
              <Link href="/" className="py-1 hover:underline">Instagram</Link>
              <Link href="/" className="py-1 hover:underline">Twitter</Link>
              <Link href="/" className="py-1 hover:underline">Linkedin</Link>
              <Link href="/" className="py-1 hover:underline">Facebook</Link>
            </div>
          </motion.div>
        </div>

        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
        >
          <p className='pb-4 text-xl font-semibold'>Stay Updated</p>
          <div className='relative lg:max-w-sm'>
            <Input type="email" id="firs_name" placeholder="Email Address" />
            {/* <button className='px-4 py-2 mt-4 text-white bg-black'>Subscribe</button> */}
            <Button className='absolute bg-black text-white rounded-full h-10 px-3 text-sm top-2 right-2 hover:border-2 hover:border-black hover:bg-white hover:text-black dark:bg-primary'>Subscribe              
            </Button>
          </div>
          <p className='pt-4 text-gray-500'>
            By subscribing to our newsletter, you agree to receive emails from us. Your personal data will be stored and processed in accordance with our <span className='text-primary hover:underline'>Terms of Service</span> and <span className='text-primary hover:underline'>Privacy Policy</span> and you can unsubscribe at any time.
          </p>

        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div 
        initial="offscreen"
        whileInView="onscreen"
        variants={descriptionVariants}
        className="px-14 py-10 bg-black dark:bg-primary"> {/** py-10 */}
        <div className='container text-white text-center lg:justify-between lg:flex'>
          <div className='pb-4 lg:pb-0'>
            <p>© Copyright &copy; 2024. All rights reserved</p>
          </div>
          <div>
            <Link href='/' className='p-4 hover:underline'>Privacy</Link>
            <Link href='/' className='p-4 hover:underline'>Terms</Link>
          </div>
        </div>
      </motion.div>


    </div>
  )
};

export default Footer;