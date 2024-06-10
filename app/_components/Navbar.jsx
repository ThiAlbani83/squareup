'use client'

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { TbMenuDeep } from "react-icons/tb";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
        if (!menuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }

    return (
        <div className='px-[16px] py-[30px] lg:px-20 xl:px-40 flex items-center justify-between border-b border-b-gray15'>
            <div className='flex items-center gap-3'>
                <Image src={'/logo.jpg'} width={60} height={60} alt='logo' className='h-auto' />
                <span className='text-white text-xs lg:text-base xl:text-lg font-medium'>SquareUp</span>
            </div>
            <TbMenuDeep onClick={handleMenuOpen} className='bg-gray15 text-green80 w-[46px] h-[46px] text-xs p-1 rounded-md lg:hidden z-50' />
            {menuOpen && (
                <div className='w-full h-screen absolute top-0 left-0 bg-gray10 z-10'>
                    <ul className='flex flex-col w-full h-screen items-center justify-center lg:hidden gap-10 font-medium text-base text-gray90'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Work</li>
                        <li>Process</li>
                        <li>About</li>
                        <li>Careers</li>
                    </ul>
                </div>
            )}

            <ul className='hidden lg:flex gap-6 font-medium text-sm lg:text-base xl:text-lg text-gray90'>
                <Link href={'/'}><li>Home</li></Link>
                <Link href={'/services'}><li>Services</li></Link>
                <Link href={'/works'}><li>Work</li></Link>
                <Link href={'/process'}><li>Process</li></Link>
                <Link href={'/about'}><li>About</li></Link>
                <li>Careers</li>
            </ul>
            <button className='hidden lg:block px-[18px] py-3 bg-green50 text-gray15 rounded-md'>Contact Us</button>
        </div >
    )
}

export default Navbar