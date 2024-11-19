'use client'

import React from 'react';

// Components
import Logo from './Logo';
import ThemeToggler from './ThemeToggler';

const Header = () => {
  return (
    <header>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          {/* Logo section */}
          <Logo />
          <div>
            {/* Nav Section*/}

            {/* Theme Toggler*/}
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;