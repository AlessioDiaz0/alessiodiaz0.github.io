import React, { useState, useEffect, useRef } from 'react'
import './experience.css'
import { FaGraduationCap, FaCertificate, FaLightbulb, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const GooglyEyes = () => {
    return (
        <motion.div
            initial={{ x: 100, y: -100, rotate: 45, opacity: 0 }}
            animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
            exit={{ x: 100, y: -100, rotate: 45, opacity: 0 }}
            className="googly-eyes-container"
        >
            <div className="eye">
                <motion.div
                    animate={{ x: [-6, -4, -7, -6], y: [6, 8, 5, 6] }}
                    transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse" }}
                    className="pupil"
                />
            </div>
            <div className="eye">
                <motion.div
                    animate={{ x: [-6, -7, -5, -6], y: [6, 5, 7, 6] }}
                    transition={{ repeat: Infinity, duration: 0.6, repeatType: "reverse" }}
                    className="pupil"
                />
            </div>
        </motion.div>
    );
};


import { useTranslations } from 'next-intl';

const Experience = () => {
    const t = useTranslations('Experience');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);
    const [isFinishing, setIsFinishing] = useState(false);
    const [showGoogly, setShowGoogly] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isQuoteExpanded, setIsQuoteExpanded] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const autoRotateRef = useRef<NodeJS.Timeout | null>(null);
    const finishTimerRef = useRef<NodeJS.Timeout | null>(null);
    const googlyTimerRef = useRef<NodeJS.Timeout | null>(null);

    const education = [
        {
            date: "2024",
            title: t('Education.degree'),
            spec: t('Education.spec'),
            org: "University of California, Irvine"
        },
    ];

    const certificates = [
        {
            date: "2025",
            title: "Agentic AI",
            org: "DeepLearning.AI",
            href: "https://learn.deeplearning.ai/certificates/d768d39c-5f10-4657-b4e5-6681d8bad793?usp=sharing"
        },
        {
            date: "2025",
            title: "Retrieval Augmented Generation",
            org: "Coursera / DeepLearning.AI",
            href: "https://www.coursera.org/account/accomplishments/records/LWPGENC08XLN"
        },
    ];

    const softSkills = [
        {
            title: t('SoftSkills.problemSolving.title'),
            description: t('SoftSkills.problemSolving.description'),
            icon: "🧠"
        },
        {
            title: t('SoftSkills.collaborativeMindset.title'),
            description: t('SoftSkills.collaborativeMindset.description'),
            icon: "🤝"
        },
        {
            title: t('SoftSkills.adaptability.title'),
            description: t('SoftSkills.adaptability.description'),
            icon: "🚀"
        },
        {
            title: t('SoftSkills.clearCommunication.title'),
            description: t('SoftSkills.clearCommunication.description'),
            icon: "💡"
        }
    ];

    const handleManualInteraction = () => {
        setIsInteracting(true);
        setShowGoogly(true);
        if (googlyTimerRef.current) clearTimeout(googlyTimerRef.current);
        googlyTimerRef.current = setTimeout(() => setShowGoogly(false), 3000);
        if (autoRotateRef.current) clearTimeout(autoRotateRef.current);
        if (finishTimerRef.current) clearTimeout(finishTimerRef.current);
        setIsFinishing(false);
    };

    const nextSkill = (manual = false) => {
        if (manual) handleManualInteraction();
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % softSkills.length);
    };

    const prevSkill = (manual = false) => {
        if (manual) handleManualInteraction();
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + softSkills.length) % softSkills.length);
    };


    // Only start the carousel when the section is visible and quote is collapsed
    useEffect(() => {
        if (!isVisible || isQuoteExpanded) return;
        setIsFinishing(false);
        const interval = isInteracting ? 8000 : 4000;

        finishTimerRef.current = setTimeout(() => {
            setIsFinishing(true);
        }, interval - 2000);

        autoRotateRef.current = setTimeout(() => {
            nextSkill(false);
            setIsInteracting(false);
        }, interval);

        return () => {
            if (autoRotateRef.current) clearTimeout(autoRotateRef.current);
            if (finishTimerRef.current) clearTimeout(finishTimerRef.current);
        };
    }, [currentIndex, isInteracting, isVisible, isQuoteExpanded]);

    // Intersection Observer to detect when section is visible
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(section);
        return () => {
            observer.disconnect();
        };
    }, []);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        })
    };

    return (
        <section id="foundation" className="experience-section -scroll-mt-[30vh]" ref={sectionRef}>
            <div className="experience-container">
                <h2 className="experience-title" data-aos="fade-up">{t('title')}</h2>

                <div className="panels-wrapper">
                    {/* Left Panel: Soft Skills */}
                    <div className="panel left-panel" data-aos="fade-right">
                        <h3 className="panel-title">
                            <FaLightbulb /> {t('SoftSkills.title')}
                        </h3>

                        <div className="soft-skills-carousel">
                            <AnimatePresence>
                                {showGoogly && <GooglyEyes />}
                            </AnimatePresence>

                            <motion.button
                                style={{ y: '-50%' }}
                                whileTap={{ scale: 0.9, y: '-50%' }}
                                className="carousel-nav prev"
                                onClick={() => prevSkill(true)}
                            >
                                <FaChevronLeft />
                            </motion.button>

                            <div className="carousel-content">
                                <AnimatePresence initial={false} custom={direction} mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 }
                                        }}
                                        whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                                        className="soft-skill-panel-card cursor-pointer"
                                        onClick={handleManualInteraction}
                                    >
                                        <div className="skill-icon-hero">{softSkills[currentIndex].icon}</div>
                                        <h4 className="skill-title-hero">{softSkills[currentIndex].title}</h4>
                                        <p className="skill-desc-hero">{softSkills[currentIndex].description}</p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <motion.button
                                style={{ y: '-50%' }}
                                whileTap={{ scale: 0.9, y: '-50%' }}
                                className={`carousel-nav next ${isFinishing ? 'water-active' : ''}`}
                                onClick={() => nextSkill()}
                            >
                                <FaChevronRight />
                            </motion.button>

                            <div className="carousel-dots">
                                {softSkills.map((_, index) => (
                                    <motion.div
                                        key={index}
                                        whileTap={{ scale: 1.5 }}
                                        className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                                        onClick={() => {
                                            handleManualInteraction();
                                            setDirection(index > currentIndex ? 1 : -1);
                                            setCurrentIndex(index);
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        <div
                            className="panel-quote-container mt-8 cursor-pointer"
                            onClick={() => !isQuoteExpanded && setIsQuoteExpanded(true)}
                            style={{
                                visibility: isQuoteExpanded ? 'hidden' : 'visible',
                                pointerEvents: isQuoteExpanded ? 'none' : 'auto',
                            }}
                        >
                            <div className="quote-inner">
                                <p
                                    className="text-white italic text-2xl leading-relaxed text-center font-semibold"
                                >
                                    {t('Quotes.whyImportant')}
                                </p>
                            </div>
                        </div>

                        {/* Full-panel expanded overlay */}
                        <div
                            className={`quote-panel-overlay ${isQuoteExpanded ? 'quote-panel-overlay--open' : ''}`}
                            onClick={() => setIsQuoteExpanded(false)}
                            aria-hidden={!isQuoteExpanded}
                        >
                            <div className="quote-inner-expanded">
                                <p
                                    className="text-white italic text-2xl leading-relaxed text-center font-semibold mb-6"
                                >
                                    {t('Quotes.whyImportant')}
                                </p>
                                <p
                                    className={`text-gray-300 italic text-lg leading-relaxed text-center max-w-sm px-4 quote-body-text ${isQuoteExpanded ? 'quote-body-text--visible' : ''}`}
                                >
                                    &quot;{t('Quotes.expandedQuote')}&quot;
                                </p>
                                <p
                                    className={`quote-collapse-hint ${isQuoteExpanded ? "quote-collapse-hint--visible" : ""
                                        }`}
                                >
                                    <span className="md:hidden">{t('Quotes.tapToCollapse')}</span>
                                    <span className="hidden md:inline">{t('Quotes.clickToCollapse')}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Education & Certificates */}
                    <div className="panel right-panel" data-aos="fade-left">
                        <h3 className="panel-title">
                            <FaGraduationCap /> {t('Education.title')}
                        </h3>

                        <div className="timeline">
                            <h4 className="flex items-center gap-2 text-[#00f2fe] font-bold mb-2" data-aos="fade-down">
                                <FaGraduationCap className="text-sm" /> {t('Education.academics')}
                            </h4>
                            {education.map((item, index) => (
                                <div key={`edu-${index}`} className="timeline-item" data-aos="fade-down" data-aos-delay={index * 50}>
                                    <div className="item-date">{item.date}</div>
                                    <div className="item-title">{item.title}</div>
                                    <div className="item-spec">{item.spec}</div>
                                    <div className="item-org">{item.org}</div>
                                </div>
                            ))}

                            <h4 className="flex items-center gap-2 text-[#00f2fe] font-bold mt-6 mb-2" data-aos="fade-down">
                                <FaCertificate className="text-sm" /> {t('Education.certifications')}
                            </h4>
                            {certificates.map((item, index) => (
                                <div key={`cert-${index}`} className="timeline-item" data-aos="fade-down" data-aos-delay={index * 50}>
                                    <div className="item-date">{item.date}</div>
                                    <div className="item-title">
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="certificate-link"
                                        >
                                            {item.title}
                                        </a>
                                    </div>
                                    <div className="item-org">{item.org}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience