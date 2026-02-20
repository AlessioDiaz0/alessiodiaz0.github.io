"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BiEnvelope, BiLogoWhatsapp, BiMap, BiPhone } from 'react-icons/bi'

import ContactBackground from './ContactBackground'

const Contact = () => {
    const [copiedText, setCopiedText] = useState<string | null>(null);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        setTimeout(() => setCopiedText(null), 2000);
    }

    return (
        <div className="relative pt-16 pb-16 overflow-hidden">
            <ContactBackground />
            <div className="relative z-10 w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Text content */}
                <div data-aos="fade-right" data-aos-offset="300">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200 pop-shine">
                        Let's get in touch!
                    </h1>
                    <p className="text-gray-400 mt-6 text-base sm:text-lg">
                        Reach out to me today and turn your ideas into impactful solutions.
                    </p>
                    <div className="mt-7">
                        <div
                            onClick={() => handleCopy("+39 3513782733")}
                            title="Click to copy"
                            className="flex items-center space-x-3 mb-4 cursor-pointer hover:opacity-100 transition-all group w-fit"
                        >
                            <BiPhone className="w-9 h-9 text-cyan-300 group-hover:scale-110 transition-transform" />
                            <div className="flex items-center space-x-4">
                                <p className="text-xl font-bold text-gray-200 pop-shine group-hover:underline underline-offset-4 decoration-gray-200">
                                    +39 3513782733
                                </p>
                                {copiedText === "+39 3513782733" && (
                                    <span className="text-emerald-400 text-sm font-medium animate-in fade-in slide-in-from-left-2 duration-300">
                                        Copied!
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mt-7">
                        <div
                            onClick={() => handleCopy("+1 (209) 914-3402")}
                            title="Click to copy"
                            className="flex items-center space-x-3 mb-4 cursor-pointer hover:opacity-100 transition-all group w-fit"
                        >
                            <BiLogoWhatsapp className="w-9 h-9 text-cyan-300 group-hover:scale-110 transition-transform" />
                            <div className="flex items-center space-x-4">
                                <p className="text-xl font-bold text-gray-200 pop-shine group-hover:underline underline-offset-4 decoration-gray-200">
                                    +1 (209) 914-3402
                                </p>
                                {copiedText === "+1 (209) 914-3402" && (
                                    <span className="text-emerald-400 text-sm font-medium animate-in fade-in slide-in-from-left-2 duration-300">
                                        Copied!
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mt-7">
                        <div
                            onClick={() => handleCopy("alessio.diaz0@gmail.com")}
                            title="Click to copy"
                            className="flex items-center space-x-3 mb-4 cursor-pointer hover:opacity-100 transition-all group w-fit"
                        >
                            <BiEnvelope className="w-9 h-9 text-cyan-300 group-hover:scale-110 transition-transform" />
                            <div className="flex items-center space-x-4">
                                <p className="text-xl font-bold text-gray-200 pop-shine group-hover:underline underline-offset-4 decoration-gray-200">
                                    alessio.diaz0@gmail.com
                                </p>
                                {copiedText === "alessio.diaz0@gmail.com" && (
                                    <span className="text-emerald-400 text-sm font-medium animate-in fade-in slide-in-from-left-2 duration-300">
                                        Copied!
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mt-7">
                        <div className="flex items-center space-x-3 mb-4">
                            <BiMap className="w-9 h-9 text-cyan-300" />
                            <p className="text-xl font-bold text-gray-200 pop-shine">
                                Rome, Italy
                            </p>
                        </div>
                    </div>
                    {/* social icons */}
                    <Link href="https://www.linkedin.com/in/alessio-diaz/" target="_blank">
                        <Image
                            src="/images/linkedin-long.svg"
                            alt="LinkedIn"
                            width={140}
                            height={35}
                            className="hidden md:block mt-8 cursor-pointer hover:scale-105 transition-all duration-300"
                        />
                    </Link>
                </div>
                {/* form */}
                <div
                    className="hidden md:flex items-center justify-center"
                    data-aos="fade-left"
                    data-aos-offset="300">
                    <div className="float-astronaut relative -top-15">
                        <Image
                            src="/images/github-copilot-icon.webp"
                            alt="astronaut icon jumping"
                            width={350}
                            height={350}
                            className="object-contain"
                            priority />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact