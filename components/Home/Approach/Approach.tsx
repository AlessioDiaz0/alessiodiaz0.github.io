import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ApproachCard from "./ApproachCard";
import { useTranslations } from "next-intl";

const EXPAND_MS = 200;     // was 260
const LAYOUT_DUR = 0.15;   // fast expand/shrink duration



const Approach = () => {
    const t = useTranslations('Approach');
    const cards = [
        {
            icon: "/images/s1.png",
            name: t('cards.simple.name'),
            description: t('cards.simple.description'),
        },
        {
            icon: "/images/s2.png",
            name: t('cards.efficient.name'),
            description: t('cards.efficient.description'),
        },
        {
            icon: "/images/s3.png",
            name: t('cards.reliable.name'),
            description: t('cards.reliable.description'),
        },
        {
            icon: "/images/s4.png",
            name: t('cards.scalable.name'),
            description: t('cards.scalable.description'),
        },
    ];

    // Mobile sequencing
    const [activeIndex, setActiveIndex] = useState<number | null>(null); // expanded overlay exists
    const [flippedIndex, setFlippedIndex] = useState<number | null>(null); // back side shown

    const timerRef = useRef<number | null>(null);
    const clearTimer = () => {
        if (timerRef.current) {
            window.clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    useEffect(() => {
        return () => clearTimer();
    }, []);

    const openCard = (i: number) => {
        clearTimer();
        setActiveIndex(i); // expand first
        timerRef.current = window.setTimeout(() => setFlippedIndex(i), EXPAND_MS); // then flip
    };

    const closeCard = () => {
        clearTimer();
        setFlippedIndex(null); // flip back first
        timerRef.current = window.setTimeout(() => setActiveIndex(null), EXPAND_MS); // then shrink
    };

    const handleToggle = (i: number) => {
        if (activeIndex === i) closeCard();
        else openCard(i);
    };

    const activeCard = activeIndex !== null ? cards[activeIndex] : null;
    const activeLayoutId = activeIndex !== null ? `approach-${activeIndex}` : null;

    return (
        <div className="pt-16 pb-16 text-white">
            <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold">
                {t('title')} <br />
            </h1>

            {/* Same sizing idea: phone area equals one big card */}
            <div className="w-[90%] sm:w-[70%] mx-auto mt-20 relative h-[350px] md:h-auto">
                {/* MOBILE 2x2 GRID */}
                <div className="md:hidden h-full relative">
                    <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
                        {cards.map((c, i) => {
                            const isHidden = activeIndex !== null && activeIndex !== i;

                            return (
                                <motion.div
                                    key={c.name}
                                    layoutId={`approach-${i}`}
                                    className={[
                                        "relative h-full rounded-2xl",
                                        isHidden ? "opacity-0 pointer-events-none" : "opacity-100",
                                    ].join(" ")}
                                    transition={{ layout: { duration: LAYOUT_DUR, ease: "easeOut" } }}
                                >
                                    <ApproachCard
                                        mobile
                                        icon={c.icon}
                                        name={c.name}
                                        description={c.description}
                                        isFlipped={false} // grid cards always show front; overlay handles flip
                                        onToggle={() => handleToggle(i)}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* OVERLAY EXPANDED CARD (always expands to the same exact area) */}
                    <AnimatePresence>
                        {activeCard && activeLayoutId && (
                            <motion.div
                                layoutId={activeLayoutId}
                                className="absolute inset-0 z-30 rounded-2xl"
                                transition={{ layout: { duration: LAYOUT_DUR, ease: "easeOut" } }}
                            >
                                <ApproachCard
                                    mobile
                                    icon={activeCard.icon}
                                    name={activeCard.name}
                                    description={activeCard.description}
                                    isFlipped={flippedIndex === activeIndex}
                                    onToggle={closeCard}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* DESKTOP/TABLET (original unchanged) */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 items-center">
                    {cards.map((c) => (
                        <div key={c.name} data-aos="fade-down" data-aos-duration="600">
                            <div className="h-[350px] w-full">
                                <ApproachCard icon={c.icon} name={c.name} description={c.description} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Approach;
