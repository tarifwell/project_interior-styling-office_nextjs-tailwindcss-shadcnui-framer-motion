import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../assets/logo_3.png';



const Logo = () => {
  return (
    <Link href="/">
        <Image
            src={logo}
            width={160}
            height={55}
            alt="Inter-Styling... logo"
        />
        
    </Link>
  )
};

export default Logo;