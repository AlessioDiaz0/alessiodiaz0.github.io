"use client"
import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect'
import ParticlesComponent from './ParticlesBackground'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'
import { useTransition } from 'react'

const Hero = () => {
    const t = useTranslations('Hero');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const languages = [
        { id: 'en', name: 'English', flag: '🇺🇸' },
        { id: 'it', name: 'Italiano', flag: '🇮🇹' },
        { id: 'es', name: 'Español', flag: '🇪🇸' },
    ];

    const handleLanguageChange = (nextLocale: string) => {
        if (nextLocale === locale) return;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
            <ParticlesComponent />
            <div className="relative z-10 flex flex-col items-center">
                <Image
                    src="/images/Photo.png"
                    alt="heroimage"
                    width={400}
                    height={400}
                    className="w-44 h-44 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-8 border-[#0c0c48aa]"
                    data-aos="fade-up"
                />
                <h1 data-aos="fade-up" data-aos-delay="200" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">
                    {t('title_1')} <br />
                    {t('title_2')} <span className="text-cyan-200">{t('title_3')}</span>
                </h1>
                <h2 data-aos="fade-up" data-aos-delay="200" className="mt-5 text-xl px-2 text-center sm:text-2xl font-medium flex flex-col sm:flex-row items-center">
                    {t('greeting')}
                    <span className="text-cyan-200 font-bold">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(t('typewriter.frontend'))
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .typeString(t('typewriter.llm'))
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .typeString(t('typewriter.cv'))
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .typeString(t('typewriter.agentic'))
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .typeString(t('typewriter.backend'))
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .start();
                            }}
                            options={{
                                loop: true,
                                delay: 30,
                                deleteSpeed: 25,
                                wrapperClassName: "pl-2"
                            }}
                        />
                    </span>
                </h2>
            </div>
            <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center px-4" data-aos="zoom-out" data-aos-delay="600" data-aos-offset="0">
                <p className="text-lg font-medium mb-4 text-white/70">
                    {t('buildingGlobally')}
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    {languages.map((lang) => (
                        <button
                            key={lang.id}
                            disabled={isPending}
                            onClick={() => handleLanguageChange(lang.id)}
                            className={`
                                flex items-center space-x-2 px-4 py-2 rounded-xl
                                transition-all duration-500 ease-out
                                backdrop-blur-md border outline-none
                                ${locale === lang.id
                                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-100 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                                    : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20 hover:text-white hover:scale-105'
                                }
                                disabled:opacity-50 disabled:cursor-not-allowed
                            `}
                        >
                            <span className="text-xl">{lang.flag}</span>
                            <span className="text-sm font-semibold tracking-wide">
                                {lang.name}
                            </span>
                            {locale === lang.id && (
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero