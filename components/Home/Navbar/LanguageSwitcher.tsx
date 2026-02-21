"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname, routing } from '@/i18n/routing';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const locale = useLocale();

    function onLanguageChange(nextLocale: string) {
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    }

    return (
        <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
            {routing.locales.map((cur) => (
                <button
                    key={cur}
                    className={`text-xs font-bold transition-all duration-300 px-2 py-1 rounded-md ${locale === cur
                            ? 'bg-cyan-500 text-black shadow-[0_0_10px_rgba(6,182,212,0.5)]'
                            : 'text-white/60 hover:text-white hover:bg-white/10'
                        }`}
                    disabled={isPending}
                    onClick={() => onLanguageChange(cur)}
                >
                    {cur.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
