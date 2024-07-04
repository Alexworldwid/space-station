"use client"

import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import logo from '../../../../public/assets/shared/logo.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import harmburger from '../../../../public/assets/shared/icon-hamburger.svg';
import closeMenu from '../../../../public/assets/shared/icon-close.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

const Navigation = () => {
    const pathName = usePathname();
    const [openAndCloseMenu, setOpenAndCloseMenu] = useState<boolean>(false);
    const [currentPath, setCurrentPath] = useState('');
    const menuRef = useRef<HTMLUListElement>(null);

    // function to handle open and close mobile menu
    const handleOpenAndCloseMenu = () => {
        setOpenAndCloseMenu(!openAndCloseMenu)
    }

    // Function to detect clicks outside the menu
    const handleClickOutside = (event: MouseEvent) => {
        // Check if event.target is a Node
        if (menuRef.current && event.target instanceof Node && !menuRef.current.contains(event.target)) {
            setOpenAndCloseMenu(false);
        }
    };


    useEffect(() => {
        // Add event listener
        document.addEventListener('mousedown', handleClickOutside);
        // Cleanup event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        // Close navbar when pathname changes
        if (currentPath !== pathName) {
          setOpenAndCloseMenu(false);
          setCurrentPath(pathName);
        }
    }, [pathName, currentPath]);


    return (
        <nav className='w-full md:mt-10 mt-6'>
            <div className='flex items-center justify-between w-full md:pl-10 pl-6'>
                <div>
                    <Image src={logo} width={40} height={40} priority alt='logo image' />
                </div>
                
                {/* desktop and tablet nav */}
                <ul className='bg-white bg-opacity-10 backdrop-blur-md hidden md:flex justify-around lg:w-[60%] md:w-[90%] rounded-md lg:pl-40 lg:pr-16 md:pl-32 md:pr-10'>
                    <Link href='/'><li className={`text-white text-opacity-70 font-light hover:border-b-2 py-6 hover:border-slate-400 ${pathName === '/' ? 'border-b-white border-b-2' : ''}`} ><span className=' font-extrabold mr-2 text-white hidden lg:inline-block'>00</span>HOME</li></Link>
                    <Link href='/destination'><li className={`text-white text-opacity-70 font-light hover:border-b-2 py-6 hover:border-slate-400 ${pathName === '/destination' ? 'border-b-white border-b-2' : ''}`} ><span className=' font-extrabold mr-2 text-white'>01</span>DESTINATION</li></Link>
                    <Link href='/crew'><li className={`text-white text-opacity-70 font-light hover:border-b-2 py-6 hover:border-slate-400 ${pathName === '/crew' ? 'border-b-white border-b-2' : ''}`} ><span className=' font-extrabold mr-2 text-white'>02</span>CREW</li></Link>
                    <Link href='/technology'><li className={`text-white text-opacity-70 font-light hover:border-b-2 py-6 hover:border-slate-400 ${pathName === '/technology' ? 'border-b-white border-b-2' : ''}`} ><span className=' font-extrabold mr-2 text-white'>03</span>TECHNOLOGY</li></Link>
                </ul>

                {/* mobile nav menu */}
                <AnimatePresence mode="wait">
                {
                    openAndCloseMenu && (
                        <motion.ul  className='backdrop-blur-md md:hidden inset-0 z-50 bg-white bg-opacity-10 fixed left-[35%] pl-10 pt-6'
                        style={{
                            WebkitBackdropFilter: 'blur(10px)', // Safari and older mobile browsers
                            backdropFilter: 'blur(10px)', // General support
                          }}
                        ref={menuRef}
                        initial={{ x: '100%' }}   
                        animate={{ x: '0%' }} 
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.3 }} 
                        >
                            <li className='flex justify-end mb-10'>
                                {/* harmburger */}
                                <button className=' z-30 mr-6 md:hidden flex' onClick={handleOpenAndCloseMenu}>
                                    <Image src={!openAndCloseMenu ? harmburger : closeMenu} width={40} height={50} alt={openAndCloseMenu ? "close icon" : "harmburger icon"} />
                                </button>
                            </li>
                            <Link href='/'><li className={`text-white font-light hover:border-r-4 py-3 my-4 hover:border-slate-400 ${pathName === '/' ? 'border-r-white border-r-4' : ''}`}><span className=' font-extrabold mr-2 text-white lg:inline-block'>00</span>HOME</li></Link>
                            <Link href='/destination'><li className={`text-white font-light hover:border-r-4 py-3 my-4 hover:border-slate-400 ${pathName === '/destination' ? 'border-r-white border-r-4' : ''}`}><span className=' font-extrabold mr-2 text-white'>01</span>DESTINATION</li></Link>
                            <Link href='/crew'><li className={`text-white font-light hover:border-r-4 py-3 my-4 hover:border-slate-400 ${pathName === '/crew' ? 'border-r-white border-r-4' : ''}`}><span className=' font-extrabold mr-2 text-white'>02</span>CREW</li></Link>
                            <Link href='/technology'><li className={`text-white font-light hover:border-r-4 py-3 my-4 hover:border-slate-400 ${pathName === '/technology' ? 'border-r-white border-r-4' : ''}`}><span className=' font-extrabold mr-2 text-white'>03</span>TECHNOLOGY</li></Link>
                        </motion.ul>
                    )
                }
                </AnimatePresence>
                

                {/* harmburger */}
                {
                    !openAndCloseMenu && (
                        <button className=' z-30 mr-6 md:hidden' onClick={handleOpenAndCloseMenu}>
                            <Image src={!openAndCloseMenu ? harmburger : closeMenu} width={40} height={50} alt={openAndCloseMenu ? "close icon" : "harmburger icon"} />
                        </button>
                    )
                }
                
            </div>
        </nav>
    );
};

export default Navigation;