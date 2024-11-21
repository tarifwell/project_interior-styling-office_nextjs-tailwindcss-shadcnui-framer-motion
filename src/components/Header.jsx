'use client'

import React, { useEffect, useState } from 'react';

// Components
import Logo from './headerComponents/Logo';
import ThemeToggler from './ThemeToggler';
import Nav from './headerComponents/Nav';
import Mobilenavigation from './headerComponents/Mobilenavigation';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  /*
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = document.querySelector('header').offsetHeight;
      setHeader(scrollPosition > headerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);*/

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // Remove events: Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', scrollYPos);
    };
  }); // []

  return (
    <header
      // className={`
      //   fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out 
      //   ${header ? 'bg-white backdrop-blur-sm shadow-lg' : ''}
      //   ${pathname === '/login' || pathname === '/signup' ? 'bg-transparent' : ''}
      // `}
      className={`${
        header
          ? 'py-4 bg-tertiary shadow-lg dark:bg-accent'
          : 'py-6 dark:bg-transparent'
      } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fff]'}`}
    >
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          {/* Logo section */}
          <Logo />
          {/* <div className='flex items-center gap-x-6 md:gap-x-8'> */}
          <div className='flex items-center gap-x-6'> 
            {/* Nav Section*/}
            <Nav 
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />

            {/* Theme Toggler*/}
            <ThemeToggler />

            {/* Mobile Navigation*/}
            <div className='xl:hidden'>
              <Mobilenavigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;