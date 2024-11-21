import React from 'react';
import { motion } from 'framer-motion';

// Hooks
import { usePathname } from 'next/navigation';
import Link from 'next/link';

/*
const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];*/

const links = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/gallery', name: 'gallery' },
  { path: '/projects', name: 'projects' },
  { path: '/contact', name: 'contact' },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {

  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {/* {
        links.map((link, index) => (
          <motion.a
            key={`nav-link-${index}`}
            href={link.path}
            className={`${linkStyles} ${path === link.path ? underlineStyles : ''}`}
          >
            {link.name}
          </motion.a>
        ))
      } */}
      {
        links.map((link, index) => (
          <Link
            key={`nav-link-${index}`}
            href={link.path}
            // className={`${linkStyles} ${path === link.path ? underlineStyles : ''}`}
            className={ `uppercase ${linkStyles}` }
          >
            {link.path === path && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId='underline'
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        ))
      }
    </nav>
  )
};

export default Nav;