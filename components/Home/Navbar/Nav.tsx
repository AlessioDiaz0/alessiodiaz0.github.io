"use client";
import { NavLinks } from '@/constant/constant'
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import React, { useEffect, useState } from 'react'
import { FaCode } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

type Props = {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
    const t = useTranslations('Nav');
    const [showNavBg, setShowNavBg] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollReference, setScrollReference] = useState(0);

    useEffect(() => {
        const handler = () => {
            const currentScrollY = window.scrollY;

            // If scrolling up, show navbar and reset reference point
            if (currentScrollY < lastScrollY) {
                setShowNavBg(true);
                setScrollReference(currentScrollY);
            }
            // If scrolling down, check if we've scrolled 80px from reference point
            else if (currentScrollY > lastScrollY) {
                if (currentScrollY - scrollReference > 80) {
                    setShowNavBg(false);
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, [lastScrollY, scrollReference]);


    return (
        <div className={`transition-all ${showNavBg ? 'translate-y-0' : '-translate-y-full'} duration-500 h-[10vh] z-[10000] fixed w-full bg-[#0f000ed9] shadow-md`}>
            <div className="flex items-center h-full justify-between w-[90%] mx-auto">
                {/* LOGO */}
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
                        <FaCode className="w-5 h-5 text-black" />
                    </div>
                    <h1 className="text-xl hidden sm:block md:text-2x1 text-white font-bold">
                        ALESSIO
                    </h1>
                </div>
                {/* NavLinks */}
                <div className="hidden lg:flex items-center space-x-10">
                    {NavLinks.map((link) => {
                        return <Link key={link.id} href={link.url} className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200">
                            <p>{t(link.label)}</p>
                        </Link>
                    })}
                </div>

                <div className="flex items-center space-x-6">
                    <div className="hidden md:block">
                        <LanguageSwitcher />
                    </div>
                    <Link href="https://www.linkedin.com/in/alessio-diaz/" className="flex items-center">
                        <Image
                            src="/images/linkedin-short.svg"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="cursor-pointer"
                        />
                    </Link>
                </div>

                {/* Burger Menu */}
                <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
            </div>
        </div>

    )
}

export default Nav