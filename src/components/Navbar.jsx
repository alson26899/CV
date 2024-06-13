import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';

const Navbar = () => {
  //usestates
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  //useEffect for handling scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderName = () => {
    return (
      <Link
        to='/'
        className='flex items-center gap-2'
        onClick={() => {
          setActive('');
          window.scrollTo(0, 0);
        }}
      >
        <p className='text-white text-[18px] font-bold cursor-pointer flex '>
          Alson A &nbsp;
          <span className='sm:block hidden'> | Software Developer</span>
        </p>
      </Link>
    );
  };

  const getLinks = () => {
    return navLinks.map((nav) => (
      <li
        key={nav.id}
        className={`${
          active === nav.title ? 'text-white' : 'text-secondary'
        } hover:text-white text-[18px] font-medium cursor-pointer`}
        onClick={() => setActive(nav.title)}
      >
        <a href={`#${nav.id}`}>{nav.title}</a>
      </li>
    ));
  };

  const renderLinks = () => {
    return (
      <ul className='list-none hidden sm:flex flex-row gap-10'>{getLinks()}</ul>
    );
  };

  const renderMobileNav = () => {
    return (
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
            {getLinks()}
          </ul>
        </div>
      </div>
    );
  };

  const renderNavbar = () => {
    return (
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${
          scrolled ? 'bg-black-100' : 'bg-transparent'
        }`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          {renderName()}
          {renderLinks()}
          {renderMobileNav()}
        </div>
      </nav>
    );
  };

  return renderNavbar();
};

export default Navbar;
