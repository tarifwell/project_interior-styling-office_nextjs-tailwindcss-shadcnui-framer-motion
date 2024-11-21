import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../assets/logo_1.png';



const Logo = () => {
  return (
    <Link href="/">
        <Image
            src={logo}
            width={220}
            height={52}
            alt="Inter-Styling... logo"
        />
        
    </Link>
  )
};

export default Logo;