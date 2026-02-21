import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import './skills.css'
import { useTranslations } from 'next-intl';

const HackerText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const letters = "0123456789ABCDEFGITUVWXYZ!@#$%^&*";

    // Initialize with the actual text to avoid hydration mismatch.
    // The scrambling will begin as soon as the component is in view on the client.
    const [displayText, setDisplayText] = useState(text);

    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isInView) return;

        // Create a random order for indices to resolve
        const shuffledIndices = Array.from({ length: text.length }, (_, i) => i)
            .sort(() => Math.random() - 0.5);

        let resolvedCount = 0;
        let isResolving = false;
        let interval: NodeJS.Timeout;

        // We want all text to finish in roughly the same amount of time
        // Increase/decrease the number of "steps" to adjust speed
        const totalResolutionSteps = 15;
        const increment = text.length / totalResolutionSteps;

        // Scramble animation starts immediately when in view
        interval = setInterval(() => {
            setDisplayText(() => {
                const currentlyResolved = isResolving
                    ? new Set(shuffledIndices.slice(0, Math.floor(resolvedCount)))
                    : new Set();

                return text
                    .split("")
                    .map((char, index) => {
                        if (char === " ") return " ";
                        if (currentlyResolved.has(index)) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("")
            });

            if (isResolving) {
                if (resolvedCount >= text.length) {
                    clearInterval(interval);
                }
                resolvedCount += increment;
            }
        }, 70);

        // Start resolving after the specified delay
        const timeout = setTimeout(() => {
            isResolving = true;
        }, delay);

        return () => {
            if (interval) clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [isInView, text, delay]);

    return <span ref={containerRef} className="inline-block min-w-[1ch]">{displayText}</span>;
};

const Skills = () => {
    const t = useTranslations('Skills');
    const allIcons = [
        'original-4.svg',
        'original-5.svg',
        'original-6.svg',
        'original-7.svg',
        'original-8.svg',
        'original-9.svg',
        'original-10.svg',
        'original-11.svg',
        'original-12.svg',
        'original-13.svg',
        'original-14.svg',
        'original-15.svg',
        'original-16.svg',
        'original-20.svg',
        'original-21.svg',
        'original-22.svg',
        'original-23.svg',
        'original-24.svg',
        'original-wordmark.svg',
        'original-wordmark-2.svg',
        'original-wordmark-3.svg',
        'original-wordmark-4.svg',
        'original-wordmark-6.svg',
        'original-wordmark-8.svg',
        'original-wordmark-10.svg',
        'original-wordmark-11.svg',
        'original-wordmark-12.svg',
        'original.svg',
        'plain-2.svg',
        'plain-3.svg',
        'plain-4.svg',
        'plain-5.svg',
        'plain-wordmark-2.svg',
        'plain-wordmark-3.svg',
        'plain-wordmark-4.svg',
        'plain-wordmark.svg',
        'plain.svg',
        'aws.jpg',
        'haystack.png',
        'N8n-logo-new.svg',
        'postman.png',
        'zapier.png'
    ]

    // Always use 3 rows for all devices, but on smartphones do not multiply icons
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 480);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const rowCount = 3;
    const iconsPerRow = Math.ceil(allIcons.length / rowCount);
    const rows = Array.from({ length: rowCount }, (_, i) =>
        allIcons.slice(i * iconsPerRow, (i + 1) * iconsPerRow)
    );
    const rowsIcons = isMobile ? rows : rows.map(row => [...row, ...row, ...row]);

    return (
        <section className="skills-section">
            <div className="skills-container">
                <h2 className="skills-title" data-aos="fade-down">
                    <HackerText text={t('title')} delay={500} />
                </h2>
                <p className="skills-subtitle" data-aos="fade-down" data-aos-delay="200">
                    <HackerText text={t('subtitle')} delay={500} />
                </p>

                {/* On mobile, wrap all rows in a single horizontally scrollable container */}
                {isMobile ? (
                    <div className="skills-carousel-mobile">
                        <div className="skills-rows-wrapper">
                            {rowsIcons.map((rowIcons, rowIdx) => (
                                <div className="skills-row" key={`row-${rowIdx}`}>
                                    <div className="skills-track">
                                        {rowIcons.map((icon, index) => (
                                            <div key={`row${rowIdx}-${index}`} className="skill-icon-wrapper">
                                                <Image
                                                    src={`/images/devicons/${icon}`}
                                                    alt={`Skill icon ${icon}`}
                                                    width={60}
                                                    height={60}
                                                    className="skill-icon"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="skills-carousel">
                        {rowsIcons.map((rowIcons, rowIdx) => (
                            <div className="skills-row" key={`row-${rowIdx}`}>
                                <div className={`skills-track${rowIdx % 2 === 1 ? ' skills-track-reverse' : ''}`}>
                                    {rowIcons.map((icon, index) => (
                                        <div key={`row${rowIdx}-${index}`} className="skill-icon-wrapper">
                                            <Image
                                                src={`/images/devicons/${icon}`}
                                                alt={`Skill icon ${icon}`}
                                                width={60}
                                                height={60}
                                                className="skill-icon"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Skills